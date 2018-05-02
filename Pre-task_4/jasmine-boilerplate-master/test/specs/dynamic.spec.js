const url = 'https://www.yandex.ru'
const enterLink = '//a[contains(@class, "button desk-notif-card__login")]'
const loginInput = '//input[@name="login"]'
const passwordInput = '//input[@name="passwd"]'
const loginButton = '//button[@class="passport-Button"]'
const user1 = {name: 'node-js-ak1@tut.by', password: 'Tonodejsak2'}
const user2 = {name: 'node-js-ak2@tut.by', password: 'Tonodejsak1'}
const clickWriteButton = '//span[@class="mail-ComposeButton-Text"]'
const recepient = '//div[@name="to"]'
// const userTo = 'node-js-ak2@tut.by'
const emailSubject = '//input[@name="subj"]'
// const emailSubjectInput = `node_js_ak_subj ${new Date()}`
const emailBodyField = '//div[@role="textbox"]'
// const emailBodyContent = 'Automation test'
const emailContent = {userTo: 'node-js-ak2@tut.by', emailSubjectInput: `node_js_ak_subj ${new Date()}`, emailBodyContent: 'Automation test'}
const sendButton = '//button[@type="submit"]'
const sentFolder = '//a[@href="#sent"]'
// const emailSubjCheck = '(//span[contains(@title,"node_js_ak_subj")])[1]'
const emailSubjCheck = `(//span[contains(@title,"node_js_ak_subj") and text()="${emailContent.emailSubjectInput}"])`
const userDetails = '//div[@data-key="view=head-user"]'
const logoutLink = '//a[contains(@href, "logout")]'
const anotherAcc = '//span[@class="passport-Domik-Account-Link passport-Domik-Link"]'
const inboxFolder = '//a[@href="#inbox"]'
// const inboxEmailSubjCheck = '(//span[contains(@title,"node_js_ak_subj")])[1]'
const inboxEmailSubjCheck = `(//span[contains(@title,"node_js_ak_subj") and text()="${emailContent.emailSubjectInput}"])`
describe('user 1 sends email to user 2', function () {
    it('email should exist in Sent (user 1) and Inbox (user 2)', function () {
        browser.url(url)
        browser.waitForVisible(enterLink)
        expect(browser.waitForVisible(enterLink)).toEqual(true)
        browser.click(enterLink)
        browser.waitForVisible(loginInput)
        expect(browser.waitForVisible(loginInput)).toEqual(true)
        browser.setValue(loginInput, user1.name)
        browser.setValue(passwordInput, user1.password)
        // Step 1. Login into account 1
        browser.click(loginButton)
        browser.waitForVisible(clickWriteButton)
        expect(browser.waitForVisible(clickWriteButton)).toEqual(true)
        browser.click(clickWriteButton)
        browser.waitForVisible(recepient)
        browser.setValue(recepient, emailContent.userTo)
        browser.setValue(emailSubject, emailContent.emailSubjectInput)
        browser.setValue(emailBodyField, emailContent.emailBodyContent)
        // Step 2. Send email to account 1
        browser.click(sendButton)
        browser.pause(3000)
        browser.waitForVisible(sentFolder)
        browser.click(sentFolder)
        expect(browser.waitForVisible(emailSubjCheck)).toEqual(true)
        // Step 3. Check presence of e-mail in Sent folder
        expect(browser.getText(emailSubjCheck)).toEqual(emailContent.emailSubjectInput)
        browser.pause(3000)
        browser.click(userDetails)
        browser.waitForVisible(logoutLink)
        browser.click(logoutLink)
        browser.waitForVisible(enterLink)
        expect(browser.waitForVisible(enterLink)).toEqual(true)
        browser.click(enterLink)
        browser.waitForVisible(anotherAcc)
        browser.click(anotherAcc)
        browser.waitForVisible(loginInput)
        expect(browser.waitForVisible(loginInput)).toEqual(true)
        browser.setValue(loginInput, user2.name)
        browser.setValue(passwordInput, user2.password)
        // Step 4. Send email to account 2
        browser.click(loginButton)
        browser.waitForVisible(inboxFolder)
        expect(browser.waitForVisible(inboxFolder)).toEqual(true)
        browser.click(inboxFolder)
        expect(browser.waitForVisible(inboxEmailSubjCheck)).toEqual(true)
        // Step 5. Check presence of e-mail sent from account 1
        expect(browser.getText(inboxEmailSubjCheck)).toEqual(emailContent.emailSubjectInput)
        browser.pause(3000)
    })
})
