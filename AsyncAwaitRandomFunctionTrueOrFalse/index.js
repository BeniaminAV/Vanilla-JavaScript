let stocks = {
  Fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

let isShopOpen

const shop_on = () => {
  if (isShopOpen !== undefined) {
    return isShopOpen
  }

  let random = Math.floor(Math.random() * 2)
  let OnOff = 0.5

  isShopOpen = random > OnOff
  return isShopOpen
}

const ShopIce = (ms) => {
  return new Promise((resolve, reject) => {
    if (shop_on()) {
      setTimeout(resolve, ms)
    } else {
      reject("Something is wrong")
    }
  })
}

const ShopOrder = async () => {
  try {
    await ShopIce(2000)
    console.log("Order has started")

    await ShopIce(2000)
    console.log(
      `Fruit s ${stocks.Fruits[0]} and ${stocks.Fruits[1]} has selected`
    )

    await ShopIce(2000)
    console.log("Fruit s has chopped")

    await ShopIce(2000)
    console.log(`Liquid ${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

    await ShopIce(2000)
    console.log("Machine has started")

    await ShopIce(2000)
    console.log(`Cup was selected ${stocks.holder[0]}`)

    await ShopIce(2000)
    console.log(
      `Toppings ${stocks.toppings[0]} and ${stocks.toppings[1]} added`
    )

    await ShopIce(2000)
    console.log("Serve Ice Cream")
  } catch (error) {
    console.log("Shop is Closed!")
  } finally {
    setTimeout(() => {
      console.log("All it s done , se you tommorow")
    }, 2000)
  }
}

ShopOrder()
