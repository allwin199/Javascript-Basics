var todos = [
  "Make my bed",
  "Brush my teeth",
  "Exercise",
  "Study Js",
  "Eat healthy"
]

// var refinedTodos = [];

for (var i = 0; i < todos.length; i++) {
  // refinedTodos.push(todos[i] + "!")
  // todos[i] = todos[i] + "!"
}

todos.forEach((data, index) => {
  // data = data + "!"
  // console.log(data, index);
})

// console.log(todos);


var user = {
  username: "mystery",
  password: "secret"
}

var database = [
  {
    username: "mystery",
    password: "secret"
  },
  {
    username: "love",
    password: "123"
  },
  {
    username: "light",
    password: "1234"
  },
]

var newsfeed = [
  {
    username: "mystery",
    timeline: "I am working on my dreams"
  },
  {
    username: "love",
    timeline: "I am working on love"
  },
  {
    username: "light",
    timeline: "I am working hard"
  }
]

var userNamePrompt = prompt("Enter your user name");
var passwordPrompt = prompt("Enter your password");

var success = false;

function isUserValid(userName, password) {
  for (var i = 0; i < database.length; i++) {
    if (userName === database[i].username && password === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(userName, password) {
  if (isUserValid(userName, password)) {
    console.log(newsfeed);
  } else {
    console.log("Error!");
  }
}

signIn(userNamePrompt, passwordPrompt)