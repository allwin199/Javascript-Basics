// const name = "Turtle";

// console.log(name.padStart(10));
// console.log(name.padEnd(10));

// const obj = {
//   username0: 'santa',
//   username1: 'Rudolf',
//   username2: 'Mr. Grinch'
// }

// Since it is not an array, we will be unable to loop

// Object.keys(obj).forEach((key, index) => {
// console.log(key, obj[key]);
// })

// Object.values(obj).forEach((val, index)=>{
//   console.log(val);
// })

// Object.entries(obj).forEach((data, index)=>{
//   console.log(data);
// })

// const newArray = Object.entries(obj).map((value)=>{
//   return value[1] + value[0].replace('username', '');
// })

// console.log(newArray);

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// console.log(startLine);
// console.log(turtle.padStart(9));
// console.log(rabbit.padStart(9));

// turtle = turtle.trim().padEnd(9, '=');

// console.log(turtle);

let obj = {
    my: "name",
    is: "Rudolf",
    the: "raindeer",
};

const newArray = Object.entries(obj).map((value) => {
    return value.join(" ");
});

console.log(newArray.join(" "));

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
