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

            if (document.dir === 'rtl') {
                ionFab.style.setProperty('direction', 'rtl');
            }
        }

        resolve();
    });
}
