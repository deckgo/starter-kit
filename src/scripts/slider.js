previousSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (document.dir === 'rtl') {
        await document.getElementById('slider').slideNext();
    } else {
        await document.getElementById('slider').slidePrev();
    }
};

nextSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (document.dir === 'rtl') {
        await document.getElementById('slider').slidePrev();
    } else {
        await document.getElementById('slider').slideNext();
    }
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
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').doPrint();
};

