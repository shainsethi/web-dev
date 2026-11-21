# JavaScript Fundamentals (Part 5 Study Guide)

This study guide explains objects, the `Math` object, and random numbers in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: Object Literals
An **object** stores related data as **key-value pairs**. Arrays find values by position, while objects find them by name.
```javascript
let studentArray = ["Riya", 20, 92];

let student = {
  name: "Riya",
  age: 20,
  marks: 92,
};

studentArray[2]; // 92 (what does position 2 mean?)
student.marks;   // 92 (the name explains it)
```

*   **Key**: the name of the property, such as `marks`.
*   **Value**: the data stored in it, such as `92`.

---

## 📖 Chapter 2: Creating Object Literals
Objects are written with `{}`. Values can be of any type:
```javascript
let empty = {};

let item = {
  title: "Notebook",
  price: 120,
  inStock: true,
  colors: ["red", "blue"],
  discount: null,
};
```

Keys that contain spaces must be wrapped in quotes:
```javascript
let profile = {
  "full name": "Riya Sharma",
  city: "Delhi",
};
```

---

## 📖 Chapter 3: Creating a Post
Objects are a natural way to model real-world data, such as a social media post:
```javascript
const post = {
  username: "riya_codes",
  content: "Learning JavaScript objects today!",
  likes: 150,
  reposts: 12,
  tags: ["javascript", "webdev"],
};
```

---

## 📖 Chapter 4: Get Values
There are two ways to read a value:
```javascript
const student = {
  name: "Riya",
  age: 20,
  "full name": "Riya Sharma",
};

student.name;         // "Riya" (dot notation)
student["age"];       // 20 (bracket notation)
student["full name"]; // "Riya Sharma"
student.city;         // undefined (key does not exist)
```

Use brackets when the key is stored in a variable:
```javascript
let key = "age";

student[key]; // 20
student.key;  // undefined (looks for a key literally named "key")
```

---

## 📖 Chapter 5: Conversion in Get Values
JavaScript automatically converts object keys to **strings**:
```javascript
const values = {
  1: "number key",
  true: "boolean key",
  null: "null key",
  undefined: "undefined key",
};

values[1];         // "number key"
values["1"];       // "number key"
values[true];      // "boolean key"
values[null];      // "null key"
values[undefined]; // "undefined key"

Object.keys(values); // [ '1', 'true', 'null', 'undefined' ]
```

> [!WARNING]
> `values.1` is a `SyntaxError`. Keys that are not valid identifiers must use bracket notation.

---

## 📖 Chapter 6: Add / Update Values
```javascript
const student = {
  name: "Riya",
  age: 20,
  marks: 92,
};

student.city = "Delhi";  // ✅ Adds a new key
student.age = 21;        // ✅ Updates a value
student["marks"] = "A";  // ✅ Updates a value and its type
delete student.marks;    // ✅ Removes a key
// student = {};         // ❌ TypeError: Assignment to constant variable
```

> [!IMPORTANT]
> Like arrays, a `const` object can have its contents changed. Only reassigning the variable is blocked.

---

## 📖 Chapter 7: Nested Objects
An object can store other objects:
```javascript
const classInfo = {
  riya: { grade: "A", city: "Delhi" },
  aman: { grade: "B", city: "Pune" },
};

classInfo.riya.city;         // "Delhi"
classInfo["aman"]["grade"];  // "B"
classInfo.aman.city = "Mumbai";
```

---

## 📖 Chapter 8: Array of Objects
This is the most common shape for real-world data, such as lists of users or products:
```javascript
const students = [
  { name: "Riya", marks: 92 },
  { name: "Aman", marks: 78 },
  { name: "Dia", marks: 85 },
];

students[1].name;     // "Aman"
students[2].marks = 88;

for (let student of students) {
  console.log(`${student.name}: ${student.marks}`);
}
```

---

## 📖 Chapter 9: Math Object
`Math` is a built-in object with mathematical constants and methods.

