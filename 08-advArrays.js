const array = [101, 2, 70, 28, 46, 200, 45, 91];
// const array = [-3, -1, -2];

let largestNum = 0;
array.forEach((num) => {
  if (num > largestNum) {
    largestNum = num;
  }
})

// console.log(largestNum);

// const doubleArray = [];
// const newArray = array.forEach((num) => {
//   doubleArray.push(num * 2);
// })

// console.log(doubleArray);

// We are multiplying every number by 2

// let newArray = [];
// for(let i=0;i<array.length;i++){
//   newArray.push(array[i]*2);
// }

// console.log(newArray);

// Map in Js
// const mapArray = array.map((num) => {
//   return num*2
// });

// We can simplify like this
const mapArray = array.map(num => num * 2);

// console.log(mapArray);
// console.log(array)


// Filter in Js 
const filterArray = array.filter(num => num > 5);

// console.log(filterArray);

// Reduce in js
const reduceArray = array.reduce((acc, num) => {
  // if(num > acc){
  //   return num;
  // }
  // return acc;
  // return Math.max(acc, num); // other way
});

// console.log(reduceArray);

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

// let newArray = []
// array.forEach(user => {
// 	let { username, team } = user;
// 	username = username + "!";
// 	newArray.push(username);
// })
// console.log(newArray);

// const newArray = [];
// array.forEach((item)=>{
//   const refinedItems = {
//     username: item.username + "!",
//     team: item.team,
//     score: item.score,
//     items: item.items
//   }
//   newArray.push(refinedItems);
// });

// console.log(newArray);

const mapArray = array.map((item) => {
  const newItems = item.items.map((item) => {
    return items = item + "!";
  })
  const refinedItems = {
    username: item.username + "?",
    team: item.team,
    score: item.score,
    items: newItems
  }
  return refinedItems;
});

console.log(mapArray);





// const answer = array.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);

console.log("Original", array);

// const filterArray = array.filter((item)=>{
//   return item.team === 'red';
// })

// console.log(filterArray);

// const reduceArray = array.reduce((acc, item)=>{
//   return acc+item.score;
// }, 0);

// console.log(reduceArray);



