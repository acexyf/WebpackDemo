const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.less/,
      use: [{
          loader: path.resolve(__dirname, "loader", "style-loader")
        },
        {
          loader: path.resolve(__dirname, "loader", "less-loader")
        }
      ],
    }, {
      test: /\.js/,
      use: [{
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      }]

    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    })
  ]
}