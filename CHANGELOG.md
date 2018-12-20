<a name="1.0.0-beta.10"></a>
# [1.0.0-beta.10](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2018-12-13)

### Features

* add charts to your presentation 📈

<a name="1.0.0-beta.10"></a>
# [1.0.0-beta.10](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2018-12-13)

### Features

* add Markdown support ([#25](https://github.com/fluster/deckdeckgo-starter/issues/25))
* display a msg about editing favicon and meta information before going online ([#21](https://github.com/fluster/deckdeckgo-starter/issues/21))
* when a presentation is created with the cli, the manifest.json short_name should be max. 12 characters long ([#23](https://github.com/fluster/deckdeckgo-starter/issues/23))

### Fix

* on mobile devices, some titles may have been displayed with an overflow ([#20](https://github.com/fluster/deckdeckgo-starter/issues/20))

#### Note regarding upgrade

If you are looking to upgrade your presentation created with a previous version of DeckDeckGo, follow the following steps:

1. update the dependencies and install the new one as in [package.json](https://github.com/fluster/deckdeckgo-starter/blob/master/package.json)
2. create the new file [webpack.info.plugin.js](https://github.com/fluster/deckdeckgo-starter/blob/master/webpack.info.plugin.js) at the root of your project
3. override your [webpack.config.js](https://github.com/fluster/deckdeckgo-starter/blob/master/webpack.config.js) file
4. update your [font.css](https://github.com/fluster/deckdeckgo-starter/blob/master/src/css/font.css) file
5. update your [theme.css](https://github.com/fluster/deckdeckgo-starter/blob/master/src/css/theme.css) file
6. enjoy 🎉 

<a name="1.0.0-beta.9"></a>
# [1.0.0-beta.9](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2018-12-06)

### Remote control features 📱

* handle remote play/pause Youtube video ([#18](https://github.com/fluster/deckdeckgo-starter/issues/18))
* on reconnect, slide automatically to first slide ([#17](https://github.com/fluster/deckdeckgo-starter/issues/17))

### Features

* add an extra script to optionally start locally without remote control ([#16](https://github.com/fluster/deckdeckgo-starter/issues/16))

<a name="1.0.0-beta.8"></a>
# [1.0.0-beta.8](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2018-11-28)

### Features

* introduces the DeckDeckGo remote control 🎉

<a name="1.0.0-beta.7"></a>
# [1.0.0-beta.7](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2018-11-14)

### Features

* update DeckDeckGo library v1.0.0-beta.4 (see related release for [details](https://github.com/fluster/deckdeckgo/releases/tag/v1.0.0-beta.4))

<a name="1.0.0-beta.6"></a>
# [1.0.0-beta.6](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2018-11-11)

### Features

* fix over scrolling on iOS
* include last DeckDeckGo library
* add `npm run start` to watch and serve in a single command

<a name="1.0.0-beta.5"></a>
# [1.0.0-beta.5](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2018-11-07)

### Fix

* slider was not swipeable on iOS (core)

<a name="1.0.0-beta.4"></a>
# [1.0.0-beta.4](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.3...v1.0.0-beta.3) (2018-11-07)

### Features

* DeckDeckGo is now based on a custom slide/presentation tool build with StencilJS
* This project used to be a single repo but has now been split in a code [DeckDeckGo](https://github.com/fluster/deckdeckgo), a [starter kit](https://github.com/fluster/deckdeckgo-starter) (this repo), a [CLI](https://github.com/fluster/create-deckdeckgo) and a [website](https://github.com/fluster/deckdeckgo-website) 

<a name="1.0.0-beta.3"></a>
# [1.0.0-beta.3](https://github.com/fluster/deckdeckgo-starter/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2018-08-20)

### Features

* DeckDeckGo has now a sweet logo designed by Anita ([#1](https://github.com/fluster/deckdeckgo-starter/issues/1))
