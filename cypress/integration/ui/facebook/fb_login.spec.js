import facebookLoginPage from '../../../pages/facebook/facebook_login_page'

describe('Test', () => {

    it('Open Facebook login page ', () => {
        facebookLoginPage.openFacebookUrl()
        facebookLoginPage.facebookSignIn('user@email.com', 'password')
    })

})
