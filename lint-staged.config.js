const path = require("path");

module.exports = {
  "projects/ngx-is-standalone/src/**/*.ts?(x)": (filenames) =>
    filenames.length > 0
      ? "ng lint  ngx-is-standalone"
      : `tslint --format verbose --project ./projects/ngx-is-standalone/tsconfig.spec.json --config ./projects/ngx-is-standalone/tslint.json ${filenames.join(
          " "
        )}`,
  "src/**/*.ts?(x)": (filenames) =>
    filenames.length > 10
      ? "ng lint ngx-is-standalone-demo"
      : `tslint --format verbose --project ./tsconfig.json --config ./tslint.json ${filenames.join(
          " "
        )}`,
};
