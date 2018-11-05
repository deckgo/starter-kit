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
import './scripts/alert.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements(window);

import { defineCustomElements as ioniconsElements } from 'ionicons/dist/loader';
ioniconsElements(window);

import { defineCustomElements as deckDeckGoElements } from 'deckdeckgo/dist/loader';
deckDeckGoElements(window).then(async () => {
    await postLoading();
});
