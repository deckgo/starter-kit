postLoading = async () => {
    const app = document.querySelector('ion-app');
    if (app) {
        app.classList.remove('loading');
    }
};
