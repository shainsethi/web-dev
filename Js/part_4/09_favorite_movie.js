let favorite = "inception";
let guess = prompt("Guess my favorite movie (or type quit):");

while (guess !== null && guess.trim().toLowerCase() !== favorite && guess.trim().toLowerCase() !== "quit") {
  guess = prompt("Wrong guess. Try again (or type quit):");
}

if (guess !== null && guess.trim().toLowerCase() === favorite) {
  alert("Correct! You guessed it.");
} else {
  alert("You quit the game.");
}
