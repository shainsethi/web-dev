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
