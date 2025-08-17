
const {faker} = require('@faker-js/faker')
const BTN_EDIT = '#edit-record-4'
const FORM_NAME = '#firstName'
const FORM_LAST_NAME = '#lastName'
const FORM_EMAIL = '#userEmail'
const FORM_AGE = '#age'
const FORM_SALARY = '#salary'
const FORM_DEPARTMENT = '#department'
const BTN_EDIT_SUBMIT = '#submit'

Cypress.Commands.add('botaoEditar', () => {
    cy.get(BTN_EDIT).click()
})

Cypress.Commands.add('editandoDados', () => {
    cy.get(FORM_NAME).clear().type(Cypress.env('random.user').name, {log: false})
    cy.get(FORM_LAST_NAME).clear().type(Cypress.env('random.user').lastName, {log: false})
    cy.get(FORM_EMAIL).clear().type(Cypress.env('random.user').email, {log: false})
    cy.get(FORM_AGE).clear().type(Cypress.env('random.user').age)
    cy.get(FORM_SALARY).clear().type(Cypress.env('random.user').salary, {log: false})
    cy.get(FORM_DEPARTMENT).clear().type(Cypress.env('random.user').department)
})

Cypress.Commands.add('finalizarCadastroEditado', () => {
    cy.get(BTN_EDIT_SUBMIT).click()
})

Cypress.Commands.add('carregarUsuario', () => {
    cy.criarNovoUsuario()
    cy.inserindoDadosValidos()
    cy.finalizaCadastro()
    cy.validarCadastro()
})

Cypress.Commands.add('validarEdicao', () => {
    cy.get('.rt-tbody').should('contain', (Cypress.env('random.user').age))
})