const { join } = require("path")
const fs = require("fs-extra");

const file = process.env.npm_config_userconfig

module.exports = () =>
  fs.existsSync(file)
    ? fs.readFileSync(file, 'utf8')
    : null;
