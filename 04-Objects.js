var user = {
  username: "mystery",
  password: "secret"
}

var database = [
  {
    username: "mystery",
    password: "secret"
  }
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

function signIn(userName, password) {
  if (userName === database[0].username && password === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Wrong username or password");
  }
}

signIn(userNamePrompt, passwordPrompt)