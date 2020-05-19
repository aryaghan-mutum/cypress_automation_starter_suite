import {BasePage} from '../base_page'
import url from '../../config/uiconfig/ui_url_config'

class LocalhostPage extends BasePage {

    private readonly nameTextBox: string = '#name'
    private readonly emailTextBox: string = '#email'
    private readonly messageTextBox: string = '#message'
    private readonly sendBtnText: string = 'SEND'

    constructor() {
        super()
    }

    /** Visit localhost */
    public openLocalhost = () => {
        cy.visit(url.LOCALHOST_URL)
        return this
    }

    /** Set Name */
    public setName = (name: string) => {
        cy.get(this.nameTextBox)
            .should('be.visible')
            .type(name).type('{enter}')
            .should("have.value", name)
        return this
    }

    /** Get Name */
    public getName = (): string => {
        const name = Cypress.$(this.nameTextBox).text()
        return name
    }

    /** Set Email */
    public setEmail = (email: string) => {
        cy.get(this.emailTextBox)
            .should('be.visible')
            .type(email).type('{enter}')
            .should("have.value", email)
        return this
    }

    /** Set Message */
    public setMessage = (message: string) => {
        cy.get(this.messageTextBox)
            .should('be.visible')
            .type(message).type('{enter}')
        return this
    }

    /** Click Send */
    public clickSend = () => {
        cy.contains(this.sendBtnText).should('be.visible').click()
        return this
    }
}

export default new LocalhostPage()