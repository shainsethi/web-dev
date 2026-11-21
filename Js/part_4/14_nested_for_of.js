let teams = [
  ["Riya", "Aman"],
  ["Dia", "Ben", "Kabir"],
];

for (let team of teams) {
  console.log("Team size:", team.length);

  for (let member of team) {
    console.log(member);
  }
}
