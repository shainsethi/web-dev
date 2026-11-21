let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === num) {
    arr.splice(i, 1);
  }
}

console.log("Q1:", arr);

let number = 287152;
let count = 1;
let remaining = Math.floor(number / 10);

while (remaining > 0) {
  count++;
  remaining = Math.floor(remaining / 10);
}

console.log("Q2:", count);

let sum = 0;
let digits = number;

while (digits > 0) {
  sum += digits % 10;
  digits = Math.floor(digits / 10);
}

console.log("Q3:", sum);

let n = 7;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`Q4: ${n}! = ${factorial}`);

let positives = [12, 45, 7, 30];
let largest = positives[0];

for (let value of positives) {
  if (value > largest) {
    largest = value;
  }
}

console.log("Q5:", largest);
