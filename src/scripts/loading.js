postLoading = () => {
    return new Promise((resolve) => {
        const app = document.querySelector('ion-app');
        if (app) {
            app.classList.remove('loading');
        }

        resolve();
    });
};
