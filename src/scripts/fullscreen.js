initFullscreen = () => {
    return new Promise((resolve) => {
        if (!document) {
            resolve();
            return;
        }

        document.addEventListener('mouseInactivity', async ($event) => {
            const navigation = document.querySelector('#navigation');

            if ($event && navigation) {
                navigation.style.visibility = $event.detail ? 'inherit' : 'hidden';
            }
        }, {passive: true});

        resolve();
    });
};
