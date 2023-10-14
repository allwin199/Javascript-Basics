// const arr = [1,2,3,4,[5]];

// // console.log(arr.flat())

// const entries = ["Sally", "Pete", , , , , , ,"Roy"];

// // console.log(entries.flat());

// const newEntries = entries.flatMap((entry)=>{
//   return entry + "!";
// })

// // console.log(newEntries);

// const userEmail = '            eddytheeagle@gmail.com';
// console.log(userEmail.trim());

// const userProfiles = [["commander", 23],["derekzelander", 40], ["Hansel", 33]];

// const userObject = Object.fromEntries(userProfiles);

// console.log(userObject);

// const arr1 = [1,2,3,[4],[5]]
// console.log(arr1.flat());

// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// console.log(array.flat(Infinity));

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// const greetingString = greeting.flat();
// console.log(greetingString.join(' '));

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// console.log(trapped.flat(Infinity));

// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// console.log(userEmail3.trim());

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const newUsers = Object.entries(users);
// console.log(newUsers);

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const newUsers = Object.entries(users).map((data)=>{
//   data[1] = data[1] * 2;
//   return data;
// })
// console.log(newUsers);

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const newUsers = Object.entries(users).map((data)=>{
//   return [data[0], data[1]*2];
// })

// const returnToOriginal = Object.fromEntries(newUsers);

// console.log(returnToOriginal);
