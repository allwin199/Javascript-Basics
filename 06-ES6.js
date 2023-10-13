const player = "Tommy";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  // console.log(wizardLevel);
}

// console.log(wizardLevel);

const obj = {
  player: "Tommy",
  experience: 100,
  wizardLevel: true
}

obj.experience = 120;

// We can change the property values of the object eventhough it is const
// console.log(obj);

// Destructuring
const newPlayer = obj.player;
const realExperience = obj.experience;
let fullWizardLevel = obj.wizardLevel;

// Instead of typing all of this, we can use destructuring

const { newPlayer2, realExperience2 } = obj;
let { fullWizardLevel2 } = obj;

// The above code is destructured


// Object Properties
const name = "John Snow";

const objj = {
  [name]: "Hello",
  ["ray" + "Smith"]: "Hi"
}

// console.log(objj);
// BY this we are assigning the property in a dynamic way

const a = "Simon";
const b = true;
const c = {};

const obj3 = {
  a: a,
  b: b,
  c: c
}

// If property and name are the same, we can do like this

const obj4 = { a, b, c };


// Template Strings
const greetings = `Hello my name is ${player}`;

// Default Arguments
function greet(name = "Tom", age = "25", pet = "cat") {
  return `My name is ${name} and I am ${age} years old`;
}

console.log(greet());
// We have set the arguments by default
console.log(greet("John", "20", "Dog"));
// Now the passed arguments will be displayed


// Arrow Functions
const add = (a, b) => {
  return a + b
}

// Since it is only one line, we can write like this
const add1 = (a, b) => a + b;