let day = 3;

switch (day) {
  case 1:
    console.log("Q1: Monday");
    break;
  case 2:
    console.log("Q1: Tuesday");
    break;
  case 3:
    console.log("Q1: Wednesday");
    break;
  case 4:
    console.log("Q1: Thursday");
    break;
  case 5:
    console.log("Q1: Friday");
    break;
  case 6:
    console.log("Q1: Saturday");
    break;
  case 7:
    console.log("Q1: Sunday");
    break;
  default:
    console.log("Q1: Invalid day");
}

let month = 4;

switch (month) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Q2: 30 days");
    break;
  case 2:
    console.log("Q2: 28 or 29 days");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Q2: 31 days");
    break;
  default:
    console.log("Q2: Invalid month");
}

let x = 12;
let y = 4;
let operator = "/";

switch (operator) {
  case "+":
    console.log(`Q3: ${x + y}`);
    break;
  case "-":
    console.log(`Q3: ${x - y}`);
    break;
  case "*":
    console.log(`Q3: ${x * y}`);
    break;
  case "/":
    if (y === 0) {
      console.log("Q3: Cannot divide by zero");
    } else {
      console.log(`Q3: ${x / y}`);
    }
    break;
  default:
    console.log("Q3: Invalid operator");
}
