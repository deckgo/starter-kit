lazyLoadImages = async function () {
    return new Promise(async (resolve) => {
        if (document.getElementById('slider')) {
            let index = await document.getElementById('slider').getActiveIndex();

            if (index === 0) {
                await lazyLoadOneSlideImages(0);
            }

            // We want to load the images of the next slides
            index++;
            await lazyLoadOneSlideImages(index);
        }

        resolve();
    });
};

lazyLoadOneSlideImages = async function (index) {
    return new Promise(async (resolve) => {
        const length = await document.getElementById('slider').length();

        if (index < length) {
            const slides = document.getElementById('slider').getElementsByTagName('ion-slide');

            if (slides && slides.length > index) {
                const allImages = slides[index].getElementsByTagName('img');

                for (let i = 0; i < allImages.length; i++) {
                    if (allImages[i].getAttribute('data-src')) {
                        allImages[i].setAttribute('src', allImages[i].getAttribute('data-src'));
                    }
                }
            }
        }

        resolve();
    });
};