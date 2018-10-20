presentAlert = async () => {
    const alertController = document.querySelector('ion-alert-controller');

    if (!alertController) {
        return;
    }

    await alertController.componentOnReady();

    const alert = await alertController.create({
        header: 'Hey!',
        subHeader: 'Nice to meet you',
        message: 'To navigate, just swipe the slides, use the keyboard or the actions available at the bottom right.',
        buttons: ['OK']
    });

    return await alert.present();
};
