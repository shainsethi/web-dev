const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>Handling POST Requests</h1>
    <form action="/register" method="post">
      <label>Name <input name="name" maxlength="50" required></label>
      <button>Register</button>
    </form>
  `);
});

app.post("/register", (req, res) => {
  const name = req.body?.name;

  if (typeof name !== "string" || !name.trim() || name.length > 50) {
    res.status(400).json({ error: "Name must be 1 to 50 characters" });
    return;
  }

  res.status(201).json({ message: "Registered", name: name.trim() });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Handling POST: http://localhost:${port}`);
});
