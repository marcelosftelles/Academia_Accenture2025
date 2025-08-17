const BTN_ADD = '#addNewRecordButton'
const FORM_NAME = '#firstName'
const FORM_LAST_NAME = '#lastName'
const FORM_EMAIL ='#userEmail'
const FORM_AGE = '#age'
const FORM_SALARY ='#salary'
const FORM_DEPARTMENT ='#department'
const BTN_SUBMIT = '#submit'
const FORM_VALIDATION = '.rt-tbody' 

Cypress.Commands.add('criarNovoUsuario', () => {
    cy.get(BTN_ADD).click()
    
})

Cypress.Commands.add('inserindoDadosValidos', () => {
    cy.get(FORM_NAME).type(Cypress.env('random.user').name, {log: false})
    cy.get(FORM_LAST_NAME).type(Cypress.env('random.user').lastName, {log: false})
    cy.get(FORM_EMAIL).type(Cypress.env('random.user').email, {log: false})
    cy.get(FORM_AGE).type(Cypress.env('random.user').age)
    cy.get(FORM_SALARY).type(Cypress.env('random.user').salary, {log: false})
    cy.get(FORM_DEPARTMENT).type(Cypress.env('random.user').department)

})

Cypress.Commands.add('finalizaCadastro', () => {
    cy.get(BTN_SUBMIT).click()
    
})

Cypress.Commands.add('validarCadastro', () => {
    cy.get(FORM_VALIDATION).should('contain', Cypress.env('random.user').email, {log: false})
})

//PRONTO