const path = require("node:path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const posts = [
  { id: "1", username: "riya", content: "Learning REST today" },
  { id: "2", username: "arjun", content: "CRUD finally makes sense" },
  { id: "3", username: "mira", content: "Routes are just patterns" },
];
let nextId = 4;

const readText = (value, maxLength) => {
  const text = typeof value === "string" ? value.trim() : "";
  return text.length <= maxLength ? text : "";
};

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index_new", { posts });
});

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
  res.redirect(303, "/posts");
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Redirect: http://localhost:${port}/posts`);
});
