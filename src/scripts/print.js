// Hack
// 1. So the thing is, ion-content div.inner-scroll has the overflow set to hidden, which doesn't allow us to print
// That's why we are first modifying the style attribute, deep in the the shadom dom, before printing
// 2. We need to jump to the first slide, don't ask ;)
doPrint = function() {
    return new Promise(async (resolve) => {
        const content = document.querySelector('ion-content');

        if (content && content.shadowRoot) {
            const innerScroll = content.shadowRoot.querySelector('.inner-scroll');

            if (!innerScroll) {
                return;
            }

            innerScroll.style.overflow = 'visible';

            await document.getElementById('slider').slideTo(0);

            window.print();
        }

        resolve();
    });
};
