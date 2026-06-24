# JavaScript Fundamentals (Part 1 Study Guide)

This study guide explains the basic concepts of JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: Using the Console
The console is a tool built into your browser and terminal environment (such as Node.js) used to inspect values, print variables, and debug code.
*   `console.log("Welcome to JavaScript!");` - Prints standard logs to the screen.
*   `console.warn("This is a warning!");` - Prints warning messages (usually highlighted in yellow).
*   `console.error("This is an error!");` - Prints error logs (usually highlighted in red).
*   `console.table(["HTML", "CSS", "JS"]);` - Renders arrays or object lists in a clean table format.

---

## 📖 Chapter 2: Running Code on REPL
REPL stands for **Read-Eval-Print Loop**. It is a command-line environment where you can run JavaScript statements interactively.
*   **Read**: The environment reads the code you type.
*   **Eval**: It evaluates (executes) the code.
*   **Print**: It prints the output value of the evaluation.
*   **Loop**: It loops back to the command prompt and waits for your next input.

To open the REPL, run the `node` command in your terminal:
```bash
node
```
Once inside, you can type lines of JavaScript directly and see outputs instantly. Press `Ctrl+C` twice to exit the REPL shell.

---

## 📖 Chapter 3: Dynamic Typing & Case Sensitivity

### 1. Case Sensitivity
JavaScript is case-sensitive. Variable names, functions, and keywords must maintain exact letter casing.
*   `let myVar = 10;`
*   `let myvar = 20;`
*   Here, `myVar` and `myvar` are recognized as **two separate variables** in memory because of the capital "V".

### 2. Dynamic Typing
JavaScript is dynamically typed. This means you do not have to declare a variable's data type when creating it, and a single variable can change its type during execution.
```javascript
let myVar = 10;                           // myVar is currently a 'number'
myVar = "JavaScript is dynamically typed!"; // myVar is now reassigned to a 'string'
```

---

## 📖 Chapter 4: The 7 Data Types in JS
JavaScript has 7 primitive data types:

1.  **Number**: Represents both integer and decimal values (e.g. `42`, `3.14`).
2.  **Boolean**: Represents a logical state; can only be `true` or `false`.
3.  **String**: Represents text content wrapped in quotes (e.g. `"Hello"`).
4.  **Undefined**: The value assigned to a variable that has been declared but not yet initialized (e.g. `let score;`).
5.  **Null**: Represents an intentional, explicit empty or non-existent value (e.g. `let emptyVal = null;`).
6.  **Bigint**: Used to store integers larger than JavaScript's safe limit ($2^{53}-1$). Created by adding `n` to the end of a number (e.g. `9007199254740991n`).
7.  **Symbol**: A unique, immutable value used as identifier keys for object properties (e.g. `Symbol("unique")`).

---

## 📖 Chapter 5: Types of Numbers
JavaScript does not separate numbers into integers, floats, or doubles. Instead, all numbers belong to the same **Number** type:
*   **Integers**: Whole numbers (e.g. `10`).
*   **Decimals (Floats)**: Numbers containing decimal points (e.g. `3.14`).
*   **Negative numbers**: Values preceded by a minus sign (e.g. `-5`).

---

## 📖 Chapter 6: Types of Operations
JavaScript supports standard mathematical operators to perform calculations:
*   `+` (Addition): e.g. `10 + 3` yields `13`.
*   `-` (Subtraction): e.g. `10 - 3` yields `7`.
*   `*` (Multiplication): e.g. `10 * 3` yields `30`.
*   `/` (Division): e.g. `10 / 3` yields `3.333...`.
*   `%` (Modulo / Remainder): Returns the remainder of division. e.g. `10 % 3` yields `1`.
*   `**` (Exponentiation): Calculates power values. e.g. `10 ** 3` represents $10^3$ which yields `1000`.

---

