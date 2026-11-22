const major = Number(process.versions.node.split(".")[0]);

console.log("Node version:", process.versions.node);
console.log("V8 engine version:", process.versions.v8);

if (major >= 18) {
  console.log("Your Node version is ready for this course");
} else {
  console.log("Please install the latest LTS version of Node");
}
