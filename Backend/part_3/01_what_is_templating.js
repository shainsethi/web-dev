const ejs = require("ejs");

const user = { name: "Riya", city: "Pune" };

const byHand = "<h1>Hello, " + user.name + "</h1><p>City: " + user.city + "</p>";
const template = "<h1>Hello, <%= name %></h1><p>City: <%= city %></p>";
const rendered = ejs.render(template, user);

console.log("Built by hand:", byHand);
console.log("Template:", template);
console.log("Rendered:", rendered);
console.log("Same output:", byHand === rendered);
