// Src: https://beta.ionicframework.com/docs/api/modal
displaySlideNotes = async () => {
    const deck = document.getElementById('slider');

    if (!deck) {
        return;
    }

    const index = await deck.getActiveIndex();

    const slide = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

    if (!slide) {
        return;
    }

    const title = slide.querySelector('[slot="title"]');
    const notes = slide.querySelector('[slot="notes"][show]');

    const titleText = title ? title.innerHTML : 'Slide ' + index;
    const notesText = notes ? notes.innerHTML : 'No particular notes';

    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-buttons slot="start">
          <ion-button>
              <ion-icon name="close"></ion-icon>
          </ion-button>
      </ion-buttons>
      <ion-title>${titleText}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding color="primary">
    <p style="white-space: pre-wrap;">${notesText}</p>
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
};
