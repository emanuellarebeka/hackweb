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
const existingContents = fs.existsSync(runtimeConfigPath)
  ? fs.readFileSync(runtimeConfigPath, "utf8")
  : "";

if (existingContents === fileContents) {
  console.log(`Runtime config already up to date at ${runtimeConfigPath}`);
  process.exit(0);
}

try {
  fs.writeFileSync(runtimeConfigPath, fileContents, "utf8");
  console.log(`Runtime config generated at ${runtimeConfigPath}`);
} catch (error) {
  if (error.code === "EPERM" && existingContents) {
    console.warn(`Runtime config locked, keeping existing file at ${runtimeConfigPath}`);
    process.exit(0);
  }
  throw error;
}
