const url = 'https://www.yandex.ru'
const enterLink = '//a[contains(@class, "button desk-notif-card__login")]'
const loginInput = '//input[@name="login"]'
const passwordInput = '//input[@name="passwd"]'
const loginButton = '//button[@class="passport-Button"]'
const user1 = {name: 'node-js-ak1@tut.by', password: 'Tonodejsak2'}
const user2 = {name: 'node-js-ak2@tut.by', password: 'Tonodejsak1'}
const clickWriteButton = '//span[@class="mail-ComposeButton-Text"]'
const recepient = '//div[@name="to"]'
const popupMailNotification = '//div[contains(@class, "mail-Notification-Content") and text() = "Письмо отправляется…"]'
const emailSubject = '//input[@name="subj"]'
const emailBodyField = '//div[@role="textbox"]'
const emailContent = {userTo: 'node-js-ak2@tut.by', emailSubjectInput: `node_js_ak_subj ${new Date()}`, emailBodyContent: 'Automation test'}
const sendButton = '//button[@type="submit"]'
const sentFolder = '//a[@href="#sent"]'
const emailSubjCheck = `(//span[contains(@title,"node_js_ak_subj") and text()="${emailContent.emailSubjectInput}"])`
const userDetails = '//div[@data-key="view=head-user"]'
const logoutLink = '//a[contains(@href, "logout")]'
const anotherAcc = '//span[@class="passport-Domik-Account-Link passport-Domik-Link"]'
const inboxFolder = '//a[@href="#inbox"]'
const inboxEmailSubjCheck = `(//span[contains(@title,"node_js_ak_subj") and text()="${emailContent.emailSubjectInput}"])`
describe('user 1 sends email to user 2', function () {
    it('email should exist in Sent (user 1) and Inbox (user 2)', function () {
        browser.url(url)
        browser.waitForVisible(enterLink)
        browser.click(enterLink)
        browser.waitForVisible(loginInput)
        browser.setValue(loginInput, user1.name)
        browser.setValue(passwordInput, user1.password)
        // Step 1. Login into account 1
        browser.click(loginButton)
        browser.waitForVisible(clickWriteButton)
        browser.click(clickWriteButton)
        browser.waitForVisible(recepient)
        browser.setValue(recepient, emailContent.userTo)
        browser.setValue(emailSubject, emailContent.emailSubjectInput)
        browser.setValue(emailBodyField, emailContent.emailBodyContent)
        // Step 2. Send email to account 1
        browser.click(sendButton)
        browser.waitForVisible(popupMailNotification, 5000, true)
        browser.waitForVisible(sentFolder)
        browser.click(sentFolder)
        browser.waitForVisible(emailSubjCheck)
        // Step 3. Check presence of e-mail in Sent folder
        expect(browser.getText(emailSubjCheck)).toEqual(emailContent.emailSubjectInput)
        browser.click(userDetails)
        browser.waitForVisible(logoutLink)
        browser.click(logoutLink)
        browser.waitForVisible(enterLink)
        browser.click(enterLink)
        browser.waitForVisible(anotherAcc)
        browser.click(anotherAcc)
        browser.waitForVisible(loginInput)
        browser.setValue(loginInput, user2.name)
        browser.setValue(passwordInput, user2.password)
        // Step 4. Login into account 2
        browser.click(loginButton)
        browser.waitForVisible(inboxFolder)
        browser.click(inboxFolder)
        // Step 5. Check presence of e-mail sent from account 1
        expect(browser.getText(inboxEmailSubjCheck)).toEqual(emailContent.emailSubjectInput)
    })
})
