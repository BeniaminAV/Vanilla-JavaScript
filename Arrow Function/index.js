const person1 = {
  name: "Beni",
  age: 24,
  isMarried: false,
}

const person2 = { ...person1, name: "Sebi" }

const { name, age, isMarried } = person1
console.log(person1, person2)
