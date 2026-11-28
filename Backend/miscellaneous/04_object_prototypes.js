const numbers = [1, 2, 3];

console.log("Array prototype:", Object.getPrototypeOf(numbers) === Array.prototype);
console.log("Own push?", Object.hasOwn(numbers, "push"));
console.log("Inherited push?", "push" in numbers);

const animal = {
  speak() {
    return `${this.name} makes a sound`;
  },
};

const dog = Object.create(animal);
dog.name = "Bruno";
console.log("From prototype:", dog.speak());

dog.speak = function () {
  return `${this.name} barks`;
};
console.log("Own method wins:", dog.speak());
console.log("Prototype unchanged:", animal.speak.call({ name: "Cat" }));
