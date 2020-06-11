const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.less/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: 'css-loader'
                },{
                    loader: 'postcss-loader'
                },{
                    loader: 'less-loader'
                }]
            },{
                test: /\.js/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash:8].css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new OptimizeCSSAssetsPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/js/*.js',
                    to: path.resolve(__dirname, 'dist', 'js'),
                    flatten: true,
                }
            ]
        }),
    ]
}