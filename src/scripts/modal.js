// Src: https://beta.ionicframework.com/docs/api/modal
presentModal = async () => {
    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
  <ion-header>
    <ion-toolbar>
      <ion-title>DeckDeckGo</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding>
    <div style="height: 100%; display: flex; flex-direction: column;" align-items-center justify-content-center>
        <h3 text-center>...or this modal 😉</h3>
        
        <div text-center padding-top>
            <ion-button shape="round" size="large" color="primary">Dismiss</ion-button>
        </div>
    </div>
  </ion-content>
  `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', async () => {
        await modalController.dismiss();
    });

    // create the modal
    const modalElement = await modalController.create({
        component: element
    });

    // present the modal
    await modalElement.present();
}