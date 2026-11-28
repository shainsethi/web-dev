# Backend Fundamentals (Part 4 Study Guide)

This study guide explains REST and CRUD by building a small posts app with Express and EJS, matching the lessons in this directory.

Run these commands once from the `Backend/part_4/` folder:
```bash
npm install
```

Each lesson adds one step to the app. Run the finished version with:
```bash
npm run dev
```

Then open `http://localhost:3000/posts`.

> [!NOTE]
> Posts are stored in an array, so changes **reset when the server restarts**.

---

## 📖 Chapter 1: What is REST?
**REST** (Representational State Transfer) is a set of rules for designing web APIs.

*   A **resource** is the thing you manage, such as posts.
*   The **URL** names the resource.
*   The **HTTP method** says what to do with it.
*   Each request carries everything the server needs.

```text
✅ DELETE /posts/42
❌ GET    /deletePost?id=42
```

---

## 📖 Chapter 2: CRUD Operations
**CRUD** names the four basic data actions:

| Action | HTTP Method | Array Example |
|---|---|---|
| **C**reate | `POST` | `posts.push(post)` |
| **R**ead | `GET` | `posts.find(...)` |
| **U**pdate | `PATCH` or `PUT` | `post.content = text` |
| **D**elete | `DELETE` | `posts.splice(index, 1)` |

*   `PATCH` changes part of a resource.
*   `PUT` replaces the whole resource.

---

## 📖 Chapter 3: Creating RESTful APIs
The finished app uses seven standard routes:

| Route | Method | Path | Purpose |
|---|---|---|---|
| **Index** | `GET` | `/posts` | Show all posts |
| **New** | `GET` | `/posts/new` | Show the create form |
| **Create** | `POST` | `/posts` | Add a post |
| **Show** | `GET` | `/posts/:id` | Show one post |
| **Edit** | `GET` | `/posts/:id/edit` | Show the edit form |
| **Update** | `PATCH` | `/posts/:id` | Change a post |
| **Destroy** | `DELETE` | `/posts/:id` | Remove a post |

---

## 📖 Chapter 4: Index Route
```javascript
app.get("/posts", (req, res) => {
  res.render("index_basic", { posts });
});
```

```html
<% for (const post of posts) { %>
  <article class="card">
    <h2>@<%= post.username %></h2>
    <p><%= post.content %></p>
  </article>
<% } %>
```

---

## 📖 Chapter 5: Create & New Route
Creating a post takes **two** routes. One shows the form, and one receives it:
```javascript
app.get("/posts/new", (req, res) => {
  res.render("new", { error: "", username: "", content: "" });
});

app.post("/posts", (req, res) => {
  const username = readText(req.body?.username, 30);
  const content = readText(req.body?.content, 500);

  if (!username || !content) {
    const error = "Enter a username up to 30 characters and a post up to 500 characters.";
    res.status(400).render("new", { error, username, content });
    return;
  }

  posts.push({ id: String(nextId++), username, content });
  res.status(201).send('Post added. <a href="/posts">See all posts</a>');
});
```

> [!IMPORTANT]
> Validate on the server. The `required` and `maxlength` attributes only guide people using your form.

---

## 📖 Chapter 6: Redirect
If the browser stays on a POST response, refreshing can submit the form again. Redirect instead:
```javascript
res.redirect(303, "/posts");
```

**303 See Other** tells the client to load the next page with `GET`.

> [!TIP]
> Use `303` after `POST`, `PATCH`, and `DELETE`. The default `302` can make some API clients repeat the original `PATCH` or `DELETE`.

---

## 📖 Chapter 7: Show Route
```javascript
app.get("/posts/:id", (req, res) => {
  const post = posts.find(item => item.id === req.params.id);

  if (!post) {
    res.status(404).render("not_found");
    return;
  }

  res.render("show_basic", { post });
});
```

> [!WARNING]
> Define `/posts/new` **before** `/posts/:id`. Otherwise Express treats `new` as an id.

---

## 📖 Chapter 8: Creating Ids (UUID)
A **UUID** is a long random id that is practically unique. Node includes a generator, so no package is needed:
```javascript
const { randomUUID } = require("node:crypto");

posts.push({ id: randomUUID(), username, content });
```

> [!NOTE]
> Many tutorials install the `uuid` package. `crypto.randomUUID()` creates the same standard format.

---

## 📖 Chapter 9: Update Route
```javascript
app.patch("/posts/:id", (req, res) => {
  const post = posts.find(item => item.id === req.params.id);

  if (!post) {
    res.status(404).render("not_found");
    return;
  }

  const content = readText(req.body?.content, 500);

  if (!content) {
    res.status(400).send("Enter a post up to 500 characters.");
    return;
  }

  post.content = content;
  res.redirect(303, `/posts/${post.id}`);
});
```

Test it from a second terminal, using an id from the page:
```bash
curl -i -X PATCH http://localhost:3000/posts/POST_ID \
  -H "Content-Type: application/json" \
  -d '{"content":"Updated from curl"}'
```

---

## 📖 Chapter 10: Edit Route
HTML forms only support `GET` and `POST`. The **method-override** package lets a POST form act as `PATCH` or `DELETE`:
```bash
npm install method-override
```

```javascript
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
```

```html
<form action="/posts/<%= post.id %>?_method=PATCH" method="post">
  <textarea name="content" required><%= content %></textarea>
  <button>Save changes</button>
</form>
```

---

## 📖 Chapter 11: Destroy Route
```javascript
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex(item => item.id === req.params.id);

  if (index === -1) {
    res.status(404).render("not_found");
    return;
  }

  posts.splice(index, 1);
  res.redirect(303, "/posts");
});
```

```html
<form action="/posts/<%= post.id %>?_method=DELETE" method="post">
  <button class="danger">Delete</button>
</form>
```

> [!WARNING]
> Never delete with a plain link, because browsers and crawlers can follow GET links automatically. This practice app has no login, so a real app also needs **authentication** and **CSRF protection** before it goes online.

---

## 📊 Comparison Table: PUT vs PATCH

| Feature | `PUT` | `PATCH` |
|---|---|---|
| **Changes** | Whole resource | Some fields |
| **Body contains** | Full resource | Only changed fields |
| **Used in this app** | ❌ No | ✅ Yes |

### Common Status Codes

| Code | Meaning | Used When |
|---|---|---|
| **200** | OK | A page loads |
| **201** | Created | A post is added without redirecting |
| **303** | See Other | Redirecting after a change |
| **400** | Bad Request | Input is invalid |
| **404** | Not Found | The post does not exist |