| Member | Purpose | Example | Result |
|---|---|---|---|
| `Math.PI` | Value of π | `Math.PI` | `3.141592653589793` |
| `Math.E` | Euler's number | `Math.E` | `2.718281828459045` |
| `Math.abs()` | Absolute value | `Math.abs(-7)` | `7` |
| `Math.pow()` | Power | `Math.pow(2, 3)` | `8` |
| `Math.floor()` | Round down | `Math.floor(2.9)` | `2` |
| `Math.ceil()` | Round up | `Math.ceil(2.1)` | `3` |
| `Math.round()` | Round to nearest | `Math.round(2.5)` | `3` |
| `Math.max()` | Largest value | `Math.max(4, 9, 2)` | `9` |
| `Math.min()` | Smallest value | `Math.min(4, 9, 2)` | `2` |
| `Math.random()` | Random decimal | `Math.random()` | From `0` up to, but not including, `1` |

> [!NOTE]
> `Math.floor()` always rounds toward negative infinity, so `Math.floor(-2.1)` is `-3`.

---

## 📖 Chapter 10: Random Integers
To get a random whole number from 1 to 10:

*   **Step 1**: `Math.random()` gives a decimal from `0` up to `1`.
*   **Step 2**: `* 10` gives a decimal from `0` up to `10`.
*   **Step 3**: `Math.floor()` gives a whole number from `0` to `9`.
*   **Step 4**: `+ 1` gives a whole number from `1` to `10`.

```javascript
let number = Math.floor(Math.random() * 10) + 1;
```

The general formula for any range is:
```javascript
let inRange = Math.floor(Math.random() * (max - min + 1)) + min;
```

> [!WARNING]
> Avoid `Math.round()` for random integers. It makes the lowest and highest values about half as likely as the others.

---

## 📖 Chapter 11: Practice Questions (Random Numbers)
Solutions are in `11_practice_random.js`.

1.  Generate a random number from 1 to 100.
2.  Generate a random number from 1 to 5.
3.  Generate a random number from 21 to 25.

---

## 📖 Chapter 12: Guessing Game
The user chooses the highest number, then keeps guessing until they are correct or quit. Open `12_guessing_game.html` in a browser.
```javascript
let target = Math.floor(Math.random() * max) + 1;
let attempts = 0;

while (true) {
  let guess = prompt(`Guess a number from 1 to ${max} (or type quit):`);

  if (guess === null || guess.trim().toLowerCase() === "quit") {
    alert(`You quit. The number was ${target}.`);
    break;
  }

  let number = Number(guess);

  if (guess.trim() === "" || !Number.isInteger(number) || number < 1 || number > max) {
    alert(`Enter a whole number from 1 to ${max}.`);
  } else {
    attempts++;

    if (number === target) {
      alert(`Correct! Attempts used: ${attempts}`);
      break;
    } else if (number < target) {
      alert("Too small. Try again.");
    } else {
      alert("Too large. Try again.");
    }
  }
}
```

*   `prompt()` returns a string, so `Number()` converts the guess.
*   Invalid guesses do not count as attempts.

---

## 📖 Chapter 13: Assignment Questions
Solutions are in `13_assignment.js`.

### Q1. Generate a dice roll from 1 to 6
```javascript
let dice = Math.floor(Math.random() * 6) + 1;
```

### Q2. Create a car object and print its name
```javascript
const car = {
  name: "Civic",
  model: 2024,
  color: "white",
};

console.log(car.name); // Civic
```

### Q3. Create a person, update their city, and add a country
```javascript
const person = {
  name: "Riya",
  age: 25,
  city: "Chicago",
};

person.city = "New York";
person.country = "United States";
```

---

## 📊 Comparison Table: Arrays vs Objects

| Feature | Array | Object |
|---|---|---|
| **Syntax** | `[]` | `{}` |
| **Access by** | Numeric index | Key name |
| **Best for** | Ordered lists | Named properties |
| **Add a value** | `arr.push(x)` | `obj.key = x` |
| **Remove a value** | `pop()`, `shift()`, `splice()` | `delete obj.key` |
| **Size** | `arr.length` | `Object.keys(obj).length` |

### Dot vs Bracket Notation

| Situation | Dot | Bracket |
|---|---|---|
| Simple key (`name`) | ✅ `obj.name` | ✅ `obj["name"]` |
| Key with a space | ❌ | ✅ `obj["full name"]` |
| Number key | ❌ | ✅ `obj[1]` |
| Key stored in a variable | ❌ | ✅ `obj[key]` |
