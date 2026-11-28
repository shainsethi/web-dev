const student = {
  name: "Riya",
  marks: [80, 90, 100],
  average() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  },
};

console.log("Data:", student.name, student.marks);
console.log("Behavior:", student.average());

student.marks.push(70);
console.log("After new mark:", student.average());
