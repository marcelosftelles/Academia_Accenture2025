# language: pt
# encoding: utf-8

Funcionalidade: Edição de cadastro de usuário na Web Tables

Contexto:
  Dado que o usuário está no site

Cenário: Editar um cadastro existente
  Quando o usuário clica no botão Editar referente ao seu cadastro
  E preenche os campos com novos dados válidos
  E clica no botão Submit
  Então ele deve ver os dados atualizados corretamente na Web Table