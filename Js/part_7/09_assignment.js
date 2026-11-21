const arrayAverage = numbers => {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total / numbers.length;
};

console.log("Q1:", arrayAverage([2, 4, 6, 8]));

const isEven = number => number % 2 === 0;

console.log("Q2:", isEven(10), isEven(7));

{
  const object = {
    message: "Hello, World!",
    logMessage() {
      console.log(this.message);
    },
  };

  console.log("Q3 prints after 1 second:");
  setTimeout(object.logMessage, 1000);
}

{
  let length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method(callback) {
      callback();
    },
  };

  console.log("Q4 in Node:");
  object.method(callback, 1, 2);
}
