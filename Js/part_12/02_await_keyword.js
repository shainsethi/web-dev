function delayedValue(value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), 100);
  });
}

async function run() {
  console.log("Start");

  const first = await delayedValue("First");
  console.log(first);

  const second = await delayedValue("Second");
  console.log(second);

  console.log("End");
}

run();
console.log("This runs while run() is waiting");
