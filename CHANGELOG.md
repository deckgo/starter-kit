<a name="2.5.2"></a>
# [2.5.2](https://github.com/deckgo/deckdeckgo-starter/compare/v2.5.1...v2.5.2) (2020-06-14)

### Style

- improve `<deckgo-highlight-code/>` line numbers background and color

<a name="2.5.1"></a>
# [2.5.1](https://github.com/deckgo/deckdeckgo-starter/compare/v2.5.0...v2.5.1) (2020-06-13)

### Style

- update `<li/>` style

<a name="2.5.0"></a>
# [2.5.0](https://github.com/deckgo/deckdeckgo-starter/compare/v2.4.1...v2.5.0) (2020-06-05)

### Features

- template `playground`

<a name="2.4.1"></a>
# [2.4.1](https://github.com/deckgo/deckdeckgo-starter/compare/v2.4.0...v2.4.1) (2020-05-29)

### Fix

- correct slide QR code size calculation 

<a name="2.4.0"></a>
# [2.4.0](https://github.com/deckgo/deckdeckgo-starter/compare/v2.3.0...v2.4.0) (2020-05-21)

### Features

- theming for the code highlighter (terminal carbon)
- update `copy-webpack-plugin`

<a name="2.3.0"></a>
# [2.3.0](https://github.com/deckgo/deckdeckgo-starter/compare/v2.2.0...v2.3.0) (2020-05-14)

### Features

- add new component `math`
- update all DeckDeckGo libs

<a name="2.2.0"></a>
# [2.2.0](https://github.com/deckgo/deckdeckgo-starter/compare/v2.1.1...v2.2.0) (2020-05-07)

### Features

- introduce new component `demo` to showcase interactive apps and websites

<a name="2.1.1"></a>
# [2.1.1](https://github.com/deckgo/deckdeckgo-starter/compare/v2.1.0...v2.1.1) (2020-05-03)

### Fix

- update deck-utils for split column and font alignment in case of children

<a name="2.1.0"></a>
# [2.1.0](https://github.com/deckgo/deckdeckgo-starter/compare/v2.0.1...v2.1.0) (2020-05-01)

### Features

- update deck-utils to improve fonts weight and size

<a name="2.0.1"></a>
# [2.0.1](https://github.com/deckgo/deckdeckgo-starter/compare/v2.0.0...v2.0.1) (2020-04-13)

### Fix

- service worker cache Tenor and other opaque assets

<a name="2.0.0"></a>
# [2.0.0](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0...v2.0.0) (2020-04-13)

### Breaking Changes

