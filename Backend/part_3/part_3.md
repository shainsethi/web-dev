# Backend Fundamentals (Part 3 Study Guide)

This study guide explains how to build dynamic pages with EJS and Express, matching the lessons and examples in this directory.

Run these commands once from the `Backend/part_3/` folder:
```bash
npm install
```

Then start any lesson with `node`, open its URL in a browser, and press `Ctrl+C` in the terminal to stop the server.

> [!NOTE]
> These lessons use **Express 5** and **EJS 7**.

---

## 📖 Chapter 1: What is Templating?
**Templating** means writing a page once and filling in its changing values on the server.

Building HTML by hand gets messy quickly:
```javascript
const byHand = "<h1>Hello, " + user.name + "</h1>";
```

A template keeps the HTML readable:
```javascript
const template = "<h1>Hello, <%= name %></h1>";
const rendered = ejs.render(template, user);
```

*   A **template** is HTML with placeholders.
*   **Rendering** replaces the placeholders with real values.
*   **EJS** stands for **Embedded JavaScript**.

---

## 📖 Chapter 2: Using EJS
Install EJS next to Express:
```bash
npm install express ejs
```

Tell Express to use it, then render a view:
```javascript
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
```

*   `res.render("home")` looks for `views/home.ejs`.
*   You do not need `require("ejs")`, because Express loads it for you.

> [!WARNING]
> Without a views path, Express looks in the folder where you **ran** the command. Run `02_using_ejs.js` from inside `Backend/part_3/`.

---

## 📖 Chapter 3: Views Directory
Set the path from the file's location so the server works from any folder:
```javascript
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
```

*   `__dirname` is the folder containing the current file.
*   `path.join()` builds a correct path on every operating system.

```text
part_3/
├── 03_views_directory.js
└── views/
    └── home.ejs
```

---

## 📖 Chapter 4: Interpolation Syntax
EJS tags mix JavaScript into HTML:

| Tag | Purpose | Prints output? |
|---|---|---|
| `<%= value %>` | Print with HTML escaped | ✅ Yes |
| `<%- value %>` | Print raw HTML | ✅ Yes |
| `<% code %>` | Run JavaScript | ❌ No |
| `<%# note %>` | Template comment | ❌ No |
| `<%% ` | Print a literal `<%` | ✅ Yes |
| `-%>` | Remove the newline after a tag | ❌ No |

```html
<p>Math: 2 + 3 = <%= 2 + 3 %></p>
<p>Escaped: <%= userText %></p>
<p>Raw: <%- trustedHtml %></p>
```

> [!WARNING]
> Use `<%= %>` for anything a user can change. Printing user input with `<%- %>` lets their scripts run in other people's browsers, an attack called **XSS**.

---

## 📖 Chapter 5: Passing Data to EJS
The second argument of `res.render()` holds the template's variables:
```javascript
app.get("/roll", (req, res) => {
  const value = Math.floor(Math.random() * 6) + 1;
  res.render("roll", { value });
});
```

```html
<h1>You rolled <%= value %></h1>
```

*   `{ value }` is shorthand for `{ value: value }`.
*   Each key becomes a variable inside the template.

> [!WARNING]
> Never pass a whole request object, as in `res.render("page", req.query)`. EJS can read some keys as render options. Pick the exact values you need.

---

## 📖 Chapter 6: Instagram EJS
A single template can serve every username by combining a path parameter with EJS:
```javascript
app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  res.render("username", { username });
});
```

```html
<h1>@<%= username %></h1>
```

Try `/ig/riya`, then `/ig/arjun`.

---

## 📖 Chapter 7: Conditional Statements
Put JavaScript control flow inside `<% %>` tags:
```html
<% if (value === 6) { %>
  <p>Top score. Roll again!</p>
<% } else if (value === 1) { %>
  <p>Lowest score. Bad luck!</p>
<% } else { %>
  <p>Keep playing.</p>
<% } %>
```

