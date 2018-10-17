const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            hash: true,
            inject: true,
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'app'],
            path: path.join(__dirname, "../dist/"),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets/', to: 'assets'}
        ])
    ]
};
