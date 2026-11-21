# JavaScript Fundamentals (Part 4 Study Guide)

This study guide explains loops in JavaScript and ends with a Todo App, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: `for` Loops
A **loop** repeats a block of code. A `for` loop is best when you know how many times to repeat.
```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

*   **Initialization** (`let i = 1`): runs once before the loop starts.
*   **Condition** (`i <= 5`): checked before every iteration. The loop stops when it is false.
*   **Update** (`i++`): runs after every iteration.

Loops can also count down or use larger steps:
```javascript
for (let i = 5; i >= 1; i--) {}
for (let i = 0; i <= 10; i += 5) {}
```

---

## 📖 Chapter 2: Dry Run
A **dry run** means tracing code by hand, one step at a time, to predict what it does.
```javascript
let sum = 0;

for (let i = 1; i <= 4; i++) {
  sum += i;
}
```

| Iteration | `i` | `i <= 4` | `sum` after the body |
|---|---|---|---|
| 1 | 1 | ✅ true | 1 |
| 2 | 2 | ✅ true | 3 |
| 3 | 3 | ✅ true | 6 |
| 4 | 4 | ✅ true | 10 |
| Stop | 5 | ❌ false | 10 |

---

## 📖 Chapter 3: Print Odd Numbers
There are two common approaches:
```javascript
for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

Both print `1, 3, 5, 7, 9`. The first runs fewer iterations.

---

## 📖 Chapter 4: Print Even Numbers
```javascript
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

Both print `2, 4, 6, 8, 10`.

---

## 📖 Chapter 5: Infinite Loops
An **infinite loop** never stops because its condition never becomes false.
```javascript
// ❌ i keeps growing, so i >= 1 is always true
// for (let i = 1; i >= 1; i++) {}

// ❌ i is never updated
// let i = 1;
// while (i <= 5) {}
```

> [!WARNING]
> An infinite loop can freeze a browser tab or terminal. Press `Ctrl+C` to stop it in the terminal, or close the browser tab. The example file uses a safety limit, so it is safe to run.

---

## 📖 Chapter 6: Print Multiplication Table
```javascript
let n = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
```

Output starts with `5 x 1 = 5` and ends with `5 x 10 = 50`.

---

## 📖 Chapter 7: Nested `for` Loop
A loop inside another loop. The inner loop finishes **all** its iterations for each iteration of the outer loop.
```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

This runs `3 × 3 = 9` times. Nested loops can also build patterns:
```javascript
for (let i = 1; i <= 4; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}
```
```
*
**
***
****
```

---

## 📖 Chapter 8: `while` Loops
A `while` loop repeats as long as its condition is true. It is best when you do **not** know the number of iterations in advance.
```javascript
let value = 1;

while (value < 50) {
  value *= 2;
}

console.log(value); // 64
```

> [!IMPORTANT]
> Always update the variable used in the condition, or the loop will never end.

---

## 📖 Chapter 9: Favorite Movie Game
This game keeps asking until the user guesses correctly or quits. Open `09_favorite_movie.html` in a browser.
```javascript
let favorite = "inception";
let guess = prompt("Guess my favorite movie (or type quit):");

while (guess !== null && guess.trim().toLowerCase() !== favorite && guess.trim().toLowerCase() !== "quit") {
  guess = prompt("Wrong guess. Try again (or type quit):");
}
```

*   `guess !== null` handles the **Cancel** button. Without it, `null.trim()` would crash the program.
*   `trim()` and `toLowerCase()` accept answers like `" Inception "`.

---

## 📖 Chapter 10: `break` Keyword
`break` exits the current loop immediately.
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }

  console.log(i); // 1, 2, 3
}
```

`while (true)` runs until a `break` is reached:
```javascript
let attempts = 0;

while (true) {
  attempts++;

  if (attempts === 3) {
    break;
  }
}
```

> [!NOTE]
> In nested loops, `break` exits only the **innermost** loop. The outer loop keeps running.

---

## 📖 Chapter 11: Loops with Arrays
Use the index to visit each item. Stop at `length - 1` by using `i < array.length`.
```javascript
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
```

Loops can also calculate values:
```javascript
let marks = [85, 92, 78];
let total = 0;
let highest = marks[0];

