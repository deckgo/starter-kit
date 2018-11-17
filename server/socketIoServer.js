let appSocketId, deckSocketId;

module.exports = (server) => {
    const socketIO = require('socket.io').listen(server, {'transports': ['websocket', 'xhr-polling']});

    socketIO.set('origins', '*:*');

    console.log('\x1b[36m%s\x1b[0m', '[DeckDeckGo]', 'Socket listening');

    socketIO.sockets.on('connection', (socket) => {

        const type = socket.handshake.query.type;

        if (type === 'app') {
            appSocketId = socket.id;
        } else if (type === 'deck') {
            deckSocketId = socket.id;
        }

        socket.on('disconnect', (e) => {
            // Nothing yet
        });

        socket.on('nextSlide', (message) => {
            if (deckSocketId) {
                socketIO.to(deckSocketId).emit('nextSlide', message);
            }
        });

        socket.on('prevSlide', (message) => {
            if (deckSocketId) {
                socketIO.to(deckSocketId).emit('prevSlide', message);
            }
        });

    });

};
