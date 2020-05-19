import googleSearchPage from '../../../pages/google/google_search_page'

describe('test', () => {

    it('Open Google search page ', () => {
        googleSearchPage.openGoogleUrl().googleSearch('cypress')
    })

})


