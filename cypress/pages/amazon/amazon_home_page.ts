import {BasePage} from '../base_page'
import * as util from 'util'
import url from '../../config/uiconfig/ui_url_config'

class AmazonHomePage extends BasePage {

    private readonly amazonSearchBox: string = '#twotabsearchtextbox'
    private readonly searchBtn: string  = '.nav-search-submit > .nav-input'
    private readonly productName: string  = util.format('//span[text()="%s"]')

    private readonly paperbackText: string  = 'Paperback'
    private readonly hardcoverText: string  = 'Hardcover'
    private readonly otherSellersText: string  = 'Other Sellers'
    private readonly addToCartBtn: string  = '#add-to-cart-button'

    constructor() {
        super()
    }

    /** Visit the Amazon site */
    public openAmazonUrl = () => {
        cy.visit(url.AMAZON_URL)
        return this
    }

    /** Search Product in a search box */
    public searchProduct = (product: string) => {
        cy.get(this.amazonSearchBox)
            .should('be.visible')
            .type(product)
            .should("have.value", product)
            .get(this.searchBtn).should('be.visible').click()
        return this
    }

    /** Select Product */
    public selectProduct = (product: string) => {
        cy.xpath(util.format(this.productName, product)).click()
        return this
    }

    /** Click Paper back book type */
    public selectPaperbackBookType = () => {
        cy.contains(this.paperbackText).should('be.visible').click()
        return this
    }

    /** Click hard back book type */
    public selectHardcoverBookType = () => {
        cy.contains(this.hardcoverText).should('be.visible').click()
        return this
    }

    /** Click other book type */
    public selectOtherSellersBookType = () => {
        cy.contains(this.otherSellersText).should('be.visible').click()
        return this
    }

    /** Click Add to Cart button */
    public addToCart = () => {
        cy.get(this.addToCartBtn).should('be.visible').click()
        return this
    }

}

export default new AmazonHomePage()