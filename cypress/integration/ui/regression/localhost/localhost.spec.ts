import localhostPage from '../../../../pages/localhost/localhost_page'
const {uiUrl} = require('../../../../fixtures/ui/ui_config.json')

const softAssert = require("soft-assert")

describe('test', () => {

    it('Open Localhost server', () => {
        localhostPage.openUrl(uiUrl.localhostUrl)

        localhostPage
            .setName(name)
            .setEmail('hello@email.com')
            .setMessage('hello')
            .clickSend()
    })

})

