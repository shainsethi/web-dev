const multiply = (a, b) => a * b;
const isAdult = age => age >= 18;
const makeUser = name => ({ name: name });
const broken = () => { value: 1 };

console.log("multiply:", multiply(3, 4));
console.log("isAdult:", isAdult(20));
console.log("Object with parentheses:", makeUser("Riya"));
console.log("Object without parentheses:", broken());
