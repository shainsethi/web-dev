let original = [1, 2];
let sameArray = original;

sameArray.push(3);
console.log("original:", original);
console.log("sameArray:", sameArray);
console.log("original === sameArray:", original === sameArray);

console.log("[1] == [1]:", [1] == [1]);
console.log("[1] === [1]:", [1] === [1]);

let copy = original.slice();

copy.push(4);
console.log("copy:", copy);
console.log("original is unchanged:", original);
console.log("original === copy:", original === copy);
