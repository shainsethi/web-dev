let text = "JavaScript";

console.log("slice(0, 4):", text.slice(0, 4));
console.log("slice(4):", text.slice(4));
console.log("slice(-6):", text.slice(-6));
console.log("slice(-6, -3):", text.slice(-6, -3));
console.log("slice(4, 100):", text.slice(4, 100));
console.log("slice(5, 2):", `[${text.slice(5, 2)}]`);
console.log("Original:", text);
