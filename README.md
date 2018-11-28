# DeckDeckGo - Starter Kit

Create a lightweight presentation using HTML and Web Components.

[DeckDeckGo] let you create without effort your slides and allows you to add some extra interactive features with the help of the [Ionic](https://ionicframework.com) components.

Moreover, [DeckDeckGo] bundles your presentation with services workers letting you publish it online as a Progressive Web App.

Cherry on the cake 🍒🎂 [DeckDeckGo] comes with its [Progressive Web App](https://deckdeckgo.app) that allows you to remote control your presentation 🚀

## Table of contents

- [Stater Kit](#stater-kit)
- [Getting Started](#getting-started)
- [Editing](#editing)
- [Theming](#theming)
- [Development](#development)
- [Build](#build)
	- [Before going online](#before-going-online)
- [Design and logo](#design-and-logo)
- [License](#license)

## Stater Kit

This project is the starter kit of [DeckDeckGo]. Visit the main project [repo](https://github.com/fluster/deckdeckgo) to learn more about how to use the tool and edit your presentation.

## Getting Started

To get started and **to create your presentation**, run the following command and follow the prompt:

```bash
npm init deckdeckgo
```

## Editing

To prepare your slides and content for your talk, edit `src/index.html`, add a `<deckgo-deck>` elements containing your [slides](https://github.com/fluster/deckdeckgo/doc/slides/slides.md).

## Theming

Theming a [DeckDeckGo] presentation is easy and quick.

You could use the [Ionic Color Generator](https://beta.ionicframework.com/docs/theming/color-generator) to select the colors of your choice, `copy` the generated CSS variables, `parse` them into `src/css/variables.css` and voilà you have defined the overall theme 😁

For more customization have a look the documentation of each [slides](https://github.com/fluster/deckdeckgo/doc/slides/slides.md).

## Development

[lite-server](https://github.com/johnpapa/lite-server) and [Webpack](https://webpack.js.org) are use to helps you during the development of your presentation.

In a terminal, start the following command to bundle your slides and to keep listening to modifications:

```bash
npm run start
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

## Design and logo

The [DeckDeckGo] logo was designed and offered by [Anita](hello@skinque.com) from [Skinque.com](http://skinque.com), a great online marketplace for tattoos 🤘

Reach her out if you are looking for a cool custom tattoo or a nice logo 😃

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

[DeckDeckGo]: https://deckdeckgo.com
