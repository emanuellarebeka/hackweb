const CONTRACT_ADDRESS = window.__OBRAPRIME27_CONFIG__?.CONTRACT_ADDRESS || "";
const CONTRACT_ABI = [
  "function submitAction(string territory,string actionType,string metricUnit,uint256 metricValue,bytes32 evidenceHash,string evidenceURI) returns (uint256)",
  "function validateAction(uint256 actionId)",
  "event ActionSubmitted(uint256 indexed actionId,address indexed submitter,bytes32 evidenceHash,string territory)",
  "event ActionValidated(uint256 indexed actionId,address indexed validator,uint256 validationCount)",
  "event CertificateIssued(uint256 indexed certificateId,uint256 indexed actionId,address indexed beneficiary,bytes32 certificateHash)"
];

const statusNames = ["Enviado", "Validado", "Certificado", "Rejeitado"];
const ONCHAIN_METRIC_DECIMALS = 3;

function normalizeMetricValueInput(value) {
  const normalized = String(value ?? "").trim().replace(",", ".");
  if (!/^\d+(?:\.\d+)?$/.test(normalized)) {
    throw new Error("Informe um valor numerico valido.");
  }
  const [, fraction = ""] = normalized.split(".");
  if (fraction.length > ONCHAIN_METRIC_DECIMALS) {
    throw new Error("Use no maximo 3 casas decimais.");
  }
  return normalized;
}

function toOnchainMetricValue(value) {
  const normalized = normalizeMetricValueInput(value);
  const [whole, fraction = ""] = normalized.split(".");
  const paddedFraction = (fraction + "0".repeat(ONCHAIN_METRIC_DECIMALS)).slice(0, ONCHAIN_METRIC_DECIMALS);
  return BigInt(`${whole}${paddedFraction}`);
}

function getReadableErrorMessage(error) {
  const message = String(error?.shortMessage || error?.reason || error?.message || "Erro ao registrar.");
  if (message.includes("ACTION_REJECTED") || message.includes("user rejected")) return "Transacao cancelada na carteira.";
  if (message.includes("insufficient funds")) return "Carteira sem saldo para enviar a transacao.";
  if (message.includes("network")) return "Rede indisponivel para envio no momento.";
  return message;
}

