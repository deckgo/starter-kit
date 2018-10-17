// Src: https://beta.ionicframework.com/docs/api/modal
presentModal = async function () {
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
    <h1 text-center>Yes that's correct, a modal in a slideshow 😉</h1>
  </ion-content>
  <ion-footer>
    <ion-toolbar text-center>
        <ion-button class="dismiss" shape="round" size="large" color="tertiary">Dismiss Modal</ion-button>
    </ion-toolbar>
  </ion-footer>
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