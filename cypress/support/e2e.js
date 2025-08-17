// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/cadastro'
import './pages/editarCadastro.js'
import './pages/excluirCadastroExistente.js'
import './step-definitions/global.cy.js'
import './pages/excluirCadastroNovo.js'


// cypress/support/e2e.js
beforeEach(() => {
  const block = [
    '**/pagead/**',
    '**/ads/**',
    '**/gampad/**',
    '**/googlesyndication.com/**',
    '**/doubleclick.net/**',
    '**/google-analytics.com/**',
    '**/googletagmanager.com/**',
  ];
  ['GET','POST'].forEach((m) => block.forEach((p) => cy.intercept(m, p, { statusCode: 204, body: '' })));
});

// (opcional) não falhar por "Script error." de terceiros
Cypress.on('uncaught:exception', (err) => {
  if (/Script error/i.test(err.message)) return false;
});
