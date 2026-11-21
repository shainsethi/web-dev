let num = 40;

if (num % 10 === 0) {
  console.log("Q1: good");
} else {
  console.log("Q1: bad");
}

let quarter = 2;

switch (quarter) {
  case 1:
    console.log("Q3: January, February, March");
    break;
  case 2:
    console.log("Q3: April, May, June");
    break;
  case 3:
    console.log("Q3: July, August, September");
    break;
  case 4:
    console.log("Q3: October, November, December");
    break;
  default:
    console.log("Q3: Invalid quarter");
}

let str = "Amazing";

if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log(`Q4: ${str} is a golden string`);
} else {
  console.log(`Q4: ${str} is not a golden string`);
}

let a = 12;
let b = 45;
let c = 30;

if (a >= b && a >= c) {
  console.log(`Q5: Largest is ${a}`);
} else if (b >= c) {
  console.log(`Q5: Largest is ${b}`);
} else {
  console.log(`Q5: Largest is ${c}`);
}

let first = 32;
let second = 47852;

if (Math.abs(first) % 10 === Math.abs(second) % 10) {
  console.log(`Q6: ${first} and ${second} have the same last digit`);
} else {
  console.log(`Q6: ${first} and ${second} have different last digits`);
}
