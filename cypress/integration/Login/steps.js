
Given(/^que eu visite o site "([^"]*)"$/, (args1) => {
    cy.visit("localhost:8080/login")
});

Then(/^desejo fazer login$/, () => {
	return true;
});

When(/^preencher o campo usuário com "([^"]*)"$/, (usuario) => {
	cy.get('input[name=username]').type(usuario);
});

When(/^o campo senha com "([^"]*)"$/, (password) => {
	cy.get('input[name=password]').type(password);
});

When(/^clicar em login$/, () => {
    cy.get('#login-form').submit();
});

Then(/^devo ir para página de leiões estando logado$/, () => {
	cy.url().as('url').should('include', '/leiloes')
});