## 📖 Chapter 7: NaN (Not a Number)
`NaN` is a special numeric property in JavaScript representing a value that is mathematically invalid or **Not-a-Number**.
*   It occurs when you attempt an invalid arithmetic operation, such as multiplying a string word by a number:
    ```javascript
    let result = "abc" * 2; // Renders: NaN
    ```
*   Even though it represents an invalid calculation, the data type of `NaN` is still a number:
    ```javascript
    typeof NaN; // Returns: 'number'
    ```

---

## 📖 Chapter 8: Booleans
A **Boolean** is a primitive data type that holds one of two literal values: `true` or `false`.
*   Commonly used to store flags and control branching.
*   Example:
    ```javascript
    let myBool = false;
    ```
*   You can invert a boolean using the logical NOT (`!`) operator:
    ```javascript
    !myBool; // Returns: true
    ```

---

## 📖 Chapter 9: Standard Boolean to Number Conversions
You can convert Booleans into numbers (`true` becomes `1`, and `false` becomes `0`) using standard coercion methods:

### 1. Direct Assignment
Assigning a boolean directly maintains its boolean type:
```javascript
let myBool = false;
let myInt = myBool; // myInt is false (type is still 'boolean')
```

### 2. Unary Plus Operator (`+`)
Prepending a variable with the `+` operator coerces it into a number value:
```javascript
let myBool = false;
let myInt = +myBool; // myInt is 0 (type is 'number')
```

### 3. The `Number()` Constructor
Explicitly converts a value into a number.
```javascript
let myInt = Number(false); // myInt is 0 (type is 'number')
```

> [!WARNING]
> **Avoid using `Numeric()`**: JavaScript does **not** have a built-in function named `Numeric()`. Calling `Numeric(false)` will throw a `ReferenceError: Numeric is not defined`. Always use the standard `Number()` function instead!

---

## 📖 Chapter 10: Bitwise Conversions
You can also convert Booleans to numbers using the double bitwise NOT operator (`~~`):
```javascript
let myBool = false;
let myInt = ~~myBool; // myInt is 0
```
*   **How it works**: Bitwise operators convert their operands to 32-bit signed integers during evaluation. The first `~` inverts the bits of `false` (which converts to `0`, yielding `-1`), and the second `~` inverts it back (yielding `0`).

---

## 📖 Chapter 11: Type Checking (`typeof`)
The `typeof` operator is used to check the data type of a variable or value. It returns a string representing the type.

Using our variables from the previous chapters:
*   `typeof myInt;` – Returns `'number'` (since it holds `0`).
*   `typeof myBool;` – Returns `'boolean'` (since it holds `false`).
*   `typeof "hello";` – Returns `'string'`.
*   `typeof undefined;` – Returns `'undefined'`.
*   `typeof null;` – Returns `'object'` (this is a historical JavaScript language quirk).

---

## 📖 Chapter 12: Operator Precedence
Operator precedence determines the order in which operators are evaluated in a mathematical expression. Operations with higher precedence are executed first.

The precedence order (from highest to lowest) is:
1.  **Grouping `()`**: Expressions inside parentheses are evaluated first.
2.  **Exponentiation `**`**: Power calculations.
3.  **Multiplication `*`, Division `/`, Modulo `%`**: Evaluated left-to-right.
4.  **Addition `+`, Subtraction `-`**: Evaluated last, left-to-right.

### Precedence Example Trace:
```javascript
let result = (2 + 3) * 5 ** 2 - 10 / 2;
```
*   **Step 1 (Parentheses)**: `(2 + 3)` evaluates to `5`.
    *   Expression becomes: `5 * 5 ** 2 - 10 / 2`
*   **Step 2 (Exponentiation)**: `5 ** 2` evaluates to `25`.
    *   Expression becomes: `5 * 25 - 10 / 2`
*   **Step 3 (Multiplication & Division)**:
    *   `5 * 25` evaluates to `125`.
    *   `10 / 2` evaluates to `5`.
    *   Expression becomes: `125 - 5`
