var list = ["tiger", "lion", "cat", "monkey"];
console.log(list[1]); //lion

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

array.sort();
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.

array.push("kiwi");
// The push() method adds one or more elements to the end of an array and returns the new length of the array.


array.splice(0, 1);
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice(start, deleteCount, item1, item2, itemN)
// console.log(array);

array.slice(1, 4);
// slice(start, end)
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(array.reverse());

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);