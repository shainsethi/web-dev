let word = "hello";

word[0] = "H";
console.log("After changing an index:", word);

word.toUpperCase();
console.log("After calling a method:", word);

word = word.toUpperCase();
console.log("After reassigning the result:", word);
