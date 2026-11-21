const student = {
  name: "Riya",
  regularMethod() {
    return this.name;
  },
  arrowMethod: () => {
    return this.name;
  },
  arrowInsideTimer() {
    setTimeout(() => {
      console.log("Arrow in timer:", this.name);
    }, 100);
  },
  regularInsideTimer() {
    setTimeout(function () {
      console.log("Regular function in timer:", this.name);
    }, 150);
  },
};

console.log("Regular method:", student.regularMethod());
console.log("Arrow method:", student.arrowMethod());
student.arrowInsideTimer();
student.regularInsideTimer();
