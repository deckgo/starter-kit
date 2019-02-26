class SlidesList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const slidesListActions = await buildSlidesListActions();

        this.innerHTML = '<ion-content><ion-list><ion-list-header>Jump to slide</ion-list-header>' + slidesListActions + '</ion-list></ion-content>';
    }
}

buildSlidesListActions = () => {
    return new Promise(async (resolve) => {
        let result = '';

        const slides = document.querySelectorAll('#slider > *');

        if (slides) {
            let i = 0;

            for (const slide of slides) {
                if (slide.tagName && slide.tagName.toLowerCase().indexOf('deckgo-slide') > -1) {
                    const title = slide.querySelector('[slot="title"]');

                    const text = 'Slide ' + (i + 1) + (title ? ': ' + title.innerHTML : '');

                    result += '<ion-item ion-item button onclick="jumpToSlide(' + i + ')" color="primary"><ion-label>' + text + '</ion-label></ion-item>';

                    i++;
                }
            }
        }

        resolve(result);
    });
};

jumpToSlide = async (index) => {
    await document.getElementById('slider').slideTo(index, 0);
    await document.querySelector('ion-popover-controller').dismiss();
};

customElements.define('slides-list', SlidesList);

presentSlidePicker = async () => {
    const popoverController = document.querySelector('ion-popover-controller');

    if (!popoverController) {
        return;
    }

    await popoverController.componentOnReady();

    const popover = await popoverController.create({
        component: 'slides-list',
        translucent: true
    });

    return await popover.present();
};
