const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "none",
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
      template: "./public/index.html",
      filename: "home.html",
      chunks: ["home", "common"],
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
  resolve:{
    alias: {
        'axios$': 'axios/dist/axios.min.js'
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      cacheGroups: {
        base: {
          name: "base",
        //   test: /[\\/]node_modules[\\/]/,
          test: (module) => {
            return /axios|dayjs/.test(module.context);
          },
          chunks: "all",
          priority: 10,
          minChunks: 2,
        },
        common: {
          chunks: "all",
          name: "common",
          priority: 2,
          minChunks: 2,
        },
      },
    },
  },
};
