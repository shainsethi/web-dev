let runs = 0;

for (let i = 1; i >= 1; i++) {
  runs++;
  console.log("This condition never becomes false:", i);

  if (runs === 3) {
    console.log("Stopped by the safety limit");
    break;
  }
}

for (let i = 1; i <= 3; i++) {
  console.log("Fixed loop:", i);
}
