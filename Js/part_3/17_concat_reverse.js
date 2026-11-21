let first = ["a", "b"];
let second = ["c", "d"];

console.log("concat:", first.concat(second));
console.log("first is unchanged:", first);

let scores = [1, 2, 3];

console.log("Reversed copy:", scores.slice().reverse());
console.log("scores is unchanged:", scores);

scores.reverse();
console.log("reverse changes the original:", scores);
