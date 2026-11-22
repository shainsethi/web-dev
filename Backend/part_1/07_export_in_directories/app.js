const fruits = require("./fruits");

console.log("Loaded from fruits/index.js:", fruits);

for (let fruit of fruits) {
  console.log(`${fruit.name} is ${fruit.color}`);
}
