function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log("sum(1, 2):", sum(1, 2));
console.log("sum(1, 2, 3, 4):", sum(1, 2, 3, 4));
console.log("sum():", sum());

function introduce(greeting, ...names) {
  console.log("Greeting:", greeting);
  console.log("Names:", names);
}

introduce("Hello", "Riya", "Aman", "Dia");

function countArguments() {
  return arguments.length;
}

console.log("arguments object:", countArguments(1, 2, 3));
