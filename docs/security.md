# Segurança e Controle

O ObraPrime 27 Ledger foi desenhado para reduzir superfície de ataque no MVP:

- O frontend usa biblioteca `ethers` local em `app/vendor`, sem CDN externa.
- A página define Content Security Policy para bloquear scripts externos e enquadramento por terceiros.
- Dados digitados pelo usuário são escapados antes de aparecerem no histórico.
- Registros on-chain não são apagados; erros são rejeitados ou retificados mantendo rastreabilidade.
- O smart contract possui `owner`; somente o dono pode cadastrar validadores, alterar mínimo de validações e transferir administração.
- Validadores autorizados podem validar ou rejeitar registros.
- Evidências completas ficam off-chain; a blockchain guarda hash e metadados essenciais.
- Comprovantes podem ser copiados e verificados por hash no próprio frontend.

## Limite honesto

Nenhum sistema real pode prometer impossibilidade absoluta de ataque. A postura correta é minimizar risco, auditar código, proteger chaves privadas, usar testnet antes de produção e manter controle de permissões.

## Antes de produção

- Auditoria independente do smart contract.
- Deploy com carteira dedicada e hardware wallet, se possível.
- Política formal para validadores.
- Backup seguro das evidências off-chain.
- Monitoramento de eventos do contrato.
