import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'



When('o usuário clica no botão Excluir referente ao cadastro escolhido', () => {
    cy.excluirUsuario()
})


Then('ele não deve mais ver seu cadastro na Web Table', () => {

})

    