let stocks = {
  Fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

let shop_on = true

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (shop_on) {
      setTimeout(resolve, ms)
    } else {
      reject(console.log("Something is wrong"))
    }
  })
}

async function Kitchen() {
  try {
    await time(2000)
    console.log("The order is placed")

    await time(2000)
    console.log(`Fruit ${stocks.Fruits[0]} and ${stocks.Fruits[1]} selected!`)

    await time(2000)
    console.log("Fruit is chopped")

    await time(1000)
    console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`)

    await time(1000)
    console.log("Machine has started")

    await time(2000)
    console.log(`Adding ${stocks.holder[1]}`)

    await time(3000)
    console.log(
      `Topping s ${stocks.toppings[0]} and ${stocks.toppings[1]} selected`
    )

    await time(2000)
    console.log("Serve Ice Cream")
  } catch (error) {
    console.log("Shop is closed, see you tomorow")
  } finally {
    setTimeout(() => {
      console.log("All it s done!")
    }, 1500)
  }
}

Kitchen()
