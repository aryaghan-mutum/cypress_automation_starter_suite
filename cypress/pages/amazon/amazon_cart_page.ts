import {BasePage} from '../base_page'

class AmazonCartPage extends BasePage {

    private readonly cartBtn: string = '#nav-cart-count'
    private readonly proceedToCheckoutBtn: string = '.a-button-input'

    constructor() {
        super()
    }

   
    public clickCart = (str: string) => {
        cy.get(this.cartBtn).should('be.visible').click()
        return this
    }

    /** Get total product count on cart */
    public get totalProductCountInCart(): Cypress.Chainable<any> {
        let val = cy.get(this.cartBtn).should('be.visible').invoke('val')
        return val
    }

    /** Click proceed to checkout button */
    public proceedToCheckout = () => {
        cy.get(this.proceedToCheckoutBtn).should('be.visible').click()
        return this
    }
}

export default new AmazonCartPage()
