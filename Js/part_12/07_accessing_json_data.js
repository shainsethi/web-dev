const response = `{
  "user": { "name": "Riya", "city": "Delhi" },
  "courses": [
    { "title": "HTML", "hours": 10 },
    { "title": "JavaScript", "hours": 40 }
  ]
}`;

const data = JSON.parse(response);

console.log("Name:", data.user.name);
console.log("Second course:", data.courses[1].title);

for (let course of data.courses) {
  console.log(`${course.title}: ${course.hours} hours`);
}

try {
  JSON.parse("{ name: 'Riya' }");
} catch (error) {
  console.log("Invalid JSON throws:", error.name);
}
