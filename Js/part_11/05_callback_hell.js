function printStep(step, next) {
  setTimeout(() => {
    console.log(step);

    if (next) {
      next();
    }
  }, 100);
}

printStep("Step 1", () => {
  printStep("Step 2", () => {
    printStep("Step 3", () => {
      printStep("Step 4");
    });
  });
});
