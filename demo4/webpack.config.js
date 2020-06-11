
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            }]
        },{
            test: /\.scss/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            },{
                loader: 'sass-loader'
            }]
        },{
            test: /\.less/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            },{
                loader: 'less-loader'
            }]
        },{
            test: /\.js/,
            use: {
                loader: 'babel-loader'
            }
        },{
            test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    //10k
                    limit: 10240,
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'imgs/'
                }
            }
        }]
    }
}