const numbers = [2, 4, 6, 7];

console.log("every even:", numbers.every(number => number % 2 === 0));
console.log("some even:", numbers.some(number => number % 2 === 0));
console.log("every below 10:", numbers.every(number => number < 10));
console.log("some above 10:", numbers.some(number => number > 10));

const empty = [];

console.log("every on empty:", empty.every(number => number > 0));
console.log("some on empty:", empty.some(number => number > 0));
