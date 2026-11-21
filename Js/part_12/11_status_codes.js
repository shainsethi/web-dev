function describeStatus(status) {
  if (status >= 200 && status < 300) {
    return "Success";
  } else if (status >= 300 && status < 400) {
    return "Redirect";
  } else if (status >= 400 && status < 500) {
    return "Client error";
  } else if (status >= 500) {
    return "Server error";
  }

  return "Informational";
}

console.log("201:", describeStatus(201));
console.log("301:", describeStatus(301));
console.log("404:", describeStatus(404));
console.log("500:", describeStatus(500));

async function main() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/99999",
  ];

  try {
    for (let url of urls) {
      const response = await fetch(url);
      console.log(`Status ${response.status}, response.ok: ${response.ok}`);
    }
  } catch (error) {
    console.log("Network error:", error.message);
  }
}

main();
