const { expect } = require('@wdio/globals')
const HelloPage = require('../pages/hello.page')

describe('My hello page', () => {
    it('hello page', async () => {
        await HelloPage.open()

        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
    it('hello page not valid', async () => {
        await HelloPage.open()

        await HelloPage.toggleTitleWithInput('sdfasdfasdfasdfasdf')
        await expect(HelloPage.helloTitle).not.toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})

