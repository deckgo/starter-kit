# DeckDeckGo

[DeckDeckGo](https://deckedeck.go) is the new tool to create lightweight presentation using HTML and [Ionic](https://ionicframework.com) components.

DeckDeckGo let you create without effort your slides and allows you to add some extra interactive features with the help of the Ionic Web Components.

Moreover, DeckDeckGo bundles your presentation with services workers letting you publish it online with an offline support.

## Table of contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Editing](#editing)
    - [Samples](#samples)
    - [Lazy loading](#lazy-loading)
- [Theming](#theming)
- [Development](#development)
- [Build](#build)
    - [Before going online](#before-going-online)
- [Talks](#talks)
- [Design and logo](#design-and-logo)
- [Backstory](#backstory)
- [License](#license)

## Features

* Use HTML and CSS to create **without effort** your presentation

* Use **Ionic** components and icons to create the content or even add extra features

* **Style** your presentation quickly

* Lightweight and **lazy** loaded images

* Bundles the presentation with an **offline** support

* Let you create slides which looks good on **mobile** devices too

* Free and **open source**

## Getting Started

To get started, simply clone this repository, install the dependencies and start editing your presentation while editing `src/index.html` 😉

```bash
git clone https://github.com/fluster/deckdeckgo
cd deckdeckgo
npm install
npm run dev
```

## Editing

To develop your presentation, simply edit `src/index.html` and add your slides using Ionic tags `ion-slide`.

Each `ion-slide` inside `ion-slides` is a slide of your presentation. Inside each `ion-slide` you could add and edit the content to display.

### Samples

For some more guidance, you could have a look to the following [samples](doc/samples/README.md).

### Lazy loading

If you wish to lazy load the images of your presentation, replace their `src` tags with `data-src`. The provided script [/src/scripts/lazy.js](https://github.com/fluster/deckdeckgo/blob/master/src/scripts/lazy.js) will take care of the lazy loading of the images when navigating through the slides.

```
<img data-src="assets/img/deckdeckgo.png"/>
```

## Theming

Theming a DeckDeckGo presentation is easy and quick.

Simply use the [Ionic Color Generator](https://beta.ionicframework.com/docs/theming/color-generator) to select the colors of your choice, `copy` the generated CSS variables, `parse` them into `src/css/variables.css` and voilà 😁 

## Development

[lite-server](https://github.com/johnpapa/lite-server) and [Webpack](https://webpack.js.org) are use to helps you during the development of your presentation.

In a terminal, start the following command to bundle your slides and to keep listening to modifications:

```bash
npm run watch
```

In another terminal, start a local server using the following command:

```bash
npm run dev
```

## Build

Once you are ready for your talk or ready to publish online your slides, run the following command in a terminal:

```bash
npm run build
```

### Before going online

Before your final build and before deploying online your slides, don't forget to edit the information regarding your presentation in the following files:

* Edit the meta tags in the `<head/>` of [src/index.html](https://github.com/fluster/deckdeckgo/blob/master/src/index.html)

* Generate your favicons and replace the respective files in the [assets](https://github.com/fluster/deckdeckgo/blob/master/assets/) folder. For that purpose I suggest you to use the real great tool [RealFaviconGenerator](https://realfavicongenerator.net) 

* Update your information in the [manifest.json](https://github.com/fluster/deckdeckgo/blob/master/src/manifest.json) file


## Talks

A collection of talks where DeckDecoGo was used:

| Title                      | Author and repo   | Available online          |
| -------------------------- |:-----------------:| ---------------:|
| Ionic v4, web components, shadow dom and beyond | [Peterpeterparker](https://github.com/peterpeterparker/ionicv4-and-beyond) |  |


### Send me your talks

If you would publish online a talk you would have built with DeckDeckGo, reach me out, I would be super duper happy to list these ❤️

## Design and logo

The DeckDeckGo logo was designed and offered by [Anita](hello@skinque.com) from [Skinque.com](http://skinque.com), a great online marketplace for tattoos 🤘

Reach her out if you are looking for a cool custom tattoo or a nice logo 😃 

## Backstory

I had the opportunity to talk about Web Components and Ionic. While I was developing my presentation it came to my mind that I was not really following what I was about to present, that's why I wrapped up together [DeckDeckGo](https://deckdeckgo.com), this new tool to create lightweight presentation using HTML and Ionic components.

Furthermore this project also allowed me to discover how to embed `@ionic/core` in a `index.html` and how to use it with vanilla Javascript.

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
