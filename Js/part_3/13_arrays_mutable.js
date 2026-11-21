let colors = ["red", "blue", "yellow"];

colors[0] = "green";
console.log("After update:", colors);

colors[5] = "pink";
console.log("After writing past the end:", colors);
console.log("Length:", colors.length);
console.log("Empty slot value:", colors[3]);

let word = "hello";
word[0] = "H";
console.log("Strings do not change:", word);
