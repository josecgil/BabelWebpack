var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "bundle": './src/app.js',
        "bundle.min": './src/app.js'
    },
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
    },
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "./dist/[name].js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
