const routes = [
  { action: "Index", method: "GET", path: "/posts", purpose: "Show all posts" },
  { action: "New", method: "GET", path: "/posts/new", purpose: "Show create form" },
  { action: "Create", method: "POST", path: "/posts", purpose: "Add a post" },
  { action: "Show", method: "GET", path: "/posts/:id", purpose: "Show one post" },
  { action: "Edit", method: "GET", path: "/posts/:id/edit", purpose: "Show edit form" },
  { action: "Update", method: "PATCH", path: "/posts/:id", purpose: "Change a post" },
  { action: "Destroy", method: "DELETE", path: "/posts/:id", purpose: "Remove a post" },
];

console.table(routes);
