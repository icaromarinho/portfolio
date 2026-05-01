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