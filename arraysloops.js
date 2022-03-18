// let coffeeOrder = [
//     "Alex - Americano",
//     "Ben - Americano",
//     "Charlie - Whatevers new",
// ];

// coffeeOrder[1] = "Ann - Vanilla latte"
// console.log(coffeeOrder);
// console.log(coffeeOrder[1]);

// coffeeOrder.push("Chris - Oat Mocha")
// // adds whatever is in the parenthesis to the list
// console.log(coffeeOrder);
// coffeeOrder.pop()
// // removes the last item in the list
// console.log(coffeeOrder);

// Activity 1

let favSongs = [
    "The Fall - The NWRA",
    "The Birthday Party - Cry",
    "Joy Division - Disorder",
];

favSongs.push("The Beatles - Don't Let Me Down")
favSongs.push("Wire - Lowdown")
favSongs.pop()

console.log(favSongs)

let favDrinks = [
    "Coke",
    "Fanta",
    "Pepsi",
    "Water"
]

for(let i = 0;i < favDrinks.length; i ++ ){
    console.log(favDrinks[i]);
}
// (i) can be anything
let multiplesTwo = [];

for (let i = 0; i <= 20;i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`numbers divisble by 2 between 0 and 20 are: ${multiplesTwo}`);

let age =15;

while (age < 18){
    console.log("You're a child!");
    age++;
}

console.log("You are an adult")

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade"){

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}