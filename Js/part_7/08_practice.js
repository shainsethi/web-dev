const square = n => n * n;

console.log("Q1:", square(6));

let printed = 0;

const greeter = setInterval(() => {
  printed++;
  console.log("Q2: Hello World", printed);

  if (printed === 3) {
    clearInterval(greeter);
  }
}, 100);
