// Scope - Scope is created between {}

// Context - Context tells where we are within the object

// console.log(this);
// here "this" refers to the "window" object
// what is to the left of the (.)
// console.log() can be called using
// window.console.log()
// console.log is inside the window object
// therfore "this" refers to the window object

// this will refer to what object it is inside of

// function a() {
//     console.log(this);
// }

// a();
// a() can be called using
// window.a()
// a() is present inside the window object
// therfore this refers to the window object

// const d = () => {
//     const a = () => {
//         console.log(this);
//     }
//     return a;
// };

// even though a() is nested
// it will be called by
// d()()
// which can also be called using
// window.d()()
// therfore here also this will refer to the window object

// const obj4 = {
//     a: function() {
//         console.log(this);
//     }
// }

// to call a()
// we have to do obj4.a()
// a() lives inside obj4
// therefore here this will refer to obj4

// class Player {
//     constructor(name, type) {
//         // console.log('before', this);
//         this.name = name;
//         this.type = type;
//         // console.log('after',this);
//     }

//     introduce() {
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//     }
// }

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

const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Player("Tom", "Healer");

// new keyword will create a new instance of Wizard object

// wizard1.introduce();
// wizard1.play();