*   **Step 4 (Subtraction)**: `125 - 5` evaluates to `120`.
*   **Final Output**: `result` holds `120`.

---

## 📖 Chapter 13: Variables – `var`, `let`, and `const`
JavaScript offers three ways to declare variables: `var`, `let`, and `const`. Understanding their differences is essential to writing predictable, bug-free code.

### 1. Declaring Variables with `var`
`var` is the original way to declare variables in JavaScript (ES5 and earlier).
```javascript
var score = 100;
score = 200;       // ✅ Reassignment is allowed
var score = 300;   // ✅ Re-declaration is also allowed
```

### 2. Declaring Variables with `let`
`let` was introduced in ES6 (2015) and is the modern way to declare variables whose value may change.
```javascript
let age = 25;
age = 30;          // ✅ Reassignment is allowed
// let age = 35;   // ❌ SyntaxError: Re-declaration is NOT allowed in the same scope
```

### 3. Declaring Variables with `const`
`const` declares a **constant** – a variable that cannot be reassigned after its initial value is set.
```javascript
const PI = 3.14159;
// PI = 3.14;      // ❌ TypeError: Assignment to constant variable
// const PI = 3;   // ❌ SyntaxError: Re-declaration is NOT allowed
```

> [!IMPORTANT]
> `const` prevents **reassignment**, not **mutation**. Objects and arrays declared with `const` can still have their properties or elements modified:
> ```javascript
> const user = { name: "Shain" };
> user.name = "Updated";  // ✅ This works – you're mutating, not reassigning
> // user = {};            // ❌ TypeError – you cannot reassign the variable itself
> ```

### 4. Declaring Without a Keyword
If you assign a value to a variable name **without** using `var`, `let`, or `const`, JavaScript creates it as a **global variable** (attached to the `window` object in browsers):
```javascript
function example() {
  leakedVar = "I am global now!"; // ⚠️ No keyword used
}
example();
console.log(leakedVar); // ✅ Accessible everywhere – dangerous!
```

> [!WARNING]
> **Never omit the keyword!** Implicit globals are a major source of bugs. Use `"use strict"` mode to catch these mistakes (see Chapter 16).

---

## 📖 Chapter 14: Scope – Where Variables Live

### 1. `var` is Function-Scoped
`var` ignores block boundaries (`if`, `for`, etc.) and is only limited by the enclosing **function**:
```javascript
function varScope() {
  if (true) {
    var message = "Hello from inside an if block";
  }
  console.log(message); // ✅ Accessible – var leaks out of the block
}
```

### 2. `let` and `const` are Block-Scoped
`let` and `const` are confined to the nearest enclosing `{}` block:
```javascript
function letScope() {
  if (true) {
    let greeting = "Hello";
    console.log(greeting); // ✅ Accessible inside the block
  }
  // console.log(greeting); // ❌ ReferenceError: greeting is not defined
}
```

### 3. No Keyword = Global Scope
As covered above, omitting the keyword entirely makes the variable global, which is almost always unintended and harmful.

---

## 📖 Chapter 15: Hoisting, Function Hoisting & the Temporal Dead Zone (TDZ)

### 1. What is Hoisting?
**Hoisting** is JavaScript's default behavior of moving variable and function **declarations** to the top of their scope during the compilation phase, **before** the code runs.

### 2. `var` Hoisting
`var` declarations are hoisted and initialized with `undefined`:
```javascript
console.log(hoistedVar); // undefined (no error, but no value yet!)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // "I am hoisted"
```
Internally, JavaScript treats the above as:
```javascript
var hoistedVar = undefined;       // Declaration hoisted to the top
console.log(hoistedVar);          // undefined
hoistedVar = "I am hoisted";      // Assignment stays in place
console.log(hoistedVar);          // "I am hoisted"
```

