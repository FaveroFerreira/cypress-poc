
Given(/^que eu visite o site "([^"]*)"$/, (args1) => {
	cy.visit("original.treina.com.br")
});

Then(/^deseje fazer login$/, () => {
	return true;
});

When(/^preencher o campo login com "([^"]*)"$/, (usuario) => {
	cy.get('input[name=login]').type(usuario);
});

When(/^o campo senha com "([^"]*)"$/, (password) => {
	cy.get('input[name=senha]').type(password);
});

When(/^clicar em login$/, () => {
	cy.get('form[name=formLogin]').submit();
});
	
Then(/^devo ir para página de leiões estando logado$/, () => {
	cy.url().should('include', '/principal.php')
});

Then(/^devo verificar uma mensagem de erro$/, () => {
	cy.url().should((url) => expect(url).to.include('/erro.php'));
	cy.get('h3[class=mb20]').should((errorMessage) => { expect(errorMessage).to.have.text('Usuário ou Senha inválida (LG0002)') })
});

