const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
            }]
        }]
    }
}