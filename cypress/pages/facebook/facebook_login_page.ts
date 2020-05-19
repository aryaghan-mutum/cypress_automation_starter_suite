import {BasePage} from '../base_page'
import url from '../../config/uiconfig/ui_url_config'

class FacebookLoginPage extends BasePage {

    private readonly usernameTextBox: string = '#email'
    private readonly passwordTextBox: string = '#pass'
    private readonly signInTextBtn: string = 'Log In'

    constructor() {
        super()
    }

    /** Visit Facebook site */
    public openFacebookUrl = () => {
        cy.visit(url.FACEBOOK_URL)
        return this
    }

    /** Set Facebook username */
    public setUsername = (username: string) => {
        cy.get(this.usernameTextBox)
            .should('be.visible')
            .type(username)
            .should("have.value", username)
        return this
    }

    /** Set Facebook password */
    public setPassword = (password: string) => {
        cy.get(this.passwordTextBox)
            .should('be.visible')
            .type(password)
            .should("have.value", password)
        return this
    }

    /** Click Sign in button */
    public signIn = () => {
        cy.contains(this.signInTextBtn).should('be.visible').click()
        return this
    }

    /** Log into Facebook with username and password */
    public facebookSignIn = (username: string, password: string) => {
        this.setUsername(username).setPassword(password).signIn()
        return this
    }
}

export default new FacebookLoginPage()