const TRANSLATIONS = {
  pt: {
    tagline: "",
    languageLabel: "Idioma",
    connectWallet: "Conectar carteira",
    simpleMode: "Modo simples",
    technicalMode: "Modo técnico",
    navOverview: "Visão geral",
    navRegister: "Registrar",
    navAudit: "Auditar",
    navIntelligence: "Inteligência",
    navVerify: "Verificar",
    navMethod: "Método",
    startRegister: "Registrar nova operação",
    viewHistory: "Ver histórico",
    goAudit: "Ir para auditoria",
    eyebrow: "Construção civil auditável para setor público e privado",
    heroTitle: "Converta execução de obra em prova técnica verificável.",
    heroText: "Uma camada exclusiva para registrar impermeabilização crítica, manutenção estrutural preventiva e conformidade de obras com evidência auditável e validação independente.",
    auditableImpact: "Execução auditável",
    registeredActions: "entregas registradas nesta demonstração",
    moduleContract: "Contrato crítico",
    moduleContractText: "Regras sob medida para hospitais, condomínios, escolas, prefeituras e ativos sensíveis.",
    moduleEvidence: "Dossiê técnico",
    moduleEvidenceText: "Hash on-chain, laudos off-chain e trilha limpa para auditoria objetiva.",
    moduleCertificate: "Selo de conformidade",
    moduleCertificateText: "Certificação emitida quando a governança mínima da entrega é cumprida.",
    methodTitle: "Método de confiança predial",
    methodText: "O fluxo combina governança de manutenção, prova técnica e certificação auditável: registrar, medir, validar, certificar e auditar.",
    newRecord: "Novo registro",
    newRecordHelp: "Preencha a entrega executada e anexe um dossiê técnico curto.",
    territoryLabel: "Ativo ou contrato",
    territoryHelp: "Exemplo: hospital, condomínio, escola, torre, secretaria ou contrato de manutenção.",
    actionTypeLabel: "Tipo de serviço",
    metricLabel: "Métrica",
    valueLabel: "Valor",
    evidenceLinkLabel: "Link da evidência",
    evidenceLinkHelp: "Pode ser IPFS, sala segura, repositório documental ou link de auditoria.",
    evidenceSummaryLabel: "Resumo da evidência",
    submitImpact: "Registrar entrega",
    loadExample: "Carregar base de obra",
    auditableHistory: "Histórico auditável",
    auditableHistoryHelp: "Valide registros e acompanhe certificados emitidos.",
    clear: "Limpar",
    searchLabel: "Buscar",
    statusLabel: "Status",
    wasteRemoved: "m² tratados",
    certificatesIssued: "certificados emitidos",
    minimumValidations: "validações mínimas por certificado",
    impactIntelligence: "Inteligência patrimonial",
    impactIntelligenceHelp: "Resumo estratégico para governança, pagamento, garantia e compliance.",
    impactScore: "Índice de conformidade",
    auditRate: "Taxa certificada",
    socialValue: "Valor protegido estimado",
    auditableRanking: "Ranking de ativos auditável",
    auditableRankingHelp: "Ativos e contratos com maior execução validada.",
    proofVerifierTitle: "Verificador de autenticidade",
    proofVerifierText: "Cole um comprovante copiado do histórico para verificar se ele mantém o mesmo hash de evidência.",
    proofLabel: "Comprovante auditável",
    verifyProof: "Verificar comprovante",
    clearProof: "Limpar comprovante",
    backHistory: "Voltar ao histórico",
    refreshMethodology: "Verificar referências oficiais",
    statuses: ["Enviado", "Validado", "Certificado", "Rejeitado"],
    statusAll: "Todos",
    metricAll: "Todas",
    actionTypes: ["Impermeabilização crítica de cobertura", "Correção de pontos de infiltração", "Inspeção preventiva de junta estrutural", "Reforço localizado em área técnica", "Entrega auditável de pacote de reforma"],
    metricOptions: ["m² tratados", "pontos de infiltração sanados", "unidades protegidas", "horas técnicas mobilizadas"],
    validate: "Validar",
    certify: "Emitir certificado",
    reject: "Rejeitar",
    copyHash: "Copiar hash",
    copyProof: "Copiar comprovante",
    showPath: "Exibir trilha",
    hidePath: "Ocultar trilha",
    reactivate: "Retificar",
    auditPath: "Trilha auditável",
    validationText: "confirmações necessárias",
    transaction: "Transação",
    evidence: "Evidência",
    contract: "Contrato",
    noRecordsTitle: "Nenhum registro ainda",
    noRecordsText: "Cadastre uma entrega ou carregue a base de obra para ver o fluxo completo de validação.",
    noResultsTitle: "Nenhum resultado encontrado",
    noResultsText: "Altere os filtros para consultar outros contratos, métricas ou status.",
    noRanking: "Nenhum ativo ranqueado ainda.",
    certificates: "certificado(s)",
    demoMode: "Modo demonstração ativo. Conecte a MetaMask para verificar sua carteira; após o deploy, o envio on-chain será habilitado."
  },  en: {
    tagline: "ImpactLedger for public contracts, ESG and urban resilience",
    languageLabel: "Language",
    connectWallet: "Connect wallet",
    simpleMode: "Simple mode",
    technicalMode: "Technical mode",
    navOverview: "Overview",
    navRegister: "Register",
    navAudit: "Audit",
    navIntelligence: "Intelligence",
    navVerify: "Verify",
    navMethod: "Method",
    startRegister: "Register new action",
    viewHistory: "View history",
    goAudit: "Go to audit",
    eyebrow: "Auditable Brazil, city by city",
    heroTitle: "Turn impact contracts into verifiable public proof.",
    heroText: "A lightweight infrastructure to register social, environmental and community deliveries, validate evidence and issue auditable smart contract certificates.",
    auditableImpact: "Auditable impact",
    registeredActions: "actions registered in this demo",
    moduleContract: "Configurable contract",
    moduleContractText: "Rules by city, department, grant, company or campaign.",
    moduleEvidence: "Verifiable evidence",
    moduleEvidenceText: "On-chain hash and off-chain documents for objective auditing.",
    moduleCertificate: "Automatic certification",
    moduleCertificateText: "Recognition issued when the minimum validation is reached.",
    methodTitle: "Impact methodology",
    methodText: "The flow combines Theory of Change, IRIS+ and SROI: define the action, measure evidence, validate, certify and use data for decisions.",
    newRecord: "New record",
    newRecordHelp: "Fill in the completed action and add an evidence reference.",
    territoryLabel: "Contract or territory",
    territoryHelp: "Example: contract name, district, school, department or campaign.",
    actionTypeLabel: "Action type",
    metricLabel: "Metric",
    valueLabel: "Value",
    evidenceLinkLabel: "Evidence link",
    evidenceLinkHelp: "It can be IPFS, a public folder, document repository or audit link.",
    evidenceSummaryLabel: "Evidence summary",
    submitImpact: "Register impact",
    loadExample: "Load 10 examples",
    auditableHistory: "Auditable history",
    auditableHistoryHelp: "Validate records and track issued certificates.",
    clear: "Clear",
    searchLabel: "Search",
    statusLabel: "Status",
    wasteRemoved: "kg of waste removed",
    certificatesIssued: "certificates issued",
    minimumValidations: "minimum validations per certificate",
    impactIntelligence: "Impact intelligence",
    impactIntelligenceHelp: "Strategic summary for accountability, public decisions and ESG funding.",
    impactScore: "Impact score",
    auditRate: "Certified rate",
    socialValue: "Estimated social value",
    auditableRanking: "Auditable ranking",
    auditableRankingHelp: "Contracts and territories with the highest validated impact.",
    proofVerifierTitle: "Authenticity verifier",
    proofVerifierText: "Paste a proof copied from the history to check if it keeps the same evidence hash.",
    proofLabel: "Auditable proof",
    verifyProof: "Verify proof",
    clearProof: "Clear proof",
    backHistory: "Back to history",
    refreshMethodology: "Check official references",
    statuses: ["Submitted", "Validated", "Certified", "Rejected"],
    statusAll: "All",
    metricAll: "All",
    actionTypes: ["Preventive urban drainage maintenance", "Illegal dumping cleanup effort", "Waste-free school day", "Community flood-point inspection", "Auditable social project delivery"],
    metricOptions: ["kg of waste removed", "cr?tical points treated", "families reached", "volunteer hours"],
    validate: "Validate",
    certify: "Issue certificate",
    reject: "Reject",
    copyHash: "Copy hash",
    copyProof: "Copy proof",
    showPath: "Show path",
    hidePath: "Hide path",
    reactivate: "Rectify",
    auditPath: "Auditable path",
    validationText: "required confirmations",
    transaction: "Transaction",
    evidence: "Evidence",
    contract: "Contract",
    noRecordsTitle: "No records yet",
    noRecordsText: "Register an action or load the example to see the full validation flow.",
    noResultsTitle: "No results found",
    noResultsText: "Change the filters to view other contracts, metrics or statuses.",
    noRanking: "No contract ranked yet.",
    certificates: "certificate(s)",
    demoMode: "Demo mode is active. Connect MetaMask to verify your wallet; after deployment, on-chain submission will be enabled."
  },
  es: {
    tagline: "ImpactLedger para contratos públicos, ESG y resiliencia urbana",
    languageLabel: "Idioma",
    connectWallet: "Conectar cartera",
    simpleMode: "Modo simple",
    technicalMode: "Modo técnico",
    navOverview: "Visión general",
    navRegister: "Registrar",
    navAudit: "Auditar",
    navIntelligence: "Inteligencia",
    navVerify: "Verificar",
    navMethod: "Metodología",
    startRegister: "Registrar nueva acción",
    viewHistory: "Ver historial",
    goAudit: "Ir a auditoría",
    eyebrow: "Brasil auditable, municipio por municipio",
    heroTitle: "Transforme contratos de impacto en pruebas públicas verificables.",
    heroText: "Una infraestructura ligera para registrar entregas sociales, ambientales y comunitarias, validar evid?ncias y emitir certificados auditables por smart contract.",
    auditableImpact: "Impacto auditable",
    registeredActions: "acciones registradas en esta demostración",
    moduleContract: "Contrato configurable",
    moduleContractText: "Reglas por municipio, secretaría, edital, empresa o campaña.",
    moduleEvidence: "Evid?ncia verificable",
    moduleEvidenceText: "Hash on-chain y documentos off-chain para auditoría objetiva.",
    moduleCertificate: "Certificación automática",
    moduleCertificateText: "Reconocimiento emitido cuando se alcanza la validación mínima.",
    methodTitle: "Metodología de impacto",
    methodText: "El flujo combina Teoría del Cambio, IRIS+ y SROI: definir la acción, medir evid?ncia, validar, certificar y usar datos para decisión.",
    newRecord: "Nuevo registro",
    newRecordHelp: "Complete la acción realizada y agregue una referencia de evid?ncia.",
    territoryLabel: "Contrato o territorio",
    territoryHelp: "Ejemplo: nombre del contrato, barrio, escuela, secretaría o campaña.",
    actionTypeLabel: "Tipo de acción",
    metricLabel: "Métrica",
    valueLabel: "Valor",
    evidenceLinkLabel: "Enlace de evid?ncia",
    evidenceLinkHelp: "Puede ser IPFS, carpeta pública, repositorio documental o enlace de auditoría.",
    evidenceSummaryLabel: "Resumen de evid?ncia",
    submitImpact: "Registrar impacto",
    loadExample: "Simular 10 ejemplos",
    auditableHistory: "Historial auditable",
    auditableHistoryHelp: "Valide registros y acompañe certificados emitidos.",
    clear: "Limpiar",
    searchLabel: "Buscar",
    statusLabel: "Estado",
    wasteRemoved: "kg de residuos removidos",
    certificatesIssued: "certificados emitidos",
    minimumValidations: "validaciones mínimas por certificado",
    impactIntelligence: "Inteligencia de impacto",
    impactIntelligenceHelp: "Resumen estratégico para rendición de cuentas, decisión pública y captación ESG.",
    impactScore: "Puntuación de impacto",
    auditRate: "Tasa certificada",
    socialValue: "Valor social estimado",
    auditableRanking: "Ranking auditable",
    auditableRankingHelp: "Contratos y territorios con mayor impacto validado.",
    proofVerifierTitle: "Verificador de autenticidad",
    proofVerifierText: "Pegue un comprobante copiado del historial para verificar si mantiene el mismo hash de evid?ncia.",
    proofLabel: "Comprobante auditable",
    verifyProof: "Verificar comprobante",
    clearProof: "Limpiar comprobante",
    backHistory: "Volver al historial",
    refreshMethodology: "Verificar refer?ncias oficiales",
    statuses: ["Enviado", "Validado", "Certificado", "Rechazado"],
    statusAll: "Todos",
    metricAll: "Todas",
    actionTypes: ["Mantenimiento preventivo de drenaje urbano", "Mutirão contra descarte irregular", "Jornada escuela sin basura", "Inspección comunitaria de punto de inundación", "Entrega auditable de proyecto social"],
    metricOptions: ["kg de residuos removidos", "puntos críticos tratados", "familias alcanzadas", "horas voluntarias"],
    validate: "Validar",
    certify: "Emitir certificado",
    reject: "Rechazar",
    copyHash: "Copiar hash",
    copyProof: "Copiar comprobante",
    showPath: "Mostrar camino",
    hidePath: "Ocultar camino",
    reactivate: "Rectificar",
    auditPath: "Camino auditable",
    validationText: "confirmaciones necesarias",
    transaction: "Transacción",
    evidence: "Evid?ncia",
    contract: "Contrato",
    noRecordsTitle: "Aún no hay registros",
    noRecordsText: "Registre una acción o use el ejemplo para ver el flujo completo de validación.",
    noResultsTitle: "No se encontraron resultados",
    noResultsText: "Cambie los filtros para consultar otros contratos, métricas o estados.",
    noRanking: "Aún no hay contrato en el ranking.",
    certificates: "certificado(s)",
    demoMode: "Modo demostración activo. Conecte MetaMask para verificar su cartera; después del deploy, se habilitará el envío on-chain."
  },
  fr: {
    tagline: "ImpactLedger pour contrats publics, ESG et résilience urbaine",
    languageLabel: "Langue",
    connectWallet: "Connecter le wallet",
    simpleMode: "Mode simple",
    technicalMode: "Mode technique",
    navOverview: "Vue générale",
    navRegister: "Enregistrer",
    navAudit: "Auditer",
    navIntelligence: "Intelligence",
    navVerify: "Vérifier",
    navMethod: "Méthode",
    startRegister: "Enregistrer une action",
    viewHistory: "Voir historique",
    goAudit: "Aller à l'audit",
    eyebrow: "Brésil auditable, commune par commune",
    heroTitle: "Transformez les contrats d'impact en preuves publiques vérifiables.",
    heroText: "Une infrastructure légère pour enregistrer les livraisons sociales, environnementales et communautaires, valider les preuves et émettre des certificats auditables par smart contract.",
    auditableImpact: "Impact auditable",
    registeredActions: "actions enregistrées dans cette démo",
    moduleContract: "Contrat configurable",
    moduleContractText: "Règles par commune, service, appel à projets, entreprise ou campagne.",
    moduleEvidence: "Preuve vérifiable",
    moduleEvidenceText: "Hash on-chain et documents off-chain pour un audit objectif.",
    moduleCertificate: "Certification automatique",
    moduleCertificateText: "Reconnaissance émise lorsque la validation m?nimale est atteinte.",
    methodTitle: "Méthodologie d'impact",
    methodText: "Le flux combine Théorie du changement, IRIS+ et SROI : définir l'action, mesurer la preuve, valider, certifier et utiliser les données pour décider.",
    newRecord: "Nouveau registre",
    newRecordHelp: "Renseignez l'action réalisée et ajoutez une référence de preuve.",
    territoryLabel: "Contrat ou territoire",
    territoryHelp: "Exemple : nom du contrat, quartier, école, service ou campagne.",
    actionTypeLabel: "Type d'action",
    metricLabel: "Métrique",
    valueLabel: "Valeur",
    evidenceLinkLabel: "Lien de preuve",
    evidenceLinkHelp: "Peut être IPFS, dossi?r public, dépôt documentaire ou lien d'audit.",
    evidenceSummaryLabel: "Résumé de la preuve",
    submitImpact: "Enregistrer l'impact",
    loadExample: "Simuler 10 exemples",
    auditableHistory: "Historique auditable",
    auditableHistoryHelp: "Validez les registres et suivez les certificats émis.",
    clear: "Effacer",
    searchLabel: "Rechercher",
    statusLabel: "Statut",
    wasteRemoved: "kg de déchets retirés",
    certificatesIssued: "certificats émis",
    minimumValidations: "validations m?nimales par certificat",
    impactIntelligence: "Intelligence d'impact",
    impactIntelligenceHelp: "Résumé stratégique pour la reddition de comptes, la décision publique et le financement ESG.",
    impactScore: "Score d'impact",
    auditRate: "Taux certifié",
    socialValue: "Valeur sociale estimée",
    auditableRanking: "Classement auditable",
    auditableRankingHelp: "Contrats et territoires avec le plus grand impact validé.",
    proofVerifierTitle: "Vérificateur d'authenticité",
    proofVerifierText: "Collez une preuve copiée de l'historique pour vérifier si elle conserve le même hash de preuve.",
    proofLabel: "Preuve auditable",
    verifyProof: "Vérifier preuve",
    clearProof: "Effacer preuve",
    backHistory: "Retour à l'historique",
    refreshMethodology: "Vérifier les références officielles",
    statuses: ["Soumis", "Validé", "Certifié", "Rejeté"],
    statusAll: "Tous",
    metricAll: "Toutes",
    actionTypes: ["Maintenance préventive du drainage urbain", "Action contre les dépôts illégaux", "Journée école sans déchets", "Inspection communautaire d'un point d'inondation", "Livraison auditable d'un projet social"],
    metricOptions: ["kg de déchets retirés", "points critiques traités", "familles atteintes", "heures bénévoles"],
    validate: "Valider",
    certify: "Émettre certificat",
    reject: "Rejeter",
    copyHash: "Copier hash",
    copyProof: "Copier preuve",
    showPath: "Afficher parcours",
    hidePath: "Masquer parcours",
    reactivate: "Rectifier",
    auditPath: "Parcours auditable",
    validationText: "confirmations nécessaires",
    transaction: "Transaction",
    evidence: "Preuve",
    contract: "Contrat",
    noRecordsTitle: "Aucun registre pour l'instant",
    noRecordsText: "Enregistrez une action ou utilisez l'exemple pour voir le flux complet de validation.",
    noResultsTitle: "Aucun résultat trouvé",
    noResultsText: "Modifiez les filtres pour consulter d'autres contrats, métriques ou statuts.",
    noRanking: "Aucun contrat classé pour l'instant.",
    certificates: "certificat(s)",
    demoMode: "Mode démo actif. Connectez MetaMask pour vérifier votre wallet ; après le déploiement, l'envoi on-chain ser? activé."
  },
  zh: {
    tagline: "面向公共合同、ESG 与城市韧性的 ImpactLedger",
    languageLabel: "语言",
    connectWallet: "连接钱包",
    simpleMode: "简洁模式",
    technicalMode: "技术模式",
    navOverview: "总览",
    navRegister: "登记",
    navAudit: "审计",
    navIntelligence: "智能",
    navVerify: "验证",
    navMethod: "方法",
    startRegister: "登记新行动",
    viewHistory: "查看历史",
    goAudit: "前往审计",
    eyebrow: "可审计的巴西，逐市推进",
    heroTitle: "将影响合同转化为可验证的公共证明。",
    heroText: "一个轻量基础设施，用于登记社会、环境与社区交付，验证证据并通过智能合约颁发可审计证书。",
    auditableImpact: "可审计影响",
    registeredActions: "本演示中的登记行动",
    moduleContract: "可配置合同",
    moduleContractText: "按城市、部门、项目、企业或活动配置规则。",
    moduleEvidence: "可验证证据",
    moduleEvidenceText: "链上哈希与链下文件支持客观审计。",
    moduleCertificate: "自动认证",
    moduleCertificateText: "达到最低验证要求后自动颁发认可。",
    methodTitle: "影响方法论",
    methodText: "流程结合变化理论、IRIS+ 和 SROI：定义行动、衡量证据、验证、认证，并用数据支持决策。",
    newRecord: "新登记",
    newRecordHelp: "填写已完成的行动并添加证据引用。",
    territoryLabel: "合同或地区",
    territoryHelp: "示例：合同名称、社区、学校、部门或活动。",
    actionTypeLabel: "行动类型",
    metricLabel: "指标",
    valueLabel: "数值",
    evidenceLinkLabel: "证据链接",
    evidenceLinkHelp: "可以是 IPFS、公共文件夹、文档库或审计链接。",
    evidenceSummaryLabel: "证据摘要",
    submitImpact: "登记影响",
    loadExample: "模拟 10 个示例",
    auditableHistory: "可审计历史",
    auditableHistoryHelp: "验证记录并跟踪已颁发证书。",
    clear: "清除",
    searchLabel: "搜索",
    statusLabel: "状态",
    wasteRemoved: "移除废弃物公斤数",
    certificatesIssued: "已颁发证书",
    minimumValidations: "每份证书最低验证数",
    impactIntelligence: "影响智能",
    impactIntelligenceHelp: "用于问责、公共决策和 ESG 融资的战略摘要。",
    impactScore: "影响分数",
    auditRate: "认证率",
    socialValue: "估算社会价值",
    auditableRanking: "可审计排名",
    auditableRankingHelp: "已验证影响最高的合同和地区。",
    proofVerifierTitle: "真实性验证器",
    proofVerifierText: "粘贴从历史中复制的证明，检查其是否保持相同的证据哈希。",
    proofLabel: "可审计证明",
    verifyProof: "验证证明",
    clearProof: "清除证明",
    backHistory: "返回历史",
    refreshMethodology: "检查官方参考",
    statuses: ["已提交", "已验证", "已认证", "已拒绝"],
    statusAll: "全部",
    metricAll: "全部",
    actionTypes: ["城市排水预防性维护", "非法倾倒清理行动", "无垃圾校园日", "社区积水点巡查", "可审计社会项目交付"],
    metricOptions: ["移除废弃物公斤数", "已处理关键点", "覆盖家庭数", "志愿服务小时"],
    validate: "验证",
    certify: "颁发证书",
    reject: "拒绝",
    copyHash: "复制哈希",
    copyProof: "复制证明",
    showPath: "显示路径",
    hidePath: "隐藏路径",
    reactivate: "更正",
    auditPath: "审计路径",
    validationText: "所需确认",
    transaction: "交易",
    evidence: "证据",
    contract: "合同",
    noRecordsTitle: "暂无记录",
    noRecordsText: "登记一项行动或加载示例以查看完整验证流程。",
    noResultsTitle: "未找到结果",
    noResultsText: "调整筛选条件以查看其他合同、指标或状态。",
    noRanking: "暂无合同排名。",
    certificates: "证书",
    demoMode: "演示模式已启用。连接 MetaMask 以验证钱包；部署后将启用链上提交。"
  }
};
const metricLabels = {
  kg_residuo_removido: "m² tratados",
  pontos_criticos_tratados: "pontos de infiltração sanados",
  familias_alcancadas: "unidades protegidas",
  horas_voluntarias: "horas técnicas mobilizadas"
};
const DEMO_RECORDS_STORAGE_KEY = "obraprime27-records-demo-v2";
const REAL_RECORDS_STORAGE_PREFIX = "obraprime27-records-real-v2";
const RECORDS_STORAGE_VERSION_KEY = "obraprime27-records-version";
const RECORDS_STORAGE_VERSION = "simple-v3";

