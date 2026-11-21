let input = "   hello world   ";

console.log(`Original: [${input}]`);
console.log(`trim: [${input.trim()}]`);
console.log(`trimStart: [${input.trimStart()}]`);
console.log(`trimEnd: [${input.trimEnd()}]`);

let password = "  js123  ";

if (password.trim() === "js123") {
  console.log("Password matched after trim");
}

let blankName = "    ";

if (!blankName.trim()) {
  console.log("Name cannot be blank");
}
