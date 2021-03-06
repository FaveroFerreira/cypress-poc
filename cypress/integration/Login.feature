#language: pt

Funcionalidade: Login

    Como usuário, desejo acessar a minha conta
    Para que eu possa fazer postagens e visualizar posts de minhas conexões

Cenario: Login com credenciais válidas
    Dado que eu visite o site "http://localhost:8080/login"
    E desejo fazer login
    Quando preencher o campo usuário com "ciclano"
    E o campo senha com "pass"
    E clicar em login
    Entao devo ir para página de leiões estando logado