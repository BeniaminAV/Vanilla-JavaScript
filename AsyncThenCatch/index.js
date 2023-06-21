let stocks = {
  Fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

let shop = false

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shop) {
      setTimeout(() => {
        resolve(work())
      }, time)
    } else {
      reject(console.log("Something is Wrong"))
    }
  })
}

order(2000, () => console.log("Order start"))
  .then(() => {
    return order(2000, () =>
      console.log(`Fruit selected ${stocks.Fruits[0]} and ${stocks.Fruits[1]}`)
    )
  })
  .then(() => {
    return order(1500, () => {
      console.log("Fruit Chopped")
    })
  })
  .then(() => {
    return order(2000, () => {
      console.log(`Liquid ${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    })
  })
  .then(() => {
    return order(3000, () => {
      console.log("Machine started")
    })
  })
  .then(() => {
    return order(2000, () => {
      console.log(
        `Topping with ${stocks.toppings[0]} and ${stocks.toppings[1]} added`
      )
    })
  })
  .then(() => {
    return order(1000, () => console.log("Ice Cream is Served"))
  })
  .catch(() => {
    console.log("Shop closed")
  })
  .finally(() => {
    setTimeout(() => {
      console.log("All it s done")
    }, 1000)
  })
