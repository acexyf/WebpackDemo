const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
  devtool: "cheap-source-map",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  optimization: {
    usedExports: true,
    sideEffects: true,
    // minimize: true,
    // minimizer: [
    //   new TerserJSPlugin({
    //     cache: true,
    //     parallel: true, 
    //     sourceMap: false,
    //   }),
    // ],
  },
};
