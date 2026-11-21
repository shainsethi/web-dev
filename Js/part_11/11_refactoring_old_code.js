function printStep(step) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(step);
      resolve();
    }, 100);
  });
}

printStep("Step 1")
  .then(() => printStep("Step 2"))
  .then(() => printStep("Step 3"))
  .then(() => printStep("Step 4"));
