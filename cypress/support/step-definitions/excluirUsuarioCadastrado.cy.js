import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


When('realiza um cadastro válido', () => {
  cy.carregarUsuario()
})

And('clica no botão Excluir referente ao seu cadastro', () => {
  cy.excluirUsuarioCadastrado()
})

Then('ele não deve mais ver seu cadastro na Web Table', () => {
  
})