const fs = require("fs");
const path = require("path");
const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");

module.exports = function (source) {
  this.cacheable && this.cacheable(true);


  const options = getOptions(this);
  const schema = {
    type: "object",
    properties: {
      text: {
        type: "string",
      },
      filename: {
        type: "string",
      },
    },
    additionalProperties: false,
  };
  validate(schema, options, {
    name: "banner-loader",
    baseDataPath: "options",
  });

  if (options.filename) {
    let txt = "";
    if (options.filename == "banner1") {
      this.addDependency(path.resolve(__dirname, "./banner1.txt"));
      txt = fs.readFileSync(path.resolve(__dirname, "./banner1.txt"));
    } else if (options.filename == "banner2") {
      this.addDependency(path.resolve(__dirname, "./banner1.txt"));
      txt = fs.readFileSync(path.resolve(__dirname, "./banner1.txt"));
    }
    return source + txt;
  } else if (options.text) {
    return source + `/* ${options.text} */`;
  } else {
    return source;
  }
};
