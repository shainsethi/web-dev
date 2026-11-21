# JavaScript Fundamentals (Part 12 Study Guide)

This study guide explains `async` and `await`, APIs, JSON, and HTTP requests in JavaScript, matching the lessons and examples in this directory.

> [!NOTE]
> Chapters 5, 9, 10, 11, 13, 14, and 15 call live public APIs, so they need an internet connection. Their output can change between runs.

---

## 📖 Chapter 1: `async` Functions
An `async` function **always returns a Promise**.
```javascript
async function greet() {
  return "Hello";
}

greet();                     // Promise { 'Hello' }
greet().then(console.log);   // Hello
```

Throwing an error inside it rejects the Promise:
```javascript
async function fail() {
  throw new Error("Something failed");
}

fail().catch(error => console.log(error.message));
```

---

## 📖 Chapter 2: `await` Keyword
`await` pauses an `async` function until a Promise settles, then gives you its value.
```javascript
async function run() {
  const first = await delayedValue("First");
  console.log(first);

  const second = await delayedValue("Second");
  console.log(second);
}

run();
console.log("This runs while run() is waiting");
```

> [!IMPORTANT]
> `await` pauses only its own function. The rest of the program keeps running.

---

## 📖 Chapter 3: Handling Rejections
Use `try...catch` with `await`:
```javascript
async function saveAll() {
  try {
    await saveToDb("First record");
    await saveToDb("");
    console.log("This line is skipped");
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("finally always runs");
  }
}
```

---

## 📖 Chapter 4: What is an API?
An **API (Application Programming Interface)** lets one program request data or actions from another.

```
Your app  ── request ──▶  API  ──▶  Server
Your app  ◀── response ──  API  ◀──  Server
```

An **endpoint** is a specific URL for a resource, such as `https://catfact.ninja/fact`.

---

## 📖 Chapter 5: Accessing Some APIs
A GET request can be opened directly in a browser:

*   `https://catfact.ninja/fact`
*   `https://dog.ceo/api/breeds/image/random`

In JavaScript, use `fetch()`:
```javascript
const response = await fetch("https://catfact.ninja/fact");
const data = await response.json();

console.log(data.fact);
```

---

## 📖 Chapter 6: What is JSON?
**JSON (JavaScript Object Notation)** is a text format for exchanging data.

*   Keys and strings must use **double quotes**.
*   Values can be strings, numbers, booleans, `null`, arrays, or objects.
*   Functions, `undefined`, and comments are not allowed.

```javascript
const json = JSON.stringify({ name: "Riya", age: 20 }); // Object to string
const data = JSON.parse(json);                         // String to object
```

> [!NOTE]
> `JSON.stringify()` skips object properties whose value is a function or `undefined`.

---

## 📖 Chapter 7: Accessing JSON Data
After parsing, use normal object and array syntax:
```javascript
const data = JSON.parse(response);

data.user.name;         // "Riya"
data.courses[1].title;  // "JavaScript"
```

Invalid JSON throws a `SyntaxError`, so wrap uncertain input in `try...catch`.

---

## 📖 Chapter 8: API Testing Tools
Testing tools let you send requests and inspect responses without writing an app.

| Tool | Type |
|---|---|
| **Hoppscotch** | Web app |
| **Postman** | Desktop and web app |
| **Thunder Client** | VS Code extension |
| **curl** | Command line |

```bash
curl -i https://catfact.ninja/fact
```

The `-i` flag also shows the status and headers.

---

## 📖 Chapter 9: What is Ajax?
**Ajax (Asynchronous JavaScript and XML)** means loading data in the background and updating part of a page **without a full reload**. Modern apps usually exchange JSON instead of XML.

Open `09_what_is_ajax.html` and click the button to see it working.

---

## 📖 Chapter 10: HTTP Verbs

| Verb | Purpose | Example |
|---|---|---|
| `GET` | Read data | Get a post |
| `POST` | Create data | Add a post |
| `PUT` | Replace data | Replace a post |
| `PATCH` | Partly update data | Change a title |
| `DELETE` | Remove data | Delete a post |

```javascript
await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "New post" }),
});
```

> [!NOTE]
> The example uses JSONPlaceholder, a practice API that responds as if data changed but does not save it.

---

## 📖 Chapter 11: Status Codes

| Range | Meaning | Common Examples |
|---|---|---|
| `1xx` | Informational | `100 Continue` |
| `2xx` | Success | `200 OK`, `201 Created` |
| `3xx` | Redirect | `301 Moved Permanently` |
| `4xx` | Client error | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` |
| `5xx` | Server error | `500 Internal Server Error`, `503 Service Unavailable` |

> [!WARNING]
> `fetch()` does **not** reject on `404` or `500`. It rejects mainly on network failures, so always check `response.ok`.

---

## 📖 Chapter 12: Adding Information in URLs
```
https://openlibrary.org/search.json?q=clean+code&limit=5
└────── base URL + path ──────────┘ └── query string ──┘
```

*   **Path parameters** identify a resource: `/posts/5`.
*   **Query strings** add options after `?`, separated by `&`.

Use `URL` so special characters are encoded correctly:
```javascript
const url = new URL("https://openlibrary.org/search.json");

url.searchParams.set("q", "clean code");
url.searchParams.set("limit", "5");

url.href; // https://openlibrary.org/search.json?q=clean+code&limit=5
```

---

## 📖 Chapter 13: HTTP Headers
**Headers** carry extra information about a request or response.

| Header | Purpose |
|---|---|
| `Accept` | The response format you want |
| `Content-Type` | The format of the body being sent or received |
| `Authorization` | Credentials for protected APIs |

```javascript
const response = await fetch("https://icanhazdadjoke.com/", {
  headers: { Accept: "application/json" },
});

response.headers.get("content-type");
```

> [!WARNING]
> Never put secret API keys in browser JavaScript. Anyone can read them in DevTools.

---

## 📖 Chapter 14: Our First API Request
```javascript
fetch("https://catfact.ninja/fact")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then(data => console.log(data.fact))
  .catch(error => console.log(error.message));
```

`response.json()` is also asynchronous, so it must be returned to the next `then()`.

---

## 📖 Chapter 15: Using Fetch with async-await
```javascript
async function getFact() {
  const response = await fetch("https://catfact.ninja/fact");

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();

  return data.fact;
}
```

Call it inside `try...catch`, because both the network and the status check can fail.

---

## 📊 Comparison Table: `.then()` vs `async/await`

| Feature | `.then()` | `async/await` |
|---|---|---|
| **Style** | Chained callbacks | Reads top to bottom |
| **Errors** | `.catch()` | `try...catch` |
| **Returns** | A Promise | A Promise |

### JSON vs JavaScript Objects

| Feature | JSON | JavaScript Object |
|---|---|---|
| **Type** | Text | Value in memory |
| **Keys** | Double quotes required | Quotes usually optional |
| **Functions** | ❌ No | ✅ Yes |
| **Convert** | `JSON.parse()` | `JSON.stringify()` |
