const BTN_EXCLUIR = '#delete-record-3'
const BTN_EXCLUIR_CADASTRADO = '#delete-record-4'


Cypress.Commands.add('excluirUsuario', () => {
  cy.get(BTN_EXCLUIR).click()
})

Cypress.Commands.add('excluirUsuarioCadastrado', () => {
  cy.get(BTN_EXCLUIR_CADASTRADO).click()
})


Cypress.Commands.add('confirmarExclusao', () => {
  
} ) 