# ObraPrime 27 Ledger

MVP do Desafio 3 HackWeb: uma plataforma para registrar, validar e certificar execuções de construção civil com foco em impermeabilização crítica, manutenção estrutural preventiva e conformidade de obras em ativos públicos e privados.

## Tema escolhido

**Tema 27: blindagem hídrica e integridade predial auditável.**

O projeto foi reposicionado para uma dor concreta da construção civil: obras e manutenções relevantes são executadas, mas a comprovação técnica, contratual e financeira costuma ficar dispersa entre fotos, planilhas, medições, laudos e mensagens.

Esse vazio de confiança gera disputa de medição, atraso de pagamento, risco patrimonial, retrabalho, dificuldade de auditoria e baixa previsibilidade para síndicos, incorporadoras, prefeituras e fiscais de contrato.

## Problema

No setor privado, condomínios de alto padrão, torres corporativas, centros logísticos, hospitais e shopping centers sofrem com infiltração, falhas de impermeabilização, fissuras, patologias recorrentes e manutenção preventiva mal documentada.

No setor público, escolas, hospitais, terminais, habitações coletivas e prédios administrativos convivem com reformas, contenções, correções estruturais e serviços de proteção predial que nem sempre deixam uma trilha robusta de prova.

Quando a comprovação é frágil:

- a medição pode ser contestada;
- o pagamento pode atrasar;
- o histórico técnico se perde;
- o risco jurídico aumenta;
- o custo corretivo cresce;
- o ativo perde valor e confiança.

## Solução

O ObraPrime 27 Ledger cria uma camada auditável para execução de obras e serviços críticos.

Cada entrega pode registrar:

- ativo ou contrato atendido;
- tipo de serviço executado;
- métrica principal;
- hash da evidência técnica;
- URI do dossiê documental off-chain;
- validadores responsáveis;
- emissão automática de certificado quando a governança mínima é cumprida.

Na prática, o fluxo é simples:

1. registrar a intervenção;
2. anexar prova técnica;
3. validar com fiscal, engenheiro ou gestor autorizado;
4. certificar a entrega;
5. manter histórico auditável para operação, auditoria e futuras garantias.

## Recorte exclusivo

Em vez de tentar atender toda a construção civil de forma genérica, o MVP foca em um nicho de alta dor e alto valor:

- impermeabilização de áreas críticas;
- correção de pontos de infiltração;
- reforço e manutenção estrutural preventiva;
- conformidade documental de obras e reformas em edifícios sensíveis.

Esse recorte é inteligente porque conversa com dinheiro real, risco real e decisão real.

## Público-alvo

### Setor privado

- condomínios premium;
- incorporadoras;
- administradoras prediais;
- hospitais privados;
- shopping centers;
- torres corporativas;
- operadores logísticos.

### Setor público

- prefeituras;
- secretarias de obras e infraestrutura;
- hospitais públicos;
- escolas e universidades;
- terminais e equipamentos urbanos;
- autarquias patrimoniais;
- programas habitacionais.

## Resultados concretos esperados

O projeto foi estruturado para demonstrar resultado mensurável, não apenas discurso.

- Redução de disputa sobre execução e medição.
- Mais velocidade na validação de entregas.
- Melhor rastreabilidade para contratos e garantias.
- Menor dependência de provas dispersas.
- Mais previsibilidade para manutenção preventiva.
- Melhor base para seguro, compliance, auditoria e prestação de contas.

## O que vai para a blockchain

On-chain:

- ativo ou território do contrato;
- tipo do serviço;
- métrica principal;
- hash da evidência;
- URI da evidência;
- status;
- validações;
- certificado emitido.

Off-chain:

- laudos;
- fotos de campo;
- memoriais;
- medições;
- ART/RRT ou documento equivalente;
- checklists;
- atas;
- relatórios técnicos.

Essa divisão reduz custo e mantém a prova essencial verificável.

## Exemplo forte de uso

Um contrato de manutenção predial registra a impermeabilização de cobertura e a correção de pontos de infiltração em um hospital público.

O registro inclui:

- contrato ou ativo;
- escopo executado;
- métrica principal;
- dossiê técnico;
- hash da evidência;
- validação do engenheiro responsável;
- validação do fiscal do contrato.

Quando as duas validações são concluídas, o smart contract emite um certificado auditável de execução.

## Métricas do MVP

