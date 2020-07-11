import {BasePage} from '../base_page'

class LocalhostPage extends BasePage {

    private readonly nameTextBox: string = '#name'
    private readonly emailTextBox: string = '#email'
    private readonly messageTextBox: string = '#message'
    private readonly sendBtnText: string = 'SEND'

    constructor() {
        super()
    }

    /**
     * Set Name
     * @param name 
     */
    setName = (name: string): this => {
        cy.get(this.nameTextBox)
            .should('be.visible')
            .type(name).type('{enter}')
            .should("have.value", name)
        return this
    }

    /** 
     * Get Name 
     * @returns Name
     */
    getName = (): string => {
        const name = Cypress.$(this.nameTextBox).text()
        return name
    }

    /**
     * Set Email 
     * @param email 
     */
    setEmail = (email: string): this => {
        cy.get(this.emailTextBox)
            .should('be.visible')
            .type(email).type('{enter}')
            .should("have.value", email)
        return this
    }

   /**
    * Set Message
    * @param message 
    */
    setMessage = (message: string): this => {
        cy.get(this.messageTextBox)
            .should('be.visible')
            .type(message).type('{enter}')
        return this
    }

    /** 
     * Click Send 
     */
    clickSend = (): this => {
        cy.contains(this.sendBtnText).should('be.visible').click()
        return this
    }
}

export default new LocalhostPage()