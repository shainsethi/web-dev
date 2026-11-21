let maxInput = prompt("Enter the highest number for the game:");
let max = Number(maxInput);

if (maxInput === null || maxInput.trim() === "" || !Number.isInteger(max) || max < 1) {
  alert("Please reload the page and enter a whole number of 1 or more.");
} else {
  let target = Math.floor(Math.random() * max) + 1;
  let attempts = 0;

  while (true) {
    let guess = prompt(`Guess a number from 1 to ${max} (or type quit):`);

    if (guess === null || guess.trim().toLowerCase() === "quit") {
      alert(`You quit. The number was ${target}.`);
      break;
    }

    let number = Number(guess);

    if (guess.trim() === "" || !Number.isInteger(number) || number < 1 || number > max) {
      alert(`Enter a whole number from 1 to ${max}.`);
    } else {
      attempts++;

      if (number === target) {
        alert(`Correct! Attempts used: ${attempts}`);
        break;
      } else if (number < target) {
        alert("Too small. Try again.");
      } else {
        alert("Too large. Try again.");
      }
    }
  }
}
