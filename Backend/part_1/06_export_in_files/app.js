const math = require("./math");
const { add, multiply } = require("./math");

console.log("Whole module:", math);
console.log("math.PI:", math.PI);
console.log("add(2, 3):", add(2, 3));
console.log("multiply(2, 3):", multiply(2, 3));
