import facebookLoginPage from '../../../pages/facebook/facebook_login_page'
import amazonHomePage from '../../../pages/amazon/amazon_home_page'

describe('Test', () => {

    it('Open Facebook login page ', () => {
        amazonHomePage.openAmazonUrl()
    })

    it('Set username {string} and password  ', () => {
        facebookLoginPage.setUsername('hello').setPassword('world')
    })

    it('Click Sign in button  ', () => {
        facebookLoginPage.signIn()
    })

})
