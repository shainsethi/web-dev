function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.greet = function () {
  return `Hi, I am ${this.name}`;
};

const first = new Student("Riya", 20);
const second = new Student("Arjun", 22);

console.log(first.greet());
console.log(second.greet());
console.log("Same greet function?", first.greet === second.greet);
console.log("Prototype link:", Object.getPrototypeOf(first) === Student.prototype);
console.log("instanceof:", first instanceof Student);
