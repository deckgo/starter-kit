initButtons = () => {
    if (!document) {
        return;
    }

    document.addEventListener('DOMContentLoaded', async () => {
        document.getElementById('play').addEventListener('click', videoStart);
        document.getElementById('pause').addEventListener('click', videoPause);
        document.getElementById('previous').addEventListener('click', previousSlide);
        document.getElementById('next').addEventListener('click', nextSlide);
        document.getElementById('slidePicker').addEventListener('click', presentSlidePicker);
        document.getElementById('fullScreen').addEventListener('click', toggleFullScreen);
        document.getElementById('remote').addEventListener('click', openRemote);

        const deck = document.getElementById('slider');

        if (!deck) {
            return;
        }

        deck.addEventListener('deckDidLoad', async () => {
            await initActions();
        });
    });
};

function initActions() {
    return new Promise(async (resolve) => {
        const elements = document.querySelectorAll('[slot="actions"]');

        if (elements) {
            Array.from(elements).forEach((element) => {
                element.addEventListener('click', openMenu);
            });
        }

        resolve();
    });
}
