let stocks = {
  Fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

function iceCreamShop() {
  let random = Math.random()

  var OnOff = 0.5

  if (random > OnOff) {
    return true
  } else {
    return false
  }
}

iceCreamShop()

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (iceCreamShop()) {
      setTimeout(resolve, ms)
    } else {
      reject("Shop is Closed!")
    }
  })
}

async function Kitchen() {
  try {
    await time(1000)
    console.log("Order placed")

    await time(2000)
    console.log(
      `Fruit s ${stocks.Fruits[0]}, ${stocks.Fruits[1]} and ${stocks.Fruits[2]} selected`
    )

    await time(2000)
    console.log("Fruit has chopped")

    await time(1000)
    console.log(`Liquid ${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

    await time(1000)
    console.log("Machine has started")

    await time(2000)
    console.log(`Container selected is ${stocks.holder[0]}`)

    await time(3000)
    console.log(
      `Topping selected is ${stocks.toppings[0]} and ${stocks.toppings[1]}`
    )

    await time(2000)
    console.log("Serve Ice Cream")
  } catch (error) {
    console.log("Shop is closed")
  } finally {
    setTimeout(() => {
      console.log("All it s done")
    }, 2000)
  }
}

Kitchen()
