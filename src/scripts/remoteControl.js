remoteEvent = async (event) => {
    return new Promise(async (resolve) => {
        if (!event || !event.detail || !event.detail.event) {
            resolve();
            return;
        }

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        const data = event.detail.event;

        if (data === 'nextSlide') {
            await document.getElementById('slider').slideNext();
        } else if (data === 'prevSlide') {
            await document.getElementById('slider').slidePrev();
        } else if (data === 'start_drawing') {
            await document.querySelector('deckgo-remote').startDrawing(event.detail);
        } else if (data === 'end_drawing') {
            await document.querySelector('deckgo-remote').endDrawing(event.detail);
        } else if (data === 'draw') {
            await document.querySelector('deckgo-remote').draw(event.detail);
        }

        resolve();
    });
};

initRemote = async () => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !window) {
            resolve();
            return;
        }

        deckgoRemoteElement.addEventListener('event', async event => {
            await remoteEvent(event)
        });

        window.addEventListener('resize', async () => {
            await remoteSize();
        });

        await remoteSize();

        await initDeckMove();

        resolve();
    });
};

function initDeckMove() {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        deck.addEventListener('slideWillChange', async event => {
            await moveRemote(event)
        });

        deck.addEventListener('slideDrag', async event => {
            await scrollRemote(event)
        });

        resolve();
    });
}

function remoteSize() {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        deckgoRemoteElement.width = window.innerWidth;
        deckgoRemoteElement.height = window.innerHeight;

        const deck = document.getElementById('slider');

        if (!deckgoRemoteElement || !deck) {
            resolve();
            return;
        }

        deckgoRemoteElement.slides = deck.childElementCount;

        resolve();
    });
}

function moveRemote(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.moveDraw(event.detail, '300ms');

        resolve();
    });
}

function scrollRemote(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.moveDraw(event.detail, '0ms');

        resolve();
    });
}
