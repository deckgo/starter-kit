remoteEvent = async (event) => {
    return new Promise(async (resolve) => {
        if (!event || !event.detail) {
            resolve();
            return;
        }

        const slider = document.getElementById('slider');

        if (!slider) {
            resolve();
            return;
        }

        const type = event.detail.type;

        if (type === 'next_slide') {
            const slideAnimation = event.detail.slideAnimation;
            await slider.slideNext(slideAnimation, slideAnimation);
            await pushStateSlideIndex(slider);
            await initActionPlayPause(slider);
        } else if (type === 'prev_slide') {
            const slideAnimation = event.detail.slideAnimation;
            await slider.slidePrev(slideAnimation, slideAnimation);
            await pushStateSlideIndex(slider);
            await initActionPlayPause(slider);
        } else if (type === 'slide_action') {
            await slidePlayPause(event);
        } else if (type === 'slide_to') {
            const index = event.detail.index;
            if (index >= 0) {
                await slider.slideTo(index, 0);
                await pushStateSlideIndex(slider);
                await initActionPlayPause(slider);
            }
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

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        await document.getElementById('slider').slideTo(0, 300, false);

        resolve();
    });
};

disconnectRemoteControl = () => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.disconnect();

        resolve();
    });
};

initRemote = async () => {
    return new Promise(async (resolve) => {
        if (process.env.NO_REMOTE) {
            resolve();
            return;
        }

        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !window) {
            resolve();
            return;
        }

        deckgoRemoteElement.addEventListener('event', async event => {
            await remoteEvent(event)
        });

        window.addEventListener('resize', async () => {
            await initRemoteSize();
        });

        await initDeck();

        await initRemoteSize();

        await initDeckMove();

        resolve();
    });
};

function initDeck() {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        deck.addEventListener('slidesDidLoad', async (slides) => {
            await initRemoteRoomServer(slides)
        });

        resolve();
    });
}

function initRemoteRoomServer(slides) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !document) {
            resolve();
            return;
        }

        deckgoRemoteElement.slides = slides.detail;

        if (!deckgoRemoteElement.room) {
            // In case the presentation is published and many users are browsing it, this enhance the change to have single id
            // Or hash or timestamp would be better, but for the time being, a random number is readable and probably enough
            const roomNumber = Math.floor(Math.random() * 999);
            deckgoRemoteElement.room = ROOM_NAME ? `${ROOM_NAME} *${roomNumber}` : `DeckDeckGo *${roomNumber}`;
        }

        // SIGNALING_SERVER is declared by Webpack, see webpack.config.js
        deckgoRemoteElement.server = process.env.SIGNALING_SERVER;

        resolve();
    });
}

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

function initRemoteSize() {
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

        deckgoRemoteElement.length = deck.childElementCount;

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

function slidePlayPause(event) {
    return playPause(event.detail.action, false);
}

forwardPlayPauseToRemote = (action) => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        if (action === 'pause') {
            await deckgoRemoteElement.pause();
        } else {
            await deckgoRemoteElement.play();
        }

        resolve();
    });
};
