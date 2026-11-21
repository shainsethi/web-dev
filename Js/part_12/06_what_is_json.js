const user = {
  name: "Riya",
  age: 20,
  active: true,
  skills: ["html", "css"],
  address: null,
  nickname: undefined,
  greet() {
    return "Hello";
  },
};

const json = JSON.stringify(user);

console.log("JSON string:", json);
console.log("Type:", typeof json);
console.log("Formatted:");
console.log(JSON.stringify({ name: user.name, skills: user.skills }, null, 2));

const parsed = JSON.parse(json);

console.log("Parsed object:", parsed);
console.log("Type:", typeof parsed);
