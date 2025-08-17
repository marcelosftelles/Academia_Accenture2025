import { faker } from "@faker-js/faker"

const BTN_EDIT = '#edit-record-3'
const FORM_NAME = '#firstName'
const FORM_LAST_NAME = '#lastName'
const FORM_EMAIL = '#userEmail'
const FORM_AGE = '#age'
const FORM_SALARY = '#salary'
const FORM_DEPARTMENT = '#department'
const BTN_EDIT_SUBMIT = '#submit'
const EMAIL_VALIDACAO = faker.internet.email()


Cypress.Commands.add('botaoEditar', () => {
    cy.get(BTN_EDIT).click()
})

Cypress.Commands.add('editandoDados', () => {
    cy.get(FORM_NAME).clear().type(faker.person.firstName(), {log: false})
    cy.get(FORM_LAST_NAME).clear().type(faker.person.lastName(), {log: false})
    cy.get(FORM_EMAIL).clear().type(EMAIL_VALIDACAO, {log: false})
    cy.get(FORM_AGE).clear().type(faker.string.numeric(2), {log: false})
    cy.get(FORM_SALARY).clear().type(faker.string.numeric(5), {log: false})
    cy.get(FORM_DEPARTMENT).clear().type(faker.person.jobType(), {log: false})
})

Cypress.Commands.add('finalizarCadastroEditado', () => {
    cy.get(BTN_EDIT_SUBMIT).click()
})

Cypress.Commands.add('carregarUsuario', () => {
    cy.criarNovoUsuario()
    cy.inserindoDadosValidos()
    cy.finalizaCadastro()
})


Cypress.Commands.add('validarEdicao', () =>{
    
})

