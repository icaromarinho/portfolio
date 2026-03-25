/// <reference types="cypress" />


describe('Fluxo de compra', () => {

    it('Deve realizar uma compra', () => {
        cy.start()

        cy.successfulLogin()

        cy.url().should('include', '/inventory')

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

        cy.get('#first-name')
            .type('nomeUsuario')

        cy.get('#last-name')
            .type('sobrenomeUsuario')

        cy.get('#postal-code')
            .type('50000-000')

        cy.get('#continue')
            .click()

        //Captura os preços dos dois produtos e faz a soma
        cy.get('.inventory_item_price').eq(0).invoke('text').then((preco1Texto) => {
            cy.get('.inventory_item_price').eq(1).invoke('text').then((preco2Texto) => {
                const p1 = parseFloat(preco1Texto.replace('$', ''))
                const p2 = parseFloat(preco2Texto.replace('$', ''))
                const somaProdutos = p1 + p2

                //Compara a soma dos produtos com o valor total da compra
                cy.get('.summary_subtotal_label').invoke('text').then((totalCompraTexto) => {
                    const totalCompra = parseFloat(totalCompraTexto.replace('Item total: $', ''))
                    expect(somaProdutos).to.eq(totalCompra)

                    //Soma o valor total da compra + taxa
                    cy.get('.summary_tax_label').invoke('text').then((taxaTexto) => {
                        const taxa = parseFloat(taxaTexto.replace('Tax: $', ''))
                        const somaCompraTaxa = totalCompra + taxa

                        //Verifica se total da compra + taxa = ao total final
                        cy.get('.summary_total_label').invoke('text').then((totalFinalTexto) => {
                            const totalFinal = parseFloat(totalFinalTexto.replace('Total: $', ''))
                            expect(somaCompraTaxa).to.eq(totalFinal)
                        })
                    })
                })
            })
        })
    })
})