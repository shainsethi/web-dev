const path = require("node:path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/dice", (req, res) => {
  const value = Math.floor(Math.random() * 6) + 1;
  res.render("dice", { value });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Conditionals: http://localhost:${port}/dice`);
});
