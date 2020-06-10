const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        //启用gzip 压缩
        compress: true,
        port: 9000,
        //提供内容的目录
        contentBase: path.join(__dirname, "public"),
        //默认是 localhost
        host: "0.0.0.0",
        //启用 webpack 的模块热替换特性
        hot: true,
        proxy: {
            
        },
        before(app){

        },
        after(app){
        }
    }
}