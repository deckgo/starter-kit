playPause = (action, forwardToRemote) => {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        const index = await deck.getActiveIndex();

        const actionSlideElement = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

        if (!actionSlideElement ||
            (actionSlideElement.tagName !== 'deckgo-slide-youtube'.toUpperCase() &&
                actionSlideElement.tagName !== 'deckgo-slide-video'.toUpperCase())) {
            resolve();
            return;
        }

        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');

        if (action === 'pause') {
            await actionSlideElement.pause();

            if (playButton) {
                playButton.style.display = 'initial';
            }

            if (pauseButton) {
                pauseButton.style.display = 'none';
            }
        } else {
            await actionSlideElement.play();

            if (playButton) {
                playButton.style.display = 'none';
            }

            if (pauseButton) {
                pauseButton.style.display = 'initial';
            }
        }

        if (forwardToRemote) {
            await forwardPlayPauseToRemote(action);
        }
    });
};
