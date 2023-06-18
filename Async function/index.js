let stocks = {
  Fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]}`);

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("has take 3 apple");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("machine has started");

          setTimeout(() => {
            console.log(
              `topping used is ${stocks.toppings[0]} and ${stocks.toppings[1]}`
            );

            setTimeout(() => {
              console.log("Serve the Ice Cream Boy");
            }, 2000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(3, production);
