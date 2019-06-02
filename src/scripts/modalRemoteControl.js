displayRemoteControl = async () => {
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
      <ion-title>Remote control</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding color="primary">
  
  ${getRemoteControlModalContent()}
    
  </ion-content>
  `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', async () => {
        await modalController.dismiss();
    });

    // listen to toggle
    const toggleElement = element.querySelector('ion-toggle');

    if (toggleElement) {
        toggleElement.addEventListener('ionChange', $event => { handleRemoteControlState($event) });
    }

    // create the modal
    const modalElement = await modalController.create({
        component: element
    });

    // present the modal
    await modalElement.present();
};

handleRemoteControlState = ($event) => {
    return new Promise(async (resolve) => {
        if (!$event || !$event.detail) {
            resolve();
            return;
        }

        if($event.detail.checked) {
            await reconnectRemoteControl();
        } else {
            await disconnectRemoteControl();
        }

        resolve();
    });
};

function getRemoteControlModalContent() {
    if (process.env.NO_REMOTE) {
        return `<p class="ion-padding" style="margin: 0; font-size: 16px;">The remote control support for this presentation has been turned off by her/his author.</p>`;
    } else {

        const remoteRoom = getRemoteControlRoom();
        const qrCodeLink = `https://deckdeckgo.app/${remoteRoom && remoteRoom !== '' ? `remote/${remoteRoom}` : ''}`;

        return `<ion-list style="ion-no-margin">
        <ion-item style="--border-color: transparent; color: black;">
            <ion-label class="ion-text-wrap">Toggle to disable or enable the remote control</ion-label> 
            <ion-toggle slot="end" checked="true" color="tertiary" style="--background: var(--ion-color-light); --handle-background: white; --handle-background-checked: white;"></ion-toggle>
        </ion-item>
    </ion-list>
  
    <p class="ion-padding-start ion-padding-end" style="margin: 0; font-size: 16px;">Remote control this presentation with your phone or any devices. Scan the following QR Code to open it directly or get the Progressive Web Apps at <a href="https://deckdeckgo.app" target="_blank" style="color: var(--ion-color-tertiary);">https://deckdeckgo.app <ion-icon name="open" style="color: var(--ion-color-tertiary); vertical-align: bottom;"></ion-icon></a> and find <mark style="background: transparent; color: var(--ion-color-tertiary); font-weight: 500;">${remoteRoom}</mark>.</p>

    <p class="ion-padding-start ion-padding-end" style="margin-bottom: 0; font-size: 16px;">If you can't connect or if you lost the connection, toggle off and on the connection to refresh it.</p>

    <div class="qrcode-container" style="display: flex; justify-content: center;  --deckgo-qrcode-size: 300px; --deckgo-qrcode-color-fill: var(--ion-color-tertiary);">
        <deckgo-qrcode content="${qrCodeLink}">
            <ion-icon slot="logo" src="/assets/icons/deckdeckgo.svg"></ion-icon>
        </deckgo-qrcode>
    </div>`;
    }
}

function getRemoteControlRoom() {
    if (!document) {
        return '';
    }

    const deckgoRemoteElement = document.querySelector("deckgo-remote");

    if (!deckgoRemoteElement) {
        return '';
    }

    return deckgoRemoteElement.room ? deckgoRemoteElement.room : '';
}