for (let i = 0; i < marks.length; i++) {
  total += marks[i];

  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log(total);   // 255
console.log(highest); // 92
```

---

## 📖 Chapter 12: Loops with Nested Arrays
Use the outer loop for rows and the inner loop for items in each row:
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}

console.log(sum); // 21
```

> [!TIP]
> Use `matrix[i].length` for the inner loop so rows of different sizes work correctly.

---

## 📖 Chapter 13: `for-of` Loops
`for-of` gives you each **value** directly, with no index to manage. It works on arrays and strings.
```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let char of "JS") {
  console.log(char); // J, then S
}
```

---

## 📖 Chapter 14: Nested `for-of` Loop
```javascript
let teams = [
  ["Riya", "Aman"],
  ["Dia", "Ben", "Kabir"],
];

for (let team of teams) {
  for (let member of team) {
    console.log(member);
  }
}
```

---

## 📖 Chapter 15: Todo App (Only JS)
This project combines loops, conditionals, arrays, and prompts. Open `15_todo_app.html` in a browser.

| Command | Action |
|---|---|
| `list` | Shows all tasks with their indexes |
| `add` | Adds a task with `push()` |
| `delete` | Removes a task by index with `splice()` |
| `quit` | Exits the app |

The app runs inside a `while (true)` loop:
```javascript
let todo = [];

while (true) {
  let request = prompt("Enter a command: list, add, delete, quit");

  if (request === null) {
    break;
  }

  request = request.trim().toLowerCase();

  if (request === "quit") {
    break;
  }
}
```

The delete command checks the input before changing the array:
```javascript
let input = prompt("Enter the task index to delete:");
let index = Number(input);

if (input !== null && input.trim() !== "" && Number.isInteger(index) && index >= 0 && index < todo.length) {
  let deleted = todo.splice(index, 1);
  alert(`Deleted: ${deleted[0]}`);
} else {
  alert("Invalid index.");
}
```

> [!NOTE]
> Tasks are stored in a variable, so they disappear when the page is refreshed.

---

## 📖 Chapter 16: Assignment Questions
Solutions are in `16_assignment.js`.

### Q1. Delete all occurrences of `num` from an array
For `[1, 2, 3, 4, 5, 6, 2, 3]` and `num = 2`, the result is `[1, 3, 4, 5, 6, 3]`.
```javascript
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === num) {
    arr.splice(i, 1);
  }
}
```

> [!WARNING]
> Loop **backward** when removing items. In a forward loop, `splice()` shifts the next item into the current index, so two matching neighbors like `[2, 2]` would leave one behind.

### Q2. Count the digits in a number
For `287152`, the count is `6`.
```javascript
let count = 1;
let remaining = Math.floor(number / 10);

while (remaining > 0) {
  count++;
  remaining = Math.floor(remaining / 10);
}
```

Starting `count` at `1` makes the number `0` correctly count as one digit.

### Q3. Find the sum of the digits
For `287152`, the sum is `2 + 8 + 7 + 1 + 5 + 2 = 25`.
```javascript
let sum = 0;
let digits = number;

while (digits > 0) {
  sum += digits % 10;
  digits = Math.floor(digits / 10);
}
```

*   `digits % 10` reads the last digit.
*   `Math.floor(digits / 10)` removes the last digit.

### Q4. Print the factorial of `n`
```javascript
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
```

For `n = 7`, the result is `5040`. For `n = 0`, the loop never runs, so the result stays `1`.

> [!NOTE]
> Results are exact only up to `18!`. Larger factorials exceed JavaScript's safe integer limit and lose precision.

### Q5. Find the largest number in an array of positive numbers
```javascript
let largest = positives[0];

for (let value of positives) {
  if (value > largest) {
    largest = value;
  }
}
```

---

## 📊 Comparison Table: Loop Types

| Feature | `for` | `while` | `for-of` |
|---|---|---|---|
| **Best for** | A known number of iterations | An unknown number of iterations | Reading every value |
| **Gives an index** | ✅ Yes | ⚠️ Manual | ❌ No |
| **Can go backward or skip** | ✅ Yes | ✅ Yes | ❌ No |
| **Supports `break`** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Works on strings and arrays** | ✅ Yes | ✅ Yes | ✅ Yes |
