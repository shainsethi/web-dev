const posts = [{ id: 1, content: "First post" }];

posts.push({ id: 2, content: "Second post" });
console.log("Create:", posts);

const post = posts.find(item => item.id === 2);
console.log("Read:", post);

post.content = "Updated post";
console.log("Update:", posts);

posts.splice(posts.indexOf(post), 1);
console.log("Delete:", posts);
