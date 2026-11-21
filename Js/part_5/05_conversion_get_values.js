const values = {
  1: "number key",
  true: "boolean key",
  null: "null key",
  undefined: "undefined key",
};

console.log("values[1]:", values[1]);
console.log('values["1"]:', values["1"]);
console.log("values[true]:", values[true]);
console.log('values["true"]:', values["true"]);
console.log("values[null]:", values[null]);
console.log("values[undefined]:", values[undefined]);
console.log("All keys:", Object.keys(values));
console.log("Type of a key:", typeof Object.keys(values)[0]);
