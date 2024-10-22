# Desafio Clarke Energia | Backend

## Sobre o projeto

Esta é API de fornecedores de energia, sendo o Backend do projeto Full Stack do desafio da Clarke Energia.

Para o Front End do projeto visite o [Github do Front End](https://github.com/andre-lucca/clarke-app)

Link para o Deploy [aqui](https://clarke-api.onrender.com/suppliers)

## Principais tecnologias usadas
 - Typescript
 - Node.js
 - Express.js
 - PrismaORM
 - Jest
 - Docker

## Como rodar em ambiente local

### Para executar o projeto, você precisa do `Node` e do `Docker` instalados.

### Depois, siga estes passos:

1. Clone ou baixe o repositório

```bash
git clone git@github.com:andre-lucca/clarke-api.git
```

2. Instale as dependências

```bash
npm i
```

3. Crie um .env com base no .env.example

```bash
cp .env.example ./.env
```

4. Crie os contêineres e execute o Docker

```bash
docker compose up --build -d
```

5. Insira alguns dados no banco

```bash
docker exec clarke-api-backend-1 npm run docker:seed
```
Pronto, a API já deve estar funcionando e recebendo requisições no endpoint:
`http://localhost:3000`

Para rodar os testes, use esse comando:

```bash
docker exec clarke-api-backend-1 npm run test
```

Os testes são executados dentro do container do Docker, e deve ser possível vê-los no terminal
