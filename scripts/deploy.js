const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const hre = require("hardhat");
const { readEnvFile, upsertEnvValue } = require("./env-utils");

function updateEnvAfterDeploy(address, networkName) {
  const rootDir = path.join(__dirname, "..");
  const { envPath, contents } = readEnvFile(rootDir);

  let nextContents = contents;
  nextContents = upsertEnvValue(nextContents, "CONTRACT_ADDRESS", address);
  nextContents = upsertEnvValue(nextContents, "DEPLOY_NETWORK", networkName);

  fs.writeFileSync(envPath, nextContents, "utf8");

  const runtimeConfig = spawnSync(process.execPath, [path.join(__dirname, "generate-runtime-config.js")], {
    cwd: rootDir,
    stdio: "inherit"
  });

  if (runtimeConfig.status !== 0) {
    throw new Error("Falha ao gerar runtime-config.js a partir do .env.");
  }
}

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Balance: ${hre.ethers.formatEther(balance)} ETH`);

  if (hre.network.name !== "hardhat" && balance === 0n) {
    throw new Error("A carteira configurada esta sem saldo para deploy.");
  }

  const Ledger = await hre.ethers.getContractFactory("MangueProofImpactLedger");
  const ledger = await Ledger.deploy();
  await ledger.waitForDeployment();

  const address = await ledger.getAddress();
  updateEnvAfterDeploy(address, hre.network.name);

  console.log(`MangueProofImpactLedger deployed to: ${address}`);
  console.log(`CONTRACT_ADDRESS atualizado automaticamente no .env para a rede ${hre.network.name}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
