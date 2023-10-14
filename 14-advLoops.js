// const basket = ["Apples", "Oranges", "Bananas"];
// const detailedBasket = {
//   apples: 5,
//   Oranges: 10,
//   Bananas: 8
// }

// for(item of basket){
//   // console.log(item);
// }

// // Arrays are iterable in js

// for (item in detailedBasket){
//   console.log(item);
// }

// // For in loop allows us to loop through the objects
// // Objects are enumerable in js

// const arr = [-1,0,3,100, 99, 2, 99];

// function biggestNumberInArray(arr){
//   let largestNum = arr[0];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>largestNum){
//       largestNum = arr[i];
//     }
//   }
//   return largestNum;
// }

// console.log(biggestNumberInArray(arr));

// let biggerNum = arr.reduce((acc, num) => {
//     return num > acc ? num : acc;
// }, arr[0]);

// console.log(biggerNum);

// const array2 = ['a', 3, 4, 2];

// function biggestNumberInArray2(arr){
//   let largestNum = 0;
//   arr.forEach((num)=>{
//     if(num>largestNum){
//       largestNum = num;
//     }
//   })
//   return largestNum;
// }

// console.log(biggestNumberInArray2(array2));

// const array3 = [];

// function biggestNumberInArray3(arr){
//   let largestNum = 0;
//   for (num of arr){
//     if(num>largestNum){
//       largestNum = num;
//     }
//   }
//   return largestNum;
// }

// console.log(biggestNumberInArray3(array3));

amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100,
};

function checkBasket(basket, lookingFor) {
    for (item in basket) {
        if (item === lookingFor) {
            return `${lookingFor} is in your basket`;
        }
    }
    return `{lookingFor} does not exist in your basket`;
}

console.log(checkBasket(amazonBasket, "flossww"));
