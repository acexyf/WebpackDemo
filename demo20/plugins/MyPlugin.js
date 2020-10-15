class MyPlugin {
  constructor(options) {
    console.log("constructor", options);
  }
  apply(compiler) {
    compiler.plugin("compilation", (compilation) => {
      console.log("compilation");
    });
    compiler.hooks.done.tap("MyPlugin", (stats) => {
      console.log("done");
    });
  }
}
module.exports = MyPlugin;
