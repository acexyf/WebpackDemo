const path = require("path");
const webpack = require("webpack");

//添加noParse       624ms
//没有添加noParse   835ms

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    noParse: /jquery|lodash|jquery-ui/,
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
};
