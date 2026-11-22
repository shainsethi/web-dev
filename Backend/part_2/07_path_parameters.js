const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const users = {
  riya: { name: "Riya", city: "Delhi" },
  aman: { name: "Aman", city: "Pune" },
};

app.get("/users/:username", (req, res) => {
  const { username } = req.params;

  if (!Object.hasOwn(users, username)) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.json(users[username]);
});

app.get("/users/:username/posts/:postId", (req, res) => {
  const { username, postId } = req.params;
  const id = Number(postId);

  if (!Object.hasOwn(users, username)) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({ error: "Post ID must be a positive whole number" });
    return;
  }

  res.json({ author: users[username].name, postId: id });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Try: http://localhost:${port}/users/riya/posts/5`);
});
