const baseUrl = "https://jsonplaceholder.typicode.com";

async function send(method, path, body) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${path}`, options);

  console.log(`${method} ${path}: ${response.status}`);
}

async function main() {
  try {
    await send("GET", "/posts/1");
    await send("POST", "/posts", { title: "New post", body: "Hello", userId: 1 });
    await send("PUT", "/posts/1", { id: 1, title: "Replaced", body: "Hello", userId: 1 });
    await send("PATCH", "/posts/1", { title: "Updated" });
    await send("DELETE", "/posts/1");
  } catch (error) {
    console.log("Request failed:", error.message);
  }
}

main();
