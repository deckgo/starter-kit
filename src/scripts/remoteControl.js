const io = require('socket.io-client');

const configuration = {
    iceServers: [{urls: 'stun:stun.l.google.com:19302'}]
};

const dataChannelOptions = {
    ordered: false, //no guaranteed delivery, unreliable but faster
    maxPacketLifeTime: 1000, //milliseconds
};

let rtcPeerConn, dataChannel, socket;

const room = 'test_room';

initRemoteControl = () => {
    return new Promise((resolve) => {
        const url = location.protocol + '//' + location.hostname + ':3002';

        socket = io.connect(url, {
            'transports': ['websocket', 'xhr-polling'],
            'query': 'type=deck'
        });

        socket.on('connect', async () => {
            socket.emit('join', {
                room: room
            });

            socket.emit('signal', {
                'type': 'user_here',
                'room': room
            });
        });

        socket.on('signaling_message', async (data) => {
            //Setup the RTC Peer Connection object
            if (!rtcPeerConn) {
                startSignaling(data.type);
            }

            if (data.type !== 'user_here') {
                const message = JSON.parse(data.message);
                if (message.sdp) {
                    await rtcPeerConn.setRemoteDescription(new RTCSessionDescription(message.sdp), async () => {
                        // if we received an offer, we need to answer
                        if (rtcPeerConn.remoteDescription.type === 'offer') {
                            await rtcPeerConn.createAnswer(sendLocalDesc, (err) => {
                                console.error(err)
                            });
                        }
                    }, (err) => {
                        console.error(err)
                    });
                } else {
                    await rtcPeerConn.addIceCandidate(new RTCIceCandidate(message.candidate));
                }
            }

        });

        resolve();
    });
};

function startSignaling(type) {
    rtcPeerConn = new RTCPeerConnection(configuration);
    dataChannel = rtcPeerConn.createDataChannel('action', dataChannelOptions);

    dataChannel.onopen = dataChannelStateChanged;
    rtcPeerConn.ondatachannel = receiveDataChannel;

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

    if (type === 'user_here') {
        // let the 'negotiationneeded' event trigger offer generation
        rtcPeerConn.onnegotiationneeded = async () => {
            await rtcPeerConn.createOffer(sendLocalDesc, (err) => {
                console.error(err)
            });
        }
    }
}

async function sendLocalDesc(desc) {
    await rtcPeerConn.setLocalDescription(desc, () => {
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
    if (dataChannel.readyState === 'open') {
        dataChannel.onmessage = receiveDataChannelMessage;
    }
}

function receiveDataChannel(event) {
    dataChannel = event.channel;
    dataChannel.onmessage = receiveDataChannelMessage;
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