function getRecordsStorageKey(account = "") {
  return account ? `${REAL_RECORDS_STORAGE_PREFIX}:${String(account).toLowerCase()}` : DEMO_RECORDS_STORAGE_KEY;
}

function getActiveRecordsStorageKey() {
  return getRecordsStorageKey(state.account);
}

function loadStoredRecords(account = "") {
  try {
    const storedVersion = localStorage.getItem(RECORDS_STORAGE_VERSION_KEY);
    const activeKey = getRecordsStorageKey(account);
    if (storedVersion !== RECORDS_STORAGE_VERSION) {
      localStorage.removeItem(DEMO_RECORDS_STORAGE_KEY);
      localStorage.removeItem(activeKey);
      localStorage.setItem(RECORDS_STORAGE_VERSION_KEY, RECORDS_STORAGE_VERSION);
      return [];
    }
    return JSON.parse(localStorage.getItem(activeKey) || "[]");
  } catch {
    localStorage.removeItem(getActiveRecordsStorageKey());
    localStorage.setItem(RECORDS_STORAGE_VERSION_KEY, RECORDS_STORAGE_VERSION);
    return [];
  }
}

function reloadRecordsForCurrentMode() {
  state.records = loadStoredRecords();
  save();
  render();
}

const state = {
  account: "",
  provider: null,
  signer: null,
  contract: null,
  language: localStorage.getItem("obraprime27-language") || localStorage.getItem("civisproof-language") || localStorage.getItem("mangueproof-language") || "pt",
  records: loadStoredRecords()
};

