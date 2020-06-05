import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';
import './css/theme.css';
import './css/pager.css';
import './css/modal.css';
import './css/popover.css';
import './css/print.css';
import './css/alert.css';
import './css/img.css';
import './css/button.css';

import '../node_modules/@deckdeckgo/deck-utils/css/deck.css';
import '../node_modules/@deckdeckgo/deck-utils/css/fullscreen.css';

import '@webcomponents/custom-elements';

import * as manifestData from './manifest.json';
window.ROOM_NAME = manifestData.name;

import './scripts/buttons.js';
import './scripts/loading.js';
import './scripts/slider.js';
import './scripts/sliderJumpTo.js';
import './scripts/modalNotes.js';
import './scripts/remoteControl.js';
import './scripts/actions.js';
import './scripts/menu.js';
import './scripts/history.js';
import './scripts/fullscreen.js';
import './scripts/resize.js';
import './scripts/actionPlayPause.js';
import './scripts/remotePopover.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements();

import { defineCustomElements as ioniconsElements } from 'ionicons/dist/loader';
ioniconsElements();

// Init DeckDeckGo elements
import { defineCustomElements as deckDeckGoElements } from '@deckdeckgo/core/dist/loader';

import {defineCustomElements as deckDeckGoSlideTitleElements } from '@deckdeckgo/slide-title/dist/loader';
import {defineCustomElements as deckDeckGoSlideContentElements } from '@deckdeckgo/slide-content/dist/loader';
import {defineCustomElements as deckDeckGoSlideAuthorElements } from '@deckdeckgo/slide-author/dist/loader';
import {defineCustomElements as deckDeckGoSlideChartElements } from '@deckdeckgo/slide-chart/dist/loader';
import {defineCustomElements as deckDeckGoSlideYoutubeElements } from '@deckdeckgo/slide-youtube/dist/loader';
import {defineCustomElements as deckDeckGoSlideSplitElements } from '@deckdeckgo/slide-split/dist/loader';
import {defineCustomElements as deckDeckGoSlideCodeElements } from '@deckdeckgo/slide-code/dist/loader';
import {defineCustomElements as deckDeckGoSlideCountdownElements } from '@deckdeckgo/slide-countdown/dist/loader';
import {defineCustomElements as deckDeckGoSlideGifElements } from '@deckdeckgo/slide-gif/dist/loader';
import {defineCustomElements as deckDeckGoSlideQRCodeElements } from '@deckdeckgo/slide-qrcode/dist/loader';
import {defineCustomElements as deckDeckGoSlideBigImgElements } from '@deckdeckgo/slide-big-img/dist/loader';
import {defineCustomElements as deckDeckGoSlideVideoElements } from '@deckdeckgo/slide-video/dist/loader';
import {defineCustomElements as deckDeckGoSlidePollElements } from '@deckdeckgo/slide-poll/dist/loader';
import {defineCustomElements as deckDeckGoSlideAspectRatioElements } from '@deckdeckgo/slide-aspect-ratio/dist/loader';
import {defineCustomElements as deckDeckGoSlidePlaygroundElements } from '@deckdeckgo/slide-playground/dist/loader';

import { defineCustomElements as deckDeckGoRemoteElements } from '@deckdeckgo/remote/dist/loader';
import { defineCustomElements as deckDeckGoChartsElements } from '@deckdeckgo/charts/dist/loader';
import { defineCustomElements as deckDeckGoQRCodeElements } from '@deckdeckgo/qrcode/dist/loader';
import { defineCustomElements as deckDeckGoHighlightCodeElements } from '@deckdeckgo/highlight-code/dist/loader';
import { defineCustomElements as deckDeckGoLazyImgElements } from '@deckdeckgo/lazy-img/dist/loader';
import { defineCustomElements as deckDeckGoSocialElements } from '@deckdeckgo/social/dist/loader';
import { defineCustomElements as deckDeckGoYoutubeElements } from '@deckdeckgo/youtube/dist/loader';
import { defineCustomElements as deckDeckGoDragResizeRotateElements } from '@deckdeckgo/drag-resize-rotate/dist/loader';
import { defineCustomElements as deckDeckGoDemoElements } from '@deckdeckgo/demo/dist/loader';
import { defineCustomElements as deckDeckGoMathElements } from '@deckdeckgo/math/dist/loader';

// Init web-social-share
import { defineCustomElements as webSocialShareElements } from 'web-social-share/dist/loader';

deckDeckGoElements().then(async () => {
    await deckDeckGoChartsElements();
    await deckDeckGoQRCodeElements();
    await deckDeckGoHighlightCodeElements();
    await deckDeckGoLazyImgElements();
    await deckDeckGoSocialElements();
    await deckDeckGoYoutubeElements();
    await deckDeckGoDragResizeRotateElements();
    await deckDeckGoDemoElements();
    await deckDeckGoMathElements();

    const promises = [];

    promises.push(deckDeckGoSlideTitleElements());
    promises.push(deckDeckGoSlideContentElements());
    promises.push(deckDeckGoSlideAuthorElements());
    promises.push(deckDeckGoSlideChartElements());
    promises.push(deckDeckGoSlideYoutubeElements());
    promises.push(deckDeckGoSlideSplitElements());
    promises.push(deckDeckGoSlideCodeElements());
    promises.push(deckDeckGoSlideCountdownElements());
    promises.push(deckDeckGoSlideGifElements());
    promises.push(deckDeckGoSlideQRCodeElements());
    promises.push(deckDeckGoSlideBigImgElements());
    promises.push(deckDeckGoSlideVideoElements());
    promises.push(deckDeckGoSlidePollElements());
    promises.push(deckDeckGoSlideAspectRatioElements());
    promises.push(deckDeckGoSlidePlaygroundElements());

    await Promise.all(promises);

    await postLoading();
    await initActions();
    await initFullscreen();

    await postLoadingJumpTo();
    await initDeckHistoryWatch();

    await webSocialShareElements();

    deckDeckGoRemoteElements().then(async () => {
        await initRemote();
    });
});

initButtons();
