function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);

console.log("Stored result:", result);
console.log("Used in an expression:", sum(2, 3) * 10);
console.log("Nested calls:", sum(sum(1, 2), 3));

function noReturn() {
  let value = 10;
}

console.log("No return gives:", noReturn());

function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}

console.log(checkAge(21));
console.log(checkAge(15));
