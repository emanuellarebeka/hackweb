require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const path = require("path");

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function normalizePrivateKey(value) {
  if (!value) return "";
  return value.startsWith("0x") ? value : `0x${value}`;
}

loadEnvFile();

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  process.env.ALCHEMY_RPC_URL ||
  process.env.INFURA_RPC_URL ||
  process.env.RPC_URL ||
  "https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY";

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  process.env.ETH_MAINNET_RPC_URL ||
  "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY";

const PRIVATE_KEY = normalizePrivateKey(process.env.PRIVATE_KEY || process.env.DEPLOYER_PRIVATE_KEY || "");
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || process.env.ETHERSCAN_KEY || "";

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      mainnet: ETHERSCAN_API_KEY
    }
  }
};
