const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/text", (req, res) => {
  res.type("text/plain").send("Plain text response");
});

app.get("/html", (req, res) => {
  res.send("<h1>HTML response</h1>");
});

app.get("/json", (req, res) => {
  res.json({ name: "Riya", skills: ["html", "css", "js"] });
});

app.get("/created", (req, res) => {
  res.status(201).json({ message: "Created" });
});

app.get("/missing", (req, res) => {
  res.status(404).send("Not found");
});

app.get("/old-page", (req, res) => {
  res.redirect("/json");
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Try: http://localhost:${port}/json`);
});
