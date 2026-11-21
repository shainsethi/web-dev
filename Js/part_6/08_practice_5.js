function sumUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log("Sum from 1 to 10:", sumUpTo(10));
console.log("Sum from 1 to 100:", sumUpTo(100));
