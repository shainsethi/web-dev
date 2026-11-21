const stack = [];

function enter(name) {
  stack.push(name);
  console.log("Push:", stack);
}

function leave() {
  const name = stack.pop();
  console.log(`Pop ${name}:`, stack);
}

function third() {
  enter("third");
  leave();
}

function second() {
  enter("second");
  third();
  leave();
}

function first() {
  enter("first");
  second();
  leave();
}

first();
