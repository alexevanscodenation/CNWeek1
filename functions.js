// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// --------------------------------------------------------------

// => Declares a function

// Cash machine in a function

// const cashWithdrawal = (amount,accnum) => {
//     console.log (`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300,12345678)
// cashWithdrawal(400,53628732)
// cashWithdrawal(200,11110000)

// let accnumber = 12345678;
// can use let to use later in the code

// const cashWithdrawal = (amount,accnum) => {
//     console.log (`Withdrawing ${amount} from account ${accnum}`);
//     }
    
// cashWithdrawal(200,accnumber)
// cashWithdrawal(400,53628732)
// cashWithdrawal(200,11110000)

// --------------------------------------------------------------

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log (addUp(7,3));

// const subtract = (num1, num2) => {
//     return num1 - num2;
// }

// console.log (subtract(7,3));

// --------------------------------------------------------------


// function can be used at the beginning (old fashioned way)

// --------------------------------------------------------------

// ACTIVITY 1

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

// --------------------------------------------------------------

// ACTIVITY 2

let orderCount = 0;

const takeOrder = (topping,topping2,size) => {
    console.log(`A ${size} pizza with ${topping} and ${topping2}`);
    orderCount++;
}

takeOrder("Pineapple", "Ham", "12 inch");

// ACTIVITY 3

Version 1

let accPin = 1234;
let balance = 1000

const cashWithdrawal = (accPin,balance,accnum) => {
    if ((accPin === 1234) && (balance <= 1000)) {
        console.log("Pin number correct.")
        console.log (`Withdrawing ${balance} from account ${accnum}`);
    }
    else {
        console.log("Pin number incorrect and/or insuffiscient funds, please try again")
    }
}

cashWithdrawal(1234,1200,53628732)

Version 2

let balance = 1000
let accNum = 12345678

const cashMachine = (pin,amount) => {
    if (pin == "1100" && amount <= balance){
        console.log(`Pin is correct, £${amount} withdrawn from Account:${accNum}. Your total balance is £${balance - amount}.`)
    } else if (pin == "1100" && amount > balance) {
        console.log("Insufficent funds. Please try again.")
    } else {
        console.log("Incorrect Pin. Please try again.")
    }
}

cashMachine (5638, 1000)