const form = document.querySelector("#impactForm");
const ledgerList = document.querySelector("#ledgerList");
const walletStatus = document.querySelector("#walletStatus");
const globalStatus = document.querySelector("#globalStatus");
const totalActions = document.querySelector("#totalActions");
const kgMetric = document.querySelector("#kgMetric");
const certMetric = document.querySelector("#certMetric");
const connectWalletButton = document.querySelector("#connectWallet");
const searchFilter = document.querySelector("#searchFilter");
const statusFilter = document.querySelector("#statusFilter");
const metricFilter = document.querySelector("#metricFilter");
const impactScore = document.querySelector("#impactScore");
const auditRate = document.querySelector("#auditRate");
const benefitEstimate = document.querySelector("#benefitEstimate");
const rankingList = document.querySelector("#rankingList");
const languageSelect = document.querySelector("#languageSelect");
const simpleModeButton = document.querySelector("#simpleMode");
const refreshMethodologyButton = document.querySelector("#refreshMethodology");
const methodologyStatus = document.querySelector("#methodologyStatus");
const proofInput = document.querySelector("#proofInput");
const proofResult = document.querySelector("#proofResult");
const verifyProofButton = document.querySelector("#verifyProof");
const clearProofButton = document.querySelector("#clearProof");
const topbar = document.querySelector(".topbar");
const viewButtons = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const toastRegion = document.querySelector("#toastRegion");
const submitImpactButton = form?.querySelector('button[type="submit"]');
const gameBoard = document.querySelector("#gameBoard");
const gameScore = document.querySelector("#gameScore");
const gameEnergy = document.querySelector("#gameEnergy");
const gameBuild = document.querySelector("#gameBuild");
const gameStatus = document.querySelector("#gameStatus");
const restartGameButton = document.querySelector("#restartGame");
const recordGameImpactButton = document.querySelector("#recordGameImpact");

const walletProviders = [];
const gameState = {
  robot: 0,
  score: 0,
  energy: 12,
  buildLevel: 0,
  tiles: []
};

const gameBuilds = ["Base verde inicial", "Horta comunitária", "Estação solar", "Jardim filtrante", "Bairro resiliente"];

const METHODOLOGY_SOURCES = [
  { name: "W3C Verifiable Credentials 2.0", url: "https://www.w3.org/TR/vc-data-model/" },
  { name: "GIIN IRIS+", url: "https://iris.thegiin.org/standards/" },
  { name: "Social Value International", url: "https://www.socialvalueint.org/standards-and-guidance" },
  { name: "UK Social Value Model", url: "https://www.crowncommercial.gov.uk/social-value/what-is-social-value" },
  { name: "OpenZeppelin Access Control", url: "https://docs.openzeppelin.com/contracts/4.x/access-control" }
];

const DEMO_RECORDS = [
  {
    territory: "Hospital Público Central - Bloco B",
    actionType: "Impermeabilização crítica de cobertura",
    metricUnit: "kg_residuo_removido",
    metricValue: 140,
    evidenceURI: "ipfs://bafy-obraprime27-hospital-001",
    evidenceSummary: "Laudo técnico, relatório fotográfico e medição de cobertura tratada.",
    validationCount: 2,
    status: 2
  },
  {
    territory: "Condomínio Prime Atlante - Torre Norte",
    actionType: "Correção de pontos de infiltração",
    metricUnit: "familias_alcancadas",
    metricValue: 320,
    evidenceURI: "ipfs://bafy-obraprime27-condominio-002",
    evidenceSummary: "Fotos antes e depois, checklist técnico e aceite do síndico.",
    validationCount: 2,
    status: 2
  },
  {
    territory: "Escola Técnica Municipal - Bloco A",
    actionType: "Inspeção preventiva de junta estrutural",
    metricUnit: "pontos_criticos_tratados",
    metricValue: 6,
    evidenceURI: "ipfs://bafy-obraprime27-escola-003",
    evidenceSummary: "Checklist de inspeção, fotos de junta e validação do engenheiro.",
    validationCount: 1,
    status: 1
  },
  {
    territory: "Hospital Santa Áurea - Cobertura Técnica",
    actionType: "Impermeabilização crítica de cobertura",
    metricUnit: "kg_residuo_removido",
    metricValue: 860,
    evidenceURI: "ipfs://bafy-obraprime27-hospital-004",
    evidenceSummary: "Memorial de serviço, medição executada e validação do fiscal.",
    validationCount: 2,
    status: 2
  },
  {
    territory: "Centro Administrativo Municipal - Ala Norte",
    actionType: "Reforço localizado em área técnica",
    metricUnit: "horas_voluntarias",
    metricValue: 96,
    evidenceURI: "ipfs://bafy-obraprime27-centro-005",
    evidenceSummary: "Relatório estrutural, fotos de execução e aceite do gestor público.",
    validationCount: 2,
    status: 2
  },
  {
    territory: "Shopping Costa Dourada - Cobertura Leste",
    actionType: "Correção de pontos de infiltração",
    metricUnit: "pontos_criticos_tratados",
    metricValue: 4,
    evidenceURI: "ipfs://bafy-obraprime27-shopping-006",
    evidenceSummary: "Ordem de serviço, fotos e assinatura do responsável técnico.",
    validationCount: 1,
    status: 1
  },
  {
    territory: "Terminal Urbano Sul - Plataforma 2",
    actionType: "Entrega auditável de pacote de reforma",
    metricUnit: "familias_alcancadas",
    metricValue: 180,
    evidenceURI: "ipfs://bafy-obraprime27-terminal-007",
    evidenceSummary: "Diário de obra, fotos e declaração do fiscal responsável.",
    validationCount: 0,
    status: 0
  },
  {
    territory: "Torre Empresarial Horizonte - Subsolo Técnico",
    actionType: "Reforço localizado em área técnica",
    metricUnit: "horas_voluntarias",
    metricValue: 210,
    evidenceURI: "ipfs://bafy-obraprime27-torre-008",
    evidenceSummary: "Relatório executivo, diário técnico e validações internas.",
    validationCount: 2,
    status: 2
  },
  {
    territory: "Conjunto Habitacional Vista Clara - Bloco 4",
    actionType: "Impermeabilização crítica de cobertura",
    metricUnit: "kg_residuo_removido",
    metricValue: 430,
    evidenceURI: "ipfs://bafy-obraprime27-habitacional-009",
    evidenceSummary: "Laudo inicial inconsistente, medição incompleta e evidência rejeitada.",
    validationCount: 0,
    status: 3
  },
  {
    territory: "Universidade Tecnológica Estadual - Bloco de Laboratórios",
    actionType: "Inspeção preventiva de junta estrutural",
    metricUnit: "pontos_criticos_tratados",
    metricValue: 9,
    evidenceURI: "ipfs://bafy-obraprime27-universidade-010",
    evidenceSummary: "Levantamento técnico, formulário de campo e validação acadêmica.",
    validationCount: 2,
    status: 2
  }
];

