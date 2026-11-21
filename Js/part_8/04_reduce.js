const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, number) => {
  console.log(`total = ${total}, number = ${number}`);
  return total + number;
}, 0);

console.log("Sum:", sum);
console.log("Product:", numbers.reduce((total, number) => total * number, 1));
console.log("Empty with initial value:", [].reduce((total, number) => total + number, 0));

try {
  [].reduce((total, number) => total + number);
} catch (error) {
  console.log("Empty without initial value:", error.name);
}
