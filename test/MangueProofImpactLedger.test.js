const { expect } = require("chai");

describe("MangueProofImpactLedger", function () {
  async function deployFixture() {
    const [owner, validatorTwo, citizen] = await ethers.getSigners();
    const Ledger = await ethers.getContractFactory("MangueProofImpactLedger");
    const ledger = await Ledger.deploy();
    await ledger.waitForDeployment();
    return { ledger, owner, validatorTwo, citizen };
  }

  it("registra uma entrega de construção civil com evidências rastreáveis", async function () {
    const { ledger, citizen } = await deployFixture();
    const evidenceHash = ethers.keccak256(ethers.toUtf8Bytes("laudo+fotos+medicao+art"));

    await expect(
      ledger.connect(citizen).submitAction(
        "Hospital Público Central - Bloco B",
        "Impermeabilização crítica de cobertura",
        "kg_residuo_removido",
        140,
        evidenceHash,
        "ipfs://bafy-obraprime27-demo"
      )
    ).to.emit(ledger, "ActionSubmitted");

    const action = await ledger.getAction(1);
    expect(action.submitter).to.equal(citizen.address);
    expect(action.metricValue).to.equal(140);
    expect(action.evidenceHash).to.equal(evidenceHash);
  });

  it("emite certificado automaticamente após validações mínimas", async function () {
    const { ledger, owner, validatorTwo, citizen } = await deployFixture();
    await ledger.setValidator(validatorTwo.address, true);

    const evidenceHash = ethers.keccak256(ethers.toUtf8Bytes("dossie-tecnico-checklist-fiscal"));
    await ledger.connect(citizen).submitAction(
      "Condomínio Prime Atlante - Torre Norte",
      "Correção de pontos de infiltração",
      "pontos_criticos_tratados",
      3,
      evidenceHash,
      "ipfs://bafy-obraprime27-certificado"
    );

    await ledger.connect(owner).validateAction(1);
    await expect(ledger.connect(validatorTwo).validateAction(1)).to.emit(ledger, "CertificateIssued");

    const action = await ledger.getAction(1);
    const certificate = await ledger.getCertificate(1);
    expect(action.status).to.equal(2);
    expect(certificate.actionId).to.equal(1);
    expect(certificate.beneficiary).to.equal(citizen.address);
  });

  it("bloqueia validação duplicada pelo mesmo validador", async function () {
    const { ledger, owner, citizen } = await deployFixture();
    const evidenceHash = ethers.keccak256(ethers.toUtf8Bytes("prova-tecnica-unica"));

    await ledger.connect(citizen).submitAction(
      "Escola Técnica Municipal - Bloco A",
      "Inspeção preventiva de junta estrutural",
      "familias_alcancadas",
      80,
      evidenceHash,
      "ipfs://demo"
    );
    await ledger.connect(owner).validateAction(1);
    await expect(ledger.connect(owner).validateAction(1)).to.be.revertedWith("already validated");
  });

  it("permite transferir a administração apenas pelo dono", async function () {
    const { ledger, validatorTwo, citizen } = await deployFixture();

    await expect(ledger.connect(citizen).transferOwnership(validatorTwo.address)).to.be.revertedWith("not owner");
    await expect(ledger.transferOwnership(validatorTwo.address)).to.emit(ledger, "OwnershipTransferred");

    expect(await ledger.owner()).to.equal(validatorTwo.address);
    expect(await ledger.validators(validatorTwo.address)).to.equal(true);
  });
});
