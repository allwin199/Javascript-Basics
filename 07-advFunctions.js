const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    };
    return second;
};

const newFunc = first();
newFunc();

// Closures

// const newFunc = first() will be called first.
// Now first() will be executed
// first() has a variable greet and finally it returns the second()
// Now second() is returned to the newFunc.
// Now second() will get executed.
// second() needs the value of greet, but greet belongs to first() which has already executed and completed.
// Here is where closure comes in clutch
// Since it is a closure, the child scope will always have access to the parent scope.
// Therfore second() will have access to the greet

// Currying
const makeAdder = (x) => {
    return (y) => {
        return x + y;
    };
};

// Partially applied functions
const add5 = makeAdder(5);

console.log(add5(2)); // 7

const makeAdder2 = (x) => (y) => x + y;
const newMakeAdder = makeAdder2(5);
console.log(newMakeAdder(2));

// Initially add5(2) will be invoked.
// add5 is calling makedAdder(5);
// Now makeAdder(5) will be executed first
// X will be set as 5 and this fn will return fn(y) to add5;
// add5 will now pass (2) to the y fn
// a=5, b=2, op will be 7
// Everytime we call this add5 fn with any args, 5 will be added to the given arg

// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

const sendRequest1 = (greet) => {
    return (name) => {
        return (message) => {
            return `${greet} ${name}, ${message}`;
        };
    };
};
sendRequest1("Hello")("John")(
    "Please can you add me to your Linkedin network?"
);

// Modern Currying with Es6
const sendRequest = (greet) => (name) => (message) =>
    `${greet} ${name}, ${message}`;

sendRequest("Hello")("John")("Please can you add me to your Linkedin network?");

// The above one's are basic currying

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// parameters f&g return a fn that takes parameter a that returns a fn f(g(a))

// we have a sum fn

compose(sum, sum)(5);
// We are calling the compose fn, it is receiving 2 args, both are sum and that fn is returning another fn which takes a as arg
// we can clearly understand a=5
// f= sum(), g=sum()

// f(g(a)) = f(sum(a)) = f(sum(5)) = f(6) = sum(6) = 7

// Side Effects

let a = 1;

const changinga = () => {
    a = 2;
};

changinga();
console.log(a);

// Whenever a outside variable is changed inside the fn, it is called side effects
// Try to avoid side effects at all cost
