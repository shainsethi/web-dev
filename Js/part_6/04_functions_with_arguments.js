function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Riya");
greet("Aman");
greet();

function printSum(a, b) {
  console.log("Sum:", a + b);
}

printSum(2, 3);
printSum(1, 2, 100);
printSum(5);

function welcome(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

welcome();
welcome("Dia");
