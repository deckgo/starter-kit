import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';
import './css/theme.css';
import './css/deck.css';
import './css/font.css';
import './css/popover.css';
import './css/print.css';
import './css/alert.css';

import '@webcomponents/custom-elements';

import './scripts/loading.js';
import './scripts/slider.js';
import './scripts/sliderJumpTo.js';
import './scripts/modal.js';
import './scripts/remoteControl.js';
import './scripts/actions.js';
import './scripts/menu.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements(window);

import { defineCustomElements as ioniconsElements } from 'ionicons/dist/loader';
ioniconsElements(window);

// Init DeckDeckGo elements
import { defineCustomElements as deckDeckGoElements } from 'deckdeckgo/dist/loader';
import { defineCustomElements as deckDeckGoRemoteElements } from 'deckdeckgo-remote/dist/loader';
import { defineCustomElements as deckDeckGoChartsElements } from 'deckdeckgo-charts/dist/loader';
import { defineCustomElements as deckDeckGoQRCodeElements } from 'deckdeckgo-qrcode/dist/loader';
import { defineCustomElements as deckDeckGoHighlightCodeElements } from 'deckdeckgo-highlight-code/dist/loader';

// Init web-social-share
import { defineCustomElements as webSocialShareElements } from 'web-social-share/dist/loader';

deckDeckGoElements(window).then(async () => {
    await deckDeckGoChartsElements(window);
    await deckDeckGoQRCodeElements(window);
    await deckDeckGoHighlightCodeElements(window);

    await postLoading();
    await initActions();

    await webSocialShareElements(window);

    deckDeckGoRemoteElements(window).then(async () => {
        await initRemote();
    });
});
