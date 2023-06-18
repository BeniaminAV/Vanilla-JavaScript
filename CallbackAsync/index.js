function one(two_step) {
  console.log("step - 1, please call step two");
  two_step();
}

function two() {
  console.log("step - 2");
}

one(two_step());
