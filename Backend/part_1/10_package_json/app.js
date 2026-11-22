const packageInfo = require("./package.json");
const name = process.argv[2] || "student";

console.log(`Project: ${packageInfo.name}@${packageInfo.version}`);
console.log("Available scripts:", Object.keys(packageInfo.scripts));
console.log(`Hello, ${name}!`);
