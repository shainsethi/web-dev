function createStudent(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I am ${this.name}`;
    },
  };
}

const first = createStudent("Riya", 20);
const second = createStudent("Arjun", 22);

console.log(first.greet());
console.log(second.greet());
console.log("Same greet function?", first.greet === second.greet);
