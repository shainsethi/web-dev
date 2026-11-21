function add(a, b = 2) {
  return a + b;
}

console.log("Default used:", add(5));
console.log("Default replaced:", add(5, 10));
console.log("undefined uses default:", add(5, undefined));
console.log("null does not:", add(5, null));

function wrongOrder(a = 2, b) {
  return a + b;
}

console.log("Default first:", wrongOrder(5));
