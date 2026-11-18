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
        cy.env(['validPassword']).then(({ validPassword }) => {
            cy.invalidLogin('invalidUser', `${validPassword}`, 'Epic sadface: Username and password do not match any user in this service')
        })
    })

    it('Deve exibir erro para senha inválida', () => {
        cy.env(['validUser']).then(({ validUser }) => {
            cy.invalidLogin(`${validUser}`, 'invalidPassword', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
})