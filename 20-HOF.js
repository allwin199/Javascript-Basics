const multiply = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiply(2);

console.log(multiplyByTwo(2));

// a function that accepts functions as parameters and/or returns a function is called Higher Order Function(HOF).
