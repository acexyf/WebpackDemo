
function loader(source) {
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)}; // 将css文件的内容字符串化
    document.head.appendChild(style)
  `;
  return style;
}
module.exports = loader;