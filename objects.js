// const cafe = {
//     name:"Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucccino",
//         "Latte",
//         "Filter Coffee"
//         "Tea",
//         "Hot Chocolate"
//     ]
// }


// PERSON ACTIVITY

// const person = {
//     name:"Alex Evans",
//     age: 23,
//     favSongs: [
//         "She's Lost Control - Joy Division",
//         "Cruiser's Creek - The Fall",
//         "Normalisation - Parquet Courts",
//         "Hunger for a Way Out - Sweeping Promises",
//         "Pontiac 87 - Protomartyr"
//     ],
// }

// let sayHi = `Hello my name is ${person.name}`
// console.log(sayHi);

// to access individual part of the object

// ALARM ACTIVITY

// let day = "Monday"
// const alarm = {
//     weekendAlarm:"No alarm needed",
//     weekdayAlarm:"Get up at 7am"
// }

// const weekday = {
//     day1:"Monday",
//     day2:"Tueday",
//     day3:"Wednesday",
//     day4:"Thursday",
//     day5:"Friday"

// }

// const weekend = {
//     day6:"Saturday",
//     day7:"Sunday"

// }

// if (day === weekday) {
//     console.log(alarm.weekdayAlarm)
// }

// else {
//     console.log(alarm.weekendAlarm)
// }

// //  Alternate version (MYLES)

// let day = "Monday";

// const alarmClock = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };

// if (day == "Saturday" || day == "Sunday"){
//     alarm = alarmClock.weekendAlarm;
//     console.log(`Hello Myles: ${alarm}`)
// } else {
//     alarm = alarmClock.weekdayAlarm;
//     console.log(`Hello Myles: ${alarm}`)
// }

// ACTIVITY 1

// const person = {
//     name:"Alex Evans",
//     age: 23,
//     favSongs: [
//         "She's Lost Control - Joy Division",
//         "Cruiser's Creek - The Fall",
//         "Normalisation - Parquet Courts",
//         "Hunger for a Way Out - Sweeping Promises",
//         "Pontiac 87 - Protomartyr"
//     ],
// }

// let sayHi = `Hello my name is ${person.name}`
// console.log(sayHi);

// Activity 2

// const pet = {
//     name: "Graham",
//     typeOfPet:"Hamster",
//     age: 5,
//     colour: "Ginger",
//     eat: ()=>{
//         console.log(`${pet.name} is eating.`)
//     }, 
//     drink:()=>{
//         console.log(`${pet.name} is drinking.`)
//     }
// }

// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3

// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all
// items chosen with costs and total costs. 

const coffeeShop = {
    branch: "MQ Coffee" 
    Drinks: [
        "Latte - £2.60",
        ""
    ]
}