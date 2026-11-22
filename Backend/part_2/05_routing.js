const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact form");
});

app.post("/contact", (req, res) => {
  res.status(201).send("Message received");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Try: http://localhost:${port}/about`);
});
