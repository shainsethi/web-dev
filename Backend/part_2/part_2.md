# Backend Fundamentals (Part 2 Study Guide)

This study guide explains how to build web servers with Express, matching the lessons and examples in this directory.

Run these commands once from the `Backend/part_2/` folder:
```bash
npm install
```

Then start any lesson with `node`, open its URL in a browser, and press `Ctrl+C` in the terminal to stop the server.

> [!NOTE]
> These lessons use **Express 5**. Older tutorials often show Express 4, and a few patterns are different.

---

## 📖 Chapter 1: What is Express?
**Express** is a small web framework for Node.js. It makes servers easier to build by handling common work such as routing and responses.

A plain Node server checks every request by hand:
```javascript
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from plain Node");
  }
});
```

The same route in Express:
```javascript
app.get("/", (req, res) => {
  res.send("Hello from Express");
});
```

---

## 📖 Chapter 2: Getting Started with Express
To set up a new project:
```bash
npm init -y
npm install express
```

```javascript
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Express server: http://localhost:${port}`);
});
```

*   A **port** is a numbered door on your computer that a server listens on.
*   `app.listen()` starts the server.

> [!IMPORTANT]
> In Express 5, startup errors reach the `listen` callback. Without this check, a busy port can look like a successful start.

---

## 📖 Chapter 3: Handling Requests
Every handler receives two objects:

*   `req` (**request**): what the client sent.
*   `res` (**response**): what the server sends back.

```javascript
app.use((req, res) => {
  res.json({
    method: req.method,
    path: req.path,
  });
});
```

`app.use()` without a path runs for **every** request.

---

## 📖 Chapter 4: Sending a Response

| Method | Purpose |
|---|---|
| `res.send()` | Send text or HTML |
| `res.json()` | Send JSON |
| `res.status()` | Set the status code |
| `res.type()` | Set the content type |
| `res.redirect()` | Send the client to another URL |

```javascript
res.send("<h1>HTML response</h1>");
res.json({ name: "Riya" });
res.status(201).json({ message: "Created" });
res.status(404).send("Not found");
res.redirect("/json");
```

> [!WARNING]
> Send **one** response per request. A second response throws `ERR_HTTP_HEADERS_SENT`, so `return` after an early response.

---

## 📖 Chapter 5: Routing
A **route** connects an HTTP method and path to a handler.
```javascript
app.get("/about", (req, res) => {
  res.send("About page");
});

app.post("/contact", (req, res) => {
  res.status(201).send("Message received");
});
```

Express checks routes **from top to bottom**, so place the 404 handler last:
```javascript
app.use((req, res) => {
  res.status(404).send("Page not found");
});
```

> [!WARNING]
> `app.get("*", handler)` from older Express 4 tutorials throws an error in Express 5. Use `app.use()` for a catch-all handler.

A browser address bar sends only `GET` requests. Use an API testing tool or `curl` for `POST`:
```bash
curl -X POST http://localhost:3000/contact
```

---

## 📖 Chapter 6: Installing Nodemon
Node does not reload when you edit a file. **Nodemon** restarts the server whenever you save.

```bash
npm install --save-dev nodemon
```

Add a script to `package.json`:
```json
{
  "scripts": {
    "dev": "nodemon 06_installing_nodemon.js"
  }
}
```

```bash
npm run dev
```

Type `rs` and press Enter to restart manually.

> [!TIP]
> Install Nodemon as a **dev dependency** because it is only needed during development.

---

## 📖 Chapter 7: Path Parameters
A `:name` segment captures part of the URL into `req.params`.
```javascript
app.get("/users/:username/posts/:postId", (req, res) => {
  const { username, postId } = req.params;
});
```

| URL | `req.params` |
|---|---|
| `/users/riya/posts/5` | `{ username: "riya", postId: "5" }` |
| `/users/aman/posts/12` | `{ username: "aman", postId: "12" }` |

Parameters are always **strings**, so convert and check them:
```javascript
const id = Number(postId);

if (!Number.isInteger(id) || id < 1) {
  res.status(400).json({ error: "Post ID must be a positive whole number" });
  return;
}
```

> [!WARNING]
> URL values come from the user. Validate them, and use `Object.hasOwn()` for object lookups so a path like `/users/constructor` cannot match a built-in property.

---

## 📖 Chapter 8: Query Strings
Values after `?` are available in `req.query`.
```
/search?q=javascript&limit=2
```

```javascript
app.get("/search", (req, res) => {
  const { q, limit = "3" } = req.query;
});
```

| URL | `req.query` |
|---|---|
| `/search?q=node` | `{ q: "node" }` |
| `/search?q=node&limit=2` | `{ q: "node", limit: "2" }` |
| `/search?q=a&q=b` | `{ q: ["a", "b"] }` |

> [!IMPORTANT]
> A repeated key becomes an **array**, so check `typeof q === "string"` before using string methods.

---

## 📊 Comparison Table: Path Parameters vs Query Strings

| Feature | Path Parameters | Query Strings |
|---|---|---|
| **Example** | `/users/riya` | `/search?q=node` |
| **Read with** | `req.params` | `req.query` |
| **Best for** | Identifying one resource | Search, filters, and sorting |
| **Usually required** | ✅ Yes | ❌ No |
| **Value type** | String | String or array |

### `app.get()` vs `app.use()`

| Feature | `app.get()` | `app.use()` |
|---|---|---|
| **HTTP methods** | Only `GET` | All methods |
| **Path match** | Exact route | Path prefix, or everything |
| **Common use** | Pages and API routes | Middleware and 404 handlers |
