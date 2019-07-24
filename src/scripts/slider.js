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
