const postId = 5;

console.log("Path parameter:", `https://jsonplaceholder.typicode.com/posts/${postId}`);

const url = new URL("https://openlibrary.org/search.json");

url.searchParams.set("q", "clean code");
url.searchParams.set("limit", "5");

console.log("Full URL:", url.href);
console.log("Path:", url.pathname);
console.log("Query string:", url.search);
console.log("Read limit:", url.searchParams.get("limit"));

url.searchParams.set("q", "c++ & js");

console.log("Special characters are encoded:", url.search);
