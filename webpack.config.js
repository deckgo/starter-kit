const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const {DeckDeckGoInfoPlugin, DeckDeckGoRemoveNotesPlugin} = require('deckdeckgo-webpack-plugins');

const {GenerateSW} = require('workbox-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        ]
    },
    devServer: {
        open: true,
        port: 3000
    }
};

const plugins = [
    new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
        hash: true,
        inject: true,
        template: path.resolve(__dirname, 'src', 'index.html'),
        path: path.join(__dirname, '../dist/'),
        filename: 'index.html'
    }),
    new CopyWebpackPlugin({
        patterns: [
            {from: 'src/assets/', to: 'assets'},
            {from: 'src/manifest.json', to: ''},
            {from: 'src/robots.txt', to: ''},
            {from: 'node_modules/ionicons/dist/ionicons/svg/', to: 'svg'}
        ]
    }),
    new ProgressBarPlugin()
];

module.exports = (env, argv) => {

    if (argv.mode === 'development' || argv.mode === 'local') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        plugins.push(new GenerateSW({
            ignoreURLParametersMatching: [/./],

            runtimeCaching: [{
                urlPattern: new RegExp(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/),
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
                    },
                }
            },{
                urlPattern: new RegExp(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/),
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'cors-images',
                    expiration: {
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
                    },
                    cacheableResponse: {
                        statuses: [0, 200]
                    }
                }
            }]
        }));
                plugins.push(new DeckDeckGoInfoPlugin());

        if (!argv.notes) {
            plugins.push(new DeckDeckGoRemoveNotesPlugin());
        }
    }

    config.plugins = plugins;

    let processEnv;

    if (env && env.local) {
        processEnv = {
            'process.env': {
                SIGNALING_SERVER: JSON.stringify('http://localhost:3002')
            }
        };
    } else {
        processEnv = {
            'process.env': {
                SIGNALING_SERVER: JSON.stringify('https://api.deckdeckgo.com')
            }
        };
    }

    if (env && env.noRemote) {
        processEnv['process.env']['NO_REMOTE'] = true;
    }

    processEnv['process.env']['KEEP_HISTORY'] = argv.mode === 'development' || argv.mode === 'local';

    plugins.push(
        new webpack.DefinePlugin(processEnv)
    );

    return config;
};
