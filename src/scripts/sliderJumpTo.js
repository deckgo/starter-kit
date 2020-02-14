class SlidesList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const slidesListActions = await buildSlidesListActions();

        this.innerHTML = '<ion-list><ion-list-header>Jump to slide</ion-list-header>' + slidesListActions + '</ion-list>';
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
                    const text = getSlideTitle(slide, i);

                    result += '<ion-item ion-item button onclick="jumpToSlide(' + i + ')" color="primary"><ion-label>' + text + '</ion-label></ion-item>';

                    i++;
                }
            }
        }

        resolve(result);
    });
};

function getSlideTitle(slide, index) {
    if (!slide) {
        return 'Slide ' + (index + 1);
    }

    const title = slide.querySelector('[slot="title"],[slot="question"]');

    if (title && title.textContent !== '') {
        return title.textContent;
    } else {
        const start = slide.querySelector('[slot="start"],[slot="header"]');

        if (start && start.textContent !== '') {
            return start.textContent;
        } else {
            const end = slide.querySelector('[slot="end"],[slot="footer"]');

            if (end && end.textContent !== '') {
                return end.textContent;
            } else {
                return 'Slide ' + (index + 1);
            }
        }
    }
}

jumpToSlide = async (index) => {
    await document.getElementById('slider').slideTo(index, 0);
    await document.querySelector('ion-popover').dismiss();
};

customElements.define('slides-list', SlidesList);

presentSlidePicker = async () => {
    const popover = document.createElement('ion-popover');
    popover.component = 'slides-list';
    popover.translucent = true;
    popover.cssClass = 'menu';

    document.body.appendChild(popover);

    return await popover.present();
};
