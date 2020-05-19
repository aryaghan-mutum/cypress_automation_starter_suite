import {BasePage} from '../BasePage'

const url = require('../../config/url_config')

class LocalhostPage extends BasePage {

    nameTextBox = '#name'
    emailTextBox = '#email'
    messageTextBox = '#message'
    sendBtnText = 'SEND'

    constructor() {
        super()
    }

    /** Visit localhost */
    openLocalhost = () => cy.visit(url.LOCALHOST_URL)

    /** Set Name */
    setName = (name) => {
        cy.get(this.nameTextBox)
            .should('be.visible')
            .type(name).type('{enter}')
            .should("have.value", name)
        return this
    }

    /** Get Name */
    getName = () => {
        const name = Cypress.$(this.nameTextBox).text()
        return name
    }

    /** Set Email */
    setEmail = (email) => {
        cy.get(this.emailTextBox)
            .should('be.visible')
            .type(email).type('{enter}')
            .should("have.value", email)
        return this
    }

    /** Set Message */
    setMessage = (message) => {
        cy.get(this.messageTextBox)
            .should('be.visible')
            .type(message).type('{enter}')
        return this
    }

    /** Click Send */
    clickSend = () => {
        cy.contains(this.sendBtnText).should('be.visible').click()
        return this
    }
}

export default new LocalhostPage()