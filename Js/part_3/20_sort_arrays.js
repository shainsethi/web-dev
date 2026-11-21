let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log("Strings:", fruits);

let letters = ["b", "A", "a"];
letters.sort();
console.log("Uppercase first:", letters);

let numbers = [10, 2, 33, 4];
numbers.sort();
console.log("Default number sort:", numbers);

numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers);

numbers.sort((a, b) => b - a);
console.log("Descending:", numbers);
