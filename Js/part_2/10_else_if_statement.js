let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
}

let wrongOrderMarks = 95;

if (wrongOrderMarks >= 50) {
  console.log("Wrong order prints Grade C");
} else if (wrongOrderMarks >= 90) {
  console.log("This line is never reached for 95");
}
