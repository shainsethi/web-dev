# JavaScript Fundamentals (Part 3 Study Guide)

This study guide explains string methods and arrays in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: String Methods
A **method** is an action that belongs to a value. You call it with a dot and parentheses:
```javascript
let message = "JavaScript";

message.toUpperCase(); // "JAVASCRIPT"
message.charAt(4);     // "S"
message.length;        // 10
```

*   `length` is a **property**, so it has no parentheses.
*   `toUpperCase()` is a **method**, so it needs parentheses to run.

---

## 📖 Chapter 2: `trim()`
`trim()` removes whitespace from both ends of a string. Spaces inside the text stay.
```javascript
let input = "   hello world   ";

input.trim();      // "hello world"
input.trimStart(); // "hello world   "
input.trimEnd();   // "   hello world"
```

> [!TIP]
> Trim user input before checking it. A value like `"    "` is truthy, but `"    ".trim()` is `""`, which is falsy.

---

## 📖 Chapter 3: Strings are Immutable
**Immutable** means a string cannot be changed after it is created. String methods return a **new** string.
```javascript
let word = "hello";

word[0] = "H";
console.log(word);        // hello

word.toUpperCase();
console.log(word);        // hello

word = word.toUpperCase();
console.log(word);        // HELLO
```

The last line does not change the old string. It points `word` to a new one.

> [!NOTE]
> In strict mode, `word[0] = "H"` throws a `TypeError` instead of being silently ignored.

---

## 📖 Chapter 4: `toUpperCase()` and `toLowerCase()`
```javascript
let language = "JavaScript";

language.toUpperCase(); // "JAVASCRIPT"
language.toLowerCase(); // "javascript"
```

These are useful for case-insensitive checks:
```javascript
let answer = "YeS";

if (answer.toLowerCase() === "yes") {
  console.log("Case-insensitive match");
}
```

---

## 📖 Chapter 5: Methods with Arguments – `indexOf()`
**Arguments** are values you pass into a method. `indexOf()` returns the position of the first match, or `-1` if nothing matches.
```javascript
let sentence = "I love coding";

sentence.indexOf("love");   // 2
sentence.indexOf("o");      // 3
sentence.indexOf("o", 4);   // 8 (starts searching at index 4)
sentence.lastIndexOf("o");  // 8
sentence.indexOf("python"); // -1
sentence.indexOf("Love");   // -1 (search is case-sensitive)
```

---

## 📖 Chapter 6: Method Chaining
When a method returns a string, you can immediately call another method on the result. Chains run **left to right**.
```javascript
let email = "  USER@Example.COM  ".trim().toLowerCase();
console.log(email); // user@example.com
```

*   **Step 1**: `trim()` returns `"USER@Example.COM"`.
*   **Step 2**: `toLowerCase()` returns `"user@example.com"`.

---

## 📖 Chapter 7: `slice()`
`slice(start, end)` returns part of a string. The `start` index is included and the `end` index is **not**.
```javascript
let text = "JavaScript";

text.slice(0, 4);    // "Java"
text.slice(4);       // "Script"
text.slice(-6);      // "Script"
text.slice(-6, -3);  // "Scr"
text.slice(4, 100);  // "Script"
text.slice(5, 2);    // ""
```

A negative index counts from the end, so `-1` is the last character.

---

## 📖 Chapter 8: `replace()` and `repeat()`
```javascript
let colors = "red and red";

colors.replace("red", "blue");    // "blue and red"
colors.replaceAll("red", "blue"); // "blue and blue"
"ha".repeat(3);                   // "hahaha"
"-".repeat(10);                   // "----------"
```

*   `replace()` changes only the **first** match when given a string.
*   `replaceAll()` changes every match.
*   Both return a new string and leave the original unchanged.

---

## 📖 Chapter 9: Practice Questions (Strings)
Solutions are in `09_practice_strings.js`.

1.  Remove the extra spaces from `"  learn js  "` and convert it to uppercase.
2.  Get `"Java"` from `"JavaScript"`.
3.  Get the domain from `"riya@example.com"`.
4.  Capitalize the first letter of `"javascript"`.

---

## 📖 Chapter 10: Array (Data Structure)
An **array** stores an ordered list of values in one variable.
```javascript
let marks = [85, 92, 78];

marks[0];             // 85
marks.length;         // 3
typeof marks;         // "object"
Array.isArray(marks); // true
```

> [!TIP]
> `typeof` cannot tell an array from an object. Use `Array.isArray()`.

---

## 📖 Chapter 11: Visualizing Arrays
Each item sits at a numbered position called an **index**. Indexes start at `0`.

```
Value:   "apple"   "banana"   "cherry"
Index:      0          1          2
```

