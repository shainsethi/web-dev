let board = [
  ["O", null, "X"],
  ["X", null, "O"],
  ["O", "X", null],
];

board[1][1] = "X";
console.log("Q1:", board[1]);

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Q2:", grid[0][0] + grid[1][1] + grid[2][2]);

let students = [
  ["Riya", 92],
  ["Aman", 78],
];

console.log(`Q3: ${students[1][0]} scored ${students[1][1]}`);

students.push(["Dia", 85]);
console.log("Q4:", students.length, students[2]);
