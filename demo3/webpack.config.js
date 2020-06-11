

const path =require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        home: './src/home.js',
        list: './src/list.js',
        detail: ['./src/detail.js', './src/common.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'all.html',
            title: 'all',
            chunks: 'all'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'list.html',
            chunks: ['list']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'detail.html',
            chunks: ['detail']
        }),
    ]
}