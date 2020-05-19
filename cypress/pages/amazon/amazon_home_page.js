import {BasePage} from '../base_page'
import * as util from 'util'
import url from '../../config/uiconfig/ui_url_config'

class AmazonHomePage extends BasePage {

   amazonSearchBox = '#twotabsearchtextbox'
    searchBtn = '.nav-search-submit > .nav-input'
    productName = util.format('//span[text()="%s"]')

    paperbackText  = 'Paperback'
    hardcoverText  = 'Hardcover'
    potherSellersText  = 'Other Sellers'
 addToCartBtn  = '#add-to-cart-button'

    constructor() {
        super()
    }

    /** Visit the Amazon site */
     openAmazonUrl = () => cy.visit(url.AMAZON_URL)

    /** Search Product in a search box */
     searchProduct = (product) => {

        cy.get(this.amazonSearchBox)
            .should('be.visible')
            .type(product)
            .should("have.value", product)
            .get(this.searchBtn).should('be.visible').click()
        return this
    }

    /** Select Product */
     selectProduct = (product) => {
        cy.xpath(util.format(this.productName, product)).click()
        return this
    }

    /** Click Paper back book type */
     selectPaperbackBookType = () => {
        cy.contains(this.paperbackText).should('be.visible').click()
        return this
    }

    /** Click hard back book type */
     selectHardcoverBookType = () => {
        cy.contains(this.hardcoverText).should('be.visible').click()
        return this
    }

    /** Click other book type */
     selectOtherSellersBookType = () => {
        cy.contains(this.otherSellersText).should('be.visible').click()
        return this
    }

    /** Click Add to Cart button */
     addToCart = () => {
        cy.get(this.addToCartBtn).should('be.visible').click()
        return this
    }

}

export default new AmazonHomePage()