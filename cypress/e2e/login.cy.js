/// <reference types="cypress" />


describe('Teste de login', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Deve permitir login com credenciais válidas', () => {
        cy.successfulLogin()

        cy.url().should('include', '/inventory')

    })

    it('Deve exibir erro para usuário inválido', () => {
        cy.invalidLogin('invalidUser', Cypress.env('validPassword'), 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Deve exibir erro para senha inválida', () => {
        cy.invalidLogin(Cypress.env('validUser'), 'invalidPassword', 'Epic sadface: Username and password do not match any user in this service')
    })
})