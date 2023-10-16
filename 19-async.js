let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

const iceCreamOrderFlow = async () => {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(2000);
        console.log("production has started");

        await time(2000);
        console.log("fruit has been chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        await time(1000);
        console.log("start the machine");

        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[1]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} as toppings`);

        await time(2000);
        console.log("Serve Ice Cream");
    } catch (error) {
        console.log("customer left");
    }
};

iceCreamOrderFlow();

const apis = [
    "https://jsonplaceholde.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getAll = async () => {
    try {
        const res = await Promise.all(apis.map((api) => fetch(api)));
        const data = await Promise.all(res.map((res) => res.json()));
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

getAll();
