const { expect } = require('@wdio/globals')
const UserPage = require('../pages/users.page')

describe('load user', () => {
    it('users', async () => {


        await UserPage.loadData()

    })

})

