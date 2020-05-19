import {BasePage} from '../BasePage'

class AmazonCartPage extends BasePage {

    cartBtn = '#nav-cart-count'
    proceedToCheckoutBtn = '.a-button-input'

    constructor() {
        super()
    }

    /** Click Amazon Cart */
    clickCart = () => {
        cy.get(this.cartBtn).should('be.visible').click()
        return this
    }

    /** Get total product count on cart */
    get totalProductCountInCart() {
        let val = cy.get(this.cartBtn).should('be.visible').invoke('val')
        console.log(val)
        return val
    }

    /** Click proceed to checkout button */
    proceedToCheckout = () => {
        cy.get(this.proceedToCheckoutBtn).should('be.visible').click()
        return this
    }
}

export default new AmazonCartPage()
