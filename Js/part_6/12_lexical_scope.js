function outer() {
  let outerValue = "from outer";

  function inner() {
    let innerValue = "from inner";
    console.log(outerValue);
    console.log(innerValue);
  }

  inner();
  console.log("Inner variable in outer:", typeof innerValue);
}

outer();
console.log("Inner function outside:", typeof inner);

let value = "global";

function printValue() {
  console.log("Value:", value);
}

function run() {
  let value = "local";
  printValue();
}

run();
