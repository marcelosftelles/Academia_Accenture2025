const BTN_EXCLUIR = '#delete-record-3'

const VALIDAR_EXCLUSAO = ''


Cypress.Commands.add('excluirUsuario', () => {
  cy.get(BTN_EXCLUIR).click()
})

Cypress.Commands.add('confirmarExclusao', () => {
  cy.get('.rt-tbody').should('not.contain', 'kierra@example.com')
})



