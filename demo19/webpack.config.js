const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
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
            loader: "./loader/style-loader.js",
            options: {
              cache: true,
            },
          },
          {
            loader: path.resolve(__dirname, "loader", "less-loader"),
            // options: {
            //   cache: true,
            //   key: "qweasd",
            // },
          },
        ],
      },
      {
        test: /\.js/,
        use: [
          "babel-loader",
          "banner-loader?text=banner111",
          "cleanlog-loader?limt=1024&name=[hash:8].[ext]&option=true",
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
  resolveLoader: {
    modules: [path.resolve(__dirname, "loader"), "node_modules"],
  },
};
