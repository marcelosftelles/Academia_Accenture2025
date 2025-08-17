// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


const {faker} = require('@faker-js/faker')


Cypress.Commands.add('gerarUsuario', () => {
    const name = faker.person.firstName()
    Cypress.env('random.user').name = name

    const lastName = faker.person.lastName()
    Cypress.env('random.user').lastName = lastName

    const email = faker.internet.email(name, lastName)
    Cypress.env('random.user').email = email

    const age = faker.string.numeric(2)
    Cypress.env('random.user').age = age

    const salary = faker.string.numeric(5)
    Cypress.env('random.user').salary = salary

    const department = faker.person.jobType()
    Cypress.env('random.user').department = department

    return  name, lastName, email, age, salary, department
})  
