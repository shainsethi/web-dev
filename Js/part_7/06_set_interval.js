let count = 0;

const timer = setInterval(() => {
  count++;
  console.log("Tick:", count);

  if (count === 3) {
    clearInterval(timer);
    console.log("Interval stopped");
  }
}, 100);
