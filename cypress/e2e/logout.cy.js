/// <reference types="cypress" />


describe('Teste de logout', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Deve fazer logout e retornar para a página de login', () => {
        cy.successfulLogin()

        cy.url().should('include', '/inventory')

        cy.get('#react-burger-menu-btn')
            .click()

        cy.get('#logout_sidebar_link')
            .should('be.visible')
            .and('have.text', 'Logout')
            .click()

        cy.url().should('eq', 'https://www.saucedemo.com/')

        cy.get('#login-button')
            .should('be.visible')
    })
})