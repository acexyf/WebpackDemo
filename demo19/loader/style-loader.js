function loader(source, map) {
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)}; // 将css文件的内容字符串化
    document.head.appendChild(style)
  `;
//   console.log(map, "mapssss");
  return style;
}
module.exports = loader;
