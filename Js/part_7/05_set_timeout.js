console.log("Start");

setTimeout(() => {
  console.log("Runs after 200 milliseconds");
}, 200);

const cancelled = setTimeout(() => {
  console.log("This never runs");
}, 100);

clearTimeout(cancelled);

console.log("End");
