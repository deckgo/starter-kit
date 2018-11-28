remoteEvent = async (event) => {
    return new Promise(async (resolve) => {
        if (!event || !event.detail) {
            resolve();
            return;
        }

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        const type = event.detail.type;
        const slideAnimation = event.detail.slideAnimation;

        if (type === 'next_slide') {
            await document.getElementById('slider').slideNext(slideAnimation, false);
        } else if (type === 'prev_slide') {
            await document.getElementById('slider').slidePrev(slideAnimation, false);
        }

        resolve();
    });
};

reconnectRemoteControl = () => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.connect();
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

        // SIGNALING_SERVER is declared by Webpack, see webpack.config.js
        deckgoRemoteElement.server = SIGNALING_SERVER;

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

        deck.addEventListener('slideNextDidChange', async () => {
            await slidePrevNext(true)
        });

        deck.addEventListener('slidePrevDidChange', async () => {
            await slidePrevNext(false)
        });

        deck.addEventListener('slideWillChange', async (event) => {
            await moveRemote(event)
        });

        deck.addEventListener('slideDrag', async (event) => {
            await scrollRemote(event)
        });

        deck.addEventListener('slideToChange', async (event) => {
            await slideToChange(event)
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

function slideToChange(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !event) {
            resolve();
            return;
        }

        const slideIndex = event.detail;

        await deckgoRemoteElement.slideTo(slideIndex, 0);

        resolve();
    });
}

function slidePrevNext(next) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        if (next) {
            await deckgoRemoteElement.nextSlide();
        } else {
            await deckgoRemoteElement.prevSlide();
        }

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
