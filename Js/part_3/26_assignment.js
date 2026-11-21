let arr = [7, 9, 0, -2];
let n = 3;

console.log("Q1:", arr.slice(0, n));
console.log("Q2:", arr.slice(-n));

let str = "   ";

if (str.trim() === "") {
  console.log("Q3: String is blank");
} else {
  console.log("Q3: String is not blank");
}

let text = "JavaScript";
let index = 1;
let char = text.charAt(index);

if (char === char.toLowerCase() && char !== char.toUpperCase()) {
  console.log(`Q4: "${char}" at index ${index} is lower case`);
} else {
  console.log(`Q4: "${char}" at index ${index} is not lower case`);
}

let spaced = "   hello world   ";
console.log(`Q5: [${spaced.trim()}]`);

let element = 0;

if (arr.includes(element)) {
  console.log(`Q6: ${element} exists in the array`);
} else {
  console.log(`Q6: ${element} does not exist in the array`);
}
