let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;

console.log("Random decimal:", step1);
console.log("Multiply by 10:", step2);
console.log("Floor:", step3);
console.log("Add 1 for 1 to 10:", step4);

let min = 21;
let max = 25;
let inRange = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random from ${min} to ${max}:`, inRange);
