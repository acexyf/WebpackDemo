const path = require("path");
const webpack = require("webpack");
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
  plugins: [],
  optimization: {
    minimize: true,
  },
};
