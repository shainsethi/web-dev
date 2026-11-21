async function greet() {
  return "Hello";
}

console.log("An async function returns:", greet());

greet().then(value => {
  console.log("Resolved value:", value);
});

async function fail() {
  throw new Error("Something failed");
}

fail().catch(error => {
  console.log("Rejected with:", error.message);
});

const getNumber = async () => 5;

getNumber().then(value => {
  console.log("Async arrow function:", value);
});