```javascript
let fruits = ["apple", "banana", "cherry"];

fruits[fruits.length - 1]; // "cherry"
fruits[10];                // undefined
fruits[0][0];              // "a"
```

---

## 📖 Chapter 12: Creating Arrays
```javascript
let empty = [];
let numbers = [1, 2, 3];
let names = ["Riya", "Aman"];
let mixed = [1, "two", true, null];
let withConstructor = new Array(1, 2, 3);
```

> [!WARNING]
> `new Array(3)` does **not** create `[3]`. It creates an empty array with a length of `3`. Prefer the `[]` syntax.

---

## 📖 Chapter 13: Arrays are Mutable
Unlike strings, arrays can be changed in place:
```javascript
let colors = ["red", "blue", "yellow"];

colors[0] = "green";
console.log(colors); // [ 'green', 'blue', 'yellow' ]
```

Writing past the end creates empty slots:
```javascript
colors[5] = "pink";
console.log(colors.length); // 6
console.log(colors[3]);     // undefined
```

---

## 📖 Chapter 14: Array Methods

| Method | Action | Returns | Changes Original |
|---|---|---|---|
| `push(x)` | Adds to the end | New length | ✅ Yes |
| `pop()` | Removes from the end | Removed item | ✅ Yes |
| `unshift(x)` | Adds to the start | New length | ✅ Yes |
| `shift()` | Removes from the start | Removed item | ✅ Yes |

```javascript
let cart = ["milk", "bread"];

cart.push("eggs");   // 3
cart.pop();          // "eggs"
cart.unshift("tea"); // 3
cart.shift();        // "tea"
```

---

## 📖 Chapter 15: Practice Questions (Array Methods)
Solutions are in `15_practice_array_methods.js`.

1.  In a queue, remove the first person and add `"Dia"` at the end.
2.  Remove the last page from a browsing history and store it.
3.  Swap the first and last items of an array.

---

## 📖 Chapter 16: `indexOf()` and `includes()`
```javascript
let primes = [2, 3, 5, 7];

primes.indexOf(5);    // 2
primes.indexOf(11);   // -1
primes.includes(7);   // true
primes.includes("7"); // false
```

*   Use `indexOf()` when you need the **position**.
*   Use `includes()` when you only need **yes or no**.
*   `includes()` can find `NaN`, but `indexOf()` cannot.

---

## 📖 Chapter 17: `concat()` and `reverse()`
`concat()` returns a new array and leaves the originals unchanged:
```javascript
let first = ["a", "b"];
let second = ["c", "d"];

first.concat(second); // [ 'a', 'b', 'c', 'd' ]
```

`reverse()` **changes the original** array. Copy it first if you need to keep the original order:
```javascript
let scores = [1, 2, 3];

scores.slice().reverse(); // [ 3, 2, 1 ]
console.log(scores);      // [ 1, 2, 3 ]

scores.reverse();
console.log(scores);      // [ 3, 2, 1 ]
```

---

## 📖 Chapter 18: `slice()` in Arrays
Array `slice(start, end)` works like string `slice()` and returns a new array:
```javascript
let colors = ["red", "orange", "yellow", "green", "blue"];

colors.slice(1, 3); // [ 'orange', 'yellow' ]
colors.slice(2);    // [ 'yellow', 'green', 'blue' ]
colors.slice(-2);   // [ 'green', 'blue' ]
colors.slice();     // A copy of the whole array
```

---

## 📖 Chapter 19: `splice()` in Arrays
`splice(start, deleteCount, ...items)` removes, inserts, or replaces items **in the original array**. It returns the removed items.
```javascript
let letters = ["a", "b", "c", "d", "e"];

letters.splice(1, 2);           // Returns [ 'b', 'c' ]
console.log(letters);           // [ 'a', 'd', 'e' ]

letters.splice(1, 0, "x", "y"); // Returns []
console.log(letters);           // [ 'a', 'x', 'y', 'd', 'e' ]

letters.splice(2, 1, "z");      // Returns [ 'y' ]
console.log(letters);           // [ 'a', 'x', 'z', 'd', 'e' ]

letters.splice(3);              // Returns [ 'd', 'e' ]
console.log(letters);           // [ 'a', 'x', 'z' ]
```

---

## 📖 Chapter 20: `sort()` in Arrays
`sort()` changes the original array. By default, it compares values **as strings**:
```javascript
["banana", "apple", "cherry"].sort(); // [ 'apple', 'banana', 'cherry' ]
["b", "A", "a"].sort();               // [ 'A', 'a', 'b' ]
[10, 2, 33, 4].sort();                // [ 10, 2, 33, 4 ]
```

