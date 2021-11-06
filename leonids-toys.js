/*
    Leonid's Toys Project
    Asher Styers
    Nashville Software School
    Written November 11, 2021
*/

// Toy Features: Color, minimum age, size of toy, price

const toys = [
    {
        name: "Teddy Bear",
        id: 1,
        color: "brown",
        minAge: 3,
        size: "medium",
        price: 12.99
    },
    {
        name: "Toy Truck",
        id: 2,
        color: "red",
        minAge: 3,
        size: "small",
        price: 6.99
    },
    {
        name: "Puzzle",
        id: 3,
        color: "multicolored",
        minAge: 7,
        size: "large",
        price: 19.99
    }
]

// Display entire toys array
console.log(toys);

// Display the name of each toy
for (const toy of toys) {
    console.log(`The name of the toy is ${toy.name}.`);
}

// Raise price of each toy by 5%
for (const toy of toys) {
    toy.price = toy.price + (toy.price * 0.05);
}

// Display toy catalog
for (const toy of toys) {
    console.log(`The ${toy.name} is a ${toy.size}, ${toy.color} toy.  It costs $${toy.price}.`);
}

// Find a specific toy
const toyToFind = 2;
// Use an if statement to find the toy with an id of 2
for (const toy of toys) {
    // Only one phone will cause the condition below to evaluate to true
    if (toy.id === toyToFind) {
        console.log("I found your toy!");
        console.log(`The ${toy.name} is a ${toy.size}, ${toy.color} toy.  It costs $${toy.price}.`);
    }
}

// Define a new toy:
const newToy = {
    name: "Bouncy Ball",
    color: "light blue",
    minAge: 5,
    size: "small",
    price: 1.99
}

// Add new toy to array:
const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1;
    const currentLastToy = toys[lastIndex];
    const maxId = currentLastToy.id;
    const idForNewToy = maxId + 1;

    toyObject.id = idForNewToy;
    toys.push(toyObject);
}

// Invoke add toy function:
addToyToInventory(newToy);

// Display all the toys and their ids to check work
for (const toy of toys) {
    console.log(`The ${toy.name} has an id of ${toy.id}`);
}