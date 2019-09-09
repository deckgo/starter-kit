// https://github.com/deckgo/deckdeckgo/issues/327
// https://github.com/ionic-team/ionic/issues/19065#issuecomment-521370741

const hack = () => {
    const ionApp = document.querySelector('ion-app');

    if (ionApp) {
        window.requestAnimationFrame(() => {
            ionApp.style.height = '100%';
            window.requestAnimationFrame(() => {
                ionApp.style.height = '';
            });
        });
    }
};

let resizerObserver;

document.addEventListener('DOMContentLoaded', () => {
    if (!window) {
        return;
    }

    if ('ResizeObserver' in window) {
        const ResizeObserver = window.ResizeObserver;
        resizerObserver = new ResizeObserver(hack);
        resizerObserver.observe(document.documentElement);
    } else {
        window.addEventListener('keyboardWillShow', hack);
        window.addEventListener('keyboardWillHide', hack);
        window.addEventListener('resize', hack);
    }
});

window.addEventListener('unload', () => {
    if (!window) {
        return;
    }

    if ('ResizeObserver' in window) {
        console.log('here', resizerObserver);
        if (resizerObserver) {
            resizerObserver.unobserve(document.documentElement);
            resizerObserver.disconnect();
        }
    } else {
        window.removeEventListener('keyboardWillShow', hack);
        window.removeEventListener('keyboardWillHide', hack);
        window.removeEventListener('resize', hack);
    }
});
