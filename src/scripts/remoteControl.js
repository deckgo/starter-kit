const io = require('socket.io-client');

const configuration = {
    iceServers: [
        {
            urls: 'turn:user@api.deckdeckgo.com:3478',
            username: 'user',
            credential: 'deckdeckgo'
        }
    ]
};

const dataChannelOptions = {
    ordered: false, //no guaranteed delivery, unreliable but faster
    maxPacketLifeTime: 1000, //milliseconds
};

let rtcPeerConn, dataChannelOut, socket;

const room = 'test_room';

connectRemoteControl = () => {
    return new Promise(async (resolve) => {
        await disconnect();
        await connect();

        resolve();
    });
};

function connect() {
    return new Promise((resolve) => {
        // noinspection JSUnresolvedVariable
        const url = SIGNALING_SERVER;

        socket = io.connect(url, {
            'transports': ['websocket', 'xhr-polling'],
            'query': 'type=deck'
        });

        socket.on('connect', async () => {
            socket.emit('join', {
                room: room,
                deck: true
            });
        });

        socket.on('joined', async () => {
            // Do nothing on the deck side
        });

        socket.on('signaling_message', async (data) => {
            //Setup the RTC Peer Connection object
            if (!rtcPeerConn) {
                startSignaling();
            }

            if (data.type === 'user_here') {
                if (!rtcPeerConn.currentLocalDescription) {
                    // let the 'negotiationneeded' event trigger offer generation
                    await rtcPeerConn.createOffer().then((desc) => {
                        sendLocalDesc(desc);
                    }, (err) => {
                        console.error(err);
                    });
                }

                return;
            }

            const message = JSON.parse(data.message);
            if (message.sdp) {
                rtcPeerConn.setRemoteDescription(new RTCSessionDescription(message.sdp)).then(() => {
                    // App create answer
                }, (err) => {
                    console.error(err)
                });
            } else {
                await rtcPeerConn.addIceCandidate(new RTCIceCandidate(message.candidate));
            }

        });

        resolve();
    });
}

function disconnect() {
    return new Promise((resolve) => {
        if (dataChannelOut) {
            dataChannelOut.close();
        }

        if (rtcPeerConn) {
            rtcPeerConn.close();
        }

        dataChannelOut = null;
        rtcPeerConn = null;

        if (socket) {
            socket.emit('leave');
            socket.removeAllListeners();
            socket.disconnect();
        }

        resolve();
    });
}

function startSignaling() {

    rtcPeerConn = new RTCPeerConnection(configuration);

    dataChannelOut = rtcPeerConn.createDataChannel('deckgo_' + room, dataChannelOptions);
    dataChannelOut.onopen = dataChannelStateChanged;

    // send any ice candidates to the other peer
    rtcPeerConn.onicecandidate = (evt) => {
        if (evt.candidate) {
            socket.emit('signal', {
                'type': 'ice_candidate',
                'message': JSON.stringify({'candidate': evt.candidate}),
                'room': room
            });
        }
    };
}

function sendLocalDesc(desc) {
    rtcPeerConn.setLocalDescription(desc).then(() => {
        socket.emit('signal', {
            'type': 'sending_local_description',
            'message': JSON.stringify({'sdp': rtcPeerConn.localDescription}),
            'room': room
        });
    }, (err) => {
        console.error(err)
    });
}

function dataChannelStateChanged() {
    if (dataChannelOut.readyState === 'open') {
        dataChannelOut.onmessage = receiveDataChannelMessage;
    }
}

function receiveDataChannelMessage(event) {
    processAction(event).then(() => {
        // Done
    });
}

function processAction(event) {
    return new Promise(async (resolve) => {
        if (!event || !event.data) {
            resolve();
            return;
        }

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        const data = JSON.parse(event.data);

        if (data.event === 'nextSlide') {
            await document.getElementById('slider').slideNext();
        } else if (data.event === 'prevSlide') {
            await document.getElementById('slider').slidePrev();
        }

        resolve();
    });
}
