describe('user 1 sends email to user 2', function () {
    it('should login for be displayed', function () {
        const url = 'https://www.yandex.ru'
        const enterLink = '[class*="button desk-notif-card__login"]'
        browser.url(url)
        expect(browser.waitForVisible(enterLink)).toEqual(true)
        browser.click(enterLink)
        browser.pause(2000)
    })
    it('user 1 should be logged in', function () {
        const loginInput = 'input[name="login"]'
        const passwordInput = 'input[name="passwd"]'
        const loginButton = 'button.passport-Button:not(.passport-Button_qr)'
        const user = {name: 'node-js-ak1@tut.by', password: 'Tonodejsak2'}
        browser.pause(1000)
        browser.waitForVisible(loginInput)
        expect(browser.waitForVisible(loginInput)).toEqual(true)
        browser.setValue(loginInput, user.name)
        browser.setValue(passwordInput, user.password)
        browser.click(loginButton)
        browser.pause(5000)
    })
    it('user creates new email', function () {
        const clickWriteButton = 'span.mail-ComposeButton-Text'
        const recepient = 'div[name="to"]'
        const userTo = 'node-js-ak2@tut.by'
        const emailSubject = 'input[name="subj"]'
        const emailSubjectinput = 'node_js_ak_subj1'
        const sendButton = 'button[type="submit"]'
        browser.pause(1000)
        browser.waitForVisible(clickWriteButton)
        expect(browser.waitForVisible(clickWriteButton)).toEqual(true)
        browser.click(clickWriteButton)
        browser.pause(1000)
        browser.setValue(recepient, userTo)
        browser.setValue(emailSubject, emailSubjectinput)
        browser.click(sendButton)
        browser.pause(5000)
    })
    it('user 1 checks email in Sent folder', function () {
        const sentFolder = 'a[href="#sent"]'
        const emailSubjCheck = 'span[title*="node_js_ak_subj"]'
        browser.pause(1000)
        browser.waitForVisible(sentFolder)
        expect(browser.waitForVisible(sentFolder)).toEqual(true)
        browser.click(sentFolder)
        browser.pause(1000)
        expect(browser.waitForVisible(emailSubjCheck)).toEqual(true)
        browser.pause(5000)
    })
})
