# Ledger Essencial

Registro simples de serviços de engenharia com histórico auditável e integração opcional com MetaMask.

## O que faz

1. Registrar um serviço.
2. Validar o registro.
3. Certificar após a validação.

## Fluxo

1. `Enviado`
2. `Validado`
3. `Certificado`

## Uso local

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Scripts principais

- `npm run dev`: abre a interface local.
- `npm run app`: alias de `dev`.
- `npm run deploy:localhost`: deploy local.
- `npm run deploy:sepolia`: deploy em Sepolia.
- `npm run deploy:mainnet`: deploy em mainnet.

## Estrutura

- `app/`: interface web.
- `contracts/`: smart contract.
- `scripts/`: deploy e configuração.
- `docs/`: material resumido do projeto.

## Observações

- O histórico aparece mesmo sem carteira, porque também funciona em modo local.
- A MetaMask é opcional para teste da interface.
- Evidências completas ficam fora da blockchain; o app registra o essencial.
