# language: pt
# encoding: utf-8

Funcionalidade: Cadastro de usuários na Web Tables

  Contexto:
    Dado que o usuário está no site

  Cenário: Cadastro de novo registro via Web Tables
    Quando o usuário clica no botão Add
    E preenche todos os campos obrigatórios com dados válidos
    E clica no botão Submit
    Então o usuário deve ver seu cadastro exibido corretamente na Web Table


