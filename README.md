# Testes automatizados utilizando Cypress

## Setup Node

Crie uma pasta para o projeto:
```
$ mkdir cypress-poc && cd &_
```
Inicialize o package.json:
```
$ npm init
```

## Setup Cypress

Com o settup inicial concluido, é hora de instalar o Cypress:
```
$ npm install cypress --save-dev
```
Adicione o seguinte script no package.json:
```
"cypress:open": "cypress open"
```