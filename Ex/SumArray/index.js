function SumArray(array) {
  let sum = 0

  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum
}

console.log(SumArray([1, 3, 6, 10, 22, 42]))

//Output 84
