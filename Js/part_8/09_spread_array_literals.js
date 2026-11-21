const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log("Original:", original);
console.log("Copy:", copy);

const odd = [1, 3];
const even = [2, 4];

console.log("Merged:", [...odd, ...even]);
console.log("With extra values:", [0, ...odd, 5]);
console.log("Characters:", [..."hello"]);
