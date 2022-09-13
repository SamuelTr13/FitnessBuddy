const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './client/index.js', 

    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js',
    },

    mode: 'development',

    module: {
        rules: [{
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }],
    },//end of modules

    // plugins: [
    //     new HtmlWebpackPlugin({template: './index.html'})
    // ],//end of plugins

    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: './build/bundle.js',
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080', 
                router: () => 'http://localhost:3000',
            },
        }
    },//end of dev server

    resolve: {
        extensions: ['.js', '.jsx'],
    },
}