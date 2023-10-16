let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

const order = (_time, _work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(_work());
            }, _time);
        } else {
            reject(new Error("Shop is Closed"));
        }
    });
};

// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    // step 2
    .then(() => {
        return order(2000, () => console.log("production has started"));
    })

    // step 3
    .then(() => {
        return order(2000, () => console.log("Fruit has been chopped"));
    })

    // step 4
    .then(() => {
        return order(1000, () =>
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
        );
    })

    // step 5
    .then(() => {
        return order(1000, () => console.log("start the machine"));
    })

    // step 6
    .then(() => {
        return order(2000, () =>
            console.log(`ice cream placed on ${stocks.holder[1]}`)
        );
    })

    // step 7
    .then(() => {
        return order(3000, () =>
            console.log(`${stocks.toppings[0]} as toppings`)
        );
    })

    // Step 8
    .then(() => {
        return order(2000, () => console.log("Serve Ice Cream"));
    })

    .catch((e) => console.log(e));
