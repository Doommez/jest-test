const Page = require('./page')
const {$} = require("@wdio/globals");

 class Users extends Page{
    get usersItems(){
        return $('#user-item');
    }

    async loadData(){
        try {
            await this.open()
            await this.usersItems.waitForExist({timeout: 2000})
        } catch (e) {
            console.log(e)
            throw Error('Не удалось загрузить ')
        }
    }

    open() {
        return super.open('users');
    }
}

module.exports = new Users();