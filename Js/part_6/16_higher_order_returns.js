function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("double(5):", double(5));
console.log("triple(5):", triple(5));

function makeChecker(type) {
  if (type === "even") {
    return function (n) {
      return n % 2 === 0;
    };
  }

  return function (n) {
    return n % 2 !== 0;
  };
}

const isEven = makeChecker("even");
const isOdd = makeChecker("odd");

console.log("isEven(4):", isEven(4));
console.log("isOdd(4):", isOdd(4));
