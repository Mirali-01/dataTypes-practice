// What is a Data Type?

// String => string of character that make up some form of text
let myName = "Mir";

// Integers => Real numbers/Whole numbers
let myAge = 23;

// Boolean => Values that equate to either True or False*
let isFromNY = false;
let isFromNJ = true;

// --> truthy...falsey

// Arrays => Any grouped set of values indicated by using []
let myFamilyMembers = ['mom', 'me', 'brother', 'little sister', 'older sister']

// Objects => Grouped set of attributes and values. {Key:Value} pair
let myInstructor = {
    name: myName,
    age: myAge,
    local: isFromNY,
    familyTree: myFamilyMembers
};

// ------------------------------------------------


let aVariable = "Mir";
let aSlogan = "An apple a day keeps the doctor away"
// let, var, const => Declarative keywords
console.log("Hi my name is", myName);

// Syntax => The formula for executing certain programming ideas/formats

// Conditionals

// if (myAge > 21) {
//     console.log("You are of legal age to drink");
// } else {
//     console.log("You are too young to be in this bar");
// };

// if (isFromNY === true) {
//     console.log("YERRRRR")
// } else {
//     console.log("Good Afternoon Sir, How art thou")
// };

// if (myName === "Mir" && isFromNY === true) {
//     console.log("Oh, I know that guy");
// } else {
//     console.log("nah man, I don't know u")
// };

// assignment => =

// Loosely *do not use*
"3" == 3;

// Exactly
myAge === 23;
