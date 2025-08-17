#utf-8
#language: pt

Funcionalidade: Cadastro e exclusão de usuário na Web Tables

Contexto:
    Dado que o usuário está no site



Cenário: Criar e excluir um cadastro
  Quando realiza um cadastro válido
  E clica no botão Excluir referente ao seu cadastro
  Então ele não deve mais ver seu cadastro na Web Table