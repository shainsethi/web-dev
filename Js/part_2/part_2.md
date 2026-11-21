# JavaScript Fundamentals (Part 2 Study Guide)

This study guide explains output, operators, comparisons, and decision-making in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: `console.log()`
`console.log()` prints values to the browser console or terminal. It is the quickest way to check what your code is doing.
```javascript
console.log("Hello, JavaScript!"); // Hello, JavaScript!
console.log(1 + 2);                // 3
```

You can print several values by separating them with commas:
```javascript
let item = "Pen";
let price = 10;
console.log("Item:", item, "Price:", price); // Item: Pen Price: 10
```

*   **Commas** print each value separated by a space and keep its type.
*   **The `+` operator** joins strings into one string before printing.

---

## 📖 Chapter 2: Linking a JS File
Keep JavaScript in its own `.js` file and connect it to HTML with the `<script>` tag:
```html
<body>
  <h1>Linking a JS File</h1>
  <script src="02_linking_js.js"></script>
</body>
```

*   `src` is the path to the JavaScript file.
*   Place the tag just before `</body>` so the HTML loads before the script runs.
*   Open the HTML file in a browser, then press `F12` and choose **Console** to see the output.

> [!WARNING]
> A `<script>` tag with a `src` ignores any code written between its opening and closing tags. Use a separate `<script>` tag for inline code.

---

## 📖 Chapter 3: Template Literals
Template literals are strings written with **backticks** (`` ` ``). They can include variables and expressions using `${}`.
```javascript
let student = "Riya";
let marks = 92;

console.log(`${student} scored ${marks} marks.`); // Riya scored 92 marks.
console.log(`Next target: ${marks + 5}`);         // Next target: 97
```

They also support multiple lines without any special characters:
```javascript
console.log(`Line one
Line two`);
```

> [!TIP]
> `${}` only works inside backticks. In `"${marks}"`, JavaScript prints the characters literally.

---

## 📖 Chapter 4: Operators in JS

### 1. Unary Operators
Increment (`++`) adds 1 and decrement (`--`) subtracts 1.
*   **Post** (`count++`): returns the old value, then updates.
*   **Pre** (`++count`): updates first, then returns the new value.

```javascript
let count = 5;
console.log(count++); // 5
console.log(count);   // 6
console.log(++count); // 7
```

### 2. Assignment Operators

| Operator | Example | Same As |
|---|---|---|
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 4` | `x = x / 4` |
| `%=` | `x %= 4` | `x = x % 4` |
| `**=` | `x **= 3` | `x = x ** 3` |

---

## 📖 Chapter 5: Comparison Operators
Comparison operators compare two values and always return a Boolean.

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `>` | Greater than | `10 > 5` | `true` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `<=` | Less than or equal | `5 <= 10` | `true` |
| `==` | Equal value | `5 == "5"` | `true` |
| `!=` | Not equal value | `5 != "5"` | `false` |
| `===` | Equal value and type | `5 === "5"` | `false` |
| `!==` | Not equal value or type | `5 !== "5"` | `true` |

> [!IMPORTANT]
> `==` converts types before comparing, which can hide bugs. Prefer `===` and `!==`.

---

## 📖 Chapter 6: Comparison for Non-numbers

### 1. Comparing Strings
Strings are compared character by character using their Unicode values:
```javascript
"a" < "b";            // true
"apple" < "banana";   // true
"A" < "a";            // true (uppercase comes first)
"Zebra" < "apple";    // true ("Z" comes before "a")
"10" < "9";           // true ("1" comes before "9")
10 < "9";             // false ("9" is converted to the number 9)
```

### 2. `null` and `undefined`
```javascript
null == undefined;   // true
null === undefined;  // false
null == 0;           // false
null > 0;            // false
null >= 0;           // true (null becomes 0 for >=)
undefined == 0;      // false
undefined >= 0;      // false (undefined becomes NaN)
```

### 3. `NaN`
`NaN` is not equal to anything, including itself. Use `Number.isNaN()` to check for it:
```javascript
NaN == NaN;            // false
Number.isNaN(NaN);     // true
```

---

## 📖 Chapter 7: Conditional Statements
Code normally runs from top to bottom. **Conditional statements** let your program choose which code to run.

JavaScript provides:
*   `if`: runs code when a condition is true.
*   `else if`: checks another condition.
*   `else`: runs when no earlier condition matched.
*   `switch`: matches one value against several cases.

---

## 📖 Chapter 8: `if` Statement
The block runs only when the condition is true:
```javascript
let age = 21;

if (age >= 18) {
  console.log("You can vote"); // Runs
}

if (age >= 60) {
  console.log("You are a senior citizen"); // Skipped
}
```

Separate `if` statements are all checked independently.

---

## 📖 Chapter 9: Practice Questions (`if`)
Solutions are in `09_practice_if.js`.

1.  Print `Pass` if `marks` is 33 or more.
2.  Print a message if `number` is divisible by 5.
3.  Print `It is hot today` if `temperature` is above 35.

---

## 📖 Chapter 10: `else if` Statement
`else if` checks another condition only when the earlier ones were false. JavaScript stops at the **first** true condition.
```javascript
let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B"); // Runs, and the chain stops here
} else if (marks >= 50) {
  console.log("Grade C");
}
```

> [!WARNING]
> **Order matters.** If you check `marks >= 50` first, a score of 95 matches it and never reaches the `marks >= 90` branch. Check the strictest condition first.

---

## 📖 Chapter 11: `else` Statement
`else` has no condition. It runs when everything before it was false:
```javascript
let age = 15;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet"); // Runs
}
```

---

## 📖 Chapter 12: Practice Questions (`else`)
Solutions are in `12_practice_else.js`.

1.  Check whether a number is even or odd.
2.  Find the largest of three numbers.
3.  Print a grade: A (90+), B (75+), C (50+), otherwise F.

---

## 📖 Chapter 13: Nested `if-else`
An `if` statement can be placed inside another one. The inner condition is checked only if the outer block runs:
```javascript
let marks = 85;

if (marks >= 33) {
  console.log("Passed");

  if (marks >= 80) {
    console.log("With distinction");
  } else {
    console.log("Without distinction");
  }
} else {
  console.log("Failed");
}
```

---

## 📖 Chapter 14: Logical Operators
Logical operators combine or invert conditions.

| Operator | Name | Result is true when |
|---|---|---|
| `&&` | AND | **Both** sides are true |
| `\|\|` | OR | **At least one** side is true |
| `!` | NOT | The value is false |

```javascript
let age = 25;
let hasTicket = true;
let isMember = false;

age >= 18 && hasTicket; // true
hasTicket || isMember;  // true
!isMember;              // true
```

### Precedence
`!` runs first, then `&&`, then `||`. Use parentheses to make your intent clear:
```javascript
true || false && false;   // true
(true || false) && false; // false
```

### Short-Circuiting
JavaScript stops as soon as the result is known, and returns one of the actual values:
```javascript
0 && "never checked"; // 0
1 && "both truthy";   // "both truthy"
"" || "Guest";        // "Guest"
```

---

## 📖 Chapter 15: Practice Questions (Logical Operators)
Solutions are in `15_practice_logical.js`.

1.  Check whether a year is a leap year.
2.  Print whether someone can drive (18 or older and has a license).
3.  Check whether a day is a weekday or the weekend.
4.  Check whether a number is divisible by both 3 and 5.

---

## 📖 Chapter 16: Truthy & Falsy
In a condition, JavaScript converts every value to a Boolean.

**There are exactly 8 falsy values:**
`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

**Everything else is truthy**, including some surprising values:
`"0"`, `"false"`, `" "`, `-1`, `[]`, `{}`

```javascript
let userName = "";

if (userName) {
  console.log(`Welcome, ${userName}`);
} else {
  console.log("Please enter your name"); // Runs because "" is falsy
}
```

---

## 📖 Chapter 17: `switch` Statement
`switch` compares one value against several `case` labels:
```javascript
let color = "yellow";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down"); // Runs
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}
```

*   `break` exits the `switch`. Without it, execution **falls through** into the next case.
*   `default` runs when no case matches.
*   `switch` uses **strict comparison** (`===`), so `"1"` does not match `case 1`.

Cases can share code by stacking them:
```javascript
switch (day) {
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
```

---

## 📖 Chapter 18: Practice Questions (`switch`)
Solutions are in `18_practice_switch.js`.

1.  Print the day name for a number from 1 to 7.
2.  Print the number of days in a given month.
3.  Build a calculator for `+`, `-`, `*`, and `/`, handling division by zero.

---

## 📖 Chapter 19: Alerts & Prompts
These popups are **browser features**, so open `19_alerts_prompts.html` in a browser. They do not work in plain Node.js files.

*   `alert("message")`: shows a message.
*   `prompt("question")`: asks for input and returns it.
*   `console.warn()` and `console.error()`: print highlighted messages to the console.

```javascript
let userName = prompt("Enter your name:");
alert(`Hello ${userName}!`);
```

> [!IMPORTANT]
> `prompt()` returns a **string**, or `null` if the user presses Cancel. Convert it before doing math:
> ```javascript
> let age = prompt("Enter your age:"); // "20"
> console.log(age + 1);                // "201"
> console.log(Number(age) + 1);        // 21
> ```

---

## 📖 Chapter 20: Assignment Questions
Solutions are in `20_assignment.js`. Q2 uses popups, so open `20_assignment_q2.html` in a browser.

### Q1. Print "good" if a number is divisible by 10, otherwise "bad"
```javascript
if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}
```

### Q2. Read a name and age, then show them in an alert
```javascript
let userName = prompt("Enter your name:");
let age = prompt("Enter your age:");

