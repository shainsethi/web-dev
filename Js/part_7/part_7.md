# JavaScript Fundamentals (Part 7 Study Guide)

This study guide explains `this`, error handling, arrow functions, and timers in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: `this` in JavaScript
Inside a regular function or method, `this` refers to the object that **called** it.
```javascript
const student = {
  name: "Riya",
  english: 90,
  math: 80,
  getAverage() {
    return (this.english + this.math) / 2;
  },
};

student.getAverage(); // 85
```

The value depends on **how** the function is called:
```javascript
const detached = student.getAverage;
detached(); // NaN (no longer called on student)
```

---

## 📖 Chapter 2: Try & Catch
`try...catch` handles errors so the program can keep running.
```javascript
try {
  console.log(missingVariable);
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // missingVariable is not defined
} finally {
  console.log("finally always runs");
}
```

Use `throw` to create your own error:
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
```

---

## 📖 Chapter 3: Arrow Functions
Arrow functions are a shorter way to write function expressions.
```javascript
const add = (a, b) => {
  return a + b;
};

const square = n => {
  return n * n;
};

const sayHello = () => {
  console.log("Hello!");
};
```

Parentheses are optional only when there is **exactly one** parameter.

---

## 📖 Chapter 4: Implicit Return in Arrow Functions
Without `{}`, an arrow function automatically returns its expression:
```javascript
const multiply = (a, b) => a * b;
multiply(3, 4); // 12
```

> [!WARNING]
> To return an object, wrap it in parentheses. Otherwise `{}` is treated as the function body:
> ```javascript
> const makeUser = name => ({ name: name }); // ✅ { name: 'Riya' }
> const broken = () => { value: 1 };         // ❌ Returns undefined
> ```

---

## 📖 Chapter 5: `setTimeout()`
`setTimeout(callback, delay)` runs a function **once** after a delay in milliseconds.
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Runs after 200 milliseconds");
}, 200);

console.log("End");
```

The output is `Start`, `End`, then the timer message, because JavaScript does not wait for the timer.

Use `clearTimeout(id)` to cancel a timer before it runs.

---

## 📖 Chapter 6: `setInterval()`
`setInterval(callback, delay)` runs a function **repeatedly** until it is stopped.
```javascript
let count = 0;

const timer = setInterval(() => {
  count++;
  console.log("Tick:", count);

  if (count === 3) {
    clearInterval(timer);
  }
}, 100);
```

---

## 📖 Chapter 7: `this` with Arrow Functions
Arrow functions do **not** have their own `this`. They use `this` from the place where they are written.
```javascript
const student = {
  name: "Riya",
  regularMethod() {
    return this.name;  // "Riya"
  },
  arrowMethod: () => {
    return this.name;  // undefined
  },
  arrowInsideTimer() {
    setTimeout(() => {
      console.log(this.name); // "Riya"
    }, 100);
  },
};
```

> [!TIP]
> Use regular methods on objects, and arrow functions for callbacks inside those methods.

---

## 📖 Chapter 8: Practice Questions
Solutions are in `08_practice.js`.

1.  Write an arrow function that returns the square of a number.
2.  Print `Hello World` 3 times using `setInterval`, then stop it.

---

## 📖 Chapter 9: Assignment Questions
Solutions are in `09_assignment.js`. Q4's browser version is in `09_assignment_q4.html`.

### Q1. `arrayAverage`
```javascript
const arrayAverage = numbers => {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total / numbers.length;
};

arrayAverage([2, 4, 6, 8]); // 5
```

### Q2. `isEven`
```javascript
const isEven = number => number % 2 === 0;
```

### Q3. What is the output?
```javascript
const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);
```

**Answer**: `undefined`. Only the function is passed to `setTimeout`, so it is no longer called on `object` and `this.message` does not exist.

To print the message, keep the object in the call:
```javascript
setTimeout(() => object.logMessage(), 1000);
```

### Q4. What is the output?
```javascript
let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2);
```

**Answer**: `0` in a browser page with no iframes, and `undefined` in a Node file.

*   `callback()` is a plain call, so `this` is the global object rather than `object`.
*   `let length` does **not** create a property on `window`, so `4` is not printed.
*   `window.length` is a built-in property that counts the page's frames, which is `0` here.

---

## 📊 Comparison Table: Regular vs Arrow Functions

| Feature | Regular Function | Arrow Function |
|---|---|---|
| **Own `this`** | ✅ Yes, set by the caller | ❌ No, uses the surrounding `this` |
| **Implicit return** | ❌ No | ✅ Yes, without `{}` |
| **Good as object method** | ✅ Yes | ❌ No |
| **Good as callback in a method** | ⚠️ Loses `this` | ✅ Yes |

### Timer Summary

| Function | Runs | Stop With |
|---|---|---|
| `setTimeout()` | Once | `clearTimeout(id)` |
| `setInterval()` | Repeatedly | `clearInterval(id)` |
