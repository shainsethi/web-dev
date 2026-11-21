let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`Q1: ${year} is a leap year`);
} else {
  console.log(`Q1: ${year} is not a leap year`);
}

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Q2: You can drive");
} else {
  console.log("Q2: You cannot drive");
}

let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Q3: Weekend");
} else {
  console.log("Q3: Weekday");
}

let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log(`Q4: ${number} is divisible by both 3 and 5`);
} else {
  console.log(`Q4: ${number} is not divisible by both 3 and 5`);
}
