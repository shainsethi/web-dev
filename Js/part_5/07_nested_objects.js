const classInfo = {
  riya: {
    grade: "A",
    city: "Delhi",
  },
  aman: {
    grade: "B",
    city: "Pune",
  },
};

console.log("One student:", classInfo.riya);
console.log("Dot path:", classInfo.riya.city);
console.log("Bracket path:", classInfo["aman"]["grade"]);

classInfo.aman.city = "Mumbai";
console.log("After update:", classInfo.aman);
console.log("Missing nested key:", classInfo.riya.phone);
