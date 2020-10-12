const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          {
            loader: path.resolve(__dirname, "loader", "style-loader"),
            options: {
              cache: true,
            },
          },
          {
            loader: path.resolve(__dirname, "loader", "less-loader"),
            options: {
              cache: true,
              key: "qweasd",
            },
          },
        ],
      },
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: "cleanlog-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  resolveLoader:{
    modules: [path.resolve(__dirname, 'loader'), 'node_modules']
  }
};
