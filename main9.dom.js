const init = (function () {

    var person = new Person('Patryk', 'Kowalski', [new Account(123, 5000, '$'), new Account(124, 1000, '$')]);

    const creditCard = (function () {
        var card = {
            title: document.querySelector(".card-title"),
            text: document.getElementsByClassName("card-text")[0]
        }

        return {
            addCard_Title: function () {
                card.title.innerHTML = person.firstName + ' ' + person.lastName
            },
            addCard_Text: function () {
                card.text.innerHTML = 'Accounts:';
                for (let i = 0; i < person.accounts.length; i++) {
                    card.text.innerHTML += "<p>" + (i + 1) +
                        ' account number: ' + person.accounts[i].number +
                        ' balance: ' + person.accounts[i].balance +
                        '</p>'
                }
            }
        }
    })();

    const buttonFunctions = (function () {
        var details = {
            button: document.getElementsByTagName("button")[0],
            inputNumber: document.getElementsByTagName("input")[0],
            inputAmount: document.getElementsByTagName("input")[1]
        }

        return {
            onClickSubmit: function () {
                details.button.addEventListener("click", () => {
                    person.withdraw(details.inputNumber.value, details.inputAmount.value)
                        .then((message) => {
                            creditCard.addCard_Text();
                            alert(message);
                        }).catch((message) =>
                            alert(message)
                        );
                });
            },
            onChangeDisableButton: function () {
                function addButtonDisableListener(event, element) {
                    element.addEventListener(event, () => {
                        if (details.inputNumber.value && details.inputAmount.value) {
                            details.button.disabled = false;
                        } else {
                            details.button.disabled = true;
                        }
                    });
                }
                addButtonDisableListener("change", details.inputNumber);
                addButtonDisableListener("change", details.inputAmount);
                addButtonDisableListener("keyup", details.inputNumber);
                addButtonDisableListener("keyup", details.inputAmount);
                details.button.disabled = true;
            }
        }
    })();

    document.addEventListener("DOMContentLoaded", () => {
        creditCard.addCard_Title();
        creditCard.addCard_Text();
        buttonFunctions.onClickSubmit();
        buttonFunctions.onChangeDisableButton();
    });
})();