### 3. `let` and `const` Hoisting – The Temporal Dead Zone
`let` and `const` are also hoisted, but they are **not initialized**. Accessing them before their declaration line throws a `ReferenceError`. The region between the start of the scope and the declaration line is called the **Temporal Dead Zone (TDZ)**:
```javascript
// --- TDZ starts for hoistedLet ---
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Safe now";
// --- TDZ ends ---
console.log(hoistedLet); // ✅ "Safe now"
```

### 4. Function Declaration Hoisting
Function declarations are **fully hoisted** – both the name and the entire function body are moved to the top. You can call them before they appear in the code:
```javascript
console.log(greet()); // ✅ "Hello!" – works before the declaration
function greet() {
  return "Hello!";
}
```

### 5. Function Expression Hoisting
Function expressions assigned to a variable follow the hoisting rules of that variable's keyword (`var`, `let`, or `const`):
```javascript
// console.log(sayHi()); // ❌ TypeError: sayHi is not a function (var treats it as undefined)
var sayHi = function () {
  return "Hi!";
};
console.log(sayHi()); // ✅ "Hi!"
```

### 6. Browser Console Behavior – Why You See `undefined`
When you type a statement in the browser console (e.g., `let x = 5;`), the console shows `undefined` below it. This is because:
*   The browser console prints the **return value** of the statement you entered.
*   Variable declarations (`let x = 5;`) do not produce a return value – they return `undefined` by default.
*   This is **not** the value of `x`. If you then type `x`, it will correctly show `5`.

```
> let x = 5;
← undefined       // ← This is the statement's return value, NOT the value of x
> x
← 5               // ← This is the actual value stored in x
```

> [!NOTE]
> This is purely a console display behavior. It does not affect how your code runs in a script file.

---

## 📖 Chapter 16: `"use strict"` Mode
Adding `"use strict";` at the top of a script or function enables **strict mode**, which catches common coding mistakes and unsafe actions:
```javascript
"use strict";
// strictVar = "oops"; // ❌ ReferenceError: strictVar is not defined
let strictVar = "correct"; // ✅ Must declare with a keyword
```

Key benefits of strict mode:
*   **Prevents accidental globals**: Assigning to an undeclared variable throws a `ReferenceError` instead of silently creating a global.
*   **Disallows duplicates**: Duplicate function parameter names throw a `SyntaxError`.
*   **Makes `this` safer**: In functions not called as methods, `this` is `undefined` instead of the global object.

> [!TIP]
> ES6 modules (`import` / `export`) automatically run in strict mode, so you don't need to add `"use strict";` in module files.

---

## 📊 Comparison Table: `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Introduced in** | ES1 (1997) | ES6 (2015) | ES6 (2015) |
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| **Re-declaration (same scope)** | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| **Hoisted?** | ✅ Yes (initialized as `undefined`) | ✅ Yes (but **not** initialized) | ✅ Yes (but **not** initialized) |
| **Temporal Dead Zone (TDZ)** | ❌ No | ✅ Yes | ✅ Yes |
| **Must be initialized at declaration** | ❌ No (`var x;` is valid) | ❌ No (`let x;` is valid) | ✅ Yes (`const x;` is a SyntaxError) |
| **Attaches to `window` (global scope)** | ✅ Yes | ❌ No | ❌ No |
| **Best used for** | Legacy code | Variables that change | Constants & fixed references |

### Function Hoisting Summary

| Declaration Type | Hoisted? | Usable Before Declaration? |
|---|---|---|
| `function greet() {}` (declaration) | ✅ Fully hoisted (name + body) | ✅ Yes |
| `var greet = function() {}` (expression) | ⚠️ Name hoisted as `undefined` | ❌ No (`TypeError`) |
| `let greet = function() {}` (expression) | ⚠️ Hoisted but in TDZ | ❌ No (`ReferenceError`) |
| `const greet = function() {}` (expression) | ⚠️ Hoisted but in TDZ | ❌ No (`ReferenceError`) |
| `const greet = () => {}` (arrow) | ⚠️ Hoisted but in TDZ | ❌ No (`ReferenceError`) |

