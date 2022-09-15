const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
    
            },
  
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                }
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        historyApiFallback: true,

        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: './build/bundle.js',
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        
        proxy: {
            '/pages/**': {
                target: 'http://localhost:3000', 
            },
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}