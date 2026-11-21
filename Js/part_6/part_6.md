# JavaScript Fundamentals (Part 6 Study Guide)

This study guide explains functions, scope, and higher-order functions in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: What are Functions?
A **function** is a reusable block of code that runs when you call it.
```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello(); // Calls the function
sayHello(); // Runs it again
```

*   **Define** the function once with the `function` keyword.
*   **Call** it by writing its name followed by `()`.
*   Without `()`, you refer to the function but do not run it.

---

## 📖 Chapter 2: Practice Question 1
Solution is in `02_practice_1.js`.

Write a function that prints a short poem.

---

## 📖 Chapter 3: Practice Question 2
Solution is in `03_practice_2.js`.

Write a function that rolls a dice and prints a number from 1 to 6.

---

## 📖 Chapter 4: Functions with Arguments
**Parameters** are the names in the function definition. **Arguments** are the values you pass when calling it.
```javascript
function printSum(a, b) {  // a and b are parameters
  console.log(a + b);
}

printSum(2, 3);            // 2 and 3 are arguments
printSum(1, 2, 100);       // 3 (extra arguments are ignored)
printSum(5);               // NaN (b is undefined)
```

A **default parameter** is used when no argument is passed:
```javascript
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

welcome();      // Welcome, Guest!
welcome("Dia"); // Welcome, Dia!
```

---

## 📖 Chapter 5: Practice Question 3
Solution is in `05_practice_3.js`.

Write a function that prints the average of 3 numbers.

---

## 📖 Chapter 6: Practice Question 4
Solution is in `06_practice_4.js`.

Write a function that prints the multiplication table of a number.

---

## 📖 Chapter 7: `return` Keyword
`return` sends a value back to the caller and **immediately ends** the function.
```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);  // 5
sum(2, 3) * 10;          // 50
sum(sum(1, 2), 3);       // 6
```

A function with no `return` gives back `undefined`.

Early returns can replace an `else`:
```javascript
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}
```

> [!IMPORTANT]
> `console.log()` only **displays** a value. `return` **gives it back** so other code can use it.

---

## 📖 Chapter 8: Practice Question 5
Solution is in `08_practice_5.js`.

Write a function that returns the sum of the numbers from 1 to `n`.

---

## 📖 Chapter 9: Practice Question 6
Solution is in `09_practice_6.js`.

Write a function that joins an array of strings into one string.

---

## 📖 Chapter 10: What is Scope?
**Scope** decides where a variable can be accessed.
```javascript
let course = "JavaScript"; // Global scope

function showCourse() {
  let topic = "Functions"; // Function scope
  console.log(course);     // ✅ Global is accessible
  console.log(topic);      // ✅ Local is accessible
}

// console.log(topic);     // ❌ ReferenceError
```

A local variable with the same name **shadows** the global one inside that function:
```javascript
function shadowCourse() {
  let course = "Local course";
  console.log(course); // Local course
}
```

---

## 📖 Chapter 11: Block Scope
A **block** is code inside `{}`. `let` and `const` stay inside it, but `var` does not:
```javascript
{
  let blockLet = "let";
  const blockConst = "const";
  var blockVar = "var";
}

// console.log(blockLet);   // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError
console.log(blockVar);      // ✅ "var"
```

---

## 📖 Chapter 12: Lexical Scope
An inner function can access variables from the functions around it:
```javascript
function outer() {
  let outerValue = "from outer";

  function inner() {
    console.log(outerValue); // ✅ Accessible
  }

  inner();
}
```

The outer function **cannot** access the inner function's variables.

Scope depends on where a function is **written**, not where it is called:
```javascript
let value = "global";

function printValue() {
  console.log(value);
}

function run() {
  let value = "local";
  printValue(); // global
}

run();
```

---

## 📖 Chapter 13: Practice Question 7
Solution is in `13_practice_7.js`.

Predict the output before running the code:
```javascript
let greeting = "hello";

function changeGreeting() {
  let greeting = "namaste";
  console.log(greeting);

  function innerGreeting() {
    console.log(greeting);
  }

  innerGreeting();
}

console.log(greeting);
changeGreeting();
console.log(greeting);
```

**Answer**: `hello`, `namaste`, `namaste`, `hello`.

---

## 📖 Chapter 14: Function Expressions
A function can be stored in a variable. It usually has no name of its own:
```javascript
const square = function (n) {
  return n * n;
};

square(4); // 16
```

> [!WARNING]
> Function expressions cannot be called before they are defined. A `const` expression throws a `ReferenceError` because it is still in the Temporal Dead Zone.

---

## 📖 Chapter 15: Higher Order Functions
A **higher order function** takes a function as an argument, returns a function, or both. A function passed as an argument is called a **callback**.
```javascript
function applyTo(number, operation) {
  return operation(number);
}

const square = function (n) {
  return n * n;
};

applyTo(5, square); // 25
```

> [!TIP]
> Pass `square`, not `square()`. Adding parentheses runs it immediately and passes its result instead.

---

## 📖 Chapter 16: Higher Order Functions (Returns)
A function can create and return another function:
```javascript
function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(5); // 10
triple(5); // 15
```

The returned function still remembers `factor` after `makeMultiplier` has finished. This is called a **closure**.

---

## 📖 Chapter 17: Methods
A **method** is a function stored as an object property:
```javascript
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

calculator.add(6, 2);      // 8
calculator.subtract(6, 2); // 4
```

`subtract(a, b) {}` is the **shorthand** method syntax. Built-ins like `Math.max()`, `"riya".toUpperCase()`, and `[1, 2].includes(2)` are methods too.

---

## 📖 Chapter 18: Assignment Questions
Solutions are in `18_assignment.js`.

### Q1. Return array elements larger than a number
```javascript
function getLargerElements(arr, num) {
  let result = [];

  for (let element of arr) {
    if (element > num) {
      result.push(element);
    }
  }

  return result;
}

getLargerElements([1, 8, 3, 12, 5], 4); // [ 8, 12, 5 ]
```

### Q2. Extract unique characters from a string
```javascript
function getUniqueCharacters(str) {
  let result = "";

  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

getUniqueCharacters("abcdabcdefgggh"); // "abcdefgh"
```

### Q3. Return the longest country name
```javascript
function getLongestCountry(countries) {
  let longest = "";

  for (let country of countries) {
    if (country.length > longest.length) {
      longest = country;
    }
  }

  return longest;
}
```

If two names have the same length, the first one is returned.

### Q4. Count the vowels in a string
```javascript
function countVowels(str) {
  let count = 0;

  for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

countVowels("JavaScript Is Awesome"); // 8
```

---

## 📊 Comparison Table: Function Types

| Feature | Declaration | Expression | Method |
|---|---|---|---|
| **Syntax** | `function f() {}` | `const f = function () {};` | `obj = { f() {} }` |
| **Callable before definition** | ✅ Yes | ❌ No | ❌ No |
| **Called with** | `f()` | `f()` | `obj.f()` |

### Scope Summary

| Keyword | Function Scope | Block Scope | Accessible Before Declaration |
|---|---|---|---|
| `var` | ✅ Yes | ❌ No | ⚠️ Yes, as `undefined` |
| `let` | ✅ Yes | ✅ Yes | ❌ No |
| `const` | ✅ Yes | ✅ Yes | ❌ No |
