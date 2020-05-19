import {BasePage} from '../base_page'
import url from '../../config/uiconfig/ui_url_config'

class GoogleSearchPage extends BasePage {

    googleSearchBox = '.gLFyf'

    constructor() {
        super()
    }

    /** Visit Google site */
    openGoogleUrl = () => cy.visit(url.GOOGLE_URL)

    /** Search in Google */
    googleSearch = (message) => {
        debugger
        cy.get(this.googleSearchBox)
            .should('be.visible')
            .type(message).type('{enter}')
            .should("have.value", message)
    }
}

export default new GoogleSearchPage()