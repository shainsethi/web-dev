let num = 7;

if (num % 2 === 0) {
  console.log(`Q1: ${num} is even`);
} else {
  console.log(`Q1: ${num} is odd`);
}

let a = 12;
let b = 45;
let c = 30;

if (a >= b && a >= c) {
  console.log(`Q2: Largest is ${a}`);
} else if (b >= c) {
  console.log(`Q2: Largest is ${b}`);
} else {
  console.log(`Q2: Largest is ${c}`);
}

let marks = 82;

if (marks >= 90) {
  console.log("Q3: Grade A");
} else if (marks >= 75) {
  console.log("Q3: Grade B");
} else if (marks >= 50) {
  console.log("Q3: Grade C");
} else {
  console.log("Q3: Grade F");
}
