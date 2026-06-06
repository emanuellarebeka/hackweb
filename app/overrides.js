(function () {
  if (typeof TRANSLATIONS === "undefined") return;

  Object.assign(TRANSLATIONS.pt, {
    tagline: "",
    eyebrow: "Impacto social, ambiental e comunitário auditável",
    heroTitle: "Transforme manutenção de ativos essenciais em impacto verificável.",
    heroText: "Quando uma escola, hospital ou habitação social é protegida por uma obra crítica, o impacto não é só técnico: é comunitário. O ledger registra a execução, valida a evidência e certifica o resultado.",
    auditableImpact: "Impacto comunitário auditável",
    registeredActions: "entregas de impacto registradas nesta demonstração",
    moduleContract: "Projeto de impacto",
    moduleContractText: "Cada registro conecta a obra executada a um ativo essencial e a um benefício coletivo verificável.",
    moduleEvidence: "Evidência de impacto",
    moduleEvidenceText: "Laudo, fotos, hash e dossiê para provar resultado social, ambiental ou comunitário.",
    moduleCertificate: "Certificação de impacto",
    moduleCertificateText: "O smart contract emite comprovação quando a entrega é validada por responsáveis autorizados.",
    methodTitle: "Método de impacto verificável",
    methodText: "O fluxo conecta obra executada, serviço público protegido, evidência técnica e certificação auditável para comprovar impacto real.",
    impactIntelligence: "Inteligência patrimonial",
    impactIntelligenceHelp: "Resumo estratégico para enxergar impacto público, continuidade de serviço e confiança comunitária.",
    socialValue: "Valor social protegido estimado",
    auditableRanking: "Ranking de ativos auditável",
    auditableRankingHelp: "Ativos e contratos com maior execução validada.",
    territoryLabel: "Ativo essencial ou contrato",
    territoryHelp: "Exemplo: escola pública, hospital, habitação social, terminal urbano ou contrato de manutenção.",
    newRecordHelp: "Registre a obra executada e mostre qual impacto social, ambiental ou comunitário ela protege no ativo atendido.",
    actionTypeLabel: "Frente de impacto",
    submitImpact: "Registrar impacto",
    auditableHistoryHelp: "Valide entregas de impacto e acompanhe certificados emitidos.",
    wasteRemoved: "áreas essenciais protegidas em m2",
    proofVerifierTitle: "Verificador de comprovante de impacto",
    proofVerifierText: "Cole um comprovante do histórico para verificar se o impacto certificado mantém a mesma evidência.",
    loadExample: "Carregar 20 exemplos",
    navManual: "Manual",
    actionTypes: [
      "Acessibilidade e rota segura",
      "Cobertura e impermeabilização",
      "Drenagem e manejo pluvial",
      "Estrutura e reforço localizado",
      "Fachada, esquadrias e vedação",
      "Fundação e contenção preventiva",
      "Instalações elétricas essenciais",
      "Instalações hidrossanitárias e saneamento interno"
    ],
    metricOptions: [
      "área protegida em m2",
      "ambientes restabelecidos",
      "beneficiários diretos estimados",
      "documentos técnicos validados",
      "horas técnicas mobilizadas",
      "pontos de risco eliminados",
      "sistemas requalificados",
      "unidades ou pavimentos protegidos"
    ]
  });

  Object.assign(TRANSLATIONS.en, {
    tagline: "Ledger for critical building work and compliance",
    eyebrow: "Auditable construction for public and private assets",
    heroTitle: "Turn building execution into verifiable technical proof.",
    heroText: "A lightweight infrastructure to register critical building work, validate evidence and issue auditable smart contract certificates.",
    auditableImpact: "Auditable execution",
    registeredActions: "records registered in this demo",
    moduleContract: "Critical contract",
    moduleContractText: "Rules for hospitals, condos, schools, municipalities and sensitive assets.",
    moduleCertificate: "Compliance certificate",
    moduleCertificateText: "Certification is issued when the minimum delivery governance is met.",
    methodTitle: "Construction trust method",
    methodText: "The flow combines site governance, technical evidence, digital verification and auditable certification.",
    territoryHelp: "Example: hospital, condo, school, tower, municipality or maintenance contract.",
    wasteRemoved: "m2 treated",
    impactIntelligence: "Asset intelligence",
    impactIntelligenceHelp: "Strategic summary for governance, payment, warranty and compliance.",
    impactScore: "Compliance score",
    socialValue: "Protected asset value",
    auditableRankingHelp: "Assets and contracts with the highest validated execution.",
    actionTypes: ["Critical roof waterproofing", "Leak-point remediation", "Preventive structural joint inspection", "Localized reinforcement in technical area", "Auditable renovation package delivery"],
    metricOptions: ["m2 treated", "leak points solved", "protected units", "technical hours mobilized"]
  });

  Object.assign(TRANSLATIONS.es, {
    tagline: "Ledger para obra critica y conformidad constructiva",
    eyebrow: "Construccion auditable para activos publicos y privados",
    heroTitle: "Transforme la ejecucion de obra en prueba tecnica verificable.",
    heroText: "Una infraestructura ligera para registrar obra critica, validar evidencias y emitir certificados auditables por smart contract.",
    auditableImpact: "Ejecucion auditable",
    moduleContract: "Contrato critico",
    moduleContractText: "Reglas para hospitales, condominios, escuelas, municipios y activos sensibles.",
    moduleCertificate: "Certificacion de conformidad",
    moduleCertificateText: "La certificacion se emite cuando la gobernanza minima de la entrega se cumple.",
    methodTitle: "Metodo de confianza constructiva",
    methodText: "El flujo combina gobernanza de obra, prueba tecnica, verificacion digital y certificacion auditable.",
    territoryHelp: "Ejemplo: hospital, condominio, escuela, torre, municipio o contrato de mantenimiento.",
    wasteRemoved: "m2 tratados",
    impactIntelligence: "Inteligencia patrimonial",
    impactIntelligenceHelp: "Resumen estrategico para gobernanza, pago, garantia y compliance.",
    impactScore: "Indice de conformidad",
    socialValue: "Valor patrimonial protegido",
    auditableRankingHelp: "Activos y contratos con mayor ejecucion validada.",
    actionTypes: ["Impermeabilizacion critica de cubierta", "Correccion de puntos de filtracion", "Inspeccion preventiva de junta estructural", "Refuerzo localizado en area tecnica", "Entrega auditable de paquete de reforma"],
    metricOptions: ["m2 tratados", "puntos de filtracion resueltos", "unidades protegidas", "horas tecnicas movilizadas"]
  });

  Object.assign(TRANSLATIONS.fr, {
    tagline: "Ledger pour travaux critiques et conformite batiment",
    eyebrow: "Construction auditable pour actifs publics et prives",
    heroTitle: "Transformez l execution de chantier en preuve technique verifiable.",
    heroText: "Une infrastructure legere pour enregistrer des travaux critiques, valider les preuves et emettre des certificats auditables par smart contract.",
    auditableImpact: "Execution auditable",
    moduleContract: "Contrat critique",
    moduleContractText: "Regles pour hopitaux, coproprietes, ecoles, municipalites et actifs sensibles.",
    moduleCertificate: "Certificat de conformite",
    moduleCertificateText: "La certification est emise lorsque la gouvernance minimale de livraison est respectee.",
    methodTitle: "Methode de confiance chantier",
    methodText: "Le flux combine gouvernance de chantier, preuve technique, verification numerique et certification auditable.",
    territoryHelp: "Exemple : hopital, copropriete, ecole, tour, municipalite ou contrat de maintenance.",
    wasteRemoved: "m2 traites",
    impactIntelligence: "Intelligence patrimoniale",
    impactIntelligenceHelp: "Resume strategique pour gouvernance, paiement, garantie et conformite.",
    impactScore: "Score de conformite",
    socialValue: "Valeur patrimoniale protegee",
    auditableRankingHelp: "Actifs et contrats avec la plus forte execution validee.",
    actionTypes: ["Etancheite critique de toiture", "Correction des points d infiltration", "Inspection preventive de joint structurel", "Renfort localise en zone technique", "Livraison auditable de lot de renovation"],
    metricOptions: ["m2 traites", "points d infiltration resolus", "unites protegees", "heures techniques mobilisees"]
  });

  const metricCatalog = {
    area_protegida_m2: "área protegida em m2",
    ambientes_restabelecidos: "ambientes restabelecidos",
    beneficiarios_diretos_estimados: "beneficiários diretos estimados",
    documentos_tecnicos_validados: "documentos técnicos validados",
    horas_tecnicas_mobilizadas: "horas técnicas mobilizadas",
    pontos_de_risco_eliminados: "pontos de risco eliminados",
    sistemas_requalificados: "sistemas requalificados",
    unidades_pavimentos_protegidos: "unidades ou pavimentos protegidos"
  };

  const legacyMetricMap = {
    kg_residuo_removido: "area_protegida_m2",
    pontos_criticos_tratados: "horas_tecnicas_mobilizadas",
    familias_alcancadas: "beneficiarios_diretos_estimados",
    horas_voluntarias: "unidades_pavimentos_protegidos",
    area_liberada_m2: "area_protegida_m2",
    pontos_criticos_sanados: "pontos_de_risco_eliminados"
  };

  Object.entries(metricCatalog).forEach(([metricId, label]) => {
    metricLabels[metricId] = label;
  });

  const expandedMetricDefinitions = [
    { id: "ambientes_adequados_operacao", label: "ambientes adequados \u00e0 opera\u00e7\u00e3o" },
    { id: "ambientes_conforto_restabelecido", label: "ambientes com conforto restabelecido" },
    { id: "ambientes_liberados_uso", label: "ambientes liberados para uso" },
    { id: "area_acessibilidade_qualificada_m2", label: "\u00e1rea com acessibilidade qualificada em m\u00b2" },
    { id: "area_drenagem_restabelecida_m2", label: "\u00e1rea com drenagem restabelecida em m\u00b2" },
    { id: "area_estanqueidade_recuperada_m2", label: "\u00e1rea com estanqueidade recuperada em m\u00b2" },
    { id: "area_protecao_superficial_m2", label: "\u00e1rea com prote\u00e7\u00e3o superficial executada em m\u00b2" },
    { id: "area_vedacao_recomposta_m2", label: "\u00e1rea com veda\u00e7\u00e3o recomposta em m\u00b2" },
    { id: "area_impermeabilizada_m2", label: "\u00e1rea impermeabilizada em m\u00b2" },
    { id: "area_protegida_m2", label: "\u00e1rea protegida ou recuperada em m\u00b2" },
    { id: "blocos_atendidos", label: "blocos atendidos" },
    { id: "bombas_motobomba_restabelecidos", label: "bombas ou conjuntos motobomba restabelecidos" },
    { id: "circuitos_quadros_regularizados", label: "circuitos ou quadros regularizados" },
    { id: "componentes_substituidos_requalificados", label: "componentes substitu\u00eddos ou requalificados" },
    { id: "dossies_tecnicos_validados", label: "dossi\u00eas t\u00e9cnicos validados" },
    { id: "ensaios_laudos_inspecoes_concluidos", label: "ensaios, laudos ou inspe\u00e7\u00f5es conclu\u00eddos" },
    { id: "equipamentos_criticos_restabelecidos", label: "equipamentos cr\u00edticos restabelecidos" },
    { id: "rotas_seguras_liberadas", label: "escadas, rampas ou rotas seguras liberadas" },
    { id: "estruturas_reforcadas", label: "estruturas ou elementos refor\u00e7ados" },
    { id: "fachadas_recompostas_m2", label: "fachadas ou panos recompostos em m\u00b2" },
    { id: "horas_tecnicas_aplicadas", label: "horas t\u00e9cnicas aplicadas" },
    { id: "nao_conformidades_sanadas", label: "n\u00e3o conformidades sanadas" },
    { id: "pavimentos_atendidos", label: "pavimentos atendidos" },
    { id: "pontos_drenagem_requalificados", label: "pontos de capta\u00e7\u00e3o ou drenagem requalificados" },
    { id: "pontos_consumo_restabelecidos", label: "pontos de consumo restabelecidos" },
    { id: "pontos_infiltracao_tratados", label: "pontos de infiltra\u00e7\u00e3o tratados" },
    { id: "pontos_inspecao_executados", label: "pontos de inspe\u00e7\u00e3o executados" },
    { id: "postos_trabalho_protegidos", label: "postos de trabalho protegidos" },
    { id: "reservatorios_prumadas_regularizados", label: "reservat\u00f3rios, barriletes ou prumadas regularizados" },
    { id: "salas_tecnicas_organizadas", label: "salas t\u00e9cnicas ou shafts organizados" },
    { id: "setores_operacionais_restabelecidos", label: "setores operacionais restabelecidos" },
    { id: "sistemas_requalificados", label: "sistemas restabelecidos ou requalificados" },
    { id: "subsistemas_seguranca_regularizados", label: "subsistemas de seguran\u00e7a regularizados" },
    { id: "taludes_estabilizados", label: "taludes, conten\u00e7\u00f5es ou frentes estabilizadas" },
    { id: "trechos_tubulacao_substituidos", label: "trechos de tubula\u00e7\u00e3o substitu\u00eddos" },
    { id: "unidades_pavimentos_liberados", label: "unidades, blocos ou pavimentos liberados" },
    { id: "usuarios_beneficiados_estimados", label: "usu\u00e1rios beneficiados estimados" },
    { id: "vaos_esquadrias_requalificados", label: "v\u00e3os, portas ou esquadrias requalificados" },
    { id: "volumes_reservacao_recuperados_m3", label: "volumes de reserva\u00e7\u00e3o recuperados em m\u00b3" },
    { id: "zonas_sinalizadas_demarcadas", label: "zonas sinalizadas ou demarcadas" }
  ];

  const metricGroups = {
    acessibilidade: ["area_acessibilidade_qualificada_m2", "rotas_seguras_liberadas", "nao_conformidades_sanadas", "usuarios_beneficiados_estimados", "ambientes_liberados_uso"],
    alvenaria: ["area_vedacao_recomposta_m2", "componentes_substituidos_requalificados", "nao_conformidades_sanadas", "ambientes_liberados_uso", "dossies_tecnicos_validados"],
    cobertura: ["area_impermeabilizada_m2", "area_estanqueidade_recuperada_m2", "pontos_infiltracao_tratados", "dossies_tecnicos_validados", "usuarios_beneficiados_estimados"],
    drenagem: ["area_drenagem_restabelecida_m2", "pontos_drenagem_requalificados", "nao_conformidades_sanadas", "sistemas_requalificados", "usuarios_beneficiados_estimados"],
    estrutura: ["estruturas_reforcadas", "horas_tecnicas_aplicadas", "nao_conformidades_sanadas", "ensaios_laudos_inspecoes_concluidos", "pavimentos_atendidos"],
    esquadrias: ["vaos_esquadrias_requalificados", "componentes_substituidos_requalificados", "ambientes_conforto_restabelecido", "dossies_tecnicos_validados", "nao_conformidades_sanadas"],
    fachada: ["fachadas_recompostas_m2", "area_protecao_superficial_m2", "area_vedacao_recomposta_m2", "dossies_tecnicos_validados", "ambientes_conforto_restabelecido"],
    fundacao: ["taludes_estabilizados", "horas_tecnicas_aplicadas", "ensaios_laudos_inspecoes_concluidos", "nao_conformidades_sanadas", "pavimentos_atendidos"],
    eletrica: ["circuitos_quadros_regularizados", "equipamentos_criticos_restabelecidos", "subsistemas_seguranca_regularizados", "dossies_tecnicos_validados", "ambientes_liberados_uso"],
    hidrossanitaria: ["pontos_consumo_restabelecidos", "reservatorios_prumadas_regularizados", "trechos_tubulacao_substituidos", "usuarios_beneficiados_estimados", "volumes_reservacao_recuperados_m3"],
    incendio: ["subsistemas_seguranca_regularizados", "rotas_seguras_liberadas", "dossies_tecnicos_validados", "nao_conformidades_sanadas", "ambientes_liberados_uso"],
    sinalizacao: ["zonas_sinalizadas_demarcadas", "rotas_seguras_liberadas", "usuarios_beneficiados_estimados", "postos_trabalho_protegidos", "nao_conformidades_sanadas"],
    pisos: ["area_protegida_m2", "ambientes_liberados_uso", "nao_conformidades_sanadas", "componentes_substituidos_requalificados", "postos_trabalho_protegidos"],
    sistemas: ["sistemas_requalificados", "equipamentos_criticos_restabelecidos", "salas_tecnicas_organizadas", "dossies_tecnicos_validados", "setores_operacionais_restabelecidos"],
    urbanizacao: ["area_protegida_m2", "zonas_sinalizadas_demarcadas", "blocos_atendidos", "usuarios_beneficiados_estimados", "nao_conformidades_sanadas"]
  };

  const serviceCatalog = {};
  const metricOrder = [];

const expandedServiceDefinitions = [
    { id: "acabamentos_cimenticios_regularizacao_preparo_base", label: "Acabamentos ciment\u00edcios, regulariza\u00e7\u00e3o e preparo de base", metrics: metricGroups.pisos, defaultMetric: "area_protecao_superficial_m2", minValue: 40 },
    { id: "acessibilidade_circulacao_rota_segura", label: "Acessibilidade, circula\u00e7\u00e3o e rota segura", metrics: metricGroups.acessibilidade, defaultMetric: "area_acessibilidade_qualificada_m2", minValue: 40 },
    { id: "alvenaria_vedacao_recomposicao", label: "Alvenaria de veda\u00e7\u00e3o e recomposi\u00e7\u00e3o", metrics: metricGroups.alvenaria, defaultMetric: "area_vedacao_recomposta_m2", minValue: 36 },
    { id: "andaimes_linhas_vida_protecao_coletiva", label: "Andaimes, linhas de vida e prote\u00e7\u00e3o coletiva", metrics: metricGroups.sinalizacao, defaultMetric: "postos_trabalho_protegidos", minValue: 6 },
    { id: "apoio_cobertura_estrutura_secundaria", label: "Apoio de cobertura e estrutura secund\u00e1ria", metrics: metricGroups.cobertura, defaultMetric: "area_estanqueidade_recuperada_m2", minValue: 28 },
    { id: "armacao_formas_concretagem_complementar", label: "Arma\u00e7\u00e3o, formas e concretagem complementar", metrics: metricGroups.estrutura, defaultMetric: "estruturas_reforcadas", minValue: 3 },
    { id: "aterramento_spda_protecao_surtos", label: "Aterramento, SPDA e prote\u00e7\u00e3o contra surtos", metrics: metricGroups.eletrica, defaultMetric: "circuitos_quadros_regularizados", minValue: 3 },
    { id: "automacao_predial_comandos_essenciais", label: "Automa\u00e7\u00e3o predial e comandos essenciais", metrics: metricGroups.sistemas, defaultMetric: "sistemas_requalificados", minValue: 2 },
    { id: "bacias_metais_loucas_sanitarias", label: "Bacias, metais e lou\u00e7as sanit\u00e1rias", metrics: metricGroups.hidrossanitaria, defaultMetric: "pontos_consumo_restabelecidos", minValue: 8 },
    { id: "banheiros_vestiarios_adequacao_funcional", label: "Banheiros, vesti\u00e1rios e adequa\u00e7\u00e3o funcional", metrics: metricGroups.hidrossanitaria, defaultMetric: "ambientes_adequados_operacao", minValue: 4 },
    { id: "barrilete_prumadas_distribuicao_hidraulica", label: "Barrilete, prumadas e distribui\u00e7\u00e3o hidr\u00e1ulica", metrics: metricGroups.hidrossanitaria, defaultMetric: "reservatorios_prumadas_regularizados", minValue: 3 },
    { id: "bombas_recalque_drenagem_subsolo", label: "Bombas de recalque e drenagem de subsolo", metrics: metricGroups.hidrossanitaria, defaultMetric: "bombas_motobomba_restabelecidos", minValue: 2 },
    { id: "brises_sombreamento_protecao_solar", label: "Brises, elementos de sombreamento e prote\u00e7\u00e3o solar", metrics: metricGroups.esquadrias, defaultMetric: "vaos_esquadrias_requalificados", minValue: 12 },
    { id: "cabines_medicao_paineis_alimentacao_dedicada", label: "Cabines de medi\u00e7\u00e3o, pain\u00e9is e alimenta\u00e7\u00e3o dedicada", metrics: metricGroups.eletrica, defaultMetric: "equipamentos_criticos_restabelecidos", minValue: 1 },
    { id: "caixas_inspecao_passagem_drenos", label: "Caixas de inspe\u00e7\u00e3o, passagem e drenos", metrics: metricGroups.drenagem, defaultMetric: "pontos_drenagem_requalificados", minValue: 6 },
    { id: "calcadas_pisos_externos_travessias_acessiveis", label: "Cal\u00e7adas, pisos externos e travessias acess\u00edveis", metrics: metricGroups.acessibilidade, defaultMetric: "area_acessibilidade_qualificada_m2", minValue: 60 },
    { id: "calhas_rufos_condutores_aguas_pluviais", label: "Calhas, rufos e condutores de \u00e1guas pluviais", metrics: metricGroups.cobertura, defaultMetric: "pontos_infiltracao_tratados", minValue: 10 },
    { id: "cftv_controle_acesso_monitoramento", label: "CFTV, controle de acesso e monitoramento", metrics: metricGroups.sistemas, defaultMetric: "subsistemas_seguranca_regularizados", minValue: 2 },
    { id: "chapisco_emboco_reboco_regularizacao", label: "Chapisco, embo\u00e7o, reboco e regulariza\u00e7\u00e3o", metrics: metricGroups.alvenaria, defaultMetric: "area_vedacao_recomposta_m2", minValue: 32 },
    { id: "cobogos_elementos_vazados_ventilacao_permanente", label: "Cobog\u00f3s, elementos vazados e ventila\u00e7\u00e3o permanente", metrics: metricGroups.esquadrias, defaultMetric: "componentes_substituidos_requalificados", minValue: 10 },
    { id: "cobertura_impermeabilizacao_tratamento_infiltracao", label: "Cobertura, impermeabiliza\u00e7\u00e3o e tratamento de infiltra\u00e7\u00e3o", metrics: metricGroups.cobertura, defaultMetric: "area_impermeabilizada_m2", minValue: 120 },
    { id: "cobertura_metalica_telhas_termoacusticas_fixacao", label: "Cobertura met\u00e1lica, telhas termoac\u00fasticas e fixa\u00e7\u00e3o", metrics: metricGroups.cobertura, defaultMetric: "area_estanqueidade_recuperada_m2", minValue: 55 },
    { id: "combate_incendio_sinalizacao_emergencia", label: "Combate a inc\u00eandio e sinaliza\u00e7\u00e3o de emerg\u00eancia", metrics: metricGroups.incendio, defaultMetric: "subsistemas_seguranca_regularizados", minValue: 3 },
    { id: "comunicacao_visual_sinalizacao_wayfinding", label: "Comunica\u00e7\u00e3o visual, sinaliza\u00e7\u00e3o t\u00e9cnica e wayfinding", metrics: metricGroups.sinalizacao, defaultMetric: "zonas_sinalizadas_demarcadas", minValue: 6 },
    { id: "contencao_estabilizacao_taludes_solo", label: "Conten\u00e7\u00e3o, estabiliza\u00e7\u00e3o de taludes e solo", metrics: metricGroups.fundacao, defaultMetric: "taludes_estabilizados", minValue: 2 },
    { id: "controle_fumaca_exaustao_ventilacao_tecnica", label: "Controle de fuma\u00e7a, exaust\u00e3o e ventila\u00e7\u00e3o t\u00e9cnica", metrics: metricGroups.sistemas, defaultMetric: "sistemas_requalificados", minValue: 2 },
    { id: "corrimaos_barras_apoio_acessorios_acessibilidade", label: "Corrim\u00e3os, barras de apoio e acess\u00f3rios de acessibilidade", metrics: metricGroups.acessibilidade, defaultMetric: "rotas_seguras_liberadas", minValue: 6 },
    { id: "desempenho_termico_isolamento_barreiras_refletivas", label: "Desempenho t\u00e9rmico, isolamento e barreiras refletivas", metrics: metricGroups.fachada, defaultMetric: "ambientes_conforto_restabelecido", minValue: 5 },
    { id: "drenagem_captacao_manejo_pluvial", label: "Drenagem, capta\u00e7\u00e3o e manejo pluvial", metrics: metricGroups.drenagem, defaultMetric: "area_drenagem_restabelecida_m2", minValue: 80 },
    { id: "drenos_profundos_canaletas_rebaixamento_lencol", label: "Drenos profundos, canaletas e rebaixamento de len\u00e7ol", metrics: metricGroups.drenagem, defaultMetric: "sistemas_requalificados", minValue: 2 },
    { id: "elevadores_plataformas_transporte_vertical", label: "Elevadores, plataformas e transporte vertical", metrics: metricGroups.sistemas, defaultMetric: "equipamentos_criticos_restabelecidos", minValue: 1 },
    { id: "elevatoria_recalque_automacao_hidraulica", label: "Elevat\u00f3ria, recalque e automa\u00e7\u00e3o hidr\u00e1ulica", metrics: metricGroups.hidrossanitaria, defaultMetric: "bombas_motobomba_restabelecidos", minValue: 2 },
    { id: "envidracamento_vedacao_estrutural_pelicula_protecao", label: "Envidra\u00e7amento, veda\u00e7\u00e3o estrutural e pel\u00edcula de prote\u00e7\u00e3o", metrics: metricGroups.esquadrias, defaultMetric: "vaos_esquadrias_requalificados", minValue: 12 },
    { id: "escadas_patamares_adequacao_degraus", label: "Escadas, patamares e adequa\u00e7\u00e3o de degraus", metrics: metricGroups.acessibilidade, defaultMetric: "rotas_seguras_liberadas", minValue: 3 },
    { id: "esquadrias_ferragens_controle_acesso", label: "Esquadrias, ferragens e controle de acesso", metrics: metricGroups.esquadrias, defaultMetric: "vaos_esquadrias_requalificados", minValue: 10 },
    { id: "estanqueidade_floreiras_jardineiras_lajes_tecnicas", label: "Estanqueidade de floreiras, jardineiras e lajes t\u00e9cnicas", metrics: metricGroups.cobertura, defaultMetric: "area_estanqueidade_recuperada_m2", minValue: 24 },
    { id: "estrutura_estabilizacao_reforco_localizado", label: "Estrutura, estabiliza\u00e7\u00e3o e refor\u00e7o localizado", metrics: metricGroups.estrutura, defaultMetric: "estruturas_reforcadas", minValue: 4 },
    { id: "estruturas_metalicas_soldagem_tratamento_anticorrosivo", label: "Estruturas met\u00e1licas, soldagem e tratamento anticorrosivo", metrics: metricGroups.estrutura, defaultMetric: "componentes_substituidos_requalificados", minValue: 8 },
    { id: "exaustao_cozinha_dutos_coifas_tecnicas", label: "Exaust\u00e3o de cozinha, dutos e coifas t\u00e9cnicas", metrics: metricGroups.sistemas, defaultMetric: "setores_operacionais_restabelecidos", minValue: 2 },
    { id: "fachada_vedacao_desempenho_termico", label: "Fachada, veda\u00e7\u00e3o e desempenho t\u00e9rmico", metrics: metricGroups.fachada, defaultMetric: "fachadas_recompostas_m2", minValue: 48 },
    { id: "fechamento_metalico_gradis_portoes", label: "Fechamento met\u00e1lico, gradis e port\u00f5es", metrics: metricGroups.urbanizacao, defaultMetric: "blocos_atendidos", minValue: 2 },
    { id: "fechamentos_internos_divisorias_compartimentacao", label: "Fechamentos internos, divis\u00f3rias e compartimenta\u00e7\u00e3o", metrics: metricGroups.alvenaria, defaultMetric: "area_vedacao_recomposta_m2", minValue: 30 },
    { id: "forros_sancas_recomposicao_acabamento", label: "Forros, sancas e recomposi\u00e7\u00e3o de acabamento", metrics: metricGroups.pisos, defaultMetric: "ambientes_liberados_uso", minValue: 4 },
    { id: "fundacoes_recalque_prevencao_geotecnica", label: "Funda\u00e7\u00f5es, recalque e preven\u00e7\u00e3o geot\u00e9cnica", metrics: metricGroups.fundacao, defaultMetric: "ensaios_laudos_inspecoes_concluidos", minValue: 2 },
    { id: "gabioes_muros_arrimo_contencao_periferica", label: "Gabi\u00f5es, muros de arrimo e conten\u00e7\u00e3o perif\u00e9rica", metrics: metricGroups.fundacao, defaultMetric: "taludes_estabilizados", minValue: 2 },
    { id: "geradores_nobreaks_energia_contingencia", label: "Geradores, nobreaks e energia de conting\u00eancia", metrics: metricGroups.eletrica, defaultMetric: "equipamentos_criticos_restabelecidos", minValue: 2 },
    { id: "iluminacao_interna_externa_emergencia", label: "Ilumina\u00e7\u00e3o interna, externa e de emerg\u00eancia", metrics: metricGroups.eletrica, defaultMetric: "ambientes_liberados_uso", minValue: 6 },
    { id: "impermeabilizacao_areas_molhadas_sanitarias", label: "Impermeabiliza\u00e7\u00e3o de \u00e1reas molhadas e sanit\u00e1rias", metrics: metricGroups.cobertura, defaultMetric: "area_impermeabilizada_m2", minValue: 40 },
    { id: "impermeabilizacao_reservatorios_caixas_agua_cisternas", label: "Impermeabiliza\u00e7\u00e3o de reservat\u00f3rios, caixas d'\u00e1gua e cisternas", metrics: metricGroups.hidrossanitaria, defaultMetric: "volumes_reservacao_recuperados_m3", minValue: 12 },
    { id: "infraestrutura_seca_eletrocalhas_leitos_cabos", label: "Infraestrutura seca, eletrocalhas e leitos de cabos", metrics: metricGroups.eletrica, defaultMetric: "circuitos_quadros_regularizados", minValue: 4 },
    { id: "inspecao_predial_diagnostico_ensaios_complementares", label: "Inspe\u00e7\u00e3o predial, diagn\u00f3stico e ensaios complementares", metrics: metricGroups.estrutura, defaultMetric: "ensaios_laudos_inspecoes_concluidos", minValue: 2 },
    { id: "instalacoes_eletricas_essenciais_seguranca_operacional", label: "Instala\u00e7\u00f5es el\u00e9tricas essenciais e seguran\u00e7a operacional", metrics: metricGroups.eletrica, defaultMetric: "circuitos_quadros_regularizados", minValue: 4 },
    { id: "instalacoes_hidrossanitarias_saneamento_reservacao", label: "Instala\u00e7\u00f5es hidrossanit\u00e1rias, saneamento interno e reserva\u00e7\u00e3o", metrics: metricGroups.hidrossanitaria, defaultMetric: "pontos_consumo_restabelecidos", minValue: 10 },
    { id: "juntas_dilatacao_selantes_mastiques_tecnicos", label: "Juntas de dilata\u00e7\u00e3o, selantes e mastiques t\u00e9cnicos", metrics: metricGroups.fachada, defaultMetric: "nao_conformidades_sanadas", minValue: 12 },
    { id: "laboratorios_bancadas_tecnicas_utilidades", label: "Laborat\u00f3rios, bancadas t\u00e9cnicas e utilidades", metrics: metricGroups.sistemas, defaultMetric: "postos_trabalho_protegidos", minValue: 4 },
    { id: "loucas_bancadas_acessorios_copa_expurgo", label: "Lou\u00e7as, bancadas e acess\u00f3rios de copa e expurgo", metrics: metricGroups.hidrossanitaria, defaultMetric: "componentes_substituidos_requalificados", minValue: 6 },
    { id: "muros_alambrados_fechamento_divisas", label: "Muros, alambrados e fechamento de divisas", metrics: metricGroups.urbanizacao, defaultMetric: "area_protegida_m2", minValue: 50 },
    { id: "paineis_drywall_forracao_leve_tratamento_juntas", label: "Pain\u00e9is drywall, forra\u00e7\u00e3o leve e tratamento de juntas", metrics: metricGroups.alvenaria, defaultMetric: "area_vedacao_recomposta_m2", minValue: 28 },
    { id: "paisagismo_funcional_biovaletas_drenagem_verde", label: "Paisagismo funcional, biovaletas e drenagem verde", metrics: metricGroups.urbanizacao, defaultMetric: "area_drenagem_restabelecida_m2", minValue: 70 },
    { id: "pavimentacao_intertravada_guias_sarjetas", label: "Pavimenta\u00e7\u00e3o intertravada, guias e sarjetas", metrics: metricGroups.urbanizacao, defaultMetric: "area_protegida_m2", minValue: 90 },
    { id: "pintura_tecnica_demarcacao_protecao_superficial", label: "Pintura t\u00e9cnica, demarca\u00e7\u00e3o e prote\u00e7\u00e3o superficial", metrics: metricGroups.sinalizacao, defaultMetric: "area_protecao_superficial_m2", minValue: 50 },
    { id: "pisos_internos_revestimentos_paginacao", label: "Pisos internos, revestimentos e pagina\u00e7\u00e3o", metrics: metricGroups.pisos, defaultMetric: "area_protegida_m2", minValue: 45 },
    { id: "portas_corta_fogo_rotas_abandono", label: "Portas corta-fogo e rotas de abandono", metrics: metricGroups.incendio, defaultMetric: "rotas_seguras_liberadas", minValue: 3 },
    { id: "rede_dados_voz_conectividade_essencial", label: "Rede de dados, voz e conectividade essencial", metrics: metricGroups.sistemas, defaultMetric: "setores_operacionais_restabelecidos", minValue: 2 },
    { id: "reforco_fundacoes_microestacas_injecoes", label: "Refor\u00e7o de funda\u00e7\u00f5es com microestacas e inje\u00e7\u00f5es", metrics: metricGroups.fundacao, defaultMetric: "estruturas_reforcadas", minValue: 2 },
    { id: "reservacao_barramento_hidraulico_pressurizacao", label: "Reserva\u00e7\u00e3o, barramento hidr\u00e1ulico e pressuriza\u00e7\u00e3o", metrics: metricGroups.hidrossanitaria, defaultMetric: "reservatorios_prumadas_regularizados", minValue: 2 },
    { id: "revestimentos_argamassados_recuperacao_superficial", label: "Revestimentos argamassados e recupera\u00e7\u00e3o superficial", metrics: metricGroups.fachada, defaultMetric: "area_protecao_superficial_m2", minValue: 42 },
    { id: "salas_tecnicas_shafts_infraestrutura", label: "Salas t\u00e9cnicas, shafts e organiza\u00e7\u00e3o de infraestrutura", metrics: metricGroups.sistemas, defaultMetric: "salas_tecnicas_organizadas", minValue: 2 },
    { id: "seguranca_uso_guarda_corpos_corrimaos", label: "Seguran\u00e7a de uso, guarda-corpos e corrim\u00e3os", metrics: metricGroups.acessibilidade, defaultMetric: "rotas_seguras_liberadas", minValue: 3 },
    { id: "serralheria_tecnica_guarda_corpos_suportes", label: "Serralheria t\u00e9cnica, guarda-corpos e suportes", metrics: metricGroups.esquadrias, defaultMetric: "componentes_substituidos_requalificados", minValue: 6 },
    { id: "sistemas_climatizacao_exaustao_renovacao_ar", label: "Sistemas de climatiza\u00e7\u00e3o, exaust\u00e3o e renova\u00e7\u00e3o de ar", metrics: metricGroups.sistemas, defaultMetric: "setores_operacionais_restabelecidos", minValue: 2 },
    { id: "sistemas_fotovoltaicos_microgeracao", label: "Sistemas fotovoltaicos e microgera\u00e7\u00e3o", metrics: metricGroups.eletrica, defaultMetric: "equipamentos_criticos_restabelecidos", minValue: 1 },
    { id: "sistemas_gas_medicao_ventilacao_permanente", label: "Sistemas de g\u00e1s, medi\u00e7\u00e3o e ventila\u00e7\u00e3o permanente", metrics: metricGroups.sistemas, defaultMetric: "sistemas_requalificados", minValue: 2 },
    { id: "sistemas_pressurizados_bombas_casa_maquinas", label: "Sistemas pressurizados, bombas e casa de m\u00e1quinas", metrics: metricGroups.hidrossanitaria, defaultMetric: "bombas_motobomba_restabelecidos", minValue: 2 },
    { id: "subestacao_quadros_distribuicao_estabilizada", label: "Subesta\u00e7\u00e3o, quadros e distribui\u00e7\u00e3o estabilizada", metrics: metricGroups.eletrica, defaultMetric: "circuitos_quadros_regularizados", minValue: 2 },
    { id: "telhados_verdes_protecao_mecanica_drenante", label: "Telhados verdes, prote\u00e7\u00e3o mec\u00e2nica e camada drenante", metrics: metricGroups.cobertura, defaultMetric: "area_protegida_m2", minValue: 35 },
    { id: "transformadores_protecao_adequacao_entrada", label: "Transformadores, prote\u00e7\u00e3o e adequa\u00e7\u00e3o de entrada", metrics: metricGroups.eletrica, defaultMetric: "equipamentos_criticos_restabelecidos", minValue: 1 },
    { id: "tratamento_acustico_isolamento_funcional", label: "Tratamento ac\u00fastico e isolamento funcional", metrics: metricGroups.fachada, defaultMetric: "ambientes_conforto_restabelecido", minValue: 3 },
    { id: "tubulacoes_incendio_hidrantes_abrigos_mangueiras", label: "Tubula\u00e7\u00f5es de inc\u00eandio, hidrantes e abrigos de mangueiras", metrics: metricGroups.incendio, defaultMetric: "subsistemas_seguranca_regularizados", minValue: 2 },
    { id: "urbanizacao_cercamento_controle_perimetral", label: "Urbaniza\u00e7\u00e3o, cercamento e controle perimetral", metrics: metricGroups.urbanizacao, defaultMetric: "area_protegida_m2", minValue: 75 }
  ];

  Object.keys(metricCatalog).forEach((key) => {
    delete metricCatalog[key];
    delete metricLabels[key];
  });

  expandedMetricDefinitions.forEach(({ id, label }) => {
    metricCatalog[id] = label;
    metricLabels[id] = label;
  });

  const simpleUnitDefinitions = [
    { id: "metro_quadrado", label: "m2" },
    { id: "metro_linear", label: "m" },
    { id: "metro_cubico", label: "m3" },
    { id: "unidade_item", label: "unidade" },
    { id: "ponto_item", label: "ponto" },
    { id: "conjunto_item", label: "conjunto" },
    { id: "quilograma_item", label: "kg" },
    { id: "hora_tecnica", label: "hora" }
  ];

  Object.keys(metricCatalog).forEach((key) => {
    delete metricCatalog[key];
    delete metricLabels[key];
  });

  simpleUnitDefinitions.forEach(({ id, label }) => {
    metricCatalog[id] = label;
    metricLabels[id] = label;
  });

  Object.keys(serviceCatalog).forEach((key) => {
    delete serviceCatalog[key];
  });

  expandedServiceDefinitions.forEach(({ id, label, metrics, defaultMetric, minValue }) => {
    serviceCatalog[id] = {
      pt: label,
      en: label,
      es: label,
      fr: label,
      metrics,
      defaultMetric,
      minValue
    };
  });

  let simpleServiceDefinitions = [
    { id: "alvenaria", label: "Alvenaria" },
    { id: "cobertura", label: "Cobertura" },
    { id: "concreto", label: "Concreto" },
    { id: "drenagem", label: "Drenagem" },
    { id: "esquadrias", label: "Esquadrias" },
    { id: "estrutura", label: "Estrutura" },
    { id: "fundacoes", label: "Fundacoes" },
    { id: "hidraulica", label: "Instalacoes hidraulicas" },
    { id: "eletrica", label: "Instalacoes eletricas" },
    { id: "impermeabilizacao", label: "Impermeabilizacao" },
    { id: "incendio", label: "Prevencao e combate a incendio" },
    { id: "pavimentacao", label: "Pavimentacao" },
    { id: "pintura", label: "Pintura" },
    { id: "pisos_revestimentos", label: "Pisos e revestimentos" },
    { id: "reforma_geral", label: "Reforma geral" },
    { id: "serralheria", label: "Serralheria" },
    { id: "sinalizacao", label: "Sinalizacao" },
    { id: "telhado", label: "Telhado" },
    { id: "terraplenagem", label: "Terraplenagem" },
    { id: "urbanizacao", label: "Urbanizacao" }
  ];

  const commonUnitIds = simpleUnitDefinitions.map((item) => item.id);

  Object.keys(serviceCatalog).forEach((key) => {
    delete serviceCatalog[key];
  });

  simpleServiceDefinitions.forEach(({ id, label }) => {
    serviceCatalog[id] = {
      pt: label,
      en: label,
      es: label,
      fr: label,
      metrics: commonUnitIds,
      defaultMetric: "metro_quadrado",
      minValue: 1
    };
  });

  async function loadSimpleServicesFromJson() {
    try {
      const response = await fetch("services.json", { cache: "no-store" });
      if (!response.ok) return;
      const services = await response.json();
      if (!Array.isArray(services) || !services.length) return;

      simpleServiceDefinitions = services
        .filter((item) => item && item.id && item.label)
        .map((item) => ({ id: String(item.id), label: String(item.label) }));

      Object.keys(serviceCatalog).forEach((key) => {
        delete serviceCatalog[key];
      });

      simpleServiceDefinitions.forEach(({ id, label }) => {
        serviceCatalog[id] = {
          pt: label,
          en: label,
          es: label,
          fr: label,
          metrics: commonUnitIds,
          defaultMetric: "metro_quadrado",
          minValue: 1
        };
      });

      Object.assign(TRANSLATIONS.pt, {
        actionTypes: simpleServiceDefinitions.map((item) => item.label)
      });

      configureActionOptions();
      syncActionDrivenFields(true);
    } catch {
      // Keep local fallback list when JSON is unavailable.
    }
  }

  metricOrder.splice(0, metricOrder.length, ...commonUnitIds);

  Object.assign(TRANSLATIONS.pt, {
    newRecordHelp: "Preencha somente o essencial.",
    actionTypeLabel: "Tipo de serviço",
    metricLabel: "Unidade",
    actionTypes: simpleServiceDefinitions.map((item) => item.label),
    metricOptions: simpleUnitDefinitions.map((item) => item.label)
  });

  const legacyServiceCatalog = {
    acessibilidade_rota_segura: {
      pt: "Acessibilidade e rota segura",
      en: "Accessibility and safe route",
      es: "Accesibilidad y ruta segura",
      fr: "Accessibilite et parcours sur",
      metrics: ["ambientes_restabelecidos", "beneficiarios_diretos_estimados", "pontos_de_risco_eliminados"],
      defaultMetric: "ambientes_restabelecidos",
      minValue: 2
    },
    cobertura_impermeabilizacao: {
      pt: "Cobertura e impermeabilização",
      en: "Roofing and waterproofing",
      es: "Cubierta e impermeabilizacion",
      fr: "Couverture et impermeabilisation",
      metrics: ["area_protegida_m2", "beneficiarios_diretos_estimados", "pontos_de_risco_eliminados"],
      defaultMetric: "area_protegida_m2",
      minValue: 120
    },
    drenagem_manejo_pluvial: {
      pt: "Drenagem e manejo pluvial",
      en: "Drainage and stormwater management",
      es: "Drenaje y manejo pluvial",
      fr: "Drainage et gestion pluviale",
      metrics: ["area_protegida_m2", "pontos_de_risco_eliminados", "sistemas_requalificados"],
      defaultMetric: "pontos_de_risco_eliminados",
      minValue: 3
    },
    estrutura_reforco_localizado: {
      pt: "Estrutura e reforço localizado",
      en: "Structure and localized reinforcement",
      es: "Estructura y refuerzo localizado",
      fr: "Structure et renfort localise",
      metrics: ["horas_tecnicas_mobilizadas", "pontos_de_risco_eliminados", "unidades_pavimentos_protegidos"],
      defaultMetric: "horas_tecnicas_mobilizadas",
      minValue: 24
    },
    fachada_esquadrias_vedacao: {
      pt: "Fachada, esquadrias e vedação",
      en: "Facade, frames and sealing",
      es: "Fachada, carpinterias y sellado",
      fr: "Facade, huisseries et etancheite",
      metrics: ["area_protegida_m2", "ambientes_restabelecidos", "documentos_tecnicos_validados"],
      defaultMetric: "area_protegida_m2",
      minValue: 60
    },
    fundacao_contencao_preventiva: {
      pt: "Fundação e contenção preventiva",
      en: "Foundation and preventive containment",
      es: "Fundacion y contencion preventiva",
      fr: "Fondation et contention preventive",
      metrics: ["horas_tecnicas_mobilizadas", "pontos_de_risco_eliminados", "sistemas_requalificados"],
      defaultMetric: "horas_tecnicas_mobilizadas",
      minValue: 18
    },
    instalacoes_eletricas_essenciais: {
      pt: "Instalações elétricas essenciais",
      en: "Essential electrical installations",
      es: "Instalaciones electricas esenciales",
      fr: "Installations electriques essentielles",
      metrics: ["ambientes_restabelecidos", "documentos_tecnicos_validados", "sistemas_requalificados"],
      defaultMetric: "sistemas_requalificados",
      minValue: 2
    },
    instalacoes_hidrossanitarias_saneamento: {
      pt: "Instalações hidrossanitárias e saneamento interno",
      en: "Hydrosanitary installations and internal sanitation",
      es: "Instalaciones hidrosanitarias y saneamiento interno",
      fr: "Installations hydrosanitaires et assainissement interne",
      metrics: ["beneficiarios_diretos_estimados", "pontos_de_risco_eliminados", "sistemas_requalificados"],
      defaultMetric: "sistemas_requalificados",
      minValue: 12
    }
  };

  Object.assign(TRANSLATIONS.pt, {
    methodTitle: "Metodo tecnico de rastreabilidade e auditoria",
    methodText: "O fluxo conecta ativo atendido, frente executada, metrica mensuravel, evidencia tecnica, validacao responsavel e certificado auditavel.",
    newRecordHelp: "Preencha somente o essencial.",
    actionTypeLabel: "Tipo de serviço",
    metricLabel: "Unidade",
    actionTypes: [
      "Alvenaria",
      "Cobertura",
      "Concreto",
      "Drenagem",
      "Esquadrias",
      "Estrutura",
      "Fundações",
      "Instalações hidráulicas",
      "Instalações elétricas",
      "Impermeabilização",
      "Prevenção e combate a incêndio",
      "Pavimentação",
      "Pintura",
      "Pisos e revestimentos",
      "Reforma geral",
      "Serralheria",
      "Sinalização",
      "Telhado",
      "Terraplenagem",
      "Urbanização"
    ],
    metricOptions: [
      "m2",
      "m",
      "m3",
      "unidade",
      "ponto",
      "conjunto",
      "kg",
      "hora"
    ]
  });

  Object.assign(metricCatalog, {
    area_protegida_m2: "\u00e1rea protegida ou recuperada em m\u00b2",
    ambientes_restabelecidos: "ambientes restabelecidos para opera\u00e7\u00e3o",
    beneficiarios_diretos_estimados: "usu\u00e1rios beneficiados estimados",
    documentos_tecnicos_validados: "dossi\u00eas t\u00e9cnicos validados",
    horas_tecnicas_mobilizadas: "horas t\u00e9cnicas aplicadas",
    pontos_de_risco_eliminados: "n\u00e3o conformidades sanadas",
    sistemas_requalificados: "sistemas restabelecidos ou requalificados",
    unidades_pavimentos_protegidos: "unidades, blocos ou pavimentos liberados"
  });

  Object.assign(legacyServiceCatalog.acessibilidade_rota_segura, {
    pt: "Acessibilidade, circula\u00e7\u00e3o e rota segura"
  });
  Object.assign(legacyServiceCatalog.cobertura_impermeabilizacao, {
    pt: "Cobertura, impermeabiliza\u00e7\u00e3o e tratamento de infiltra\u00e7\u00e3o"
  });
  Object.assign(legacyServiceCatalog.drenagem_manejo_pluvial, {
    pt: "Drenagem, capta\u00e7\u00e3o e manejo pluvial"
  });
  Object.assign(legacyServiceCatalog.estrutura_reforco_localizado, {
    pt: "Estrutura, estabiliza\u00e7\u00e3o e refor\u00e7o localizado"
  });
  Object.assign(legacyServiceCatalog.fachada_esquadrias_vedacao, {
    pt: "Fachada, esquadrias, veda\u00e7\u00e3o e desempenho"
  });
  Object.assign(legacyServiceCatalog.fundacao_contencao_preventiva, {
    pt: "Funda\u00e7\u00e3o, conten\u00e7\u00e3o e preven\u00e7\u00e3o geot\u00e9cnica"
  });
  Object.assign(legacyServiceCatalog.instalacoes_eletricas_essenciais, {
    pt: "Instala\u00e7\u00f5es el\u00e9tricas essenciais e seguran\u00e7a operacional"
  });
  Object.assign(legacyServiceCatalog.instalacoes_hidrossanitarias_saneamento, {
    pt: "Instala\u00e7\u00f5es hidrossanit\u00e1rias, saneamento interno e reserva\u00e7\u00e3o"
  });

  Object.entries(metricCatalog).forEach(([metricId, label]) => {
    metricLabels[metricId] = label;
  });

  const legacyServiceMap = {
    "Impermeabilização crítica de cobertura": "cobertura_impermeabilizacao",
    "Correção de pontos de infiltração": "cobertura_impermeabilizacao",
    "Inspeção preventiva de junta estrutural": "estrutura_reforco_localizado",
    "Reforço localizado em área técnica": "estrutura_reforco_localizado",
    "Entrega auditável de pacote de reforma": "acabamento_vedacao_final"
  };

  const legacyMetricOrder = [
    "area_liberada_m2",
    "horas_tecnicas_mobilizadas",
    "pontos_criticos_sanados",
    "unidades_pavimentos_protegidos"
  ];

  gameBuilds.splice(0, gameBuilds.length, "Base auditavel inicial", "Checklist liberado", "Cobertura protegida", "Dossie completo", "Certificacao otimizada");
  METHODOLOGY_SOURCES.splice(
    0,
    METHODOLOGY_SOURCES.length,
    { name: "W3C Verifiable Credentials 2.0", url: "https://www.w3.org/TR/vc-data-model/" },
    { name: "ABNT Catalogo", url: "https://www.abntcatalogo.com.br/" },
    { name: "ABNT NBR 5674", url: "https://www.abntcatalogo.com.br/norma.aspx?ID=3107" },
    { name: "ABNT NBR 16280", url: "https://www.abntcatalogo.com.br/norma.aspx?ID=357497" },
    { name: "SINAPI CAIXA", url: "https://www.caixa.gov.br/poder-publico/modernizacao-gestao/sinapi/Paginas/default.aspx" },
    { name: "SINAPI Metodologias e Conceitos", url: "https://www.caixa.gov.br/Downloads/sinapi-metodologia/Livro_SINAPI_Metodologias_Conceitos.pdf" },
    { name: "OpenZeppelin Access Control", url: "https://docs.openzeppelin.com/contracts/4.x/access-control" }
  );

  Object.assign(legacyServiceMap, {
    "Entrega auditável de pacote de reforma": "fachada_esquadrias_vedacao",
    "Acabamento e vedacao final": "fachada_esquadrias_vedacao",
    "Fundacao e contencao preventiva": "fundacao_contencao_preventiva",
    "Instalacoes hidrossanitarias e drenagem": "instalacoes_hidrossanitarias_saneamento"
  });

  metricOrder.splice(0, metricOrder.length,
    "area_protegida_m2",
    "ambientes_restabelecidos",
    "beneficiarios_diretos_estimados",
    "documentos_tecnicos_validados",
    "horas_tecnicas_mobilizadas",
    "pontos_de_risco_eliminados",
    "sistemas_requalificados",
    "unidades_pavimentos_protegidos"
  );

  Object.assign(legacyServiceMap, {
    "Entrega auditavel de pacote de reforma": "revestimentos_argamassados_recuperacao_superficial",
    "Acabamento e vedacao final": "revestimentos_argamassados_recuperacao_superficial",
    "Fundacao e contencao preventiva": "fundacoes_recalque_prevencao_geotecnica",
    "Instalacoes hidrossanitarias e drenagem": "instalacoes_hidrossanitarias_saneamento_reservacao",
    "acessibilidade_rota_segura": "acessibilidade_circulacao_rota_segura",
    "cobertura_impermeabilizacao": "cobertura_impermeabilizacao_tratamento_infiltracao",
    "drenagem_manejo_pluvial": "drenagem_captacao_manejo_pluvial",
    "estrutura_reforco_localizado": "estrutura_estabilizacao_reforco_localizado",
    "fachada_esquadrias_vedacao": "fachada_vedacao_desempenho_termico",
    "fundacao_contencao_preventiva": "fundacoes_recalque_prevencao_geotecnica",
    "instalacoes_eletricas_essenciais": "instalacoes_eletricas_essenciais_seguranca_operacional",
    "instalacoes_hidrossanitarias_saneamento": "instalacoes_hidrossanitarias_saneamento_reservacao",
    "Acessibilidade e rota segura": "acessibilidade_circulacao_rota_segura",
    "Cobertura e impermeabilizacao": "cobertura_impermeabilizacao_tratamento_infiltracao",
    "Drenagem e manejo pluvial": "drenagem_captacao_manejo_pluvial",
    "Estrutura e reforco localizado": "estrutura_estabilizacao_reforco_localizado",
    "Fachada, esquadrias e vedacao": "fachada_vedacao_desempenho_termico",
    "Fundacao e contencao preventiva": "fundacoes_recalque_prevencao_geotecnica",
    "Instalacoes eletricas essenciais": "instalacoes_eletricas_essenciais_seguranca_operacional",
    "Instalacoes hidrossanitarias e saneamento interno": "instalacoes_hidrossanitarias_saneamento_reservacao"
  });

  function applySimpleFormCatalogs() {
    Object.keys(metricCatalog).forEach((key) => {
      delete metricCatalog[key];
      delete metricLabels[key];
    });

    simpleUnitDefinitions.forEach(({ id, label }) => {
      metricCatalog[id] = label;
      metricLabels[id] = label;
    });

    Object.keys(serviceCatalog).forEach((key) => {
      delete serviceCatalog[key];
    });

    simpleServiceDefinitions.forEach(({ id, label }) => {
      serviceCatalog[id] = {
        pt: label,
        en: label,
        es: label,
        fr: label,
        metrics: commonUnitIds,
        defaultMetric: "metro_quadrado",
        minValue: 1
      };
    });

    metricOrder.splice(0, metricOrder.length, ...commonUnitIds);

    Object.assign(TRANSLATIONS.pt, {
      tagline: "",
      newRecordHelp: "Preencha somente o essencial.",
      actionTypeLabel: "Tipo de serviço",
      metricLabel: "Unidade",
      actionTypes: simpleServiceDefinitions.map((item) => item.label),
      metricOptions: simpleUnitDefinitions.map((item) => item.label)
    });
  }

  applySimpleFormCatalogs();
  DEMO_RECORDS.splice(0, DEMO_RECORDS.length,
    { territory: "Escola Municipal Horizonte Vivo - Bloco A", actionType: "Cobertura, impermeabilização e tratamento de infiltração", metricUnit: "area_impermeabilizada_m2", metricValue: 180, evidenceURI: "ipfs://demo-escola-001", evidenceSummary: "Cobertura recuperada para proteger salas de aula e reduzir infiltração recorrente.", validationCount: 2, status: 2 },
    { territory: "Hospital Comunitario Bela Vida - Ala Pediatrica", actionType: "Instalações elétricas essenciais e segurança operacional", metricUnit: "circuitos_quadros_regularizados", metricValue: 3, evidenceURI: "ipfs://demo-hospital-002", evidenceSummary: "Quadros, circuitos críticos e iluminação de emergência regularizados.", validationCount: 2, status: 2 },
    { territory: "Conjunto Habitacional Esperança - Bloco 2", actionType: "Instalações hidrossanitárias, saneamento interno e reservação", metricUnit: "usuarios_beneficiados_estimados", metricValue: 96, evidenceURI: "ipfs://demo-habitacao-003", evidenceSummary: "Rede de água e esgoto interna restabelecida com ganho direto para moradores.", validationCount: 1, status: 1 },
    { territory: "Terminal Urbano Centro Leste", actionType: "Acessibilidade, circulação e rota segura", metricUnit: "ambientes_liberados_uso", metricValue: 4, evidenceURI: "ipfs://demo-terminal-004", evidenceSummary: "Rotas acessíveis, corrimãos e piso seguro liberados para circulação pública.", validationCount: 2, status: 2 },
    { territory: "Escola Estadual Rio Claro - Refeitório", actionType: "Instalações hidrossanitárias, saneamento interno e reservação", metricUnit: "pontos_consumo_restabelecidos", metricValue: 2, evidenceURI: "ipfs://demo-escola-005", evidenceSummary: "Pontos de abastecimento e drenagem requalificados para operação segura do refeitório.", validationCount: 2, status: 2 },
    { territory: "UPA Vila Sol - Cobertura Técnica", actionType: "Cobertura, impermeabilização e tratamento de infiltração", metricUnit: "pontos_infiltracao_tratados", metricValue: 7, evidenceURI: "ipfs://demo-upa-006", evidenceSummary: "Pontos de infiltração e risco sanitário eliminados em área crítica de atendimento.", validationCount: 1, status: 1 },
    { territory: "Creche Sementes do Amanhã", actionType: "Esquadrias, ferragens e controle de acesso", metricUnit: "ambientes_conforto_restabelecido", metricValue: 6, evidenceURI: "ipfs://demo-creche-007", evidenceSummary: "Esquadrias e vedação recompostas para garantir conforto e proteção das salas.", validationCount: 2, status: 2 },
    { territory: "Centro de Referência da Mulher", actionType: "Instalações elétricas essenciais e segurança operacional", metricUnit: "dossies_tecnicos_validados", metricValue: 5, evidenceURI: "ipfs://demo-centro-008", evidenceSummary: "Prontuário técnico, laudos e checklists elétricos validados para continuidade do serviço.", validationCount: 0, status: 0 },
    { territory: "Escola Municipal Parque Verde - Bloco B", actionType: "Drenagem, captação e manejo pluvial", metricUnit: "pontos_drenagem_requalificados", metricValue: 5, evidenceURI: "ipfs://demo-escola-009", evidenceSummary: "Captação e drenagem ajustadas para evitar alagamento em acesso escolar.", validationCount: 2, status: 2 },
    { territory: "Hospital São Gabriel - Acesso Principal", actionType: "Acessibilidade, circulação e rota segura", metricUnit: "usuarios_beneficiados_estimados", metricValue: 240, evidenceURI: "ipfs://demo-hospital-010", evidenceSummary: "Rota segura readequada para pacientes, acompanhantes e equipe.", validationCount: 2, status: 2 },
    { territory: "Biblioteca Comunitária Ponte do Saber", actionType: "Fachada, vedação e desempenho térmico", metricUnit: "area_vedacao_recomposta_m2", metricValue: 92, evidenceURI: "ipfs://demo-biblioteca-011", evidenceSummary: "Vedação e esquadrias ajustadas para preservar acervo e uso comunitário.", validationCount: 1, status: 1 },
    { territory: "Condomínio Popular Boa Morada - Torre C", actionType: "Estrutura, estabilização e reforço localizado", metricUnit: "horas_tecnicas_aplicadas", metricValue: 40, evidenceURI: "ipfs://demo-condominio-012", evidenceSummary: "Reforço localizado executado em área estrutural com acompanhamento técnico.", validationCount: 2, status: 2 },
    { territory: "Unidade Básica de Saúde Jardim Alto", actionType: "Fundações, recalque e prevenção geotécnica", metricUnit: "taludes_estabilizados", metricValue: 3, evidenceURI: "ipfs://demo-ubs-013", evidenceSummary: "Talude estabilizado e riscos de recalque mitigados em ativo de saúde.", validationCount: 2, status: 2 },
    { territory: "Escola Técnica Norte - Laboratórios", actionType: "Instalações elétricas essenciais e segurança operacional", metricUnit: "ambientes_liberados_uso", metricValue: 8, evidenceURI: "ipfs://demo-tecnica-014", evidenceSummary: "Laboratórios com circuitos essenciais regularizados para retomada segura de aulas.", validationCount: 2, status: 2 },
    { territory: "Casa de Cultura Popular - Auditório", actionType: "Segurança de uso, guarda-corpos e corrimãos", metricUnit: "rotas_seguras_liberadas", metricValue: 9, evidenceURI: "ipfs://demo-cultura-015", evidenceSummary: "Escadas, guarda-corpos e acesso seguro ajustados para o público.", validationCount: 0, status: 0 },
    { territory: "Mercado Público Central - Cobertura Oeste", actionType: "Cobertura, impermeabilização e tratamento de infiltração", metricUnit: "usuarios_beneficiados_estimados", metricValue: 320, evidenceURI: "ipfs://demo-mercado-016", evidenceSummary: "Cobertura protegida para manter funcionamento de boxes e circulação diária.", validationCount: 2, status: 2 },
    { territory: "Terminal Escolar Vale Azul", actionType: "Drenagem, captação e manejo pluvial", metricUnit: "sistemas_requalificados", metricValue: 2, evidenceURI: "ipfs://demo-terminal-017", evidenceSummary: "Sistema de drenagem requalificado para eliminar enxurrada em área de embarque.", validationCount: 1, status: 1 },
    { territory: "Hospital Maternidade Aurora - Lavanderia", actionType: "Instalações hidrossanitárias, saneamento interno e reservação", metricUnit: "dossies_tecnicos_validados", metricValue: 4, evidenceURI: "ipfs://demo-maternidade-018", evidenceSummary: "Dossiê técnico e inspeções validadas para saneamento interno da operação.", validationCount: 2, status: 2 },
    { territory: "Escola Integral Nova Esperança", actionType: "Estrutura, estabilização e reforço localizado", metricUnit: "pavimentos_atendidos", metricValue: 3, evidenceURI: "ipfs://demo-escola-019", evidenceSummary: "Pavimentos protegidos por reforço localizado e liberação técnica.", validationCount: 0, status: 3 },
    { territory: "Conjunto Habitacional Jardim do Sol", actionType: "Fachada, vedação e desempenho térmico", metricUnit: "usuarios_beneficiados_estimados", metricValue: 180, evidenceURI: "ipfs://demo-habitacao-020", evidenceSummary: "Vedação e esquadrias corrigidas para reduzir umidade e melhorar habitabilidade.", validationCount: 2, status: 2 }
  );

  getRemovedWasteTotal = function () {
    return state.records
      .filter((record) => record.metricUnit === "area_protegida_m2")
      .reduce((sum, record) => sum + Number(record.metricValue), 0);
  };

  getImpactPoints = function (record) {
    const weights = {
      area_protegida_m2: 1,
      ambientes_restabelecidos: 30,
      beneficiarios_diretos_estimados: 2,
      documentos_tecnicos_validados: 20,
      horas_tecnicas_mobilizadas: 12,
      pontos_de_risco_eliminados: 18,
      sistemas_requalificados: 28,
      unidades_pavimentos_protegidos: 16
    };
    const validationBonus = record.status === 2 ? 1.4 : record.status === 1 ? 1.15 : 1;
    return Math.round(Number(record.metricValue) * (weights[record.metricUnit] || 1) * validationBonus);
  };

  function applySmartRegisterDefaults() {
    if (!form) return;
  }

  function getServiceLabel(serviceId, language = state.language) {
    const service = serviceCatalog[serviceId];
    if (!service) return serviceId;
    if (language === "pt" || language === "zh") return service.pt;
    return service[language] || service.pt;
  }

  function getCanonicalServiceLabel(serviceId) {
    return getServiceLabel(serviceId, "pt");
  }

  function getServiceId(value) {
    if (!value) return "";
    if (serviceCatalog[value]) return value;
    const directMatch = Object.entries(serviceCatalog).find(([, labels]) =>
      [labels.pt, labels.en, labels.es, labels.fr].includes(value)
    );
    if (directMatch) return directMatch[0];
    return legacyServiceMap[value] || "";
  }

  function getMetricId(value) {
    if (!value) return "";
    if (metricCatalog[value]) return value;
    return legacyMetricMap[value] || "";
  }

  function getActionRule() {
    if (!form?.elements?.actionType) return null;
    return serviceCatalog[getServiceId(form.elements.actionType.value)] || null;
  }

  function rebuildMetricOptions(preferredMetric) {
    if (!form?.elements?.metricUnit) return;

    const metricSelect = form.elements.metricUnit;
    const rule = getActionRule();
    const allowedMetrics = (rule?.metrics || metricOrder).filter((metricKey) => metricCatalog[metricKey]);
    const nextMetric = allowedMetrics.includes(preferredMetric)
      ? preferredMetric
      : rule?.defaultMetric && allowedMetrics.includes(rule.defaultMetric)
        ? rule.defaultMetric
        : allowedMetrics[0];

    metricSelect.innerHTML = "";
    metricFilter.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = t("metricAll");
    metricFilter.appendChild(allOption);

    allowedMetrics.forEach((metricKey) => {
      const formOption = document.createElement("option");
      formOption.value = metricKey;
      formOption.textContent = metricCatalog[metricKey];
      if (metricKey === nextMetric) formOption.selected = true;
      metricSelect.appendChild(formOption);

      const filterOption = document.createElement("option");
      filterOption.value = metricKey;
      filterOption.textContent = metricCatalog[metricKey];
      metricFilter.appendChild(filterOption);
    });

    if (nextMetric) {
      metricSelect.value = nextMetric;
    }
  }

  function applyMinimumValue() {
    if (!form?.elements?.metricValue) return;
    const rule = getActionRule();
    if (!rule?.minValue) return;
    if (String(form.elements.metricValue.value || "").trim()) return;
    form.elements.metricValue.value = String(rule.minValue);
  }

  function syncActionDrivenFields(forceMetricReset = false) {
    if (!form?.elements?.metricUnit) return;
    const currentMetric = getMetricId(form.elements.metricUnit.value);
    rebuildMetricOptions(forceMetricReset ? "" : currentMetric);
    applyMinimumValue();
    updateRegisterGuideCounts();
  }

  function bindSmartRegisterRules() {
    if (!form?.elements?.actionType) return;
    ["change", "input"].forEach((eventName) => {
      form.elements.actionType.addEventListener(eventName, () => {
        syncActionDrivenFields(true);
      });
    });
  }

  function configureActionOptions() {
    if (!form?.elements?.actionType) return;
    const actionSelect = form.elements.actionType;
    const serviceIds = Object.keys(serviceCatalog);
    actionSelect.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Selecione o tipo de serviço";
    placeholder.disabled = true;
    placeholder.selected = !actionSelect.value;
    actionSelect.appendChild(placeholder);

    serviceIds.forEach((serviceId) => {
      const option = document.createElement("option");
      option.value = serviceId;
      option.textContent = getServiceLabel(serviceId);
      actionSelect.appendChild(option);
    });

    if (actionSelect.value && serviceCatalog[actionSelect.value]) {
      actionSelect.value = actionSelect.value;
    }
  }

  function configureMetricOptions() {
    if (!form?.elements?.metricUnit) return;
    const options = [...form.elements.metricUnit.options];
    const metricIds = metricOrder;

    options.forEach((option, index) => {
      const metricId = metricIds[index];
      if (!metricId) return;
      option.value = metricId;
      option.textContent = metricCatalog[metricId];
    });
  }

  configureActionOptions = function () {
    if (!form?.elements?.actionType) return;
    const actionSelect = form.elements.actionType;
    const currentValue = getServiceId(actionSelect.value);
    const serviceIds = Object.keys(serviceCatalog).sort((left, right) =>
      getServiceLabel(left, "pt").localeCompare(getServiceLabel(right, "pt"), "pt-BR")
    );
    actionSelect.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Selecione o tipo de serviço";
    placeholder.disabled = true;
    placeholder.selected = !currentValue;
    actionSelect.appendChild(placeholder);

    serviceIds.forEach((serviceId) => {
      const option = document.createElement("option");
      option.value = serviceId;
      option.textContent = getServiceLabel(serviceId);
      if (serviceId === currentValue) option.selected = true;
      actionSelect.appendChild(option);
    });

    if (currentValue) {
      actionSelect.value = currentValue;
    }
  };

  configureMetricOptions = function () {
    if (!form?.elements?.metricUnit) return;
    const currentMetric = getMetricId(form.elements.metricUnit.value);
    rebuildMetricOptions(currentMetric);
  };

  function normalizeDemoRecords() {
    DEMO_RECORDS.forEach((record) => {
      const serviceId = getServiceId(record.actionType);
      if (serviceId) {
        record.actionType = getCanonicalServiceLabel(serviceId);
      }
      const metricId = getMetricId(record.metricUnit);
      if (metricId) {
        record.metricUnit = metricId;
      }
    });
  }

  function normalizeStateRecords() {
    let changed = false;
    state.records.forEach((record) => {
      const serviceId = getServiceId(record.actionType);
      if (serviceId) {
        const normalized = getCanonicalServiceLabel(serviceId);
        if (record.actionType !== normalized) {
          record.actionType = normalized;
          changed = true;
        }
      }
      const metricId = getMetricId(record.metricUnit);
      if (metricId && record.metricUnit !== metricId) {
        record.metricUnit = metricId;
        changed = true;
      }
    });

    if (changed) {
      save();
    }
  }

  getSocialValueEstimate = function () {
    const estimatedValues = {
      area_protegida_m2: 65,
      ambientes_restabelecidos: 3200,
      beneficiarios_diretos_estimados: 90,
      documentos_tecnicos_validados: 650,
      horas_tecnicas_mobilizadas: 380,
      pontos_de_risco_eliminados: 1400,
      sistemas_requalificados: 2600,
      unidades_pavimentos_protegidos: 900
    };

    return state.records.reduce((total, record) => total + Number(record.metricValue) * (estimatedValues[record.metricUnit] || 10), 0);
  };

  function getMetricProfile(metricId) {
    if (!metricId) return { weight: 1, social: 10, people: 0 };
    if (metricId.includes("usuarios")) return { weight: 2, social: 90, people: 1 };
    if (metricId.includes("ambientes") || metricId.includes("setores")) return { weight: 28, social: 3200, people: 35 };
    if (metricId.includes("dossies") || metricId.includes("ensaios")) return { weight: 18, social: 650, people: 3 };
    if (metricId.includes("horas")) return { weight: 12, social: 380, people: 2 };
    if (metricId.includes("nao_conformidades") || metricId.includes("pontos_")) return { weight: 18, social: 1400, people: 22 };
    if (metricId.includes("sistemas") || metricId.includes("equipamentos") || metricId.includes("circuitos") || metricId.includes("subsistemas") || metricId.includes("bombas") || metricId.includes("reservatorios") || metricId.includes("salas_tecnicas")) {
      return { weight: 24, social: 2600, people: 30 };
    }
    if (metricId.includes("unidades") || metricId.includes("blocos") || metricId.includes("pavimentos") || metricId.includes("postos")) return { weight: 16, social: 900, people: 18 };
    if (metricId.includes("taludes") || metricId.includes("estruturas")) return { weight: 22, social: 1800, people: 14 };
    if (metricId.includes("volume")) return { weight: 14, social: 1200, people: 10 };
    if (metricId.includes("area_") || metricId.includes("_m2") || metricId.includes("fachadas")) return { weight: 1, social: 65, people: 0.25 };
    return { weight: 10, social: 500, people: 5 };
  }

  getImpactPoints = function (record) {
    const profile = getMetricProfile(record.metricUnit);
    const validationBonus = record.status === 2 ? 1.4 : record.status === 1 ? 1.15 : 1;
    return Math.round(Number(record.metricValue) * profile.weight * validationBonus);
  };

  getSocialValueEstimate = function () {
    return state.records.reduce((total, record) => {
      const profile = getMetricProfile(record.metricUnit);
      return total + Number(record.metricValue) * profile.social;
    }, 0);
  };

  buildProof = async function (record) {
    const credential = {
      type: "LedgerCredential",
      version: "1.1",
      actionId: record.id,
      contractOrTerritory: record.territory,
      actionType: record.actionType,
      metricUnit: record.metricUnit,
      metricValue: record.metricValue,
      status: statusNames[record.status] || statusNames[0],
      evidenceURI: record.evidenceURI,
      evidenceHash: record.evidenceHash,
      transactionHash: record.txHash || "demonstracao-local",
      methodology: ["Construction Compliance Flow", "W3C Verifiable Credentials", "ABNT NBR 5674", "OpenZeppelin Access Control"],
      issuedBy: "Ledger Essencial",
      issuedAt: new Date().toISOString()
    };

    return {
      ...credential,
      proofHash: await sha256Hex(stableStringify(credential))
    };
  };

  startGame = function () {
    gameState.robot = 0;
    gameState.score = 0;
    gameState.energy = 12;
    gameState.buildLevel = 0;
    gameState.tiles = Array.from({ length: 36 }, (_, index) => {
      if ([7, 13, 20, 25, 31].includes(index)) return "leak";
      if ([10, 22, 28].includes(index)) return "checklist";
      if ([16, 34].includes(index)) return "safety";
      return "empty";
    });
    renderGame("Missao iniciada. Elimine riscos de obra e monte a trilha de conformidade.");
  };

  getTileIcon = function (tile) {
    const icons = {
      empty: "",
      leak: "!",
      checklist: "#",
      safety: "+",
      clean: "OK"
    };
    return icons[tile] || "";
  };

  renderGame = function (message = "") {
    if (!gameBoard) return;

    gameBoard.innerHTML = gameState.tiles
      .map((tile, index) => {
        const isRobot = index === gameState.robot;
        const label = isRobot ? "Robo de vistoria" : tile;
        return `<div class="game-cell ${tile} ${isRobot ? "robot" : ""}" role="gridcell" aria-label="${label}">${isRobot ? "[]" : getTileIcon(tile)}</div>`;
      })
      .join("");

    gameScore.textContent = gameState.score;
    gameEnergy.textContent = gameState.energy;
    gameBuild.textContent = gameBuilds[gameState.buildLevel];
    if (message) gameStatus.textContent = message;
  };

  moveRobot = function (direction) {
    const row = Math.floor(gameState.robot / 6);
    const col = gameState.robot % 6;
    const next = {
      up: row > 0 ? gameState.robot - 6 : gameState.robot,
      down: row < 5 ? gameState.robot + 6 : gameState.robot,
      left: col > 0 ? gameState.robot - 1 : gameState.robot,
      right: col < 5 ? gameState.robot + 1 : gameState.robot
    }[direction];

    if (next === gameState.robot) {
      renderGame("Limite do mapa. Escolha outra frente de vistoria.");
      return;
    }

    if (gameState.energy <= 0) {
      renderGame("Energia encerrada. Reinicie a missao ou registre a prova do treino.");
      return;
    }

    gameState.robot = next;
    gameState.energy -= 1;
    resolveTile(next);
  };

  resolveTile = function (index) {
    const tile = gameState.tiles[index];
    const scores = { leak: 12, checklist: 16, safety: 20 };

    if (scores[tile]) {
      gameState.score += scores[tile];
      gameState.tiles[index] = "clean";
      gameState.buildLevel = Math.min(gameBuilds.length - 1, Math.floor(gameState.score / 30));
      renderGame("Boa acao: o robo liberou um ponto critico do canteiro.");
      return;
    }

    renderGame("Area segura. Continue procurando pendencias de obra.");
  };

  recordGameImpact = async function () {
    const discountTier = gameState.score >= 80 ? "10%" : gameState.score >= 45 ? "5%" : "0%";
    const evidenceSummary = `EcoBots Lab: ${gameState.score} pontos, trilha ${gameBuilds[gameState.buildLevel]}, energia restante ${gameState.energy}, desconto elegivel ${discountTier} no certificado.`;
    const fakeForm = new Map([
      ["territory", "EcoBots Lab - Treinamento de Conformidade de Obra"],
      ["actionType", "Treinamento gamificado de conformidade construtiva"],
      ["metricUnit", "documentos_tecnicos_validados"],
      ["metricValue", Math.max(1, Math.round(gameState.score / 6))],
      ["evidenceURI", "game://ledger-essencial-ecobots-lab"],
      ["evidenceSummary", evidenceSummary]
    ]);

    await submitLocal({ get: (key) => fakeForm.get(key) });
    const newestRecord = state.records[0];
    if (newestRecord) {
      addHistory(newestRecord, `Desconto elegivel identificado: ${discountTier} no certificado.`);
      save();
      render();
    }
    notify(`Treinamento EcoBots registrado com elegibilidade de desconto de ${discountTier} no certificado.`);
    setView("audit");
  };

  function replaceButton(buttonId, handler) {
    const current = document.getElementById(buttonId);
    if (!current) return;
    const replacement = current.cloneNode(true);
    current.replaceWith(replacement);
    replacement.addEventListener("click", handler);
  }

  function updateMethodologyPanel() {
    const methodPanel = document.querySelector('[data-view="method"]');
    if (!methodPanel) return;

    const items = methodPanel.querySelectorAll(".reference-list li");
    if (items[0]) items[0].innerHTML = "<strong>Fluxo de conformidade de obra</strong><span>Servico -> evidencia -> validacao -> certificado -> decisao. Cada registro declara escopo, metrica e prova tecnica.</span>";
    if (items[1]) items[1].innerHTML = '<strong>W3C Verifiable Credentials 2.0</strong><span>Base para comprovantes digitais verificaveis por emissor, titular e verificador.</span><a href=\"https://www.w3.org/TR/vc-data-model/\" target=\"_blank\" rel=\"noreferrer\">w3.org/TR/vc-data-model</a>';
    if (items[2]) items[2].innerHTML = '<strong>ABNT NBR 5674</strong><span>Referencia para manutencao de edificacoes e rastreabilidade de execucao.</span><a href=\"https://www.abntcatalogo.com.br/\" target=\"_blank\" rel=\"noreferrer\">abntcatalogo.com.br</a>';
    if (items[3]) items[3].innerHTML = '<strong>ABNT NBR 16280</strong><span>Referencia para reformas, governanca de intervencao e responsabilidades tecnicas.</span><a href=\"https://www.abntcatalogo.com.br/\" target=\"_blank\" rel=\"noreferrer\">abntcatalogo.com.br</a>';
    if (items[4]) items[4].innerHTML = '<strong>SINAPI CAIXA</strong><span>Base metodologica para composicoes, insumos, produtividade urbana e leitura de servicos de engenharia.</span><a href=\"https://www.caixa.gov.br/poder-publico/modernizacao-gestao/sinapi/Paginas/default.aspx\" target=\"_blank\" rel=\"noreferrer\">caixa.gov.br/sinapi</a>';
    if (items[5]) items[5].innerHTML = '<strong>SINAPI Metodologias e Conceitos</strong><span>Ajuda a estruturar frentes, medicao e entendimento de servicos usuais de obra em ambiente urbano.</span><a href=\"https://www.caixa.gov.br/Downloads/sinapi-metodologia/Livro_SINAPI_Metodologias_Conceitos.pdf\" target=\"_blank\" rel=\"noreferrer\">Livro SINAPI</a>';
    if (methodologyStatus && !navigator.onLine) {
      methodologyStatus.textContent = "Sem internet agora. O metodo local continua disponivel com referencias tecnicas e Web3 registradas.";
    }
  }

  function updateGameCopy() {
    const gamePanel = document.querySelector('[data-view="game"]');
    if (!gamePanel) return;

    const title = gamePanel.querySelector(".section-title p");
    const explainer = gamePanel.querySelector(".game-explainer p");
    const explainerBox = gamePanel.querySelector(".game-explainer");
    const board = document.getElementById("gameBoard");
    const sideMission = gamePanel.querySelector(".game-side p");
    const terms = gamePanel.querySelectorAll(".game-side dt");
    const restart = document.getElementById("restartGame");
    const record = document.getElementById("recordGameImpact");

    if (title) title.textContent = "Um jogo leve para treinar leitura de canteiro: mova o robo, elimine riscos tecnicos e monte uma trilha de conformidade de obra.";
    if (explainer) explainer.textContent = "O EcoBots Lab transforma treinamento de obra em experiencia pratica: cada movimento representa uma vistoria de impermeabilizacao, drenagem, documentacao e seguranca. Ele nao usa aposta, moeda ou recompensa viciante. O objetivo e provar aprendizado tecnico e registrar um comprovante auditavel que pode gerar desconto no certificado.";
    if (board) board.setAttribute("aria-label", "Mapa de obra com robo, infiltracoes, checklists e pontos de seguranca");
    if (sideMission) sideMission.textContent = "Feche os pontos criticos do canteiro. Cada acao reforca prevencao, rastreabilidade e responsabilidade tecnica.";
    if (terms[0]) terms[0].textContent = "Pontos de conformidade";
    if (terms[1]) terms[1].textContent = "Energia da equipe";
    if (terms[2]) terms[2].textContent = "Nivel da trilha";
    if (restart) restart.textContent = "Reiniciar missao";
    if (record) record.textContent = "Registrar prova do treino";
    if (gameStatus) gameStatus.textContent = "Use as setas do teclado ou os botoes para mover o robo.";

    if (explainerBox) {
      let rules = explainerBox.querySelector(".game-rules");
      if (!rules) {
        rules = document.createElement("div");
        rules.className = "game-rules";
        explainerBox.appendChild(rules);
      }
      rules.innerHTML = `
        <strong>Modo de utilizar</strong>
        <p>Use o EcoBots como um treino rapido antes do registro real. Ele ajuda a entender prioridade tecnica, prova e conformidade de forma visual e simples.</p>
        <strong>Como jogar</strong>
        <p>Comece no canto superior esquerdo e mova o robo uma casa por vez usando as setas do teclado ou os botoes. O objetivo e percorrer o mapa tecnico antes que a energia termine.</p>
        <strong>Leitura do mapa</strong>
        <p><code>!</code> representa infiltracao, falha construtiva ou ponto critico. <code>#</code> representa checklist, dossie ou documentacao. <code>+</code> representa seguranca, prevencao ou conformidade. Quando o robo trata um ponto, ele vira <code>OK</code>.</p>
        <strong>Regra principal</strong>
        <p>Cada movimento consome 1 de energia. Pontos <code>!</code> valem 12, <code>#</code> valem 16 e <code>+</code> valem 20. Quanto melhor o caminho, maior a pontuacao e melhor o resultado do treinamento.</p>
        <strong>Estrategia recomendada</strong>
        <p>Priorize primeiro os simbolos <code>+</code>, depois <code>#</code> e por ultimo <code>!</code>. Isso acelera a pontuacao, reduz desperdicio de energia e simula uma vistoria mais inteligente.</p>
        <strong>Como interpretar o resultado</strong>
        <p>Pontuacao maior indica melhor leitura de prioridade e melhor uso da energia. Isso mostra maturidade de execucao e ajuda a justificar a prova do treino.</p>
        <strong>Para que serve no projeto</strong>
        <p>O EcoBots nao e um jogo solto. Ele funciona como trilha de aprendizado sobre risco, prova e conformidade. Ao final, a pontuacao pode gerar um registro de treinamento auditavel e apoiar desconto no certificado.</p>
        <strong>Quando encerrar</strong>
        <p>Se a energia acabar, reinicie a missao para tentar um caminho melhor. Se a trilha estiver boa, use Registrar prova do treino para gravar o resultado no historico.</p>
      `;
    }
  }

  function ensureRegisterGuides() {
    const actionField = form?.elements?.actionType?.closest("label");
    const metricField = form?.elements?.metricUnit?.closest("label");

    if (actionField && !actionField.querySelector(".smart-action-help")) {
      const hint = document.createElement("small");
      hint.className = "smart-action-help";
      hint.textContent = "Frentes organizadas por fam\u00edlias usuais de manuten\u00e7\u00e3o, adequa\u00e7\u00e3o e reforma de ativos essenciais.";
      actionField.appendChild(hint);
    }

    if (metricField && !metricField.querySelector(".smart-metric-help")) {
      const hint = document.createElement("small");
      hint.className = "smart-metric-help";
      hint.textContent = "A m\u00e9trica muda conforme a frente para refletir medi\u00e7\u00e3o realista de obra, rastreabilidade e leitura inspirada em ABNT e refer\u00eancias do SINAPI.";
      metricField.appendChild(hint);
    }
  }

  function updateRegisterGuideCounts() {
    const actionHint = document.querySelector(".smart-action-help");
    const metricHint = document.querySelector(".smart-metric-help");
    const totalFronts = Object.keys(serviceCatalog).length;
    const totalMetrics = Object.keys(metricCatalog).length;
    const currentRule = getActionRule();
    const currentMetricCount = currentRule?.metrics?.length || totalMetrics;

    if (actionHint) {
      actionHint.textContent = `${totalFronts} frentes t\u00e9cnicas dispon\u00edveis em ordem alfab\u00e9tica. Digite parte do nome para encontrar o servi\u00e7o com mais conforto.`;
    }

    if (metricHint) {
      metricHint.textContent = `${currentMetricCount} m\u00e9tricas compat\u00edveis com esta frente. Cat\u00e1logo total com ${totalMetrics} m\u00e9tricas t\u00e9cnicas.`;
    }
  }

  function normalizeRegisterFieldCopy() {
    const registerView = document.querySelector('[data-view="register"]');
    if (!registerView) return;

    const labelSpans = registerView.querySelectorAll("label > span");
    if (labelSpans[1]) labelSpans[1].textContent = "Tipo de servi\u00e7o";
    if (labelSpans[2]) labelSpans[2].textContent = "Unidade";
    if (labelSpans[3]) labelSpans[3].textContent = "Valor";
  }

  function ensureAuditCriteriaPanel() {
    const registerView = document.querySelector('[data-view="register"] .form-panel');
    if (!registerView || registerView.querySelector(".audit-criteria-panel")) return;

    const panel = document.createElement("section");
    panel.className = "audit-criteria-panel";
    panel.setAttribute("aria-label", "Criterios minimos de auditoria");
    panel.innerHTML = `
      <div class="section-title compact">
        <span>QA</span>
        <div>
          <h2>O que torna um registro auditavel</h2>
          <p>O sistema nao aceita qualidade apenas visual. Um bom cadastro precisa ser tecnicamente rastreavel, verificavel e coerente com a frente executada.</p>
        </div>
      </div>
      <div class="manual-grid">
        <article><strong>1. Frente correta</strong><p>Escolha uma familia de servico reconhecivel em obra. Evite nomes vagos, comerciais ou genéricos.</p></article>
        <article><strong>2. Metrica mensuravel</strong><p>A metrica deve permitir comparacao, conferencia de medicao e leitura objetiva do resultado entregue.</p></article>
        <article><strong>3. Evidencia minima</strong><p>Use link para laudo, relatorio fotografico, memoria, checklist, boletim de medicao, ART/RRT, aceite ou dossie tecnico.</p></article>
        <article><strong>4. Vinculo com o ativo</strong><p>O texto precisa deixar claro onde a intervencao ocorreu, qual risco existia e qual parte do ativo foi protegida ou restabelecida.</p></article>
      </div>
      <ul class="reference-list">
        <li><strong>Status enviado</strong><span>Registro criado com dados e evidencia inicial, ainda sem aceite tecnico.</span></li>
        <li><strong>Status validado</strong><span>Registro revisado por agente responsavel, com coerencia minima entre frente, metrica e prova.</span></li>
        <li><strong>Status certificado</strong><span>Registro com governanca minima cumprida e comprovante apto para verificacao posterior.</span></li>
        <li><strong>Status rejeitado</strong><span>Registro com inconsistencia de escopo, evidencia fraca, metrica inadequada ou ausencia de lastro tecnico.</span></li>
      </ul>
    `;

    const actions = registerView.querySelector(".actions");
    if (actions) {
      actions.insertAdjacentElement("afterend", panel);
    } else {
      registerView.appendChild(panel);
    }
  }

  function trimInterfaceNoise() {
    const redundantOverviewModule = document.querySelector('[data-view="overview"] > .governance-strip:not(.challenge-fit-panel)');
    if (redundantOverviewModule) {
      redundantOverviewModule.remove();
    }

    const methodologyAction = document.getElementById("refreshMethodology");
    if (methodologyAction) {
      methodologyAction.textContent = "Conferir referencias";
    }

    const methodologyStatusNode = document.getElementById("methodologyStatus");
    if (methodologyStatusNode) {
      methodologyStatusNode.textContent = "Metodo local ativo com referencias tecnicas e verificacao digital.";
    }
  }

  function normalizeChromeText() {
    document.title = "Ledger Essencial";
    const brand = document.querySelector(".brand-copy strong");
    const pill = document.querySelector(".theme-pill");
    const nav = document.querySelector(".app-nav");
    const navButtons = document.querySelectorAll(".app-nav button");
    const tagline = document.querySelector(".brand-lockup [data-i18n='tagline']");
    const globalStatusNode = document.getElementById("globalStatus");
    const languageOptions = document.querySelectorAll("#languageSelect option");

    if (brand) brand.textContent = "";
    if (pill) pill.textContent = "Impacto Auditável";
    if (nav) nav.setAttribute("aria-label", "Navegação principal");
    if (navButtons[0]) navButtons[0].textContent = "Visão geral";
    if (navButtons[3]) navButtons[3].textContent = "Inteligência";
    if (tagline && state.language === "pt") tagline.textContent = "";
    if (globalStatusNode) globalStatusNode.textContent = "Base pronta para registrar, validar e auditar execução de obra.";
    if (languageOptions[0]) languageOptions[0].textContent = "BR · PT";
    if (languageOptions[1]) languageOptions[1].textContent = "US · EN";
    if (languageOptions[2]) languageOptions[2].textContent = "ES · ES";
    if (languageOptions[3]) languageOptions[3].textContent = "FR · FR";
    if (languageOptions[4]) languageOptions[4].textContent = "CN · ZH";
  }

  function ensureChallengePanel() {
    const overview = document.querySelector('[data-view="overview"]');
    if (!overview || overview.querySelector(".challenge-fit-panel")) return;

    const panel = document.createElement("section");
    panel.className = "challenge-fit-panel governance-strip";
    panel.setAttribute("aria-label", "Encaixe do desafio 3");
    panel.innerHTML = `
      <article>
        <span>IM1</span>
        <strong>Impacto social</strong>
        <p>Protege escolas, hospitais, moradia e servicos essenciais que atendem pessoas e comunidades.</p>
      </article>
      <article>
        <span>IM2</span>
        <strong>Impacto ambiental</strong>
        <p>Reduz retrabalho, descarte corretivo, infiltracao recorrente e desperdicio de materiais e recursos.</p>
      </article>
      <article>
        <span>IM3</span>
        <strong>Impacto comunitario</strong>
        <p>Cria prova auditavel de resultado em ativos coletivos e melhora transparencia para sociedade e gestao publica.</p>
      </article>
    `;

    const metricsSection = overview.querySelector(".metrics");
    if (metricsSection) {
      metricsSection.before(panel);
    } else {
      overview.appendChild(panel);
    }
  }

  function deriveChallengeStats() {
    const publicAssetPattern = /escola|hospital|habitacional|terminal|centro administrativo|universidade|publico|municipal/i;
    const certifiedRecords = state.records.filter((record) => record.status === 2);
    const publicCertified = certifiedRecords.filter((record) => publicAssetPattern.test(record.territory)).length;
    const publicTracked = state.records.filter((record) => publicAssetPattern.test(record.territory)).length;
    const estimatedPeople = state.records.reduce((total, record) => {
      if (record.metricUnit === "unidades_pavimentos_protegidos") return total + Number(record.metricValue) * 4;
      if (record.metricUnit === "area_liberada_m2") return total + Math.round(Number(record.metricValue) / 3);
      if (record.metricUnit === "pontos_criticos_sanados") return total + Number(record.metricValue) * 18;
      if (record.metricUnit === "horas_tecnicas_mobilizadas") return total + Number(record.metricValue) * 2;
      return total;
    }, 0);

    return { publicCertified, publicTracked, estimatedPeople };
  }

  function updateChallengePanel() {
    ensureChallengePanel();
    const panel = document.querySelector(".challenge-fit-panel");
    if (!panel) return;

    const { publicCertified, publicTracked, estimatedPeople } = deriveChallengeStats();
    const items = panel.querySelectorAll("article");
    if (items[0]) items[0].querySelector("p").textContent = `${publicTracked} ativos essenciais registrados. O foco esta em escolas, hospitais, moradia e servicos coletivos.`;
    if (items[1]) items[1].querySelector("p").textContent = `${estimatedPeople} pessoas potencialmente beneficiadas pela continuidade de uso e reducao de dano corretivo.`;
    if (items[2]) items[2].querySelector("p").textContent = `${publicCertified} entregas certificadas em ativos de interesse coletivo com evidencia verificavel.`;
  }

  function ensureManualView() {
    const nav = document.querySelector(".app-nav");
    const main = document.querySelector("main");

    if (nav && !nav.querySelector('[data-view-target="manual"]')) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.viewTarget = "manual";
      button.dataset.i18n = "navManual";
      button.textContent = "Manual do sistema";
      nav.appendChild(button);
      button.addEventListener("click", () => setView("manual"));
    }

    let manualView = main?.querySelector('[data-view="manual"]');
    if (main && !manualView) {
      manualView = document.createElement("section");
      manualView.className = "view";
      manualView.dataset.view = "manual";
      main.appendChild(manualView);
    }

    if (manualView) {
      manualView.innerHTML = `
        <section class="method-panel wide-panel manual-panel" aria-label="Manual da aplicacao">
          <div class="section-title compact">
            <span>4</span>
            <div>
              <h2>Manual da aplicacao</h2>
              <p>Guia operacional, conceitual e tecnico para entender objetivo, uso, criterios de auditoria e valor estrategico da plataforma.</p>
            </div>
          </div>
          <ul class="reference-list">
            <li><strong>Objetivo do sistema</strong><span>Transformar manutencao, adequacao e reforma de ativos essenciais em registros auditaveis com evidencia tecnica, trilha de validacao e comprovante verificavel.</span></li>
            <li><strong>Para que serve</strong><span>Serve para registrar o que foi executado, com qual metrica, em qual ativo, com qual prova e com qual nivel de validacao.</span></li>
            <li><strong>Problema que resolve</strong><span>Combate cadastro vago, prova fraca, narrativa sem lastro tecnico e dificuldade de demonstrar impacto real em escolas, hospitais, habitacao e equipamentos coletivos.</span></li>
            <li><strong>O que a banca precisa entender</strong><span>O valor nao esta apenas em blockchain. O valor esta em organizar criterio tecnico, coerencia de medicao, governanca e verificabilidade.</span></li>
          </ul>
          <div class="manual-grid">
            <article><strong>Explique para uma crianca</strong><p>Se a escola ou o hospital foi consertado, a plataforma mostra o que foi feito e guarda a prova para ninguem inventar historia depois.</p></article>
            <article><strong>Explique para professor, adulto e tecnico</strong><p>Voce registra frente tecnica, metrica, valor, evidencia e acompanha o ciclo de enviado, validado, certificado ou rejeitado.</p></article>
            <article><strong>Explique para engenheiro</strong><p>As frentes e metricas seguem leitura de manutencao, adequacao e reforma predial, inspirada em ABNT, SINAPI e pratica de mediacao e aceite.</p></article>
            <article><strong>Explique para a banca</strong><p>O projeto cria confianca operacional: reduz ambiguidade, exige criterio de cadastro e torna o registro verificavel por terceiros.</p></article>
          </div>
          <ul class="reference-list">
            <li><strong>Passo 1. Escolha o ativo</strong><span>Informe a escola, hospital, conjunto habitacional, terminal ou contrato onde a intervencao ocorreu. O local precisa ser identificavel.</span></li>
            <li><strong>Passo 2. Escolha a frente tecnica</strong><span>Selecione a familia de servico executada. A frente deve representar um subsistema ou grupo de servicos reconhecivel por tecnico de obra.</span></li>
            <li><strong>Passo 3. Escolha a metrica</strong><span>Selecione uma metrica coerente com a frente. A plataforma restringe opcoes para evitar registros genericos ou sem valor de medicao.</span></li>
            <li><strong>Passo 4. Informe o valor</strong><span>Use quantidade objetiva: m2, ambientes, usuarios estimados, dossies, horas, nao conformidades, sistemas ou unidades liberadas.</span></li>
            <li><strong>Passo 5. Anexe a evidencia</strong><span>Use link para dossie tecnico, laudo, relatorio fotografico, checklist, ART/RRT, medicao, aceite ou repositório documental.</span></li>
            <li><strong>Passo 6. Resuma o que foi feito</strong><span>Explique risco inicial, escopo executado, resultado obtido e efeito sobre o uso do ativo. Esse texto precisa ser legivel e tecnicamente coerente.</span></li>
            <li><strong>Passo 7. Validar e certificar</strong><span>O historico organiza a trilha de governanca ate a certificacao. O certificado so faz sentido quando a prova e a coerencia do registro se sustentam.</span></li>
          </ul>
          <div class="manual-grid">
            <article><strong>Como usar os 20 exemplos</strong><p>Na tela Registrar, clique em Carregar 20 exemplos para preencher rapidamente a base com cenarios de escola, hospital, habitacao, cultura e mobilidade.</p></article>
            <article><strong>Como escolher frente e metrica</strong><p>Frente boa e a que um tecnico reconhece. Metrica boa e a que permite medicao, comparacao, aceite, rastreio e eventual auditoria externa.</p></article>
            <article><strong>Como avaliar uma boa evidencia</strong><p>Boa evidencia e verificavel, contextualizada e suficiente para sustentar o resumo do registro. Foto solta sem contexto vale pouco.</p></article>
            <article><strong>Como pensar o status</strong><p>Enviado e cadastro inicial. Validado e revisado. Certificado e trilha minima cumprida. Rejeitado e cadastro sem sustentacao tecnica.</p></article>
            <article><strong>Web3 com sentido</strong><p>Aqui ela serve para hash, rastreabilidade, comprovante verificavel e integridade do registro. Nao esta no projeto como ornamento.</p></article>
            <article><strong>EcoBots com sentido</strong><p>O jogo funciona como treino de leitura de pendencias, prova e conformidade. Ele e pedagogico, nao um enfeite fora do contexto.</p></article>
          </div>
          <ul class="reference-list">
            <li><strong>Tela Visao geral</strong><span>Resume proposta, volume registrado e eixo de impacto para apresentar a plataforma rapidamente.</span></li>
            <li><strong>Tela Registrar</strong><span>Onde nasce a qualidade do sistema. Aqui entram frente, metrica, valor, link da evidencia e resumo tecnico.</span></li>
            <li><strong>Tela Auditar</strong><span>Mostra historico, filtros, status, comprovantes e trilha de eventos do registro.</span></li>
            <li><strong>Tela Inteligencia</strong><span>Consolida pontuacao, taxa certificada e estimativa de beneficio protegido para leitura estrategica.</span></li>
            <li><strong>Tela Verificar</strong><span>Permite conferir se um comprovante preserva a mesma prova informada no registro.</span></li>
            <li><strong>Tela Metodologia</strong><span>Explica as bases tecnicas e a racionalidade de construcao do sistema.</span></li>
            <li><strong>Tela EcoBots</strong><span>Usa uma experiencia leve para ensinar trilha de conformidade e reforcar cultura de prova e responsabilidade.</span></li>
          </ul>
          <div class="manual-grid">
            <article><strong>Criterios minimos para a banca confiar</strong><p>Taxonomia coerente, metrica mensuravel, evidencia verificavel, trilha de status e comprovante consistente entre narrativa e dado.</p></article>
            <article><strong>Onde estao ABNT e SINAPI</strong><p>Eles orientam a logica das frentes, da medicao, da leitura de servico e da nocao de rastreabilidade, nao um uso ornamental de siglas.</p></article>
            <article><strong>O que torna o projeto forte</strong><p>Ele organiza obra real em linguagem auditavel. Isso aproxima tecnologia, governanca e engenharia num fluxo que a banca consegue testar.</p></article>
            <article><strong>O que enfraquece o projeto</strong><p>Registro genérico, evidencia pobre, promessa exagerada de blockchain e narrativa sem criterio tecnico. A aplicacao foi ajustada justamente contra isso.</p></article>
          </div>
        </section>
      `;
    }
  }

  normalizeChromeText = function () {
    document.title = "Ledger Essencial";
    const brand = document.querySelector(".brand-copy strong");
    const pill = document.querySelector(".theme-pill");
    const nav = document.querySelector(".app-nav");
    const navButtons = document.querySelectorAll(".app-nav button");
    const manualButton = document.querySelector('.app-nav button[data-view-target="manual"]');
    const tagline = document.querySelector(".brand-lockup [data-i18n='tagline']");
    const globalStatusNode = document.getElementById("globalStatus");
    const languageOptions = document.querySelectorAll("#languageSelect option");

    if (brand) brand.textContent = "";
    if (pill) pill.textContent = "Impacto Auditavel";
    if (nav) nav.setAttribute("aria-label", "Navegacao principal");
    if (navButtons[0]) navButtons[0].textContent = "Visao geral";
    if (navButtons[3]) navButtons[3].textContent = "Inteligencia";
    if (manualButton) manualButton.textContent = "Manual do sistema";
    if (tagline && state.language === "pt") tagline.textContent = "";
    if (globalStatusNode) globalStatusNode.textContent = "Base pronta para registrar, validar e auditar execucao de obra.";
    if (languageOptions[0]) languageOptions[0].textContent = "BR - PT";
    if (languageOptions[1]) languageOptions[1].textContent = "US - EN";
    if (languageOptions[2]) languageOptions[2].textContent = "ES - ES";
    if (languageOptions[3]) languageOptions[3].textContent = "FR - FR";
    if (languageOptions[4]) languageOptions[4].textContent = "CN - ZH";
  };

  setView = function (viewName) {
    if (!["register", "audit"].includes(viewName)) {
      viewName = "register";
    }
    if (document.body.classList.contains("simple") && !["overview", "register", "audit"].includes(viewName)) {
      viewName = "overview";
    }

    const currentViews = Array.from(document.querySelectorAll(".view"));
    const currentButtons = Array.from(document.querySelectorAll("[data-view-target]"));
    const targetView = document.querySelector(`[data-view="${viewName}"]`);
    if (!targetView) return;

    currentViews.forEach((view) => {
      view.classList.toggle("active", view === targetView);
    });

    currentButtons.forEach((button) => {
      const isActive = button.dataset.viewTarget === viewName;
      button.classList.toggle("active", isActive);
      if (button.closest(".app-nav")) {
        button.setAttribute("aria-current", isActive ? "page" : "false");
      }
    });

    localStorage.setItem("obraprime27-active-view", viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  deriveChallengeStats = function () {
    const publicAssetPattern = /escola|hospital|habitacional|terminal|centro administrativo|universidade|publico|municipal/i;
    const certifiedRecords = state.records.filter((record) => record.status === 2);
    const publicCertified = certifiedRecords.filter((record) => publicAssetPattern.test(record.territory)).length;
    const publicTracked = state.records.filter((record) => publicAssetPattern.test(record.territory)).length;
    const estimatedPeople = state.records.reduce((total, record) => {
      const profile = getMetricProfile(record.metricUnit);
      return total + Math.round(Number(record.metricValue) * profile.people);
    }, 0);

    return { publicCertified, publicTracked, estimatedPeople };
  };

  ensureManualView();
  ensureRegisterGuides();
  normalizeRegisterFieldCopy();
  updateRegisterGuideCounts();
  ensureAuditCriteriaPanel();
  trimInterfaceNoise();
  updateMethodologyPanel();
  updateGameCopy();
  replaceButton("restartGame", startGame);
  replaceButton("recordGameImpact", recordGameImpact);
  applyTranslations = function () {
    document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    simpleModeButton.textContent = document.body.classList.contains("simple") ? t("technicalMode") : t("simpleMode");
    searchFilter.placeholder = state.language === "pt" ? "Contrato, acao ou evidencia" : t("searchLabel");
    statusFilter.options[0].textContent = t("statusAll");
    t("statuses").forEach((status, index) => {
      statusFilter.options[index + 1].textContent = status;
    });
    configureActionOptions();
    configureMetricOptions();
    rebuildMetricOptions(getMetricId(form?.elements?.metricUnit?.value || ""));
    if (!state.account) {
      connectWalletButton.textContent = t("connectWallet");
    }
    normalizeRegisterFieldCopy();
    updateRegisterGuideCounts();
    ensureAuditCriteriaPanel();
    trimInterfaceNoise();
    normalizeChromeText();
    render();
    updateChallengePanel();
  };

  const originalSubmitLocal = submitLocal;
  submitLocal = async function (formData) {
    const actionTypeValue = formData.get("actionType");
    const serviceId = getServiceId(actionTypeValue);
    const metricId = getMetricId(formData.get("metricUnit"));
    const normalized = {
      get(key) {
        if (key === "actionType" && serviceId) {
          return getCanonicalServiceLabel(serviceId);
        }
        if (key === "metricUnit" && metricId) {
          return metricId;
        }
        return formData.get(key);
      }
    };

    return originalSubmitLocal(normalized);
  };

  configureMetricOptions();
  configureActionOptions();
  normalizeDemoRecords();
  normalizeStateRecords();
  bindSmartRegisterRules();
  applyTranslations();
  applySmartRegisterDefaults();
  syncActionDrivenFields(true);
  loadSimpleServicesFromJson();
  normalizeChromeText();
  startGame();
})();
