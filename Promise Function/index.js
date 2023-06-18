let stocks = {
  Fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shop_on = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shop_on) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Something is wrong"));
    }
  });
};

order(2000, () =>
  console.log(`${stocks.Fruits[1]} return fruits in two seconds`)
);