function t(key) {
  return TRANSLATIONS[state.language]?.[key] || TRANSLATIONS.pt[key] || key;
}

function notify(message, type = "success") {
  if (globalStatus) globalStatus.textContent = message;
  if (walletStatus && document.querySelector('[data-view="register"]')?.classList.contains("active")) {
    walletStatus.textContent = message;
  }
  showToast(message, type);
}

function showToast(message, type = "success") {
  if (!toastRegion) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastRegion.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 4200);
}

function setSubmitButtonState(label, disabled) {
  if (!submitImpactButton) return;
  submitImpactButton.disabled = disabled;
  submitImpactButton.textContent = label;
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  simpleModeButton.textContent = document.body.classList.contains("simple") ? t("technicalMode") : t("simpleMode");
  searchFilter.placeholder = state.language === "pt" ? "Contrato, ação ou evidência" : t("searchLabel");
  statusFilter.options[0].textContent = t("statusAll");
  t("statuses").forEach((status, index) => {
    statusFilter.options[index + 1].textContent = status;
  });
  metricFilter.options[0].textContent = t("metricAll");
  t("metricOptions").forEach((metric, index) => {
    metricFilter.options[index + 1].textContent = metric;
    form.elements.metricUnit.options[index].textContent = metric;
  });
  const actionField = form.elements.actionType;
  if (actionField?.tagName === "SELECT" && actionField.options.length > 1) {
    t("actionTypes").forEach((action, index) => {
      if (actionField.options[index + 1]) {
        actionField.options[index + 1].textContent = action;
      }
    });
  }
  if (!state.account) {
    connectWalletButton.textContent = t("connectWallet");
  }
  render();
}

