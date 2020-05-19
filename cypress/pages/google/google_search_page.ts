import {BasePage} from '../base_page'
import url from '../../config/uiconfig/ui_url_config'

class GoogleSearchPage extends BasePage {

    private readonly googleSearchBox: string = '.gLFyf'

    constructor() {
        super()
    }

    /** Visit Google site */
    public openGoogleUrl = () => {
        cy.visit(url.GOOGLE_URL)
        return this
    }

    /** Search in Google */
    public googleSearch = (message: string) => {
        cy.get(this.googleSearchBox)
            .should('be.visible')
            .type(message).type('{enter}')
            .should("have.value", message)
        return this
    }
}

export default new GoogleSearchPage()