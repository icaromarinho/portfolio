/// <reference types="cypress" />


describe('Teste de login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.start()

        cy.submitLogin('standard_user', 'secret_sauce')

        cy.get('.app_logo')
            .should('be.visible')
            .and('have.text', 'Swag Labs')
    })

    it('Não deve fazer login com usuário inválido', () => {
        cy.start()

        cy.submitLogin('invalid_user', 'secret_sauce')

        cy.contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible')
    })

    it('Não deve fazer login com senha inválida', () => {
        cy.start()

        cy.submitLogin('standard_user', '123')

        cy.contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible')
    })
})