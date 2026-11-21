let teams = [
  ["Riya", "Aman"],
  ["Dia", "Ben", "Kabir"],
];

for (let i = 0; i < teams.length; i++) {
  console.log(`Team ${i + 1} has ${teams[i].length} members`);

  for (let j = 0; j < teams[i].length; j++) {
    console.log(teams[i][j]);
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}

console.log("Matrix sum:", sum);
