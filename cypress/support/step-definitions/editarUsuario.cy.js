import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário clica no botão Editar referente ao seu cadastro', () => {
    cy.carregarUsuario()
    cy.botaoEditar()
    
    
}) 

And('preenche os campos com novos dados válidos', () => {
    cy.editandoDados(), {timeout: 400}
})

And('clica no botão Submit', () => {
    cy.finalizarCadastroEditado(),{timeout: 400}
})

Then('ele deve ver os dados atualizados corretamente na Web Table', () => {
    cy.validarEdicao()
})  
