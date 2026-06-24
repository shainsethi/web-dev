console.log("var before declaration:", hoistedVar);
var hoistedVar = "I am hoisted";
console.log("var after declaration:", hoistedVar);

let hoistedLet = "I am in the TDZ until this line";
console.log("let after declaration:", hoistedLet);

const hoistedConst = "I am also in the TDZ";
console.log("const after declaration:", hoistedConst);

console.log("Calling before declaration:", greet());
function greet() {
  return "Hello!";
}

var sayHi = function () {
  return "Hi!";
};
console.log("Function expression after assignment:", sayHi());
