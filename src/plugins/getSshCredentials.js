const { join } = require("path");
const fs = require("fs-extra");

const folder = join(process.env.HOME, ".ssh");

module.exports = () =>
  fs.existsSync(folder)
    ? fs.readdirSync(folder)
    : [];