We have updated the [Remote Control](https://deckdeckgo.com) in order to make the presenter grant any remote connections.

This has for goal, if you would have the remote option enabled, to make your content accessible only if you would accept it.

This is a breaking changes and therefore your deck has to be updated, if you want to continue to use the remote.

How to migrate:

1. Update `package.json` to reflect the dependencies update of this repo

2. Run `npm install`

3. Overwrite the following files with these from this repo:

- [button.css](src/css/button.css)
- [popover.css](src/css/popover.css)

- [buttons.js](src/scripts/buttons.js)
- [menu.js](src/scripts/menu.js)
- [remoteControl.js](src/scripts/remoteControl.js)
- [remotePopover.js](src/scripts/remotePopover.js) (new script)

- [index.js](src/buttons.js)

4. Delete the following script:

- [modalRemoteControl.js](src/scripts/modalRemoteControl.js)

5. Add a new remote button as in [index.html](src/index.html)

```
<button id="remote" class="navigation ion-activatable">
    <ion-ripple-effect></ion-ripple-effect>
    <ion-icon name="phone-portrait-outline" aria-label="Open Remote" style="font-size: 1.4em;"></ion-icon>
</button>
```

<a name="1.0.0"></a>
# [1.0.0](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.8-1...v1.0.0) (2020-03-19)

To infinity and beyond 🚀

### Features

* update dependencies

<a name="1.0.0-rc.8-1"></a>
# [1.0.0-rc.8-1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.8...v1.0.0-rc.8-1) (2020-03-09)

### Features

* service worker cache unsplash

### Fix

* template author social logo spacing
* drag, resize and rotate improved (rotation reliability)

<a name="1.0.0-rc.8"></a>
# [1.0.0-rc.8](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2020-02-27)

### Features

* new template `<deckgo-slide-aspect-ratio/>`
* new Web Component `<deckgo-drag-resize-rotate/>`
* add social share to Hacker News

<a name="1.0.0-rc.7"></a>
# [1.0.0-rc.7](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-9...v1.0.0-rc.7) (2020-02-14)

### Features

* upgrade to Ionic v5
* style "jump to slide" popover
* add share to Hacker News
* menu icon size

### Fix

* actions color
* avoid inline script

<a name="1.0.0-rc.6-9"></a>
# [1.0.0-rc.6-9](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-8...v1.0.0-rc.6-9) (2020-01-20)

### Fix

* add "question" to list of titles for jump to slides

### Features

* attach click event after load (avoid inline scripts)

<a name="1.0.0-rc.6-8"></a>
# [1.0.0-rc.6-8](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-7...v1.0.0-rc.6-8) (2020-01-11)

### Features

* swipe slides with Tab

### Fix

* `<deckgo-lazy-img/>` lazy load correctly `svg`
* `<deckgo-youtube/>` component was not correctly loaded

<a name="1.0.0-rc.6-7"></a>
# [1.0.0-rc.6-7](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-6...v1.0.0-rc.6-7) (2020-01-08)

### Features

* use new component `<deckgo-youtube/>`

<a name="1.0.0-rc.6-6"></a>
# [1.0.0-rc.6-5](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-5...v1.0.0-rc.6-6) (2020-01-05)

### Features

* new slide `author` design

<a name="1.0.0-rc.6-5"></a>
# [1.0.0-rc.6-5](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-4...v1.0.0-rc.6-5) (2020-01-04)

### Features

* use new component `<deckgo-social/>`
* update `author` slide ("flex-wrap")

<a name="1.0.0-rc.6-4"></a>
# [1.0.0-rc.6-4](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-3...v1.0.0-rc.6-4) (2019-12-13)

### Features

* update `core` which applies slide effect on swipe only if such transition is specified

### Fix

* update `lazy-img` which wasn't displaying svg anymore

<a name="1.0.0-rc.6-3"></a>
# [1.0.0-rc.6-3](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-2...v1.0.0-rc.6-3) (2019-12-12)

### Features

* use new `deckdeckgo/highlight-code` to display code in cards

<a name="1.0.0-rc.6-2"></a>
# [1.0.0-rc.6-2](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6-1...v1.0.0-rc.6-2) (2019-12-11)

### Features

* use new `deckdeckgo/core` to introduce deck transition

<a name="1.0.0-rc.6-1"></a>
# [1.0.0-rc.6-1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.6...v1.0.0-rc.6-1) (2019-12-04)

### Features

* use `deckdeckgo.com/poll` instead of `poll.deckdeckgo.com` as uri for the live poll

<a name="1.0.0-rc.6"></a>
# [1.0.0-rc.6](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.5-2...v1.0.0-rc.6) (2019-12-03)

### Features

* introduce the new template `poll` to interact with your audience through a live poll
* hide pager in fullscreen on mouse inactivity (I think it's more "cure" like this)
* improve service worker images caching including caching the gif provided by Giphy
* update all recent libs dependencies

<a name="1.0.0-rc.5-2"></a>
# [1.0.0-rc.5-2](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.5-1...v1.0.0-rc.5-2) (2019-11-23)

### Features

* remove plugins not used for studio (related to studio issues [#355](https://github.com/deckgo/deckdeckgo/issues/355))

<a name="1.0.0-rc.5-1"></a>
# [1.0.0-rc.5-1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.5...v1.0.0-rc.5-1) (2019-11-13)

### Fix

* fix notes displayed on template split

<a name="1.0.0-rc.5"></a>
# [1.0.0-rc.5](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.4-2...v1.0.0-rc.5) (2019-11-10)

### Features

* sync the content with the remote
* update events to match the new remote UX

### Fix

* typo and anchor

<a name="1.0.0-rc.4-2"></a>
# [1.0.0-rc.4-2](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.4-1...v1.0.0-rc.4-2) (2019-10-21)

### Fix

* code highlighting and line numbers

<a name="1.0.0-rc.4-1"></a>
# [1.0.0-rc.4-1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.4...v1.0.0-rc.4-1) (2019-10-20)

### Fix

* bar chart label ES5 compatibility

<a name="1.0.0-rc.4"></a>
# [1.0.0-rc.4](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2019-10-20)

### Features

* update template split with `vertical` option
* update recent libs
* add charts to studio starter kit

<a name="1.0.0-rc.3"></a>
# [1.0.0-rc.3](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.2-3...v1.0.0-rc.3) (2019-10-07)

### Features

* load slide QR code in studio starter kit

### Libs

* update last DeckDeckgo libs
* update @webcomponents/custom-elements

<a name="1.0.0-rc.2-3"></a>
# [1.0.0-rc.2-3](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.2-2...v1.0.0-rc.2-3) (2019-10-03)

### Features

* keep history only when while developing presentation ([#43](https://github.com/deckgo/deckdeckgo-starter/issues/43))

### Fix

* update webpack plugin for the notes

<a name="1.0.0-rc.2-2"></a>
# [1.0.0-rc.2-2](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.2-1...v1.0.0-rc.2-2) (2019-09-16)

### Fix

* wrong animated tag selection

<a name="1.0.0-rc.2-1"></a>
# [1.0.0-rc.2-1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.2...v1.0.0-rc.2-1) (2019-09-16)

### Templates

* import and add new slide templates `big-img` and `video`

<a name="1.0.0-rc.2"></a>
# [1.0.0-rc.2](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.1-4...v1.0.0-rc.2) (2019-09-15)

### Features

* add `play` and `pause` for videos

<a name="1.0.0-rc.1-4"></a>
# [1.0.0-rc.1-4](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.1-3...v1.0.0-rc.1-4) (2019-09-09)

### Fix

* workaround to resize `ion-app`
* fix slide gif height

<a name="1.0.0-rc.1-3"></a>
# [1.0.0-rc.1-3](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.1-2...v1.0.0-rc.1-3) (2019-09-04)

### Features

* better centering of the content on mobile devices
* sync with studio for the image selector with attribute instead of class

<a name="1.0.0-rc.1-2"></a>
# [1.0.0-rc.1-2](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.1-1...v1.0.0-rc.1-2) (2019-09-02)

### Fix

* markdown plugin `remarkable` import at runtime

<a name="1.0.0-rc.1-1"></a>
# [1.0.0-rc.1-1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-rc.1...v1.0.0-rc.1-1) (2019-08-31)

### Lib

* update `@deckdeckgo/slide-youtube`

### Fix

* `rtl` fonz-size using `em` when elements are positioned using the browser

<a name="1.0.0-rc.1"></a>
# [1.0.0-rc.1](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.22...v1.0.0-rc.1) (2019-08-31)

### Breaking Changes

* extract slides and extra components to separate components ([#230](https://github.com/deckgo/deckdeckgo/issues/230))

### Fix

* overscroll auto best suited for windows and linux

### Style

* background images fullscreen
* default background theme color `white`

### Libs

* update to most recent dependencies

### Note about v1.0.0-rc.1

The first users began to test, and to create content in, our web open source editor for presentations (`studio`)

#### How to migrate?

Basically, you have to install the `slides` which have been pulled out of the `core` components. This starter kit has been updated, you could either have a look to it or check the [documentation](https://docs.deckdeckgo.com) which has been updated too.

<a name="1.0.0-beta.22"></a>
# [1.0.0-beta.22](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2019-08-15)

### Breaking Changes

* add new components `<deckgo-reveal/>` and `<deckgo-reveal-list/>` to make elements and texts appear one line at a time ([#224](https://github.com/deckgo/deckdeckgo/issues/224))

#### How to migrate?

1. Remove all attributes `reveal="true"` you would have set on any of your slides

2. Wrap the new above components around your elements, which should appear one at a time, as highlighted in the new [documentation](https://docs.deckdeckgo.com/edit/reveal).

## Features

* no more fab list for the actions and remove print
* replace chapters icon

### Style

* display link in presentation
* default deck background and color

### Fix

* replace ion-fab-button with button 

<a name="1.0.0-beta.21"></a>
# [1.0.0-beta.21](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2019-06-24)

### Features

* update with animated charts
* sync fonts and containers with starter kit and studio
* share without parameters
* better title handling for slides navigation display
* hide actions in fullscreen in case of inactivity
* remote control modal and QR core to open the remote control
* ROOM_NAME from the manifest.json
* add a random number next to the room name
* deep link remote control url
* add aria label for accessibility

### Libs

* migrate to libs developed with Stencil One

### Style

* code font-size inherit

### Fixes

* short white background while loading ion-content

<a name="1.0.0-beta.20"></a>
# [1.0.0-beta.20](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2019-05-24)

### Libs

* update libs including the DeckDeckGo scope org packages

<a name="1.0.0-beta.19"></a>
# [1.0.0-beta.19](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2019-03-31)

### Features

* update the libs, notably all DeckDeckGo libs improvements linked with the development of our upcoming editor for presentations

### Fix

* fix a couple of issues on Windows ([#39](https://github.com/deckgo/deckdeckgo-starter/issues/39))
* improve deployment of the PWAs on a subpaths ([#22](https://github.com/deckgo/deckdeckgo-starter/issues/22)) 

<a name="1.0.0-beta.18"></a>
# [1.0.0-beta.18](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2019-03-31)

### Features

* push and pop history state to keep track of the slide index, useful when developing your presentation ([#37](https://github.com/deckgo/deckdeckgo-starter/issues/37))
* don't open automatically the browser on start ([#35](https://github.com/deckgo/deckdeckgo-starter/issues/35))

<a name="1.0.0-beta.17"></a>
# [1.0.0-beta.17](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2019-02-17)

### Features

* add social sharing and popover menu ([#30](https://github.com/deckgo/deckdeckgo-starter/issues/30))
* improve status bar color ([#54888f6](https://github.com/deckgo/deckdeckgo-starter/commit/54888f6b31a1421503c49c0ae9340c19ebb5f57c))

### Fix

* unexpected token < ([#33](https://github.com/deckgo/deckdeckgo-starter/issues/33))
* jump to slide only list slides ([8ccded3](https://github.com/deckgo/deckdeckgo-starter/commit/8ccded373641d139c0fd4f99e2c19a6d782e3c91))

<a name="1.0.0-beta.16"></a>
# [1.0.0-beta.16](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2019-02-14)

### Features

* update information following the release of the DeckDeckGo documentation

<a name="1.0.0-beta.15"></a>
# [1.0.0-beta.15](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2019-02-03)

### Features

* RTL support 🌍
* print fixed and improved 🖨️

#### Notes regarding upgrade

If you wish to upgrade your presentation, you could proceed as the following respectively follow the example of the DeckDeckGo's website:

- print: Update print.css and slider.js as in ([e285235](https://github.com/deckgo/deckdeckgo-website/commit/e2852354f52179262491a6ca5afdcffff8213adb))
- RTL: upgrade libs and other files as in ([e442cb5](https://github.com/deckgo/deckdeckgo-website/commit/e442cb575ced2d53c791b3e8bafddcabf54fb8d5))

<a name="1.0.0-beta.14"></a>
# [1.0.0-beta.14](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2019-01-27)

### Features

* command slide animation (= reveal object) from the remote control too ([f17107d](https://github.com/deckgo/deckdeckgo-starter/commit/f17107de2fd69f716e7fec8abe945100b07b6034))

<a name="1.0.0-beta.13"></a>
# [1.0.0-beta.13](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2019-01-15)

### Features

* display editor notes in a modal ([#26](https://github.com/deckgo/deckdeckgo-starter/issues/26))

<a name="1.0.0-beta.12"></a>
# [1.0.0-beta.12](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2018-12-27)

### Features

* add QR code to your presentation

<a name="1.0.0-beta.11"></a>
# [1.0.0-beta.11](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2018-12-20)

### Features

* add charts to your presentation 📈

<a name="1.0.0-beta.10"></a>
# [1.0.0-beta.10](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2018-12-13)

### Features

* add Markdown support ([#25](https://github.com/deckgo/deckdeckgo-starter/issues/25))
* display a msg about editing favicon and meta information before going online ([#21](https://github.com/deckgo/deckdeckgo-starter/issues/21))
* when a presentation is created with the cli, the manifest.json short_name should be max. 12 characters long ([#23](https://github.com/deckgo/deckdeckgo-starter/issues/23))

### Fix

* on mobile devices, some titles may have been displayed with an overflow ([#20](https://github.com/deckgo/deckdeckgo-starter/issues/20))

#### Note regarding upgrade

If you are looking to upgrade your presentation created with a previous version of DeckDeckGo, follow the following steps:

1. update the dependencies and install the new one as in [package.json](https://github.com/deckgo/deckdeckgo-starter/blob/master/package.json)
2. create the new file [webpack.info.plugin.js](https://github.com/deckgo/deckdeckgo-starter/blob/master/webpack.info.plugin.js) at the root of your project
3. override your [webpack.config.js](https://github.com/deckgo/deckdeckgo-starter/blob/master/webpack.config.js) file
4. update your [font.css](https://github.com/deckgo/deckdeckgo-starter/blob/master/src/css/font.css) file
5. update your [theme.css](https://github.com/deckgo/deckdeckgo-starter/blob/master/src/css/theme.css) file
6. enjoy 🎉 

<a name="1.0.0-beta.9"></a>
# [1.0.0-beta.9](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2018-12-06)

### Remote control features 📱

* handle remote play/pause Youtube video ([#18](https://github.com/deckgo/deckdeckgo-starter/issues/18))
* on reconnect, slide automatically to first slide ([#17](https://github.com/deckgo/deckdeckgo-starter/issues/17))

### Features

* add an extra script to optionally start locally without remote control ([#16](https://github.com/deckgo/deckdeckgo-starter/issues/16))

<a name="1.0.0-beta.8"></a>
# [1.0.0-beta.8](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2018-11-28)

### Features

* introduces the DeckDeckGo remote control 🎉

<a name="1.0.0-beta.7"></a>
# [1.0.0-beta.7](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2018-11-14)

### Features

* update DeckDeckGo library v1.0.0-beta.4 (see related release for [details](https://github.com/deckgo/deckdeckgo/releases/tag/v1.0.0-beta.4))

<a name="1.0.0-beta.6"></a>
# [1.0.0-beta.6](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2018-11-11)

### Features

* fix over scrolling on iOS
* include last DeckDeckGo library
* add `npm run start` to watch and serve in a single command

<a name="1.0.0-beta.5"></a>
# [1.0.0-beta.5](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2018-11-07)

### Fix

* slider was not swipeable on iOS (core)

<a name="1.0.0-beta.4"></a>
# [1.0.0-beta.4](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.3...v1.0.0-beta.3) (2018-11-07)

### Features

* DeckDeckGo is now based on a custom slide/presentation tool build with StencilJS
* This project used to be a single repo but has now been split in a code [DeckDeckGo](https://github.com/deckgo/deckdeckgo), a [starter kit](https://github.com/deckgo/deckdeckgo-starter) (this repo), a [CLI](https://github.com/deckgo/create-deckdeckgo) and a [website](https://github.com/deckgo/deckdeckgo-website) 

<a name="1.0.0-beta.3"></a>
# [1.0.0-beta.3](https://github.com/deckgo/deckdeckgo-starter/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2018-08-20)

### Features

* DeckDeckGo has now a sweet logo designed by Anita ([#1](https://github.com/deckgo/deckdeckgo-starter/issues/1))
