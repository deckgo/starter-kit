previousSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (window.event) {
        window.event.stopPropagation();
    }

    await document.getElementById('slider').slidePrev();
};

nextSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (window.event) {
        window.event.stopPropagation();
    }

    await document.getElementById('slider').slideNext();
};

firstSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').slideTo(0, 2000);
};

toggleFullScreen = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').toggleFullScreen();
};

doPrint = async () => {
    const slider = document.getElementById('slider');

    if (!slider) {
        return;
    }

    const content = document.querySelector('ion-content');

    if (!content) {
        return;
    }

    const innerScroll = content.shadowRoot.querySelector('div.inner-scroll');

    if (!innerScroll) {
        return;
    }

    innerScroll.style.position = 'initial';

    await slider.doPrint();
};
