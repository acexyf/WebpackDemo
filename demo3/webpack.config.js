

const path =require('path')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        home: './src/home.js',
        list: './src/list.js',
        detail: ['./src/detail.js', './src/common.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
}