
Given(/^que eu visite o site "([^"]*)"$/, (args1) => {
    cy.visit("localhost:8080/login")
});

Then(/^desejo fazer login$/, () => {
	return true;
});

When(/^preencher o campo usuário com "([^"]*)"$/, (args1) => {
	console.log(args1);
});

When(/^o campo senha com "([^"]*)"$/, (args1) => {
	console.log(args1);
});

When(/^clicar em login$/, () => {
});

Then(/^devo ir para página de leiões estando logado$/, () => {
});
