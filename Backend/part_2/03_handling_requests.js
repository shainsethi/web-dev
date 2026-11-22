const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
  console.log(`${req.method} ${req.path}`);

  res.json({
    method: req.method,
    path: req.path,
    userAgentSent: Boolean(req.get("user-agent")),
  });
});

app.listen(port, error => {
  if (error) {
    console.error(`Could not start the server: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Try any path: http://localhost:${port}/hello`);
});
