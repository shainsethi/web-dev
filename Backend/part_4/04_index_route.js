const path = require("node:path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const posts = [
  { id: "1", username: "riya", content: "Learning REST today" },
  { id: "2", username: "arjun", content: "CRUD finally makes sense" },
  { id: "3", username: "mira", content: "Routes are just patterns" },
];

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index_basic", { posts });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Index route: http://localhost:${port}/posts`);
});
