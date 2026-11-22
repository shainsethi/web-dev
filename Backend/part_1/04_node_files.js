const path = require("path");

const students = ["Riya", "Aman", "Dia"];

for (let student of students) {
  console.log(`Hello, ${student}!`);
}

console.log("This file:", path.basename(__filename));
console.log("This folder:", path.basename(__dirname));
