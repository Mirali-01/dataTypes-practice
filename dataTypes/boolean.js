// Boolean.toString() anything except false = true
const amIReallyAlive = Boolean(true);
// console.log(amIReallyAlive.toString());

if (amIReallyAlive === true) {
    console.log("Yes " + amIReallyAlive.toString() + " but like are you really though?");
} else {
    console.log("Nah bruh, you dead!");
};

// Boolean.valueOf() for all primitive data types = true & if empty or false = false 
const whoAreYou = Boolean("WHO?");
// console.log(woah.valueOf());

if (whoAreYou === true) {
    console.log("I exist, therefore I am. Oh that's " + whoAreYou.valueOf() + "! I guess?");
} else {
    console.log("Bro, I don't even know anymore");
};