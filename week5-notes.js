/*
    Week 5 - Intro to Javascript notes (NSS)
    November 11, 2021
    Asher Styers
*/

/*
Unlike C++, semicolons are not necessary at the end fo each line
for a code to compile and run.  However, they will not break
the Javascript code, either.
ex)
const cat = "Miranda"
const cat = "Miranda";

Both of the above lines will compile!
*/

// Strings:
const firstName = "Emily";
const lastName = "Lemmon";

// There are 2 types of numbers in JavaScript: Integers and Floats
const apples = 16;      // integer
const pi = 3.14159;     // float

// Booleans:
const accountIsActive = true;

// Arrays:
const groceryList = [ "Milk", "Tomato Sauce", "Bananas", "Taco Shells", "Jalapeno", "Sour cream"];

// Objects:
const age = 31;
// or,
const megan = {
    id: 1,
    age: 31,
    firstName: "Megan",
    lastName: "Debity"
}
const jack = {
    id: 2,
    age: 28,
    firstName: "Jack",
    lastName: "Parsons"
}

/*
an id is a Unique Identifier. Every object you create should have its own identifier,
labeled in order (first object you make has an id of 1, second one's id is 2, third one is 3, etc)
*/