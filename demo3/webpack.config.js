

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
            title: 'title all',
            chunks: 'all',
            inject: true,
            hash: true,
            favicon: '',
            meta: {
                'viewport': 'width=device-width, initial-scale=1.0'
            },
            minify: {
                //清除script标签引号
                removeAttributeQuotes: true,
                //清除html中的注释
                removeComments: true,
                //清除html中的空格、换行符
                //html压缩成一行
                collapseWhitespace: false,
                //压缩html内的样式
                minifyCSS: true,
                //清除内容为空的元素（慎用）
                removeEmptyElements: false,
                //清除style和link标签的type属性
                removeStyleLinkTypeAttributes: false
            }
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