import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário está no site', () => {
    
    cy.visit('/')
    cy.gerarUsuario()
})

And('realizou um cadastro válido', () => {
    cy.carregarUsuario()
})