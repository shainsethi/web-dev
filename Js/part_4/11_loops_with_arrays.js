let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log("Backward:", fruits[i]);
}

let marks = [85, 92, 78];
let total = 0;
let highest = marks[0];

for (let i = 0; i < marks.length; i++) {
  total += marks[i];

  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log("Total:", total);
console.log("Highest:", highest);