alert(`${userName} is ${age} years old.`);
```

### Q3. Print the months in a quarter using `switch`
```javascript
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Invalid quarter");
}
```

### Q4. Check for a golden string
A string is golden if it starts with `A` or `a` and its length is greater than 5.
```javascript
(str[0] === "A" || str[0] === "a") && str.length > 5;
```

> [!WARNING]
> The parentheses are required. Without them, `&&` runs first, so any string starting with `A` would count as golden regardless of its length.

### Q5. Find the largest of 3 numbers
```javascript
if (a >= b && a >= c) {
  console.log(a);
} else if (b >= c) {
  console.log(b);
} else {
  console.log(c);
}
```

### Q6 (Bonus). Check whether 2 numbers have the same last digit
`% 10` gives the last digit of a positive whole number. `Math.abs()` removes the minus sign, because `-32 % 10` is `-2`.
```javascript
Math.abs(first) % 10 === Math.abs(second) % 10;
```

---

## 📊 Comparison Table: `if-else` vs `switch`

| Feature | `if-else` | `switch` |
|---|---|---|
| **Best for** | Ranges and combined conditions | One value with many exact matches |
| **Comparison** | Any condition | Strict equality (`===`) |
| **Needs `break`** | ❌ No | ✅ Yes, to stop fall-through |
| **Fallback** | `else` | `default` |

### Equality Summary

| Expression | `==` | `===` |
|---|---|---|
| `5` and `"5"` | ✅ `true` | ❌ `false` |
| `0` and `false` | ✅ `true` | ❌ `false` |
| `null` and `undefined` | ✅ `true` | ❌ `false` |
| `NaN` and `NaN` | ❌ `false` | ❌ `false` |
