/// <reference types="cypress" />


describe('Checkout sem dados obrigatórios', () => {

    beforeEach(() => {
        cy.start()
        cy.successfulLogin()
        cy.url().should('include', '/inventory')
    })

    it('Deve exibir erro ao tentar fazer checkout sem informar dados obrigatórios', () => {
        cy.get('#add-to-cart-sauce-labs-backpack')
            .click()

        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
            .click()

        cy.get('a[data-test="shopping-cart-link"]')
            .click()

        cy.url().should('include', '/cart')

        cy.get('#checkout')
            .click()

        cy.url().should('include', '/checkout-step-one')

        cy.get('#continue')
            .click()

        cy.get('button[data-test="error-button"]')
            .parent()
            .should('have.text', 'Error: First Name is required')
    })
})