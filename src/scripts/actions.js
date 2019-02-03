initActions = () => {
    return new Promise(async (resolve) => {
        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slidesDidLoad', async (_slides) => {
                await initActionButtons(slider)
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
