import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


When('o usuário clica no botão Add', () => {
    cy.criarNovoUsuario()
})

And('preenche todos os campos obrigatórios com dados válidos', () => {
    cy.inserindoDadosValidos()
})

And('clica no botão Submit', () => {
    cy.finalizaCadastro()
})

Then('o usuário deve ver seu cadastro exibido corretamente na Web Table', () => {
    cy.validarCadastro()
})
