const names = ["Riya", "Aman", "Dia", "Ben"];

const [first, second] = names;
console.log(first, second);

const [winner, , third] = names;
console.log(winner, third);

const [leader, ...others] = names;
console.log(leader, others);

const [a, b, c = "default"] = ["x", "y"];
console.log(a, b, c);

let left = 1;
let right = 2;

[left, right] = [right, left];
console.log("Swapped:", left, right);
