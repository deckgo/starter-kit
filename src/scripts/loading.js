postLoading = async function () {
    const app = document.querySelector('ion-app');
    if (app) {
        app.classList.remove('loading');
    }
};
