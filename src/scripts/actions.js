initActions = () => {
    return new Promise(async (resolve) => {
        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slidesDidLoad', async (_slides) => {
                await initActionButtons(slider)
            });

            slider.addEventListener('slideNextDidChange', async () => {
                await initActionPlayPause(slider);
            });

            slider.addEventListener('slidePrevDidChange', async () => {
                await initActionPlayPause(slider);
            });

            slider.addEventListener('slideToChange', async (event) => {
                await initActionPlayPause(slider);
            });
        }

        resolve();
    });
};

function initActionButtons(slider) {
    return new Promise(async (resolve) => {
        const ionFab = document.querySelector('ion-fab');

        if (ionFab) {
            const mobile = await slider.isMobile();

            if (mobile) {
                ionFab.style.setProperty('--deckgo-hide-on-mobile', 'none');
            }

            // Workaround: https://github.com/deckgo/deckdeckgo-starter/issues/31
            if (document.dir === 'rtl') {
                const ionFabList = ionFab.querySelector('ion-fab-list[side="start"]');
                if (ionFabList) {
                    ionFabList.setAttribute('side', 'end');
                }

                ionFab.setAttribute('horizontal', 'start');
            }
        }

        resolve();
    });
}

initActionPlayPause = (deck) => {
    return new Promise(async (resolve) => {
        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');

        const index = await deck.getActiveIndex();

        const actionSlideElement = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

        if (!actionSlideElement ||
            (actionSlideElement.tagName !== 'deckgo-slide-youtube'.toUpperCase() &&
                actionSlideElement.tagName !== 'deckgo-slide-video'.toUpperCase())) {

            if (playButton) {
                playButton.style.display = 'none';
            }

            if (pauseButton) {
                pauseButton.style.display = 'none';
            }

            resolve();
            return;
        }

        console.log('here', actionSlideElement, playButton);

        if (playButton) {
            playButton.style.display = 'initial';
        }

        if (pauseButton) {
            pauseButton.style.display = 'none';
        }

        resolve();
    });
}
