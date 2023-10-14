let a = 5;
let b = a;

b++;

// console.log(b);
// console.log(a);

// Since this is a primitive type, it will be pass by value

const obj1 = { name: "yao", password: "123" };
const obj2 = obj1;

obj2.password = "easy";

// console.log(obj1);

// Since this is pass by reference, changing one object is affecting the other

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(123);

// console.log(arr1);

// If we don't want to mutate we have to do like this
let arr3 = [1, 2, 3];
let arr4 = [].concat(arr3);

arr4.push(11111);

// console.log(arr3);
// console.log(arr4);

// Here we are not mutating the array

let obj4 = { a: "a", b: "b", c: "c" };
let obj5 = Object.assign({}, obj4);
let clone = { ...obj4 };

obj5.c = 5;

// console.log(obj4);
// console.log(obj5);
// console.log(clone);

// using object.assign we are able to clone the obect

// But there is a problem with this type of cloning
let obj6 = { a: "a", b: "b", c: { deep: "this is deep" } };
let obj7 = Object.assign({}, obj6);
let clone2 = { ...obj6 };

// To do a deep clone, we need JSON
let superClone = JSON.parse(JSON.stringify(obj6));

obj7.c.deep = "changed";
console.log(obj6);
// Eventhough we changed the property of obj7, it also changed the original object, this is the problem of shallow cloning. Shallow cloning means we can only the first layer.
console.log(clone2);

console.log("SuperClone", superClone);

// First we are the stringifying the entire object, then we are parsing the entire string which will convert to the object
