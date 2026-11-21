let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Row 1:", matrix[1]);
console.log("Row 1, column 2:", matrix[1][2]);
console.log("Rows:", matrix.length);
console.log("Columns:", matrix[0].length);

matrix[2][0] = 70;
console.log("After update:", matrix);

let shallowCopy = matrix.slice();

shallowCopy[0][0] = 100;
console.log("Inner arrays are shared:", matrix[0][0]);