> [!TIP]
> Every opening `{` needs a matching `}` in its own tag. A missing brace is the most common EJS error.

---

## 📖 Chapter 8: Loops
Loops repeat a piece of HTML for each item:
```html
<ul>
  <% for (const follower of followers) { %>
    <li>@<%= follower %></li>
  <% } %>
</ul>
```

Use `<% %>` for the loop and `<%= %>` for each value.

---

## 📖 Chapter 9: The `data.json` File
[data.json](data.json) acts as a small practice database, with one key for each username:

```json
{
  "riya": {
    "name": "Riya Kapoor",
    "followers": 12400,
    "posts": [
      { "emoji": "🏙️", "caption": "Morning skyline", "likes": 842, "comments": 31 }
    ]
  }
}
```

Node can load JSON directly:
```javascript
const profiles = require("./data.json");
```

> [!NOTE]
> These profiles are fictional sample data. Each post uses an emoji so the page needs no image files.

---

## 📖 Chapter 10: Instagram Page with EJS
Look up the profile, and return a **404** when it does not exist:
```javascript
app.get("/ig/:username", (req, res) => {
  const { username } = req.params;

  if (!Object.hasOwn(profiles, username)) {
    res.status(404).render("basic_not_found", { username });
    return;
  }

  res.render("basic_profile", { username, profile: profiles[username] });
});
```

```html
<h1><%= profile.name %></h1>
<% for (const post of profile.posts) { %>
  <article>
    <p><%= post.emoji %> <%= post.caption %></p>
    <p><%= post.likes %> likes, <%= post.comments %> comments</p>
  </article>
<% } %>
```

> [!IMPORTANT]
> Use `Object.hasOwn()` for keys that come from a URL. A plain `profiles[username]` check treats `/ig/constructor` as a real profile because objects inherit that property.

---

## 📖 Chapter 11: Serving Static Files
**Static files** are sent exactly as they are, such as CSS, browser JavaScript, and images:
```javascript
app.use(express.static(path.join(__dirname, "public")));
```

```text
public/
├── css/style.css
└── js/app.js
```

```html
<link rel="stylesheet" href="/css/style.css">
<script src="/js/app.js" defer></script>
```

> [!WARNING]
> Do not write `public` in the URL. The file `public/css/style.css` is served at `/css/style.css`. Everything in this folder is visible to anyone.

---

## 📖 Chapter 12: Includes
**Includes** reuse shared parts of a page, so a header is changed in one file:
```html
<%- include("includes/head", { title }) %>
<%- include("includes/header") %>
<main class="page">
  <h1>Explore</h1>
</main>
<%- include("includes/footer") %>
```

```text
views/
├── explore.ejs
├── profile.ejs
├── not_found.ejs
└── includes/
    ├── head.ejs
    ├── header.ejs
    └── footer.ejs
```

*   Use `<%- %>` here because an include returns HTML that must not be escaped.
*   The include path is relative to the current template.
*   The second argument passes values to the included file.

Run the finished project with automatic restarts:
```bash
npm run dev
```

Then open `http://localhost:3000`.

---

## 📊 Comparison Table: EJS Output Tags

| Feature | `<%= %>` | `<%- %>` | `<% %>` |
|---|---|---|---|
| **Prints output** | ✅ Yes | ✅ Yes | ❌ No |
| **Escapes HTML** | ✅ Yes | ❌ No | N/A |
| **Safe for user input** | ✅ Yes | ❌ No | N/A |
| **Common use** | Values | Includes | `if` and loops |

### `views/` vs `public/`

| Feature | `views/` | `public/` |
|---|---|---|
| **Contains** | EJS templates | CSS, browser JS, and images |
| **Processed by server** | ✅ Yes | ❌ No |
| **Directly visible by URL** | ❌ No | ✅ Yes |
| **Express setup** | `app.set("views", ...)` | `express.static(...)` |
