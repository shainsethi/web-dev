const nums = [1, 2, 3];

nums.push(4);
nums[0] = 10;
console.log("const array can change:", nums);

try {
  nums = [5, 6];
} catch (error) {
  console.log("Reassigning throws:", error.name);
}

const frozen = Object.freeze([1, 2]);

try {
  frozen.push(3);
} catch (error) {
  console.log("Frozen array throws:", error.name);
}

console.log("Frozen array:", frozen);
