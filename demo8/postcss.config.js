module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-plugins-px2rem')({ remUnit: 75 }),
        require('cssnano'),
    ]
}