for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("Breaking at 4");
    break;
  }

  console.log("Number:", i);
}

let attempts = 0;

while (true) {
  attempts++;

  if (attempts === 3) {
    break;
  }
}

console.log("Attempts:", attempts);

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break;
    }

    console.log(`i = ${i}, j = ${j}`);
  }
}
