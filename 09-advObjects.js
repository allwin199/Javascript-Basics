class Player {
  constructor(name, type) {
    // console.log('before', this);
    this.name = name;
    this.type = type;
    // console.log('after',this);
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }

}

// Everytime when we create a copy of Player, this constructor will run first and constructor will create name and type properties on this player object.
// Functions inside the object are called Methods
// Anytime we want to access the properties inside the constructor we have to use this keyword

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    // console.log(this);
  }

  introduce() {
    console.log("Hello");
  }

  play() {
    console.log(`Weeeeee I'm a ${this.type}`);
  }
}

// another class wizard is referring to player object and whenver we extend we have to have to call super() inside the constructor, this super fn will call constructor of the extended object first

const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Player("Tom", "Healer");

// new keyword will create a new instance of Wizard object

// wizard1.introduce();
// wizard1.play();


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound() {
    console.log(`moo my name is ${this.name}, I am a ${this.color} ${this.type}`);
  }
}

const cow = new Mamal("Shelly", "Cow", "Brown");

cow.sound();