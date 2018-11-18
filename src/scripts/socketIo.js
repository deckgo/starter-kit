const io = require('socket.io-client');

initSocketIo = () => {
    return new Promise((resolve) => {
        const url = location.protocol + '//' + location.hostname + ':3002';

        const socket = io.connect(url, {
            'transports': ['websocket', 'xhr-polling'],
            'query': 'type=deck'
        });

        socket.on('nextSlide', async () => {
            if (!document.getElementById('slider')) {
                return;
            }

            await document.getElementById('slider').slideNext();
        });

        socket.on('prevSlide', async () => {
            if (!document.getElementById('slider')) {
                return;
            }

            await document.getElementById('slider').slidePrev();
        });

        resolve();
    });
};
