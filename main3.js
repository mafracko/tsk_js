 function Account(balance, currency) {
     this.balance = balance;
     this.currency = currency;
 };
 var calculateBalance = function () {
     var sum = 0;
     for (let i = 0; i < this.accounts.length; i++) {
         sum += this.accounts[i].balance;
     }
     return sum;
 };

 var person = (function () {
     var details = {
         firstName: 'Patryk',
         lastName: 'Kowalski'
     }

     return {
         firstName: details.firstName,
         lastName: details.lastName,
         accounts: [{
             balance: 5000,
             currency: '$'
         }],
         sayHello: function () {
             return ' First name : ' + this.firstName + " " +
                 ' last name : ' + this.lastName + " " +
                 ' number of accounts : ' + this.accounts.length +
                 ' total balance : ' + calculateBalance.call(this);
         },
         addAccount: function (account) {
             this.accounts.push(account);
         }
     }
 })();
 console.log(person.sayHello());
 person.addAccount(new Account(1000, '$'));
 console.log(person.sayHello());