function joinStrings(words) {
  let result = "";

  for (let word of words) {
    result += word;
  }

  return result;
}

console.log(joinStrings(["Java", "Script"]));
console.log(joinStrings(["web", "-", "dev"]));
