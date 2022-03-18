// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Well I better wear some suncream!")
// }   else if (weather =="rainy") {
//     console.log("better take an umbrella")
// }   else 
//     console.log("whatever")


// == equal - checks if the values are equal regardless of type
// === strict equal - checks if the values and types are equal // Checks the data type to match
// !== Checks if the value are not equal regardless of type
// !=== checks if the value and data are not equal

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place =="Manc" && weather =="Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }

// && and
// || or

// let car = "Peugeot"

// switch(car) {
//     case "Ford":
//     case "GM":
//         console.log("Youve got a yank car");
//         break;
//     case "Peugoet":
//     case "Citron":
//         console.log("french")
//         break;
//     default:
//         console.log("lol")
// }

// Create a variable called age. Write an if statement
// JS
// that logs “Yes I can serve you” if the age is greater
// than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable
// called country in.
// Eg. if age > 17 and country == “UK”.

// ACTIVITY 1
// let age = 18

// if (age == 18 || age >= 18) {
//     console.log("Welcome inside");
// }
// else {
//     console.log("You aren't old enough");
// }

// ACTIVITY 1B
// let age = 18
// let country = "US"

// if (age >= 18 && country == "UK") {
//     console.log("Welcome inside");
// }
// else {
//     console.log("You aren't old enough");
// }

// ACTIVITY 2
// let topping = "Onion"

// switch(topping) {
//     case "Pepperoni":
//         console.log(`${topping} is an important ingredient to my pizza`);
//         break;
//     case "Onion":
//     case "Mushrooms":
//     case "Pineapple":
//         console.log("I don't want that on my pizza!")
//     default:
//         console.log("urgh")
// }

// ACTIVITY 3

// let password = "Alex123"
// if (password.length >= 8) {
//     console.log("Correct");
// }
// else {
//     console.log("password too short");
// }

// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it
// is, log “This number is divisible by 3 or 5”.
// Otherwise log something else. 

// // ACTIVITY 4

// let num = 2
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log(`${num} is divisible by 3 or 5`);
// }
// else {
//     console.log(`${num} isn't divisible by rather 3 or 5`)
// }

// // ACTIVITY 5

// let i = 10
// if (i % 15 == 0) console.log("FizzBuzz");
// else if (i % 3 == 0) console.log("Fizz");
// else if (i % 5 == 0) console.log("Buzz");
// else console.log(i);


// // // Activity 6
// let num = 7261;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// // // Activity 7
// let time = 7;
// let placeOfWork = "Manchester"
// let townOfHome = "Golborne"

// if (time == 8){
//   console.log(`I am commuting to work in ${placeOfWork}`);
// } else if (time == 7){
//   console.log(`I am at home in ${townOfHome}`);
// } else if (time == 9){
//   console.log(`I am at work in ${placeOfWork}`)
// } else {
//   console.log(`If it is between 9 and 5 I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
// }

// // // Activity 8
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// // // Activity 9
// let word = "ABBA";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// // Challenge 10
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }
