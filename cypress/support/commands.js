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


Cypress.Commands.add('start', () => {
    cy.viewport(1440, 900)

    cy.visit('https://www.saucedemo.com')
})

Cypress.Commands.add('submitLogin', (user, password) => {
    cy.get('#user-name')
        .type(user)

    cy.get('#password')
        .type(password)

    cy.get('#login-button')
        .click()
})

Cypress.Commands.add('successfulLogin', () => {
    cy.submitLogin(Cypress.env('validUser'), Cypress.env('validPassword'))

    cy.get('.app_logo')
        .should('be.visible')
        .and('have.text', 'Swag Labs')
})

Cypress.Commands.add('invalidLogin', (user, password, errorMessage) => {
    cy.submitLogin(user, password)

    cy.get('h3[data-test="error"]')
        .should('be.visible')
        .and('have.text', errorMessage)
})