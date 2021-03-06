# Testes automatizados utilizando Cypress

Este é um projeto exemplo/tutorial para o setup e utilização do Cypress com Cucumber para testes automatizados end-2-end.

Com o Cucumber podemos utilizar o poder do Cypress para realizar testes end-2-end de interfaces e APIs com descrições e linguagem natural, que possa ser compreendida por pessoas de negócio.

## Setup Node

Crie uma pasta para o projeto:
```
$ mkdir cypress-poc && cd &_
```

Inicialize o ``package.json``:
```
$ npm init
```

## Setup Cypress

Com o settup inicial concluido, é hora de instalar o Cypress:
```
$ npm install cypress --save-dev
```

Agora, vamos facilitar nossa vida, adicione o seguinte script no package.json:
```
"scripts": {
    "cypress:open": "cypress open"
}
```

Por ultimo, só precisamos rodar o Cypress para que ele crie toda a estrutura de pastas inicial
```
$ npm run cypress:open
```

## Cucumber

Cucumber é uma ferramenta utilizada para BDD, com ela conseguimos criar descrições funcionais para os testes *em linguagem natural*. Para utilizar o Cucumber precisamos rodar:
```
$ npm install cypress-cucumber-preprocessor --save-dev
```

Agora precisamos configurar o cucumber como plugin do Cypress, para isso, iremos adicionar o seguinte treixo em ``/cypress/plugins/index.js``
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Também precisamos dizer ao Cypress que iremos utilizar nossos arquivos ``*.features`` para rodar os testes. Para isso, adicione a seguinte linha dentro do arquivo ``cypress.json``

```
{
  "testFiles": "**/*.feature"
}
```

Por ultimo, precisamos adicionar este treixo arquivo ``package.json``
```
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
}
```