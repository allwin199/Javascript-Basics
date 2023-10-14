// console.log(typeof 1n)

// Optional Chaining
// let pokemon = {
//   raichu: {
//     weight: 30
//   }
// }

// let weight2 = pokemon?.raichu?.weight;

// console.log(weight2);

let will_pokemon = {
    pikachu: {
        species: "Mouse Pokemon",
        height: 0.4,
        weight: 6,
        power: "lightning",
        friend: {
            charizard: {
                species: "Dragon Pokemon",
                height: 1.7,
                weight: 90.5,
                power: "fire",
            },
        },
    },
};

let andrei_pokemon = {
    raichu: {
        species: "Mouse Pokemon",
        height: 0.8,
        weight: 30,
        power: "",
    },
};

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log("fight!");
} else {
    console.log("walk away...");
}

// Exercise 4: What do these each output?
console.log(false ?? "hellooo5");
console.log(null ?? "hellooo4");
console.log(null || "hellooo3");
console.log((false || null) ?? "hellooo2");
console.log(null ?? (false || "hellooo1"));

// || will check whether the value is truthy, if truthy it will say true or else false

// ?? will check wether the value is not a null or undefined
