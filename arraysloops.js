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



// let favSongs = [
//     "The Fall - The NWRA",
//     "The Birthday Party - Cry",
//     "Joy Division - Disorder",
// ];

// favSongs.push("The Beatles - Don't Let Me Down")
// favSongs.push("Wire - Lowdown")
// favSongs.pop()

// console.log(favSongs)

// let favDrinks = [
//     "Coke",
//     "Fanta",
//     "Pepsi",
//     "Water"
// ]

// for(let i = 0;i < favDrinks.length; i ++ ){
//     console.log(favDrinks[i]);
// }
// // (i) can be anything
// let multiplesTwo = [];

// for (let i = 0; i <= 20;i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`numbers divisble by 2 between 0 and 20 are: ${multiplesTwo}`);

// let age =15;

// while (age < 18){
//     console.log("You're a child!");
//     age++;
// }

// console.log("You are an adult")

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while (currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// Activity 1
let favFilms = ['Lost in Translation', 'Gimme Danger', 'Coffee and Cigarettes', 'Mystery Train'];
favFilms.push('Inglorious Basterds', 'No Country for Old Men');
favFilms.pop();

for (let i = 0; i <favFilms.length; i++){
  console.log(favFilms[i])
}

// Activity 2
for (let i = 0; i <6; i++) {
  console.log(Math.floor(Math.random() * 50))
}

// Activity 3
for (let i = 9; i>=0; i--){
  console.log(i)
}

// Activity 4
let myFilms = ['Lost in Translation', 'Gimme Danger', 'Coffee and Cigarettes', 'Mystery Train']

for (let i = 0; i <myFilms.length; i++){
  if (myFilms[2] === "Mystery Train"){
    console.log("Gimme Danger little stranger!")
    break
  } else {
    console.log("NOOOOOOOOOOOOOOOOOOOOOOOOO!")
    break
  }
}

// Activity 5
let num = Math.floor(Math.random() * 30)
for (let i = 0; i < 6; i++){
  console.log(num)
  if (num % 7 == 0){
    console.log(` ----- ${num} is divisble by 7!`)
  }
  num = Math.floor(Math.random() * 30)
}