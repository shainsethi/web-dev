# Backend Miscellaneous (Study Guide)

This study guide covers POST requests and Object-Oriented Programming in JavaScript, matching the lessons in this directory.

Run this command once from the `Backend/miscellaneous/` folder:
```bash
npm install
```

Chapters 1 and 2 start a server. Chapters 3 to 8 print their output and exit:
```bash
node 03_revisiting_oop.js
```

---

## 📖 Chapter 1: GET & POST Requests
**GET** asks for data. **POST** sends data to be processed.

```html
<form action="/register" method="get">
  <input name="name">
</form>

<form action="/register" method="post">
  <input name="name">
</form>
```

*   A GET form puts values in the URL: `/register?name=Riya`.
*   A POST form puts values in the **request body**.

> [!WARNING]
> POST hides data from the URL, but it does not encrypt it. Passwords still need **HTTPS**.

---

## 📖 Chapter 2: Handling POST Requests
Express does not read the body by default, so `req.body` starts as `undefined`. Add a parser for each format:
```javascript
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

| Parser | Reads | Sent by |
|---|---|---|
| `express.urlencoded()` | `name=Riya` | HTML forms |
| `express.json()` | `{ "name": "Riya" }` | API clients and `fetch` |

```javascript
app.post("/register", (req, res) => {
  const name = req.body?.name;

  if (typeof name !== "string" || !name.trim() || name.length > 50) {
    res.status(400).json({ error: "Name must be 1 to 50 characters" });
    return;
  }

  res.status(201).json({ message: "Registered", name: name.trim() });
});
```

> [!IMPORTANT]
> Always validate the body. Anyone can send any value to your server, even if your form has `required`.

---

## 📖 Chapter 3: Revisiting JS (OOP)
**Object-Oriented Programming** groups related data and behavior into objects:
```javascript
const student = {
  name: "Riya",
  marks: [80, 90, 100],
  average() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  },
};
```

*   **Properties** store data.
*   **Methods** are functions on an object.
*   `this` refers to the object calling the method.

---

## 📖 Chapter 4: Object Prototypes
Every object links to a **prototype**. When a property is missing, JavaScript looks up this chain.

```javascript
const numbers = [1, 2, 3];

Object.getPrototypeOf(numbers) === Array.prototype; // ✅ true
Object.hasOwn(numbers, "push");                     // ❌ false
"push" in numbers;                                  // ✅ true
```

```text
numbers → Array.prototype → Object.prototype → null
```

An object's own property takes priority over the same name on its prototype.

> [!TIP]
> Prefer `Object.getPrototypeOf()` over the older `__proto__`. Avoid changing built-in prototypes such as `Array.prototype`.

---

## 📖 Chapter 5: Factory Functions
A **factory function** creates and returns an object:
```javascript
function createStudent(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I am ${this.name}`;
    },
  };
}
```

> [!NOTE]
> Each object gets its own copy of `greet`, so `first.greet === second.greet` is `false`. With many objects, this wastes memory.

---

## 📖 Chapter 6: The `new` Operator
A **constructor function** shares methods through its prototype:
```javascript
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.greet = function () {
  return `Hi, I am ${this.name}`;
};

const first = new Student("Riya", 20);
```

`new` does four things:

1.  Creates an empty object.
2.  Links it to `Student.prototype`.
3.  Runs the function with `this` set to that object.
4.  Returns the object.

---

## 📖 Chapter 7: Classes in JS
A **class** is cleaner syntax for constructors and prototypes:
```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}
```

*   `constructor` runs automatically with `new`.
*   Class methods live on the prototype, so all objects share them.
*   Calling a class without `new` throws a `TypeError`.

---

## 📖 Chapter 8: Inheritance
**Inheritance** lets a class reuse another class:
```javascript
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  role() {
    return `${super.role()} who teaches ${this.subject}`;
  }
}
```

*   `extends` sets the parent class.
*   `super()` runs the parent constructor.
*   `super.method()` calls a parent method.
*   A child method with the same name **overrides** the parent's method.

> [!WARNING]
> In a child constructor, call `super()` **before** using `this`, or JavaScript throws a `ReferenceError`.

---

## 📖 Chapter 9: Summary Sheet

## 📊 Comparison Table: GET vs POST

| Feature | GET | POST |
|---|---|---|
| **Purpose** | Read data | Send data |
| **Data location** | URL query string | Request body |
| **Read with** | `req.query` | `req.body` |
| **Needs a parser** | ❌ No | ✅ Yes |
| **Can be bookmarked** | ✅ Yes | ❌ No |

### Ways to Create Objects

| Feature | Factory Function | Constructor + `new` | Class |
|---|---|---|---|
| **Uses `new`** | ❌ No | ✅ Yes | ✅ Yes |
| **Shares methods** | ❌ No | ✅ Yes | ✅ Yes |
| **Works with `instanceof`** | ❌ No | ✅ Yes | ✅ Yes |
| **Inheritance syntax** | Manual | Manual | `extends` |
