console.log("First");

setTimeout(() => {
  console.log("Timer with 0 delay");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

const start = Date.now();

while (Date.now() - start < 100) {
}

console.log("Last line after blocking for 100ms");
