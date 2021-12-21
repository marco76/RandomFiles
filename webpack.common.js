const webpack = require('webpack');

const path = require('path');

const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'polyfills': './src/polyfills.ts',
        'vendor': ['./src/vendors.ts']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }, {
                test: /\.css$/,
                use: [
                "style-loader", "css-loader"
                ]
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new ngAnnotatePlugin({add: true}),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery' : 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'src/i18n/', to: 'assets/i18n'}
        ]),
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            "node_modules"
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};