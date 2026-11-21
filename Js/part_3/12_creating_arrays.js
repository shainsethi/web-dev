let empty = [];
let numbers = [1, 2, 3];
let names = ["Riya", "Aman"];
let mixed = [1, "two", true, null];
let withConstructor = new Array(1, 2, 3);
let withLength = new Array(3);

console.log("Empty:", empty);
console.log("Numbers:", numbers);
console.log("Strings:", names);
console.log("Mixed:", mixed);
console.log("new Array(1, 2, 3):", withConstructor);
console.log("new Array(3):", withLength);
console.log("new Array(3) length:", withLength.length);
