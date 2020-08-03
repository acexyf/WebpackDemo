const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
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
      chunks: ["home", "base", "common"],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
      }, ],
    }, ],
  },
  resolve: {
    alias: {
      'axios$': 'axios/dist/axios.min.js'
    }
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       base: {
  //         name: "base",
  //         test: /[\\/]node_modules[\\/]/,
  //         // test: (module) => {
  //         //   return /axios|dayjs/.test(module.context);
  //         // },
  //         chunks: "all",
  //         priority: 10,
  //         minChunks: 2,
  //       },
  //       common: {
  //         chunks: "all",
  //         test: /[\\/]src[\\/]/,
  //         name: "common",
  //         priority: 2,
  //         minChunks: 2,
  //       },
  //     },
  //   },
  // },

  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/](vue|vuex|vue-router)/,
          priority: 10,
          name: 'vue'
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 9,
          name: 'vendors'
        },
        common: {
          test: /[\\/]src[\\/]/,
          priority: 5,
          name: 'common'
        }
      }
    }
  }

};