function MaxNumber(array) {
  let max = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }

  return max
}

console.log(MaxNumber([1, 2, 3, 5, 22]))
