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

// Tool options for the player.
let tools = [
    {   type: "Teeth",
        pay: 1,
    },
    {   type: "Rusty Scissors",
        pay: 5,
    },
];

let myTool = "";
function buyScissors() {
    if (moneyInAccount < 5) {
        alert(`Sorry, you don't have enough money to buy this tool. You can use your ${tools[0].type} to cut lawns for $${tools[0].pay}.`);
    } else if (moneyInAccount >= 5) {
        document.getElementById('scissors');
        moneyInAccount.splice(0, 1, account -= 5);
        myTool = tools[1].type;
        alert(`You have selected ${tools[1].type} as your tool. You can now cut lawns for $${tools[1].pay} an hour! 
        Your account is now $${account}.`);
    } else {
        alert(`You need more money to buy this tool, keep on mowing!`);
    }

}