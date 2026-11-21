alert("Welcome to JavaScript!");

let userName = prompt("Enter your name:");
let ageInput = prompt("Enter your age:");
let age = Number(ageInput);

console.log("Type of prompt value:", typeof ageInput);

if (!userName) {
  console.warn("No name entered");
  alert("You did not enter a name.");
} else if (!ageInput || Number.isNaN(age)) {
  console.error("Invalid age entered");
  alert("Please enter a valid age.");
} else {
  alert(`Hello ${userName}! Next year you will be ${age + 1}.`);
}
