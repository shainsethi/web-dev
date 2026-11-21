const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log("Method:", calculator.add(6, 2));
console.log("Shorthand method:", calculator.subtract(6, 2));
console.log("Built-in object method:", Math.max(6, 2));
console.log("Built-in string method:", "riya".toUpperCase());
console.log("Built-in array method:", [1, 2].includes(2));
