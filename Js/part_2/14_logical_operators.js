let age = 25;
let hasTicket = true;
let isMember = false;

console.log("AND:", age >= 18 && hasTicket);
console.log("OR:", hasTicket || isMember);
console.log("NOT:", !isMember);

console.log("Precedence:", true || false && false);
console.log("Grouped:", (true || false) && false);

console.log("AND returns first falsy:", 0 && "never checked");
console.log("AND returns last value:", 1 && "both truthy");
console.log("OR returns first truthy:", "" || "Guest");
