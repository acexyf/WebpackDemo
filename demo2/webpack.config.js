module.exports = function(env,args){
    console.log(env, 'env')
    console.log(args, 'args')
    return {
        entry: ['./src/index.js', './src/header.js']
    }
}


