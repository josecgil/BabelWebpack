var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: { path: __dirname, filename: './dist/bundle.js'},
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};