const BTN_EXCLUIR_CADASTRADO = '#delete-record-4'

Cypress.Commands.add('excluirUsuarioCadastrado', () => {
  cy.get(BTN_EXCLUIR_CADASTRADO).click()
})

Cypress.Commands.add('confirmaExclusaoCadastrado', () => {
    cy.get('.rt-tbody').should('not.contain', Cypress.env('random.user').email, {log: false})
})