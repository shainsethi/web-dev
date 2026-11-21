{
  let blockLet = "let";
  const blockConst = "const";
  var blockVar = "var";

  console.log("Inside block:", blockLet, blockConst, blockVar);
}

console.log("let outside block:", typeof blockLet);
console.log("const outside block:", typeof blockConst);
console.log("var outside block:", blockVar);

for (let i = 0; i < 2; i++) {
  console.log("Loop value:", i);
}

console.log("Loop let outside:", typeof i);
