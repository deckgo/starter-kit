remoteEvent = async (event) => {
    return new Promise(async (resolve) => {
        if (!event || !event.detail || !event.detail.event) {
            resolve();
            return;
        }

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        const data = event.detail.event;

        if (data === 'nextSlide') {
            await document.getElementById('slider').slideNext();
        } else if (data === 'prevSlide') {
            await document.getElementById('slider').slidePrev();
        }

        resolve();
    });
};
