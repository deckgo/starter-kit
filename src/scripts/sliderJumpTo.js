class SlidesList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const slidesListActions = await buildSlidesListActions();

        this.innerHTML = '<ion-content><ion-list><ion-list-header>Jump to slide</ion-list-header>' + slidesListActions + '</ion-list></ion-content>';
    }
}

buildSlidesListActions = function() {
    return new Promise(async (resolve) => {
        let result = '';

        const slides = document.getElementById('slider').getElementsByTagName('ion-slide');

        if (slides) {
            let i = 0;

            for (const slide of slides) {
                const h1 = slide.getElementsByTagName('h1');

                const text = 'Slide ' + i + (h1 && h1.length > 0 ? ': ' + h1[0].innerText : '');

                result += '<ion-item ion-item button onclick="jumpToSlide(' + i +')"><ion-label>' + text + '</ion-label></ion-item>';

                i++;
            }
        }

        resolve(result);
    });
};

jumpToSlide = async function(index) {
    await document.getElementById('slider').slideTo(index, 0);
    await lazyLoadOneSlideImages(index);
    await document.querySelector('ion-popover-controller').dismiss();
};

customElements.define('slides-list', SlidesList);

presentSlidePicker = async function() {
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
