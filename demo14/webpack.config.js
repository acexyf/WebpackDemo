const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  entry: {
    home: "./src/home.js",
    list: "./src/list.js",
    detail: "./src/detail.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'home.html',
        chunks: ['home','common']
    }),
    new CleanWebpackPlugin(),
  ],
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      cacheGroups: {
        common: {
          name: "common",
          chunks: "initial",
          priority: 1,
          minChunks: 1,
        },
      },
    },
  },
};
