const student = {
  name: "Riya",
  age: 20,
  marks: 92,
};

student.city = "Delhi";
console.log("After add:", student);

student.age = 21;
student["marks"] = "A";
console.log("After update:", student);

delete student.marks;
console.log("After delete:", student);

try {
  student = {};
} catch (error) {
  console.log("Reassigning a const object throws:", error.name);
}
