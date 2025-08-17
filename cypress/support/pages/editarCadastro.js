
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
    
    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const email = faker.internet.email()
    const idade = faker.string.numeric(2)
    const salario = faker.string.numeric(5)
    const departamento = faker.person.jobType()

    Cypress.env('EMAIL_VALIDACAO', email,{log: false})

    cy.get(FORM_NAME).clear().type(nome, {log: false})
    cy.get(FORM_LAST_NAME).clear().type(sobrenome, {log: false})
    cy.get(FORM_EMAIL).clear().type(email, {log: false})
    cy.get(FORM_AGE).clear().type(idade, {log: false})
    cy.get(FORM_SALARY).clear().type(salario, {log: false})
    cy.get(FORM_DEPARTMENT).clear().type(departamento, {log: false})
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
    cy.get('.rt-tbody').should('contain', Cypress.env('EMAIL_VALIDACAO'),{log: false})
})