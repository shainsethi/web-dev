const student = {
  name: "Riya",
  english: 90,
  math: 80,
  getAverage() {
    return (this.english + this.math) / 2;
  },
};

console.log("Called on the object:", student.getAverage());

const detached = student.getAverage;

console.log("Called without the object:", detached());
