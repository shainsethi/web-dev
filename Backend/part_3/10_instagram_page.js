const path = require("node:path");
const express = require("express");
const profiles = require("./data.json");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;

  if (!Object.hasOwn(profiles, username)) {
    res.status(404).render("basic_not_found", { username });
    return;
  }

  res.render("basic_profile", { username, profile: profiles[username] });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Instagram page: http://localhost:${port}/ig/riya`);
});
