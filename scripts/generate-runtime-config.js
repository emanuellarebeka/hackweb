const fs = require("fs");
const path = require("path");
const { readEnvFile, parseEnvFile } = require("./env-utils");

const rootDir = path.join(__dirname, "..");
const { contents } = readEnvFile(rootDir);
const env = parseEnvFile(contents);

const runtimeConfigPath = path.join(rootDir, "app", "runtime-config.js");
const runtimeConfig = {
  CONTRACT_ADDRESS: env.CONTRACT_ADDRESS || "",
  DEPLOY_NETWORK: env.DEPLOY_NETWORK || ""
};

const fileContents = `window.__OBRAPRIME27_CONFIG__ = ${JSON.stringify(runtimeConfig, null, 2)};\n`;
fs.writeFileSync(runtimeConfigPath, fileContents, "utf8");

console.log(`Runtime config generated at ${runtimeConfigPath}`);
