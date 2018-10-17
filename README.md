# DeckDeckGo

[DeckDeckGo](https://deckedeck.go) is the new tool to create lightweight presentation using HTML and [Ionic](https://ionicframework.com) components.

DeckDeckGo let you create without effort your slides and allows you to add some extra interactive features with the help of the Ionic Web Components.

Moreover, DeckDeckGo bundles your presentation with services workers letting you publish it online with an offline support.

## Features

* Use HTML and CSS to create **without effort** your presentation

* Use **Ionic** components to create the content or even add extra features

* **Style** your presentation quickly

* Lightweight and **lazy** loaded images

* Bundles the presentation with an **offline** support

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
 
### Note

Each `ion-slide` inside `ion-slides` is a slide of your presentation. Inside each `ion-slide` you could add and edit the content to display.

### Samples

1. A slide with only a title:

```
<ion-slide>
    <ion-card no-shadow>
        <h1>Hello, this is my awesome title 🚀</h1>
    </ion-card>
</ion-slide>
```

2. A slide with a list:

```
<ion-slide>
    <ion-card no-shadow>
        <h1>Here I display a list</h1>

        <ion-list lines="none" padding-top>
            <ion-item>
                <ion-label text-wrap><strong>Point 1</strong>: something really cool</ion-label>
                <ion-checkbox slot="start" checked></ion-checkbox>
            </ion-item>

            <ion-item>
                <ion-label text-wrap>or something <strong>awesome</strong></ion-label>
                <ion-checkbox slot="start" checked></ion-checkbox>
            </ion-item>
        </ion-list>
    </ion-card>
</ion-slide>
```

3. A slide with two columns:

```
<ion-slide>
    <ion-card no-shadow>
        <h1>Two columns</h1>

        <ion-grid padding-top>
            <ion-row align-items-center justify-content-center>
                <ion-col size="6">
                    This is the column left 
                </ion-col>
                
                <ion-col size="6">
                    This is the column right 
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-card>
</ion-slide>
```
            
4. A slide where you display code:
            
```
<ion-slide>
        <ion-card no-shadow>
            <h1>Here we display code</h1>

            <code padding margin text-left>&lt;ion-button&gt;
    &lt;ion-label&gt;Hello world&lt;/ion-label&gt;
    &lt;ion-icon name="happy" slot="start"&gt;&lt;/ion-icon&gt;
&lt;/ion-button&gt;</code>
        </ion-card>
    </ion-slide>
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

## Talks

A collection of talks where DeckDecoGo was used as support:

| Title                      | Author and repo   | Available online          |
| -------------------------- |:-----------------:| ---------------:|
| Ionic v4, web components, shadow dom and beyond | [Peterpeterparker](https://github.com/peterpeterparker/ionicv4-and-beyond) |  |

## Backstory

I had the opportunity to talk about Web Components and Ionic. While I was developing my presentation it came to my mind that I was not really following what I was about to present, that's why I wrapped up together [DeckDeckGo](https://deckdeckgo.com), this new tool to create lightweight presentation using HTML and Ionic components.

Furthermore this project also allowed me to discover how to embed `@ionic/core` in a `index.html` and how to use it with vanilla Javascript.

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
