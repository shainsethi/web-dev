const numbers = [1, 2, 3, 4];
const squares = numbers.map(number => number * number);
const sumOfSquares = squares.reduce((total, number) => total + number, 0);
const average = sumOfSquares / numbers.length;

console.log("Q1:", squares, sumOfSquares, average);

console.log("Q2:", numbers.map(number => number + 5));

const words = ["html", "css", "javascript"];

console.log("Q3:", words.map(word => word.toUpperCase()));

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map(value => value * 2),
];

console.log("Q4:", doubleAndReturnArgs([1, 2, 3], 4, 4));

const mergeObjects = (first, second) => ({ ...first, ...second });

console.log("Q5:", mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
