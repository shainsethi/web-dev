const numbers = [1, 2, 3];

numbers.forEach(number => {
  console.log("Value:", number);
});

numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});

const students = [
  { name: "Riya", marks: 92 },
  { name: "Aman", marks: 78 },
];

students.forEach(student => {
  console.log(`${student.name}: ${student.marks}`);
});
