function calculateTotal(prices) {
  let total = 0;

  for (let price of prices) {
    debugger;
    total += price;
  }

  return total;
}

console.log("Total:", calculateTotal([10, 20, 30]));