> [!WARNING]
> Numbers do not sort correctly by default because `"10"` comes before `"2"` as text. Pass a compare function:
> ```javascript
> let numbers = [10, 2, 33, 4];
>
> numbers.sort((a, b) => a - b); // [ 2, 4, 10, 33 ]
> numbers.sort((a, b) => b - a); // [ 33, 10, 4, 2 ]
> ```
> The `=>` syntax is an arrow function, which you will study in detail later.

---

## 📖 Chapter 21: Practice Questions (Arrays)
Solutions are in `21_practice_arrays.js`.

1.  Insert `"mar"` between `"feb"` and `"apr"`.
2.  Reverse a list of languages and find the new index of `"js"`.
3.  Get the top 3 scores without changing the original array.
4.  Add `"js"` to a tag list only if it is missing.

---

## 📖 Chapter 22: Array References
An array variable stores a **reference** to the array's location in memory. Assigning it to another variable does not copy the array:
```javascript
let original = [1, 2];
let sameArray = original;

sameArray.push(3);
console.log(original); // [ 1, 2, 3 ]
```

`==` and `===` compare references, not contents:
```javascript
original === sameArray; // true
[1] == [1];             // false
[1] === [1];            // false
```

Use `slice()` to make a separate copy:
```javascript
let copy = original.slice();

copy.push(4);
console.log(original);  // [ 1, 2, 3 ]
```

---

## 📖 Chapter 23: Constant Arrays
`const` locks the **reference**, not the contents:
```javascript
const nums = [1, 2, 3];

nums.push(4);   // ✅ Mutation is allowed
nums[0] = 10;   // ✅ Mutation is allowed
// nums = [5];  // ❌ TypeError: Assignment to constant variable
```

To block changes to the array itself, use `Object.freeze()`:
```javascript
const frozen = Object.freeze([1, 2]);
// frozen.push(3); // ❌ TypeError
```

> [!NOTE]
> The example file wraps the failing lines in `try...catch` so the program can continue and print the error name.

---

## 📖 Chapter 24: Nested Arrays
A nested array is an array inside another array. Use one index for the row and another for the column:
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix[1];      // [ 4, 5, 6 ]
matrix[1][2];   // 6
matrix.length;  // 3 rows
matrix[0].length; // 3 columns
```

> [!WARNING]
> `slice()` makes a **shallow copy**. The outer array is new, but both copies still share the same inner arrays.

---

## 📖 Chapter 25: Practice Questions (Nested Arrays)
Solutions are in `25_practice_nested_arrays.js`.

1.  Place `"X"` in the center of a tic-tac-toe board.
2.  Add the main diagonal of a 3×3 grid.
3.  Print a student's name and score from a nested list.
4.  Add a new student to the list.

---

## 📖 Chapter 26: Assignment Questions
Solutions are in `26_assignment.js`.

### Q1. Get the first `n` elements of an array
For `[7, 9, 0, -2]` and `n = 3`, print `[7, 9, 0]`.
```javascript
arr.slice(0, n);
```

### Q2. Get the last `n` elements of an array
For `[7, 9, 0, -2]` and `n = 3`, print `[9, 0, -2]`.
```javascript
arr.slice(-n);
```

> [!WARNING]
> This works for any positive `n`. If `n` is `0`, `arr.slice(-0)` returns the **whole** array because `-0` is treated as index `0`.

### Q3. Check whether a string is blank
```javascript
str.trim() === "";
```

### Q4. Check whether the character at an index is lower case
```javascript
let char = text.charAt(index);
char === char.toLowerCase() && char !== char.toUpperCase();
```

The second check is needed because digits and symbols, such as `"5"`, are the same in both cases and are not lower case letters.

### Q5. Strip leading and trailing spaces
```javascript
spaced.trim();
```

### Q6. Check whether an element exists in an array
```javascript
arr.includes(element);
```

---

## 📊 Comparison Table: Strings vs Arrays

| Feature | String | Array |
|---|---|---|
| **Mutable** | ❌ No | ✅ Yes |
| **Indexed from 0** | ✅ Yes | ✅ Yes |
| **Has `length`** | ✅ Yes | ✅ Yes |
| **`indexOf()` and `includes()`** | ✅ Yes | ✅ Yes |
| **`slice()`** | ✅ Returns a string | ✅ Returns an array |

### Which Array Methods Change the Original?

| Method | Changes Original | Returns |
|---|---|---|
| `push()` / `unshift()` | ✅ Yes | New length |
| `pop()` / `shift()` | ✅ Yes | Removed item |
| `splice()` | ✅ Yes | Array of removed items |
| `sort()` / `reverse()` | ✅ Yes | The same array |
| `slice()` | ❌ No | New array |
| `concat()` | ❌ No | New array |
| `indexOf()` | ❌ No | Index or `-1` |
| `includes()` | ❌ No | `true` or `false` |