O MVP foi reposicionado para operar com leitura de resultado de construção civil, por exemplo:

- área tratada;
- pontos críticos corrigidos;
- unidades protegidas;
- horas técnicas mobilizadas.

## Por que blockchain agrega valor

Blockchain aqui não é decoração. Ela resolve uma pergunta objetiva:

**como provar que uma entrega crítica realmente foi executada, validada e certificada sem depender apenas da confiança entre as partes?**

O valor está em:

- integridade do registro;
- trilha auditável por eventos;
- transparência de validação;
- certificado verificável;
- comparação entre a evidência apresentada e o hash registrado.

## Arquitetura

```text
app/                         Interface web demonstrável
contracts/                   Smart contract Solidity
scripts/deploy.js            Deploy em rede local, Sepolia ou Mainnet
test/                        Testes do contrato
docs/                        Pitch, slides e material de entrega
```

## Tecnologias

- Solidity
- Hardhat
- Ethers.js
- HTML, CSS e JavaScript
- Ethereum Sepolia, Mainnet ou rede local Hardhat
- IPFS ou URI equivalente para evidências

## Metodologia e base técnica

O novo posicionamento conversa com práticas reais de manutenção, reforma e desempenho de edificações.

Como referência de mercado e de engenharia, a proposta pode dialogar com:

- ABNT NBR 5674:2024, sobre sistema de gestão de manutenção de edificações;
- ABNT NBR 16280:2024, sobre gestão de reformas em edificações;
- ABNT NBR 17170:2022, sobre garantias em edificações;
- família ABNT NBR 15575, sobre desempenho em edificações habitacionais.

Essas referências são usadas como direcionamento conceitual do recorte de negócio e governança do MVP.

## Como executar

Instale dependências:

```bash
npm install
```

Compile e teste:

```bash
npm run compile
npm test
```

Rode a interface:

```bash
npm run app
```

Abra `http://localhost:5173`.

## Deploy em testnet

Crie um arquivo `.env` na raiz do projeto usando o modelo de `.env.example`.

Exemplo recomendado com Alchemy para Sepolia:

```bash
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/SUA_API_KEY
PRIVATE_KEY=sua_chave_privada
ETHERSCAN_API_KEY=sua_api_key
```

Tambem funcionam estes nomes alternativos:

- `ALCHEMY_RPC_URL`
- `INFURA_RPC_URL`
- `RPC_URL`
- `DEPLOYER_PRIVATE_KEY`

O deploy para Sepolia usa a primeira RPC disponivel nessa ordem:

1. `SEPOLIA_RPC_URL`
2. `ALCHEMY_RPC_URL`
3. `INFURA_RPC_URL`
4. `RPC_URL`
5. fallback de exemplo do arquivo de configuracao

Deploy em Sepolia:

```bash
npm run deploy:sepolia
```

Deploy em Mainnet:

```bash
npm run deploy:mainnet
```

Mainnet usa dinheiro real. Para desafio, prefira Sepolia.

O script exibe a rede, a carteira deployer, o saldo e o endereço final do contrato.

Depois do deploy, o script atualiza automaticamente:

- `CONTRACT_ADDRESS` no `.env`
- `DEPLOY_NETWORK` no `.env`
- `app/runtime-config.js` para o frontend ler a configuração sem editar `app/app.js`

Se quiser apenas regenerar a configuração do frontend a partir do `.env`, rode:

```bash
npm run prepare:app-config
```

## Modelo de negócio

- SaaS para administradoras, condomínios e operadores patrimoniais;
- licença institucional para órgãos públicos e secretarias;
- plano enterprise para hospitais, malls e torres corporativas;
- cobrança por certificação auditável emitida;
- relatórios premium para auditoria, seguro e compliance.

## Diferenciais

- Foco em uma dor cara e recorrente da construção civil.
- Aplicação útil para setor público e privado.
- Narrativa de valor ligada a patrimônio, risco e medição.
- Blockchain usada de forma justificável.
- Proposta simples de entender e forte para defender.

## Entregáveis do desafio

- Smart contract funcional: `contracts/MangueProofImpactLedger.sol`
- Histórico auditável: eventos `ActionSubmitted`, `ActionValidated`, `CertificateIssued`
- Interface funcional: `app/index.html`
- Testes: `test/MangueProofImpactLedger.test.js`
- Slides: `docs/slides.md`
- Roteiro de vídeo-pitch: `docs/video-pitch.md`
