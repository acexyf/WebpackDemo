class MyPlugin {
  constructor(options) {
    console.log("Plugin被创建了");
  }
  apply(compiler) {
    // compiler.plugin("compilation", (compilation) => {
    //   console.log("compilation");
    // });
    // compiler.hooks.done.tap("MyPlugin", (stats) => {
    //   console.log("done");
    // });

    // compiler.plugin('emit', (compilation, callback)=>{
    //   console.log('生成资源到 output 目录之前。')
    //   callback()
    // })
    // compiler.hooks.emit.tapAsync('MyPlugin', function (name, cb) {
    //   console.log('生成资源到 output 目录之前。')
    //   cb()
    // })

    // compiler.hooks.done.tap('MyPlugin', function (compilation) {
    //   console.log('done')
    // })
  }
}
module.exports = MyPlugin;
