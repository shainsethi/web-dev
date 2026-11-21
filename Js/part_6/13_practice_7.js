let greeting = "hello";

function changeGreeting() {
  let greeting = "namaste";
  console.log(greeting);

  function innerGreeting() {
    console.log(greeting);
  }

  innerGreeting();
}

console.log(greeting);
changeGreeting();
console.log(greeting);
