console.log("Welcome to the Game!");

let account = 0;
let moneyInAccount = [];

// Function for the 1 dollar button
function oneDollar() {
    if (account < 5) {
        account += 1;
        moneyInAccount.splice(0, 1, account);
        alert(`Great job! You've earned $${account} cutting lawns today! 
        Your account is now $${account}.`);
    } else {
        alert("You've earned enough money to upgrade your tools! Visit the market, to buy better tools.")
    }
}