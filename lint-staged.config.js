const path = require("path");

module.exports = {
  "projects/ngx-is-standalone/src/**/*.ts?(x)": (filenames) =>
    filenames.length > 0
      ? "ng lint  ngx-is-standalone"
      : `eslint --format stylish ${filenames.join(" ")}`,
  "src/**/*.ts?(x)": (filenames) =>
    filenames.length > 10
      ? "ng lint ngx-is-standalone-demo"
      : `eslint --format stylish ${filenames.join(" ")}`,
};
