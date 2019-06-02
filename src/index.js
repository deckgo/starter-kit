import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';
import './css/theme.css';
import './css/deck.css';
import './css/font.css';
import './css/modal.css';
import './css/popover.css';
import './css/print.css';
import './css/alert.css';

import '@webcomponents/custom-elements';

import * as manifestData from './manifest.json';
window.ROOM_NAME = manifestData.name;

import './scripts/loading.js';
import './scripts/slider.js';
import './scripts/sliderJumpTo.js';
import './scripts/modalNotes.js';
import './scripts/modalRemoteControl.js';
import './scripts/remoteControl.js';
import './scripts/actions.js';
import './scripts/menu.js';
import './scripts/history.js';
import './scripts/fullscreen.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements(window);

import { defineCustomElements as ioniconsElements } from 'ionicons/dist/loader';
ioniconsElements(window);

// Init DeckDeckGo elements
import { defineCustomElements as deckDeckGoElements } from '@deckdeckgo/core/dist/loader';
import { defineCustomElements as deckDeckGoRemoteElements } from '@deckdeckgo/remote/dist/loader';
import { defineCustomElements as deckDeckGoChartsElements } from '@deckdeckgo/charts/dist/loader';
import { defineCustomElements as deckDeckGoQRCodeElements } from '@deckdeckgo/qrcode/dist/loader';
import { defineCustomElements as deckDeckGoHighlightCodeElements } from '@deckdeckgo/highlight-code/dist/loader';

// Init web-social-share
import { defineCustomElements as webSocialShareElements } from 'web-social-share/dist/loader';

deckDeckGoElements(window).then(async () => {
    await deckDeckGoChartsElements(window);
    await deckDeckGoQRCodeElements(window);
    await deckDeckGoHighlightCodeElements(window);

    await postLoading();
    await initActions();
    await initFullscreen();

    await postLoadingJumpTo();
    await initDeckHistoryWatch();

    await webSocialShareElements(window);

    deckDeckGoRemoteElements(window).then(async () => {
        await initRemote();
    });
});
