var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var extractSass = new ExtractTextPlugin('styles.css');

var copyImg =  new CopyWebpackPlugin([
    {from: APP_DIR + '/img', to: BUILD_DIR + '/img' }
]);


var config = {
    entry: APP_DIR + '/app/main.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
              test: /\.(png|jpg|gif)$/,
              loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
            }
        ]
    },
    plugins: [
        copyImg,
        extractSass
    ]
};

module.exports = config;
