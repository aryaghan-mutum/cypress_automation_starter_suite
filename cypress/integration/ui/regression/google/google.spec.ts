import googleSearchPage from '../../../../pages/google/google_search_page'
import url from '../../../../config/uiconfig/ui_url_config'
import strUtil from '../../../../utils/StringUtils'

describe('Google Search Test', () => {

    it('should search in google engine page ', () => {
        googleSearchPage.openUrl(url.GOOGLE_URL)
        cy.title().should("include", strUtil.capitalizeFirstLetter('google'))
        googleSearchPage.serachBy('cypress')
        cy.title().should('include', 'cypress - Google Search')
    })

})


