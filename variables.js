// const firstName = "Alex";
// // assigning a variable
// const secondName = "Evans";
// // cannot reassign a constant variable
// let age = 23;
// // can reassign a variable later in the code

// // Var is dated and legacy do not use

// console.log(firstName)
// console.log(secondName)
// console.log(age)

// age = 24
// console.log(age)

// // + addition
// // - minus
// // * multiply
// // ** to the power of
// // / divide
// // % modulus - remainder
// // ++ increment a number by 1
// // -- decrement

// console.log(100*230);
// console.log(9**4);

// console.log(100+200);

// let i = 10;
// console.log(i)
// i += 2;
// // keeps the whole aswell as adding the number on the right
// console.log(i)
// // i=12
// i += 2;i += 2;i += 2;i += 2;i += 2;i += 2;
// console.log(i)

// // camelCase
// // first word lowercase, second word upper case eg alexEvans
// // snake case
// // example alex_name

// let favouriteDrink = "Coffee";
// let name = "Alex";
// let age = "23";

// console.log('My name is ${name}.');

// ACTIVITY 1

// let name = 'Alex';
// let age = 23;
// let favColour = 'Black';

// console.log(`Hi my name is ${name} and I am ${age} years old. My favourite colour ${favColour}`);
// // Make sure to always use backticks `````

// // ACTIVITY 1 STRETCH

// name = 'Dave';
// age = 46;
// favColour = 'Pink';

// console.log(`Hi my name is ${name} and I am ${age} years old. My favourite colour ${favColour}`);

// // ACTIVITY 2

// let breakfast = 'Scrambled eggs'
// let lunch = 'sushi'
// let tea = 'fish and chips'

// console.log (`I will eat ${breakfast} for breakfast, ${lunch} for lunch and ${tea} for tea tonight.`)

// // ACTIVITY 2 STRETCH
// breakfast = 'the european breakfast - A cigarette and coffee'
// lunch = 'tuna sandwich'
// tea = 'Butter Paneer curry'

// console.log (`I will eat ${breakfast} for breakfast tomorrow morning, ${lunch} for lunch and ${tea} tomorrow evening.`)

// // ACTIVITY 3

// today=new Date();
// let bday=new Date(today.getFullYear(), 4, 30);
// if (today.getMonth()==4 && today.getDate()>30) 
// {
// bday.setFullYear(bday.getFullYear()+1); 
// }  
// let one_day=1000*60*60*24;
// console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+
// " days left until my birthday");

// today=new Date();
// bday=new Date(today.getFullYear(), 12, 1);
// if (today.getMonth()==4 && today.getDate()>30) 
// {
// bday.setFullYear(bday.getFullYear()+1); 
// }  
// one_day=1000*60*60*24;
// console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+
// " days left until Marion's birthday");

// ACTIVITY 4

let space1 = "x"
let space2 = "o"
let space3 = " "
let grid = "   |     |    "
let grid2 = "-------------"
let grid3 = "  |  "

console.log(`${grid}`)
console.log(`${space1}${grid3}${space2}${grid3}${space3}`)
console.log(`${grid}`)
console.log(`${grid2}`)
console.log(`${grid}`)
console.log(`${space1}${grid3}${space1}${grid3}${space3}`)
console.log(`${grid}`)
console.log(`${grid2}`)
console.log(`${grid}`)
console.log(`${space2}${grid3}${space3}${grid3}${space3}`)
console.log(`${grid}`)