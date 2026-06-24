function varScope() {
  if (true) {
    var message = "I am var inside an if block";
  }
  console.log("var leaks out of block:", message);
}
varScope();

function letScope() {
  if (true) {
    let greeting = "I am let inside an if block";
    console.log("let inside block:", greeting);
  }
  console.log("let does NOT leak out of the block");
}
letScope();

function constScope() {
  if (true) {
    const language = "JavaScript";
    console.log("const inside block:", language);
  }
  console.log("const does NOT leak out of the block");
}
constScope();

function noKeyword() {
  leakedVar = "I leaked into global scope!";
}
noKeyword();
console.log("Accessing leakedVar globally:", leakedVar);
