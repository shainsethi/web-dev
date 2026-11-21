# JavaScript Mini-Project Study Guide

This study guide covers event bubbling, a DOM Todo app, event delegation, and an original sequence-memory game called **Echo Tiles**, matching the lessons and examples in this directory.

Open any `.html` file in a browser. The finished game is `11_display_score.html`.

---

## 📖 Chapter 1: Event Bubbling
When an element is clicked, the event runs on that element, then **bubbles up** through its parents.
```
li → ul → div → body → html → document
```

```javascript
li.addEventListener("click", () => console.log("li"));
ul.addEventListener("click", () => console.log("ul"));
div.addEventListener("click", () => console.log("div"));
```

Clicking the `li` prints `li`, `ul`, then `div`. Use `stopPropagation()` to stop the event from moving up:
```javascript
li.addEventListener("click", event => {
  event.stopPropagation();
});
```

---

## 📖 Chapter 2: Building Todo with DOM
Each new task becomes real elements on the page:
```javascript
const item = document.createElement("li");
const label = document.createElement("span");
const deleteButton = document.createElement("button");

label.textContent = `${text} `;
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", () => item.remove());

item.append(label, deleteButton);
list.append(item);
```

> [!IMPORTANT]
> Use `textContent` for the task so user input cannot run as HTML.

---

## 📖 Chapter 3: Event Delegation
A listener only works on elements that exist when it is added. **Event delegation** places one listener on the parent, which also handles children added later.
```javascript
list.addEventListener("click", event => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
```

*   `event.target` is the element that was actually clicked.
*   Bubbling carries the click up to the parent listener.

---

## 📖 Chapter 4: What is a Sequence Memory Game?
In a **sequence memory game**, the computer shows a pattern and the player repeats it. Each round adds one more step.

Our version, **Echo Tiles**, uses six symbol tiles:

1.  Press **Start**.
2.  Watch the tiles light up.
3.  Click them in the same order.
4.  A correct answer adds one step. A wrong tile ends the game.

The game state is stored in a few variables:

| Variable | Purpose |
|---|---|
| `gameSequence` | The pattern created by the game |
| `playerSequence` | The tiles pressed this round |
| `level` | The current round |
| `acceptingInput` | Whether clicks should count |
| `bestScore` | The highest score this session |

---

## 📖 Chapter 5: Setting up Project
`05_setting_up_project.html` creates the board, and `game.css` styles it. Each tile stores its name in a `data-` attribute:
```html
<button class="tile" data-tile="moon" aria-label="Moon">☾</button>
```

JavaScript reads it with `tile.dataset.tile`. The `aria-label` gives screen readers a clear name for the symbol.

---

## 📖 Chapter 6: Start Game
```javascript
function startGame() {
  startButton.disabled = true;
  level = 1;
  statusText.textContent = `Game started. Level ${level}`;
}

startButton.addEventListener("click", startGame);
```

Disabling the button prevents a second game from starting while one is running.

---

## 📖 Chapter 7: Flash Buttons & Level Up
A flash adds a CSS class, then removes it after a delay:
```javascript
function flash(name) {
  const tile = document.querySelector(`[data-tile="${name}"]`);

  tile.classList.add("flash");
  setTimeout(() => tile.classList.remove("flash"), 300);
}
```

Each level adds one random tile and replays the full pattern:
```javascript
function playSequence() {
  gameSequence.forEach((name, index) => {
    setTimeout(() => flash(name), 600 * (index + 1));
  });
}
```

Multiplying the delay by `index + 1` spaces the flashes apart.

---

## 📖 Chapter 8: Button Event Listeners
One delegated listener on the board handles all six tiles:
```javascript
board.addEventListener("click", event => {
  const tile = event.target.closest(".tile");

  if (!tile || !acceptingInput) {
    return;
  }

  flash(tile.dataset.tile);
  playerSequence.push(tile.dataset.tile);
});
```

`acceptingInput` ignores clicks while the pattern is playing.

---

## 📖 Chapter 9: Matching Sequence
Compare only the **latest** press after each click:
```javascript
function checkAnswer() {
  const index = playerSequence.length - 1;

  if (playerSequence[index] !== gameSequence[index]) {
    gameOver();
    return;
  }

  if (playerSequence.length === gameSequence.length) {
    acceptingInput = false;
    setTimeout(levelUp, 800);
  }
}
```

---

## 📖 Chapter 10: Reset Game
After a wrong answer, return the game to its starting state:
```javascript
function resetGame() {
  gameSequence = [];
  playerSequence = [];
  level = 0;
  acceptingInput = false;
  startButton.disabled = false;
}
```

---

## 📖 Chapter 11: Display Score
The score is the number of levels **completed**, so it is `level - 1` when the player loses.
```javascript
function gameOver() {
  const score = level - 1;

  bestScore = Math.max(bestScore, score);
  statusText.textContent = `Game over! Score: ${score}. Press Start to play again.`;
  scoreText.textContent = `Best score: ${bestScore}`;
  resetGame();
}
```

> [!NOTE]
> The best score is stored in a variable, so it resets when the page reloads.

---

## 📊 Comparison Table: Direct Listeners vs Delegation

| Feature | Direct Listeners | Event Delegation |
|---|---|---|
| **Number of listeners** | One per element | One on the parent |
| **Works for elements added later** | ❌ No | ✅ Yes |
| **Relies on bubbling** | ❌ No | ✅ Yes |
| **Best for** | A few fixed elements | Lists and dynamic content |
