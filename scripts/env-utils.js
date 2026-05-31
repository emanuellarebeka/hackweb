const fs = require("fs");
const path = require("path");

function getEnvPath(rootDir) {
  return path.join(rootDir, ".env");
}

function parseEnvFile(contents) {
  const env = {};
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    env[key] = rawValue.replace(/^['"]|['"]$/g, "");
  }
  return env;
}

function readEnvFile(rootDir) {
  const envPath = getEnvPath(rootDir);
  if (!fs.existsSync(envPath)) {
    return { envPath, contents: "" };
  }
  return { envPath, contents: fs.readFileSync(envPath, "utf8") };
}

function upsertEnvValue(contents, key, value) {
  const line = `${key}=${value}`;
  if (!contents.trim()) return `${line}\n`;

  const pattern = new RegExp(`^${key}=.*$`, "m");
  if (pattern.test(contents)) {
    return contents.replace(pattern, line);
  }

  return contents.endsWith("\n") ? `${contents}${line}\n` : `${contents}\n${line}\n`;
}

module.exports = {
  getEnvPath,
  parseEnvFile,
  readEnvFile,
  upsertEnvValue
};
