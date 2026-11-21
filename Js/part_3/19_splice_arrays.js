let letters = ["a", "b", "c", "d", "e"];

console.log("Remove returns:", letters.splice(1, 2));
console.log("After remove:", letters);

console.log("Insert returns:", letters.splice(1, 0, "x", "y"));
console.log("After insert:", letters);

console.log("Replace returns:", letters.splice(2, 1, "z"));
console.log("After replace:", letters);

console.log("Remove to end returns:", letters.splice(3));
console.log("After remove to end:", letters);

console.log("Negative start returns:", letters.splice(-1, 1));
console.log("After negative start:", letters);
