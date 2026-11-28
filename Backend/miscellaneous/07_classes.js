class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

const first = new Student("Riya", 20);
const second = new Student("Arjun", 22);

console.log(first.greet());
console.log("Same greet function?", first.greet === second.greet);
console.log("Class type:", typeof Student);

try {
  Student("Mira", 21);
} catch (error) {
  console.log("Without new:", error.name);
}
