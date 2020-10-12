const less = require("less");
const { getOptions, stringifyRequest, parseQuery } = require("loader-utils");
const { validate } = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    option: {
      type: "boolean",
    },
  },
  additionalProperties: false,
};

function loader(source) {
  const options = getOptions(this);

  const callback = this.async();

  const string_result = stringifyRequest(this, "./test.js");
  const configuration = { name: "loader" };

  console.log(
    parseQuery("?name=kev&age=14"),
    "string_result",
    options,
  );

  let css = "";

  less.render(source, function (err, c) {
    // 这是less插件提供的解析方法
    let { css } = c;
    callback(null, css);
  });
  //   return css;
}
module.exports = loader;
