const user = { name: "Riya", city: "Delhi" };
const copy = { ...user };

copy.city = "Pune";
console.log("Original:", user);
console.log("Copy:", copy);

console.log("Add a key:", { ...user, age: 20 });
console.log("Later value wins:", { ...user, city: "Mumbai" });
console.log("From an array:", { ...["a", "b"] });
console.log("From a string:", { ..."JS" });

const nested = { profile: { age: 20 } };
const shallow = { ...nested };

shallow.profile.age = 30;
console.log("Nested objects are shared:", nested.profile.age);
