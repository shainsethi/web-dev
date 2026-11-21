const student = {
  name: "Riya",
  age: 20,
  "full name": "Riya Sharma",
};

console.log("Dot notation:", student.name);
console.log("Bracket notation:", student["age"]);
console.log("Key with a space:", student["full name"]);

let key = "age";

console.log("Bracket with a variable:", student[key]);
console.log("Dot with a variable name:", student.key);
console.log("Missing key:", student.city);
