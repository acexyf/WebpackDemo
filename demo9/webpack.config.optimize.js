const path = require("path");
//优化后的config
//Time: 3155ms 第一次
//Time: 2037ms 第二次
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
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    mainFields: ['main'],
    extensions: [".ts", ".js"],
    alias: {
      vue: path.resolve(
        __dirname,
        "./node_modules/vue/dist/vue.runtime.common.js"
      ),
    },
    //解析模块时应该搜索的目录
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ],
  },
};
