const path = require("node:path");
const express = require("express");
const profiles = require("./data.json");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("explore", { title: "Explore", usernames: Object.keys(profiles) });
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;

  if (!Object.hasOwn(profiles, username)) {
    res.status(404).render("not_found", { title: "Profile not found", username });
    return;
  }

  const profile = profiles[username];
  res.render("profile", { title: profile.name, username, profile });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Includes: http://localhost:${port}`);
});
