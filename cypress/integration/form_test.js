describe('Pizza app', () => {
    beforeEach(() => {
    
        cy.visit('http://localhost:3000/pizza')
    })

    
    it('can select pizza size', () => {
        cy.get('[name=size]').select('Small')
        cy.get('[name=sauce]').first().check()
        cy.get('[type="radio"]').check()
        
        cy.get('input[name=instructions]')
            .should('have.value', '')
            .type('steaming hot ')
            

        cy.get('input[name=name]')
            .should("have.value", "")
            .type("3000")
            .should('have.value', '3000')

        cy.get('.submit-Order')
    })
})