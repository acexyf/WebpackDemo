const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  entry: "./src/index.js",
  devServer: {
    port: 9000,
    host: "0.0.0.0",
    hot: true,
    compress: true,
    open: false,
    contentBase: [path.join(__dirname, "public")],
  },
//   externals: {
//     jquery: "jQuery",
//   },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
    }),
  ]
};
