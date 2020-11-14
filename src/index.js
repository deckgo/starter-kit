import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';

import '../node_modules/@deckdeckgo/deck-utils/css/deck.css';
import '../node_modules/@deckdeckgo/kit/css/kit.css';

import {initReload, initButtons, initFullscreen, initActions, postLoading, initRemote, postLoadingJumpTo, initDeckHistoryWatch} from "@deckdeckgo/kit";

import manifest from './manifest.json';
const { name } = manifest;

window.ROOM_NAME = name;
window.EMBEDDED = false;
window.PENDING_REMOTE_REQUESTS = [];
window.REMOTE_STATE = 0;

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements();

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
import { defineCustomElements as deckDeckGoRevealElements } from '@deckdeckgo/reveal/dist/loader';
import { defineCustomElements as deckDeckGoYoutubeElements } from '@deckdeckgo/youtube/dist/loader';
import { defineCustomElements as deckDeckGoDragResizeRotateElements } from '@deckdeckgo/drag-resize-rotate/dist/loader';
import { defineCustomElements as deckDeckGoDemoElements } from '@deckdeckgo/demo/dist/loader';
import { defineCustomElements as deckDeckGoMathElements } from '@deckdeckgo/math/dist/loader';
import { defineCustomElements as deckDeckGoMarkdownElements } from '@deckdeckgo/markdown/dist/loader';
import { defineCustomElements as deckDeckGoWordCloudElements } from '@deckdeckgo/word-cloud/dist/loader';

// Init web-social-share
import { defineCustomElements as webSocialShareElements } from 'web-social-share/dist/loader';

deckDeckGoElements().then(async () => {
    await deckDeckGoChartsElements();
    await deckDeckGoQRCodeElements();
    await deckDeckGoHighlightCodeElements();
    await deckDeckGoLazyImgElements();
    await deckDeckGoSocialElements();
    await deckDeckGoRevealElements();
    await deckDeckGoYoutubeElements();
    await deckDeckGoDragResizeRotateElements();
    await deckDeckGoDemoElements();
    await deckDeckGoMathElements();
    await deckDeckGoMarkdownElements();
    await deckDeckGoWordCloudElements();

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

initReload();
initButtons();
