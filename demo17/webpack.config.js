const path = require("path");
const webpack = require("webpack");
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
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
    new HardSourceWebpackPlugin({
      configHash: function(webpackConfig) {
        // node-object-hash on npm can be used to build this.
        return new Date().getTime() + ''
      },
    })
  ]
};
