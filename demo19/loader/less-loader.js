let less = require("less")
function loader(source) {
  let css = "";
  console.log(source,'source')
  less.render(source, function(err, c) {  // 这是less插件提供的解析方法
    css = c.css;
  })
  // css = css.replace(/\n/g, "\\n");
  return css;
}
module.exports = loader;