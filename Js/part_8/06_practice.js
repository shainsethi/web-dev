const tens = [10, 20, 30, 45];

console.log("Q1:", tens.every(number => number % 10 === 0));

const numbers = [12, 45, 7, 30];

const smallest = numbers.reduce((min, number) => {
  if (number < min) {
    return number;
  }

  return min;
});

console.log("Q2:", smallest);
