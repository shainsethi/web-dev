const students = [
  { name: "Riya", marks: 92 },
  { name: "Aman", marks: 78 },
  { name: "Dia", marks: 85 },
];

console.log("Second student:", students[1]);
console.log("Second student's name:", students[1].name);

students[2].marks = 88;

for (let student of students) {
  console.log(`${student.name}: ${student.marks}`);
}
