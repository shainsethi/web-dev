const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const books = [
  "JavaScript Basics",
  "Advanced JavaScript",
  "Node in Practice",
  "Learning Express",
  "CSS Layouts",
];

app.get("/search", (req, res) => {
  const { q, limit = "3" } = req.query;
  const maxResults = Number(limit);

  if (typeof q !== "string" || q.trim() === "") {
    res.status(400).json({ error: "Add a search term, such as ?q=javascript" });
    return;
  }

  if (!Number.isInteger(maxResults) || maxResults < 1 || maxResults > 5) {
    res.status(400).json({ error: "limit must be a whole number from 1 to 5" });
    return;
  }

  const term = q.trim().toLowerCase();
  const results = books
    .filter(book => book.toLowerCase().includes(term))
    .slice(0, maxResults);

  res.json({ query: q.trim(), count: results.length, results });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Try: http://localhost:${port}/search?q=javascript&limit=2`);
});
