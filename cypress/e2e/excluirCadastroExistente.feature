# language: pt
# encoding: utf-8

Funcionalidade: Exclusão de usuário na Web Tables

Contexto:
  Dado que o usuário está no site

Cenário: Excluir um cadastro existente
  Quando o usuário clica no botão Excluir referente ao cadastro escolhido
  Então ele não deve mais ver seu cadastro na Web Table

