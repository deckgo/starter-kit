const keepHistory = process.env.KEEP_HISTORY;

postLoadingJumpTo = () => {
    return new Promise(async (resolve) => {
        if (!keepHistory) {
            resolve();
            return;
        }

        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slidesDidLoad', async (_slides) => {
                await jumpToSlideIndexWithUrl(0);
            });
        }

        resolve();
    });
};

initDeckHistoryWatch = () => {
    return new Promise(async (resolve) => {
        if (!keepHistory) {
            resolve();
            return;
        }

        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slideNextDidChange', async () => {
                await pushStateSlideIndex(slider);
            });

            slider.addEventListener('slidePrevDidChange', async () => {
                await pushStateSlideIndex(slider);
            });

            slider.addEventListener('slideToChange', async (event) => {
                await pushStateSlideIndex(slider);
            });
        }

        if (window) {
            window.onpopstate = async ($event) => {
                await jumpToSlideIndexWithUrl(300);
            };
        }

        resolve();
    });
};

pushStateSlideIndex = async (slider) => {
    if (!history || !keepHistory) {
        return;
    }

    const index = await slider.getActiveIndex();

    const url = new URL(window.location.href);
    const urlIndex = url && url.searchParams ? url.searchParams.get('index') : -1;

    if ((urlIndex === null || parseInt(urlIndex, 0) !== index) && index >= 0) {
        history.pushState({slideIndex: index}, null, index > 0 ? "?index=" + index : '');
    }
};

jumpToSlideIndexWithUrl = async (speed) => {
    if (!keepHistory) {
        return;
    }

    const url = new URL(window.location.href);
    const index = url && url.searchParams ? url.searchParams.get('index') : -1;

    if (index === null || parseInt(index, 0) >= 0) {
        const slider = document.getElementById('slider');

        if (!slider) {
            return;
        }

        await slider.slideTo(index === null ? 0 : parseInt(index, 0), speed);
    }
};
