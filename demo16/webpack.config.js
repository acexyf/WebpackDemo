const path = require("path");
const webpack = require("webpack");

//没有cache-loader
//第一次  1582ms
//第二次  1533ms

//有cache-loader
//第一次  1651ms
//第二次  542ms

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
          loader: 'cache-loader'
        },
        {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        },
      ],
    }, ],
  },
};