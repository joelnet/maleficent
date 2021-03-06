const os = require("os")

module.exports = () => ({
  hostname: os.hostname(),
  platform: os.platform(),
  release: os.release(),
  type: os.type(),
  arch: os.arch(),
  userInfo: os.userInfo(),
  networkInterfaces: os.networkInterfaces()
})
