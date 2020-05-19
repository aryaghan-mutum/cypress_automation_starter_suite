import localhostPage from '../../../pages/localhost/localhost_page'

const softAssert = require("soft-assert")

describe('test', () => {

    it('Open Localhost server', () => {
        localhostPage.openLocalhost()

        localhostPage
            .setName(name)
            .setEmail('hello@email.com')
            .setMessage('hello')
            .clickSend()
    })

})

