const path = require("path");
const webpack = require("webpack");

//添加noParse       2609ms
//没有添加noParse   2933ms

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    // noParse: /jquery|lodash|jquery-ui/,
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
