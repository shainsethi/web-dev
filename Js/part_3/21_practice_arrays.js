let months = ["jan", "feb", "apr"];
months.splice(2, 0, "mar");
console.log("Q1:", months);

let languages = ["c", "c++", "html", "js", "python"];
console.log("Q2:", languages.reverse().indexOf("js"));

let scores = [45, 90, 72, 88, 60];
let topThree = scores.slice().sort((a, b) => b - a).slice(0, 3);
console.log("Q3:", topThree, scores);

let tags = ["html", "css"];

if (!tags.includes("js")) {
  tags.push("js");
}

console.log("Q4:", tags);
