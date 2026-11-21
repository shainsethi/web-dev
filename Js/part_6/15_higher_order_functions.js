function repeat(action, count) {
  for (let i = 1; i <= count; i++) {
    action();
  }
}

repeat(function () {
  console.log("Running the callback");
}, 3);

function applyTo(number, operation) {
  return operation(number);
}

const square = function (n) {
  return n * n;
};

console.log("Named callback:", applyTo(5, square));
console.log("Inline callback:", applyTo(5, function (n) {
  return n + 1;
}));
