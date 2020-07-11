import amazonHomePage from '../../../pages/amazon/amazon_home_page'
import amazonCartPage from '../../../pages/amazon/amazon_cart_page'
import url from '../../../config/uiconfig/ui_url_config'

const faker = require('faker')

describe('Amazon Test', () => {

    const bookName: string = 'Intoduction to Algorithms (The MIT Press)'

    it('should search a product ', () => {
        amazonHomePage.openUrl(url.AMAZON_URL)
        cy.contains('amazon').should('be.visible')
        amazonHomePage.searchProduct(bookName)
            .selectProduct(bookName)
            .paperbackBookType.should('be.visible').click()

        amazonHomePage.addtoCartBtn.should('be.visible').click()

        amazonCartPage.clickCart().proceedToCheckout.should('be.visible').click()

    })
})





