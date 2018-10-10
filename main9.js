class Account {
    constructor(number, balance, currency) {
        this.number = number;
        this.balance = balance;
        this.currency = currency;
    }
};

class Person {
    constructor(firstName, lastName, accounts) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts = accounts;
    }
    sayHello() {
        return ` First name : ${this.firstName}, last name :  ${this.lastName}, number of accounts : ${this.accounts.length}, total balance :  ${this._calculateBalance()}`;
    }
    _calculateBalance() {
        var sum = 0;
        for (let singleAccount of this.accounts) {
            sum += singleAccount.balance;
        }
        return sum;
    }
    addAccount(account) {
        this.accounts.push(account);
    }
    filterPositiveAccounts() {
        return this.accounts.filter(singleAccount => singleAccount.balance > 0);
    }
    findAccount(accountNumber) {
        return this.accounts.find(singleAccount => singleAccount.number == accountNumber);
    }
    withdraw(accountNumber, amount) {
        return new Promise((resolve, reject) => {
            let foundAccount = this.findAccount(accountNumber);
            if (foundAccount == undefined) {
                reject('This account does not exist');
            } else if (amount < 0) {
                reject('Amount is wrong');
            } else if (foundAccount.balance < amount) {
                reject('You do not have enough money');
            } else {
                setTimeout(function () {
                    foundAccount.balance -= amount;
                    resolve(`Account number: ${accountNumber}, new balance: ${foundAccount.balance}, amount of withdrawn money:${amount}`);
                }, 3000);
            }
        });
    }
}