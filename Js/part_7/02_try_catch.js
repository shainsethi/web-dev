try {
  console.log(missingVariable);
} catch (error) {
  console.log("Error name:", error.name);
  console.log("Error message:", error.message);
} finally {
  console.log("finally always runs");
}

console.log("The program keeps running");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
  console.log("This line is skipped");
} catch (error) {
  console.log("Caught:", error.message);
}
