// Function Declaration
function sayHello() {
  console.log("Hello");
}
sayHello();
// Function Calling


// Function Expression
var sayBye = function() {
  console.log("Bye");
}
sayBye();

function sing(song) {
  console.log(song);
}
sing("It's Christmas");

// (a,b) are parameters
function multiply(a, b) {
  return a * b;
}
multiply(11 * 2);

function complex(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b;
  }
}
complex(5, 10);