function setView(viewName) {
  if (!["register", "audit"].includes(viewName)) {
    viewName = "register";
  }
  if (document.body.classList.contains("simple") && !["overview", "register", "audit"].includes(viewName)) {
    viewName = "overview";
  }

  const targetView = document.querySelector(`[data-view="${viewName}"]`);
  if (!targetView) return;

  views.forEach((view) => view.classList.toggle("active", view === targetView));
  viewButtons.forEach((button) => {
    const isActive = button.dataset.viewTarget === viewName;
    button.classList.toggle("active", isActive);
    if (button.closest(".app-nav")) {
      button.setAttribute("aria-current", isActive ? "page" : "false");
    }
  });

  localStorage.setItem("obraprime27-active-view", viewName);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

function getInjectedProvider() {
  const metamaskProvider = walletProviders.find((provider) => provider.info?.rdns === "io.metamask" || /metamask/i.test(provider.info?.name || ""));
  if (metamaskProvider?.provider) return metamaskProvider.provider;
  if (window.ethereum?.providers?.length) {
    return window.ethereum.providers.find((provider) => provider.isMetaMask) || window.ethereum.providers[0];
  }
  return window.ethereum || null;
}

async function sha256Hex(input) {
  if (!globalThis.crypto || !crypto.subtle) {
    let h1 = 0x811c9dc5;
    let h2 = 0x01000193;
    for (const char of input) {
      h1 ^= char.charCodeAt(0);
      h1 = Math.imul(h1, 0x01000193);
      h2 ^= h1 >>> 7;
      h2 = Math.imul(h2, 0x85ebca6b);
    }
    return `0x${(h1 >>> 0).toString(16).padStart(8, "0")}${(h2 >>> 0).toString(16).padStart(8, "0")}`.padEnd(66, "0");
  }

  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return "0x" + [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function stableStringify(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  return `{${Object.keys(value)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
    .join(",")}}`;
}

function save() {
  localStorage.setItem(RECORDS_STORAGE_VERSION_KEY, RECORDS_STORAGE_VERSION);
  localStorage.setItem(getActiveRecordsStorageKey(), JSON.stringify(state.records));
}

function addHistory(record, label) {
  record.history = record.history || [];
  record.history.push({
    label,
    at: new Date().toISOString()
  });
}

function getRecordHistory(record) {
  if (Array.isArray(record.history) && record.history.length) {
    return record.history;
  }

  const history = [{ label: "Registro criado", at: new Date().toISOString() }];
  if (record.validationCount > 0) history.push({ label: "Validação recebida", at: new Date().toISOString() });
  if (record.status === 2) history.push({ label: "Certificado emitido", at: new Date().toISOString() });
  if (record.status === 3) history.push({ label: "Registro rejeitado", at: new Date().toISOString() });
  return history;
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat(state.language === "zh" ? "zh-CN" : state.language, {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(value));
}

async function buildProof(record) {
  const credential = {
    type: "LedgerCredential",
    version: "1.0",
    actionId: record.id,
    contractOrTerritory: record.territory,
    actionType: record.actionType,
    metricUnit: record.metricUnit,
    metricValue: record.metricValue,
    status: statusNames[record.status] || statusNames[0],
    evidenceURI: record.evidenceURI,
    evidenceHash: record.evidenceHash,
    transactionHash: record.txHash || "demonstração-local",
    methodology: ["Theory of Change", "IRIS+", "SROI", "W3C Verifiable Credentials"],
    issuedBy: "Ledger",
    issuedAt: new Date().toISOString()
  };

  return {
    ...credential,
    proofHash: await sha256Hex(stableStringify(credential))
  };
}

async function copyProof(id) {
  const record = state.records.find((item) => item.id === id);
  if (!record) return;

  const proof = await buildProof(record);
  const serializedProof = JSON.stringify(proof, null, 2);

  try {
    await navigator.clipboard.writeText(serializedProof);
    proofInput.value = serializedProof;
    notify("Comprovante auditável copiado e também enviado ao verificador.");
    setView("verify");
  } catch {
    proofInput.value = serializedProof;
    notify("Não consegui copiar automaticamente; deixei o comprovante no verificador.");
    setView("verify");
  }
}

function getNextRecordId() {
  return state.records.length ? Math.max(...state.records.map((item) => item.id)) + 1 : 1;
}

function getCertifiedCount() {
  return state.records.filter((record) => record.status === 2).length;
}

function getFilteredRecords() {
  const search = searchFilter.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;
  const selectedMetric = metricFilter.value;

  return state.records.filter((record) => {
    const searchableFields = [record.territory, record.actionType, record.evidenceURI, record.evidenceHash];
    const matchesSearch = !search || searchableFields.some((value) => String(value).toLowerCase().includes(search));
    const matchesStatus = selectedStatus === "all" || String(record.status) === selectedStatus;
    const matchesMetric = selectedMetric === "all" || record.metricUnit === selectedMetric;
    return matchesSearch && matchesStatus && matchesMetric;
  });
}

function getRemovedWasteTotal() {
  return state.records
    .filter((record) => record.metricUnit === "kg_residuo_removido")
    .reduce((sum, record) => sum + Number(record.metricValue), 0);
}

function getImpactPoints(record) {
  const weights = {
    kg_residuo_removido: 1,
    pontos_criticos_tratados: 35,
    familias_alcancadas: 4,
    horas_voluntarias: 8
  };
  const validationBonus = record.status === 2 ? 1.4 : record.status === 1 ? 1.15 : 1;
  return Math.round(Number(record.metricValue) * (weights[record.metricUnit] || 1) * validationBonus);
}

function getSocialValueEstimate() {
  const estimatedValues = {
    kg_residuo_removido: 12,
    pontos_criticos_tratados: 450,
    familias_alcancadas: 38,
    horas_voluntarias: 55
  };

  return state.records.reduce((total, record) => total + Number(record.metricValue) * (estimatedValues[record.metricUnit] || 10), 0);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}

function getRanking() {
  const totals = new Map();

  for (const record of state.records) {
    const current = totals.get(record.territory) || {
      territory: record.territory,
      points: 0,
      certified: 0
    };
    current.points += getImpactPoints(record);
    current.certified += record.status === 2 ? 1 : 0;
    totals.set(record.territory, current);
  }

  return [...totals.values()].sort((a, b) => b.points - a.points).slice(0, 5);
}

function startGame() {
  gameState.robot = 0;
  gameState.score = 0;
  gameState.energy = 12;
  gameState.buildLevel = 0;
  gameState.tiles = Array.from({ length: 36 }, (_, index) => {
    if ([7, 13, 20, 25, 31].includes(index)) return "waste";
    if ([10, 22, 28].includes(index)) return "water";
    if ([16, 34].includes(index)) return "solar";
    return "empty";
  });
  renderGame("Missão iniciada. Restaure resíduos, água e energia limpa.");
}

function getTileIcon(tile) {
  const icons = {
    empty: "",
    waste: "♻",
    water: "≈",
    solar: "☼",
    clean: "✓"
  };
  return icons[tile] || "";
}

function renderGame(message = "") {
  if (!gameBoard) return;

  gameBoard.innerHTML = gameState.tiles
    .map((tile, index) => {
      const isRobot = index === gameState.robot;
      const label = isRobot ? "Robô ambiental" : tile;
      return `<div class="game-cell ${tile} ${isRobot ? "robot" : ""}" role="gridcell" aria-label="${label}">${isRobot ? "▣" : getTileIcon(tile)}</div>`;
    })
    .join("");

  gameScore.textContent = gameState.score;
  gameEnergy.textContent = gameState.energy;
  gameBuild.textContent = gameBuilds[gameState.buildLevel];
  if (message) gameStatus.textContent = message;
}

function moveRobot(direction) {
  const row = Math.floor(gameState.robot / 6);
  const col = gameState.robot % 6;
  const next = {
    up: row > 0 ? gameState.robot - 6 : gameState.robot,
    down: row < 5 ? gameState.robot + 6 : gameState.robot,
    left: col > 0 ? gameState.robot - 1 : gameState.robot,
    right: col < 5 ? gameState.robot + 1 : gameState.robot
  }[direction];

  if (next === gameState.robot) {
    renderGame("Limite do mapa. Escolha outro caminho.");
    return;
  }

  if (gameState.energy <= 0) {
    renderGame("Energia encerrada. Reinicie a missão ou registre o impacto alcançado.");
    return;
  }

  gameState.robot = next;
  gameState.energy -= 1;
  resolveTile(next);
}

function resolveTile(index) {
  const tile = gameState.tiles[index];
  const scores = { waste: 12, water: 16, solar: 20 };

  if (scores[tile]) {
    gameState.score += scores[tile];
    gameState.tiles[index] = "clean";
    gameState.buildLevel = Math.min(gameBuilds.length - 1, Math.floor(gameState.score / 30));
    renderGame("Boa ação: o robô restaurou um ponto crítico.");
    return;
  }

  renderGame("Área segura. Continue procurando pontos de restauração.");
}

async function recordGameImpact() {
  const evidenceSummary = `EcoBots Lab: ${gameState.score} pontos, construção ${gameBuilds[gameState.buildLevel]}, energia restante ${gameState.energy}.`;
  const fakeForm = new Map([
    ["territory", "EcoBots Lab - Educação Ambiental Digital"],
    ["actionType", "Jornada escola sem lixo"],
    ["metricUnit", "horas_voluntarias"],
    ["metricValue", Math.max(1, Math.round(gameState.score / 4))],
    ["evidenceURI", "game://civisproof-ecobots-lab"],
    ["evidenceSummary", evidenceSummary]
  ]);

  await submitLocal({ get: (key) => fakeForm.get(key) });
  notify("Impacto educativo do EcoBots registrado no histórico auditável.");
  setView("audit");
}

function shortenAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

async function getNetworkLabel(provider) {
  const network = provider ? await provider.getNetwork() : null;
  const injectedProvider = getInjectedProvider();
  const chainId = network ? Number(network.chainId) : Number(await injectedProvider.request({ method: "eth_chainId" }));
  const knownNetworks = {
    1: "Ethereum Mainnet",
    11155111: "Sepolia",
    31337: "Hardhat Local"
  };
  return knownNetworks[chainId] || `Chain ID ${chainId}`;
}

async function updateWalletStatus() {
  if (!state.account || !getInjectedProvider()) return;

  const networkLabel = await getNetworkLabel(state.provider);
  connectWalletButton.textContent = shortenAddress(state.account);
  connectWalletButton.title = "Clique para desconectar";
  reloadRecordsForCurrentMode();
  notify(CONTRACT_ADDRESS
    ? `Carteira conectada: ${shortenAddress(state.account)} em ${networkLabel}. Lista real carregada.`
    : `Carteira conectada: ${shortenAddress(state.account)} em ${networkLabel}. Lista da carteira carregada.`);
}

function disconnectWallet(options = {}) {
  state.account = "";
  state.provider = null;
  state.signer = null;
  state.contract = null;
  connectWalletButton.disabled = false;
  connectWalletButton.textContent = t("connectWallet");
  connectWalletButton.title = "";
  reloadRecordsForCurrentMode();
  if (!options.silent) {
    notify("Carteira desconectada. Lista de teste carregada.");
  }
}

function renderRecord(record) {
  const localizedStatuses = t("statuses");
  const status = localizedStatuses[record.status] || localizedStatuses[0] || statusNames[0];
  const metric = metricLabels[record.metricUnit] || record.metricUnit;
  const history = (record.history || [])
    .map((entry) => `<li>${escapeHtml(entry.label || entry.message || "")}</li>`)
    .join("");
  const steps = [
    { label: "Enviado", done: true },
    { label: "Validado", done: record.validationCount > 0 || record.status >= 1 },
    { label: "Certificado", done: record.status === 2 }
  ]
    .map((step) => `<div class="audit-step${step.done ? " done" : ""}">${escapeHtml(step.label)}</div>`)
    .join("");
  const classes = ["record", record.status === 1 ? "validated" : "", record.status === 2 ? "certified" : "", record.status === 3 ? "rejected" : ""]
    .filter(Boolean)
    .join(" ");

  return `
    <article class="${classes}">
      <div class="record-topline">
        <div>
          <h3>#${record.id} ${escapeHtml(record.actionType)}</h3>
          <span class="territory-chip">${escapeHtml(record.territory)}</span>
        </div>
        <span class="status-badge">${status}</span>
      </div>
      <dl>
        <dt>${t("contract")}</dt><dd>${escapeHtml(record.territory)}</dd>
        <dt>${t("metricLabel")}</dt><dd>${escapeHtml(record.metricValue)} ${escapeHtml(metric)}</dd>
        <dt>${t("statusLabel")}</dt><dd>${escapeHtml(record.validationCount)}/2 ${t("validationText")}</dd>
        <dt>${t("evidence")}</dt><dd>${escapeHtml(record.evidenceURI)}</dd>
        <dt>Hash</dt><dd>${escapeHtml(record.evidenceHash)}</dd>
        <dt>${t("transaction")}</dt><dd>${escapeHtml(record.txHash || "demonstração-local")}</dd>
      </dl>
      ${
        record.showPath
          ? `<div class="audit-trail"><strong>${t("auditPath")}</strong><div class="audit-steps">${steps}</div><ol class="event-log">${history}</ol></div>`
          : ""
      }
      <div class="record-actions">
        ${record.status === 0 ? `<button type="button" data-validate="${record.id}">${t("validate")}</button>` : ""}
        ${record.status === 1 ? `<button type="button" class="secondary" data-certify="${record.id}">${t("certify")}</button>` : ""}
        ${(record.status === 0 || record.status === 1) ? `<button type="button" class="ghost" data-reject="${record.id}">${t("reject")}</button>` : ""}
        ${record.status === 3 ? `<button type="button" class="ghost" data-reactivate="${record.id}">${t("reactivate")}</button>` : ""}
      </div>
    </article>
  `;
}

function render() {
  const filteredRecords = getFilteredRecords();
  const certifiedCount = getCertifiedCount();
  const totalScore = state.records.reduce((sum, record) => sum + getImpactPoints(record), 0);
  const certifiedRate = state.records.length ? Math.round((certifiedCount / state.records.length) * 100) : 0;

  totalActions.textContent = state.records.length;
  kgMetric.textContent = getRemovedWasteTotal();
  certMetric.textContent = certifiedCount;
  impactScore.textContent = totalScore;
  auditRate.textContent = `${certifiedRate}%`;
  benefitEstimate.textContent = formatCurrency(getSocialValueEstimate());
  renderRanking();

  if (!state.records.length) {
    ledgerList.innerHTML = `
      <div class="empty-state">
        <strong>${t("noRecordsTitle")}</strong>
        <p>${t("noRecordsText")}</p>
      </div>
    `;
    return;
  }

  if (!filteredRecords.length) {
    ledgerList.innerHTML = `
      <div class="empty-state">
        <strong>${t("noResultsTitle")}</strong>
        <p>${t("noResultsText")}</p>
      </div>
    `;
    return;
  }

  ledgerList.innerHTML = filteredRecords.map(renderRecord).join("");
}

function renderRanking() {
  const ranking = getRanking();

  if (!ranking.length) {
    rankingList.innerHTML = `<li>${t("noRanking")}</li>`;
    return;
  }

  rankingList.innerHTML = ranking
    .map(
      (item) => `
        <li>
          <div>
            <strong>${escapeHtml(item.territory)}</strong>
            <span>${item.certified} ${t("certificates")}</span>
          </div>
          <b>${item.points} pts</b>
        </li>
      `
    )
    .join("");
}

async function connectWallet() {
  if (state.account) {
    disconnectWallet();
    return;
  }

  const injectedProvider = getInjectedProvider();

  if (!injectedProvider || typeof injectedProvider.request !== "function") {
    notify("MetaMask não encontrada. Verifique se a extensão está instalada e ativa neste navegador.", "warning");
    return;
  }

  connectWalletButton.disabled = true;
  connectWalletButton.textContent = "Conectando...";

  try {
    const accounts = await injectedProvider.request({ method: "eth_requestAccounts" });
    state.account = accounts[0] || "";

    if (!state.account) {
      throw new Error("Nenhuma conta foi autorizada na MetaMask.");
    }

    if (window.ethers) {
      state.provider = new ethers.BrowserProvider(injectedProvider);
      state.signer = await state.provider.getSigner();
      state.contract = CONTRACT_ADDRESS ? new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, state.signer) : null;
    } else {
      state.provider = null;
      state.signer = null;
      state.contract = null;
    }

    await updateWalletStatus();
  } catch (error) {
    state.account = "";
    state.provider = null;
    state.signer = null;
    state.contract = null;
    const rejected = error.code === 4001 || error.info?.error?.code === 4001;
    notify(rejected
      ? "Conexão cancelada na MetaMask. Clique novamente quando quiser autorizar."
      : `Não foi possível conectar a carteira: ${error.message}`);
    connectWalletButton.textContent = "Conectar carteira";
    connectWalletButton.title = "";
  } finally {
    connectWalletButton.disabled = false;
  }
}

async function submitLocal(formData) {
  const evidenceURI = String(formData.get("evidenceURI") || "").trim();
  const normalizedEvidenceURI = evidenceURI || "sem-link";
  const metricValueText = normalizeMetricValueInput(formData.get("metricValue"));
  const summary = `${formData.get("territory")}|${formData.get("actionType")}|${formData.get("metricUnit")}|${metricValueText}|${normalizedEvidenceURI}|${formData.get("evidenceSummary")}`;
  const evidenceHash = await sha256Hex(summary);
  const record = {
    id: getNextRecordId(),
    territory: formData.get("territory"),
    actionType: formData.get("actionType"),
    metricUnit: formData.get("metricUnit"),
    metricValue: Number(metricValueText),
    evidenceURI: evidenceURI,
    evidenceHash,
    validationCount: 0,
    status: 0,
    txHash: "",
    showPath: true,
    history: []
  };
  addHistory(record, "Registro criado com hash verificável");

  if (state.contract) {
    try {
      setSubmitButtonState("Aguardando carteira...", true);
      const onchainMetricValue = toOnchainMetricValue(metricValueText);
      const tx = await state.contract.submitAction(record.territory, record.actionType, record.metricUnit, onchainMetricValue, record.evidenceHash, normalizedEvidenceURI);
      setSubmitButtonState("Enviando...", true);
      const receipt = await tx.wait();
      record.txHash = receipt.hash;
      state.records.unshift(record);
      save();
      render();
      return { persistedOnChain: true };
    } catch (error) {
      if (error?.code === "ACTION_REJECTED") {
        throw new Error("Transacao cancelada na carteira.");
      }
      record.txError = getReadableErrorMessage(error);
      addHistory(record, "Envio on-chain indisponivel; registro mantido localmente");
      state.records.unshift(record);
      save();
      render();
      return { persistedOnChain: false, fallbackReason: record.txError };
    }
  }

  state.records.unshift(record);
  save();
  render();
  return { persistedOnChain: false };
}

async function loadDemoRecords() {
  const createdAt = new Date();
  const records = [];

  for (const [index, demo] of DEMO_RECORDS.entries()) {
    const id = index + 1;
    const summary = `${demo.territory}|${demo.actionType}|${demo.metricUnit}|${demo.metricValue}|${demo.evidenceURI}|${demo.evidenceSummary}`;
    const record = {
      id,
      territory: demo.territory,
      actionType: demo.actionType,
      metricUnit: demo.metricUnit,
      metricValue: demo.metricValue,
      evidenceURI: demo.evidenceURI,
      evidenceHash: await sha256Hex(summary),
      validationCount: demo.validationCount,
      status: demo.status,
      txHash: `demo-tx-${String(id).padStart(3, "0")}`,
      showPath: index < 3,
      history: [
        {
          label: "Registro criado com evidência verificável",
          at: new Date(createdAt.getTime() - (10 - index) * 3600000).toISOString()
        }
      ]
    };

    if (demo.validationCount > 0) {
      record.history.push({
        label: "Validação recebida",
        at: new Date(createdAt.getTime() - (9 - index) * 3600000).toISOString()
      });
    }

    if (demo.status === 2) {
      record.history.push({
        label: "Certificado emitido após validação mínima",
        at: new Date(createdAt.getTime() - (8 - index) * 3600000).toISOString()
      });
    }

    if (demo.status === 3) {
      record.history.push({
        label: "Registro rejeitado por inconsistência de evidência",
        at: new Date(createdAt.getTime() - (8 - index) * 3600000).toISOString()
      });
    }

    records.push(record);
  }

  state.records = records;
  save();
  render();
  setView("audit");
  notify("10 exemplos simulados carregados com métricas, certificados, rejeição e caminhos auditáveis.");
}

function validateDemo(id, certify = false) {
  const record = state.records.find((item) => item.id === id);
  if (!record) {
    notify("Registro não encontrado.");
    return;
  }
  if (record.status === 2) {
    notify("Este registro já está certificado. Use Copiar comprovante ou Ver caminho para auditar.");
    return;
  }
  if (record.status === 3) {
    notify("Este registro foi rejeitado. Para preservar auditoria, ele não pode ser validado novamente nesta demonstração.");
    return;
  }
  record.validationCount = certify ? 2 : Math.min(2, record.validationCount + 1);
  record.status = record.validationCount >= 2 ? 2 : 1;
  addHistory(record, record.status === 2 ? "Certificado emitido após validação mínima" : "Validação recebida");
  save();
  render();
  notify(record.status === 2 ? "Registro certificado e pronto para auditoria." : "Registro validado. Falta uma confirmação para certificação.");
}

function rejectDemo(id) {
  const record = state.records.find((item) => item.id === id);
  if (!record) {
    notify("Registro não encontrado.");
    return;
  }
  if (record.status === 2) {
    notify("Registro já certificado. Para manter integridade, ele não é rejeitado depois da certificação nesta demonstração.");
    return;
  }
  if (record.status === 3) {
    notify("Registro já está rejeitado e preservado no histórico auditável.");
    return;
  }
  record.status = 3;
  record.validationCount = 0;
  addHistory(record, "Registro rejeitado por validador");
  save();
  render();
  notify("Registro rejeitado. O histórico permanece visível para auditoria.");
}

function reactivateDemo(id) {
  const record = state.records.find((item) => item.id === id);
  if (!record) {
    notify("Registro não encontrado.");
    return;
  }
  if (record.status !== 3) {
    notify("Somente registros rejeitados precisam de retificação.");
    return;
  }

  record.status = 0;
  record.validationCount = 0;
  record.showPath = true;
  addHistory(record, "Registro retificado e reaberto para nova validação");
  save();
  render();
  notify("Registro retificado. Ele voltou ao status Enviado e pode ser validado novamente.");
}

async function refreshMethodology() {
  if (!navigator.onLine) {
    methodologyStatus.textContent = "Sem internet agora. A metodologia local continua disponível com fontes oficiais registradas.";
    return;
  }

  methodologyStatus.textContent = "Verificando referências oficiais...";
  const checks = await Promise.allSettled(METHODOLOGY_SOURCES.map((source) => fetch(source.url, { mode: "no-cors", cache: "no-store" })));
  const available = checks.filter((check) => check.status === "fulfilled").length;
  const checkedAt = new Date().toLocaleString("pt-BR");
  const links = METHODOLOGY_SOURCES.map((source) => `${source.name}: ${source.url}`).join(" | ");
  methodologyStatus.textContent = `${available}/${METHODOLOGY_SOURCES.length} referências oficiais responderam em ${checkedAt}. ${links}`;
}

function toggleSimpleMode() {
  document.body.classList.toggle("simple");
  const isSimple = document.body.classList.contains("simple");
  simpleModeButton.textContent = isSimple ? t("technicalMode") : t("simpleMode");
  localStorage.setItem("obraprime27-simple-mode", isSimple ? "1" : "0");
  syncTopbarHeight();
}

function syncTopbarHeight() {
  if (!topbar) return;
  document.documentElement.style.setProperty("--topbar-height", `${Math.ceil(topbar.offsetHeight)}px`);
}

function toggleAuditPath(id) {
  const record = state.records.find((item) => item.id === id);
  if (!record) {
    notify("Registro não encontrado.");
    return;
  }
  record.showPath = !record.showPath;
  save();
  render();
  notify(record.showPath ? "Caminho auditável aberto para este registro." : "Caminho auditável ocultado.");
}

async function verifyProof() {
  try {
    const proof = JSON.parse(proofInput.value);
    const { proofHash, ...credential } = proof;
    const expectedHash = await sha256Hex(stableStringify(credential));
    const existingRecord = state.records.find((record) => record.evidenceHash === proof.evidenceHash);

    if (proofHash !== expectedHash) {
      proofResult.textContent = "Comprovante alterado: o hash interno não confere com os dados informados.";
      notify("Comprovante alterado: hash interno não confere.");
      return;
    }

    proofResult.textContent = existingRecord
      ? `Comprovante íntegro e encontrado no histórico local: registro #${existingRecord.id}.`
      : "Comprovante íntegro, mas não encontrado neste histórico local. Confira a transação ou o contrato on-chain.";
    notify(proofResult.textContent);
  } catch {
    proofResult.textContent = "Comprovante inválido. Cole o JSON gerado pelo botão Copiar comprovante.";
    notify("Comprovante inválido. Cole o JSON gerado pelo botão Copiar comprovante.");
  }
}

async function copyHash(id) {
  const record = state.records.find((item) => item.id === id);
  if (!record) return;

  try {
    await navigator.clipboard.writeText(record.evidenceHash);
    notify("Hash copiado. Use-o para comparar a evidência original com o registro auditável.");
  } catch {
    notify(`Hash: ${record.evidenceHash}`);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setSubmitButtonState(state.contract ? "Aguardando carteira..." : "Registrando...", true);
  notify("Gerando hash da evidência e registrando...");
  try {
    const result = await submitLocal(new FormData(form));
    if (result?.persistedOnChain) {
      notify("Registro enviado para a blockchain.");
    } else if (result?.fallbackReason) {
      notify(`Registro salvo localmente. Blockchain indisponivel: ${result.fallbackReason}`, "warning");
    } else {
      notify("Registro criado em modo demonstração com hash verificável.");
    }
    setView("audit");
  } catch (error) {
    notify(`Falha no registro: ${error.message}`);
  } finally {
    setSubmitButtonState(t("submitImpact"), false);
  }
});

connectWalletButton.addEventListener("click", connectWallet);
window.addEventListener("eip6963:announceProvider", (event) => {
  if (!walletProviders.some((item) => item.info?.uuid === event.detail.info?.uuid)) {
    walletProviders.push(event.detail);
  }
});
window.dispatchEvent(new Event("eip6963:requestProvider"));

const initialProvider = getInjectedProvider();
if (initialProvider && typeof initialProvider.on === "function") {
  initialProvider.on("accountsChanged", async (accounts) => {
    state.account = accounts[0] || "";
    if (state.account) {
      state.signer = state.provider ? await state.provider.getSigner() : null;
      state.contract = CONTRACT_ADDRESS && state.signer && window.ethers ? new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, state.signer) : null;
      await updateWalletStatus();
    } else {
      disconnectWallet({ silent: true });
    }
  });

  initialProvider.on("chainChanged", () => {
    window.location.reload();
  });
}
document.querySelector("#seedDemo").addEventListener("click", async () => {
  await loadDemoRecords();
});
document.querySelector("#clearDemo").addEventListener("click", () => {
  state.records = [];
  save();
  render();
  notify("Registros locais removidos. Registros on-chain, quando existirem, permanecem auditáveis na blockchain.");
});
ledgerList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const validateId = button.dataset.validate;
  const certifyId = button.dataset.certify;
  const rejectId = button.dataset.reject;
  const reactivateId = button.dataset.reactivate;
  if (validateId) validateDemo(Number(validateId));
  if (certifyId) validateDemo(Number(certifyId), true);
  if (rejectId) rejectDemo(Number(rejectId));
  if (reactivateId) reactivateDemo(Number(reactivateId));
});
[searchFilter, statusFilter, metricFilter].forEach((filter) => {
  filter.addEventListener("input", render);
  filter.addEventListener("change", render);
});
languageSelect.value = state.language;
languageSelect.addEventListener("change", () => {
  state.language = languageSelect.value;
  localStorage.setItem("obraprime27-language", state.language);
  applyTranslations();
  syncTopbarHeight();
});
simpleModeButton.addEventListener("click", toggleSimpleMode);
refreshMethodologyButton.addEventListener("click", refreshMethodology);
verifyProofButton.addEventListener("click", verifyProof);
clearProofButton.addEventListener("click", () => {
  proofInput.value = "";
  proofResult.textContent = "Nenhum comprovante verificado ainda.";
});
document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("click", () => moveRobot(button.dataset.move));
});
document.addEventListener("keydown", (event) => {
  const activeView = document.querySelector('[data-view="game"].active');
  if (!activeView) return;
  const keys = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
  if (keys[event.key]) {
    event.preventDefault();
    moveRobot(keys[event.key]);
  }
});
restartGameButton.addEventListener("click", startGame);
recordGameImpactButton.addEventListener("click", recordGameImpact);
window.addEventListener("resize", syncTopbarHeight);
if (
  localStorage.getItem("obraprime27-simple-mode") === "1" ||
  localStorage.getItem("civisproof-simple-mode") === "1" ||
  localStorage.getItem("mangueproof-simple-mode") === "1"
) {
  document.body.classList.add("simple");
  simpleModeButton.textContent = t("technicalMode");
}
viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewTarget));
});
setView(
  localStorage.getItem("obraprime27-active-view") ||
  localStorage.getItem("civisproof-active-view") ||
  localStorage.getItem("mangueproof-active-view") ||
  "register"
);

applyTranslations();
syncTopbarHeight();
startGame();
