let queue = ["Asha", "Ben", "Chirag"];
queue.shift();
queue.push("Dia");
console.log("Q1:", queue);

let history = ["home", "about", "contact"];
let lastPage = history.pop();
console.log("Q2:", lastPage, history);

let nums = [1, 2, 3, 4];
let temp = nums[0];
nums[0] = nums[nums.length - 1];
nums[nums.length - 1] = temp;
console.log("Q3:", nums);
