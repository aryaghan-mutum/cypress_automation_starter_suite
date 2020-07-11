import facebookLoginPage from '../../../pages/facebook/facebook_login_page'
import url from '../../../config/uiconfig/ui_url_config'

describe('Facebook Login Test', () => {

    it('should login facebook account ', () => {
        facebookLoginPage.openUrl(url.FACEBOOK_URL)
        facebookLoginPage.username.should('be.visible').type('user')
        facebookLoginPage.password.should('be.visible').type('pass')
        facebookLoginPage.signin.should('be.visible').type('pass')

    })

})
