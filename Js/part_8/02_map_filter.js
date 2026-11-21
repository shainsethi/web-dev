const numbers = [1, 2, 3, 4, 5, 6];

console.log("map:", numbers.map(number => number * 2));
console.log("filter:", numbers.filter(number => number % 2 === 0));
console.log("Original:", numbers);

const students = [
  { name: "Riya", marks: 92 },
  { name: "Aman", marks: 78 },
  { name: "Dia", marks: 85 },
];

console.log("Names:", students.map(student => student.name));
console.log("Scored 80 or more:", students.filter(student => student.marks >= 80));
