module.exports = function (source) {
  let result = source.replace(/console\.log\(.*\);?\n?/g, "");
  console.log(result, "result");
  return result;
};
