try {
  early();
} catch (error) {
  console.log("Calling before definition throws:", error.name);
}

const early = function () {
  return "Too early";
};

const square = function (n) {
  return n * n;
};

console.log("Square:", square(4));

let operation = function (a, b) {
  return a + b;
};

console.log("Add:", operation(6, 2));

operation = function (a, b) {
  return a * b;
};

console.log("Multiply:", operation(6, 2));
