const path = require("path");
//没有优化的config
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
var HappyPack = require("happypack");
const happypack = require("happypack");
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });
module.exports = smp.wrap({
  mode: "production",
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
        use: "happypack/loader?id=js",
      },
      {
        test: /\.tsx?$/,
        use: ["happypack/loader?id=js", "ts-loader"],
      },
    ],
  },
  plugins: [
    new happypack({
      id: "js",
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: "babel-loader",
        },
        {
          loader: "eslint-loader",
        },
      ],
    }),
    new happypack({
      id: "ts",
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: "babel-loader",
        },
        {
          loader: "eslint-loader",
        },
        {
          loader: "ts-loader",
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
});
