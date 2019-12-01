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

            const deck = document.getElementById('slider');

            if ($event && deck) {
                if ($event.detail) {
                    deck.style.removeProperty('--pager-display');
                } else {
                    deck.style.setProperty('--pager-display', 'none');
                }
            }
        }, {passive: true});

        resolve();
    });
};
