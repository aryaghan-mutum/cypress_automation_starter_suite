import amazonHomePage from '../../../pages/amazon/amazon_home_page'
import amazonCartPage from '../../../pages/amazon/amazon_cart_page'

const faker = require('faker')

describe('Test Values in Employee Service', () => {

    it('Search a product ', () => {
        amazonHomePage
            .openAmazonUrl()
            .searchProduct('Introduction to Algorithms')
            .selectPaperbackBookType()
            .addToCart()

        amazonCartPage.clickCart().proceedToCheckout()

    })
})





