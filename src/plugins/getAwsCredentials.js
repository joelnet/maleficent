const { join } = require("path")
const fs = require("fs-extra");

const file = join(process.env.HOME, ".aws/credentials")

module.exports = () =>
  fs.existsSync(file)
    ? fs.readFileSync(file, 'utf8')
    : null;
