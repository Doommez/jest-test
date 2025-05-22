const Page = require('./page')
const {$} = require("@wdio/globals");

 class Users extends Page{
     get usersItems() {
         return $('#user-item');
     }

     get loading(){
         return $('#loading')
     }

     async loadData() {
         try {
             await this.open(); // переход на страницу

             // Ждём, пока список появится
             await this.loading.waitForDisplayed({timeout: 2000});
             await  this.usersItems.waitForDisplayed({timeout: 2000});
         } catch (e) {
             console.log(e);
             throw new Error('Не удалось загрузить пользователей');
         }
     }

     async deleteUser(){

         const usersCount = await $$("#user-item").length
         console.log(usersCount);
         if(!usersCount){
             throw new Error('Пользователи не найдены')
         }
         await $$('#user-delete')[0].click();

         const countAfterDelete = await $$("#user-item").length

         console.log(usersCount, countAfterDelete, usersCount - countAfterDelete)
         if(usersCount - countAfterDelete !==1){
             throw new Error('не был удален')
         }



     }

    open() {
        return super.open('users');
    }
}

module.exports = new Users();