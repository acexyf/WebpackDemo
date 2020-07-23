const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
module.exports = {
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
        use: [
          {
            loader: "babel-loader",
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html', //打包后的文件名
        minify: {
            removeAttributeQuotes: false,
            collapseWhitespace: false, 
        },
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: 'public/vendor/*.js',
                to: path.resolve(__dirname, 'dist', 'vendor'),
                flatten: true,
            },
            {
                from: 'public/vendor/*.json',
                to: path.resolve(__dirname, 'dist', 'vendor'),
                flatten: true,
            }
        ]
    }),
    new webpack.DllReferencePlugin({
        context: path.join(__dirname),
        manifest: require('./public/vendor/vendor.manifest.json')
    }),
    new webpack.DllReferencePlugin({
        context: path.join(__dirname),
        manifest: require('./public/vendor/vue.manifest.json')
    }),
  ]
};
