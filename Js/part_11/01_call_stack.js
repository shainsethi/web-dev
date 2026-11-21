function square(n) {
  return n * n;
}

function sumOfSquares(a, b) {
  return square(a) + square(b);
}

function printResult(a, b) {
  console.log("Result:", sumOfSquares(a, b));
}

printResult(3, 4);
