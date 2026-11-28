const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>GET and POST</h1>
    <form action="/register" method="get">
      <label>GET name <input name="name" required></label>
      <button>Send with GET</button>
    </form>
    <form action="/register" method="post">
      <label>POST name <input name="name" required></label>
      <button>Send with POST</button>
    </form>
  `);
});

app.get("/register", (req, res) => {
  res.json({ method: req.method, query: req.query });
});

app.post("/register", (req, res) => {
  res.json({ method: req.method, query: req.query, body: req.body ?? null });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`GET and POST: http://localhost:${port}`);
});
