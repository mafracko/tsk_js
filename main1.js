var personFactory = function () {
    var details = {
        firstName: 'Patryk',
        lastName: 'Kowalski',
        accounts: [{
            balance: 1000,
            currency: '$'
        }]
    }
    return {
        firstName: details.firstName,
        lastName: details.lastName,
        sayHello: function () {
            return ' First name : ' + this.firstName + " " +
                ' last name : ' + this.lastName + " " +
                ' number of accounts : ' + details.accounts.length
        }
    }
}
var person = personFactory();
console.log(person.sayHello());
