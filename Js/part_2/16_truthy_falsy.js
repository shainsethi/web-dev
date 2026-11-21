console.log("false:", Boolean(false));
console.log("0:", Boolean(0));
console.log("-0:", Boolean(-0));
console.log("0n:", Boolean(0n));
console.log('"":', Boolean(""));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN:", Boolean(NaN));

console.log('"0":', Boolean("0"));
console.log('"false":', Boolean("false"));
console.log('" ":', Boolean(" "));
console.log("-1:", Boolean(-1));
console.log("[]:", Boolean([]));
console.log("{}:", Boolean({}));

let userName = "";

if (userName) {
  console.log(`Welcome, ${userName}`);
} else {
  console.log("Please enter your name");
}
