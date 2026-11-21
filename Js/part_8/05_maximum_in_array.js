const numbers = [12, 45, 7, 30];

const largest = numbers.reduce((max, number) => {
  if (number > max) {
    return number;
  }

  return max;
});

console.log("Largest:", largest);
