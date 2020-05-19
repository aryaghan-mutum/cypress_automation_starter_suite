import {BasePage} from '../BasePage'

const url = require('../../config/url_config')


class FacebookLoginPage extends BasePage {

    usernameTextBox = '#email'
    passwordTextBox = '#pass'
    signInTextBtn = 'Log In'

    constructor() {
        super()
    }

    /** Visit Facebook site */
    openFacebookUrl = () => cy.visit(url.FACEBOOK_URL)

    /** Set Facebook username */
    setUsername = (username) => {
        cy.get(this.usernameTextBox)
            .should('be.visible')
            .type(username)
            .should("have.value", username)
        return this
    }

    /** Set Facebook password */
    setPassword = (password) => {
        cy.get(this.passwordTextBox)
            .should('be.visible')
            .type(password)
            .should("have.value", password)
        return this
    }

    /** Click Sign in button */
    signIn = () => {
        cy.contains(this.signInTextBtn).should('be.visible').click()
        return this
    }

    /** Log into Facebook with username and password */
    facebookSignIn = (username, password) => {
        this.setUsername(username).setPassword(password).signIn()
        return this
    }
}

export default new FacebookLoginPage()