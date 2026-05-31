const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "app", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "app", "app.js"), "utf8");

const requiredIds = [
  "connectWallet",
  "seedDemo",
  "clearDemo",
  "ledgerList",
  "languageSelect",
  "toastRegion",
  "globalStatus",
  "verifyProof",
  "refreshMethodology"
];

const requiredActions = [
  "data-validate",
  "data-certify",
  "data-reject",
  "data-reactivate",
  "data-copy",
  "data-proof",
  "data-path"
];

const requiredFunctions = [
  "connectWallet",
  "loadDemoRecords",
  "validateDemo",
  "rejectDemo",
  "reactivateDemo",
  "copyHash",
  "copyProof",
  "toggleAuditPath",
  "verifyProof",
  "showToast"
];

const failures = [];

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) failures.push(`Missing HTML id: ${id}`);
}

for (const action of requiredActions) {
  if (!js.includes(action)) failures.push(`Missing rendered action: ${action}`);
}

for (const fn of requiredFunctions) {
  if (!js.includes(`function ${fn}`) && !js.includes(`async function ${fn}`)) failures.push(`Missing JS function: ${fn}`);
}

if (!html.includes("vendor/ethers.umd.min.js")) failures.push("Ethers must be loaded locally from app/vendor.");
if (!html.includes("Content-Security-Policy")) failures.push("Missing Content Security Policy.");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Frontend smoke checks passed.");
