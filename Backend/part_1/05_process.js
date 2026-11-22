const names = process.argv.slice(2);

console.log("Total arguments in process.argv:", process.argv.length);
console.log("Your arguments:", names);

if (names.length === 0) {
  console.log("Try: node 05_process.js Riya Aman");
}

for (let name of names) {
  console.log(`Hello, ${name}!`);
}

console.log("NODE_ENV:", process.env.NODE_ENV || "not set");
