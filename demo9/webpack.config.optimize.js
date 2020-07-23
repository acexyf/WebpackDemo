const path = require("path");
//优化后的config
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
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
            }
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js",".ts", ".json"]
  }
};
