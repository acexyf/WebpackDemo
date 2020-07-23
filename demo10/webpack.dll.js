const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    vue: ["vue", "vuex", "vue-router"],
    vendor: ["dayjs", "axios", "mint-ui"],
  },
  output: {
    path: path.resolve(__dirname, "public/vendor"),
    // 指定文件名
    filename: "[name].dll.js",
    library: "[name]_dll_lib",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "public", "vendor", "[name].manifest.json"),
      name: "[name]_dll_lib",
    }),
  ],
};
