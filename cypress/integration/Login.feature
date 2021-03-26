#language: pt

Funcionalidade: Login

    Como colaborador do banco original, desejo acessar a minha conta
    Para que eu possa estudar as trilhas e cursos obrigatórios

Cenario: Login com credenciais válidas
    Dado que eu visite o site "original.treina.com.br"
    E deseje fazer login
    Quando preencher o campo login com ""
    E o campo senha com ""
    Quando clicar em login
    Entao devo ir para página treinamentos estando logado

Cenario: Login com credenciais inválidas
    Dado que eu visite o site "original.treina.com.br"
    Quando preencher o campo login com ""
    E o campo senha com ""
    Quando clicar em login
    Entao devo verificar uma mensagem de erro
