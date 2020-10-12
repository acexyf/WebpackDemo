const less = require("less");
const utils = require("loader-utils");

function loader(source) {
  const options = utils.getOptions(this);

  const callback = this.async();

  let css = "";
  console.log(options, "options");

  less.render(source, function (err, c) {
    // 这是less插件提供的解析方法
    let { css } = c;
    callback(null, css);
  });
  //   return css;
}
module.exports = loader;
