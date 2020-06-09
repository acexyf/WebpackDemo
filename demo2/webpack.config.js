module.exports = function(env,args){
    console.log(env, 'env')
    return {
        mode: 'development',
        entry: ['./src/index.js', './src/header.js']
    }
}


