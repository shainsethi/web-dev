class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }

  role() {
    return "Person";
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  role() {
    return `${super.role()} who teaches ${this.subject}`;
  }
}

const teacher = new Teacher("Kabir", "Math");

console.log("Inherited:", teacher.greet());
console.log("Overridden:", teacher.role());
console.log("Is Teacher:", teacher instanceof Teacher);
console.log("Is Person:", teacher instanceof Person);
