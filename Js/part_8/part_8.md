# JavaScript Fundamentals (Part 8 Study Guide)

This study guide explains modern array methods, spread, rest, and destructuring in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: Array Methods (`forEach`)
Array methods accept a **callback** that runs for each item. `forEach()` is the simplest one:
```javascript
const numbers = [1, 2, 3];

numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});
```

`forEach()` always returns `undefined`, so use it for actions such as printing.

---

## 📖 Chapter 2: Map & Filter
*   `map()` returns a new array with each item **transformed**.
*   `filter()` returns a new array with only the items that **pass a test**.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

numbers.map(number => number * 2);         // [ 2, 4, 6, 8, 10, 12 ]
numbers.filter(number => number % 2 === 0); // [ 2, 4, 6 ]
```

Both leave the original array unchanged.

---

## 📖 Chapter 3: Every & Some
*   `every()` returns `true` if **all** items pass.
*   `some()` returns `true` if **at least one** item passes.

```javascript
const numbers = [2, 4, 6, 7];

numbers.every(number => number % 2 === 0); // false
numbers.some(number => number % 2 === 0);  // true
```

> [!NOTE]
> On an empty array, `every()` returns `true` and `some()` returns `false`.

---

## 📖 Chapter 4: Reduce Method
`reduce()` combines an array into a **single value**.
```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, number) => total + number, 0);
```

| Step | `total` | `number` | Returned |
|---|---|---|---|
| 1 | 0 | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | 10 |

> [!WARNING]
> Always pass an initial value when the array could be empty. `[].reduce(fn)` throws a `TypeError`.

---

## 📖 Chapter 5: Maximum in Array
```javascript
const numbers = [12, 45, 7, 30];

const largest = numbers.reduce((max, number) => {
  if (number > max) {
    return number;
  }

  return max;
});

console.log(largest); // 45
```

---

## 📖 Chapter 6: Practice Questions
Solutions are in `06_practice.js`.

1.  Check whether all numbers in an array are multiples of 10.
2.  Find the smallest number using `reduce()`.

---

## 📖 Chapter 7: Default Parameters
A default is used when an argument is missing or `undefined`:
```javascript
function add(a, b = 2) {
  return a + b;
}

add(5);            // 7
add(5, 10);        // 15
add(5, undefined); // 7
add(5, null);      // 5 (null is a real value and becomes 0 in math)
```

> [!TIP]
> Put parameters with defaults **last**. In `function f(a = 2, b)`, calling `f(5)` assigns `5` to `a` and leaves `b` undefined.

---

## 📖 Chapter 8: Spread
Spread (`...`) expands an array or string into individual values:
```javascript
const numbers = [12, 45, 7, 30];

Math.max(numbers);    // NaN
Math.max(...numbers); // 45
console.log(..."JS"); // J S
```

---

## 📖 Chapter 9: Spread (Array Literals)
```javascript
const original = [1, 2, 3];
const copy = [...original];

[...[1, 3], ...[2, 4]]; // [ 1, 3, 2, 4 ]
[0, ...[1, 3], 5];      // [ 0, 1, 3, 5 ]
[..."hello"];           // [ 'h', 'e', 'l', 'l', 'o' ]
```

---

## 📖 Chapter 10: Spread (Object Literals)
```javascript
const user = { name: "Riya", city: "Delhi" };

({ ...user, age: 20 });       // Adds a key
({ ...user, city: "Mumbai" }); // Later value wins
({ ...["a", "b"] });           // { '0': 'a', '1': 'b' }
```

> [!WARNING]
> Spread makes a **shallow copy**. Nested objects and arrays are still shared with the original.

---

## 📖 Chapter 11: Rest
Rest (`...`) collects multiple arguments into an **array**. It must be the last parameter.
```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

sum(1, 2);       // 3
sum(1, 2, 3, 4); // 10
sum();           // 0
```

The older `arguments` object also holds all arguments, but it is not a real array and does not exist in arrow functions.

---

## 📖 Chapter 12: Destructuring (Arrays)
Destructuring unpacks values into variables:
```javascript
const names = ["Riya", "Aman", "Dia", "Ben"];

const [first, second] = names;       // "Riya", "Aman"
const [winner, , third] = names;     // "Riya", "Dia"
const [leader, ...others] = names;   // "Riya", [ 'Aman', 'Dia', 'Ben' ]
const [a, b, c = "default"] = ["x", "y"];
```

It can also swap values:
```javascript
[left, right] = [right, left];
```

---

## 📖 Chapter 13: Destructuring (Objects)
Object destructuring matches by **key name**:
```javascript
const user = {
  username: "riya_codes",
  city: "Delhi",
};

const { username } = user;     // "riya_codes"
const { city: location } = user; // Renames city to location
const { age = 18 } = user;     // Uses a default
```

It also works in function parameters:
```javascript
function printUser({ username, city }) {
  console.log(`${username} lives in ${city}`);
}
```

---

## 📖 Chapter 14: Assignment Questions
Solutions are in `14_assignment.js`.

### Q1. Square and sum the elements, then find the average
```javascript
const numbers = [1, 2, 3, 4];
const squares = numbers.map(number => number * number); // [ 1, 4, 9, 16 ]
const sumOfSquares = squares.reduce((total, number) => total + number, 0); // 30
const average = sumOfSquares / numbers.length; // 7.5
```

### Q2. Add 5 to each element
```javascript
numbers.map(number => number + 5); // [ 6, 7, 8, 9 ]
```

### Q3. Convert words to uppercase
```javascript
words.map(word => word.toUpperCase());
```

### Q4. `doubleAndReturnArgs`
```javascript
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map(value => value * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4); // [ 1, 2, 3, 8, 8 ]
```

### Q5. `mergeObjects`
```javascript
const mergeObjects = (first, second) => ({ ...first, ...second });

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // { a: 1, b: 2, c: 3, d: 4 }
```

If both objects have the same key, the value from the second object is kept.

---

## 📊 Comparison Table: Array Methods

| Method | Returns | Changes Original |
|---|---|---|
| `forEach()` | `undefined` | ❌ No |
| `map()` | New array of the same length | ❌ No |
| `filter()` | New array of matching items | ❌ No |
| `every()` | `true` or `false` | ❌ No |
| `some()` | `true` or `false` | ❌ No |
| `reduce()` | A single value | ❌ No |

### Spread vs Rest

| Feature | Spread | Rest |
|---|---|---|
| **Syntax** | `...value` | `...name` |
| **Action** | Expands values | Collects values |
| **Used in** | Calls, arrays, and objects | Parameters and destructuring |
