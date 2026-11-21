# JavaScript Fundamentals (Part 10 Study Guide)

This study guide explains how JavaScript responds to clicks, keys, and forms using DOM events, matching the lessons and examples in this directory.

Open any `.html` file in a browser and interact with the page.

---

## 📖 Chapter 1: DOM Events
An **event** is something that happens on the page, such as a click or key press. A **handler** is the function that responds to it.
```html
<button onclick="console.log('Clicked')">Inline</button>
```

```javascript
button.onclick = () => {
  console.log("Clicked");
};
```

> [!WARNING]
> An `on...` property holds only **one** handler. Assigning a second handler replaces the first.

---

## 📖 Chapter 2: Mouse / Pointer Events

| Event | Fires When |
|---|---|
| `click` | The element is clicked |
| `dblclick` | The element is double-clicked |
| `mouseenter` | The mouse enters the element |
| `mouseleave` | The mouse leaves the element |
| `pointerdown` | A mouse, finger, or pen presses down |

```javascript
box.onmouseenter = () => {
  output.textContent = "Mouse entered";
};
```

---

## 📖 Chapter 3: Event Listeners
`addEventListener()` is the recommended approach because one element can have **many** listeners.
```javascript
function countClick() {
  clicks++;
}

button.addEventListener("click", countClick);
button.addEventListener("click", () => {
  console.log("Second listener also ran");
});

button.removeEventListener("click", countClick);
```

> [!NOTE]
> To remove a listener, pass the **same named function**. An inline anonymous function cannot be removed this way.

---

## 📖 Chapter 4: Activity – Random Color Generator
Each click creates a random RGB color and applies it to the page:
```javascript
function randomChannel() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${randomChannel()}, ${randomChannel()}, ${randomChannel()})`;
}

generate.addEventListener("click", () => {
  const color = randomColor();

  colorName.textContent = color;
  colorBox.style.backgroundColor = color;
});
```

---

## 📖 Chapter 5: Event Listeners for Elements
Any element can listen for events. Use a loop to add a listener to many elements:
```javascript
const elements = document.querySelectorAll(".clickable");

for (let element of elements) {
  element.addEventListener("click", () => {
    output.textContent = `You clicked a ${element.tagName}`;
  });
}
```

---

## 📖 Chapter 6: `this` in Event Listeners
In a regular function listener, `this` is the element the listener is attached to. This lets one function serve many elements:
```javascript
function highlight() {
  this.style.backgroundColor = "gold";
}

for (let button of document.querySelectorAll(".color")) {
  button.addEventListener("click", highlight);
}
```

> [!WARNING]
> Arrow functions do not get their own `this`. At the top of a script, `this` inside an arrow listener is `window`, not the element.

---

## 📖 Chapter 7: Keyboard Events
Handlers receive an **event object** with details about what happened:
```javascript
input.addEventListener("keydown", event => {
  console.log(event.key);  // "a" or "A"
  console.log(event.code); // "KeyA"
});
```

*   `event.key` is the **character or key name**, so it changes with Shift.
*   `event.code` is the **physical key** on the keyboard.
*   `keydown` fires when pressed, and `keyup` fires when released.

---

## 📖 Chapter 8: Form Events
Submitting a form normally reloads the page. `preventDefault()` stops that:
```javascript
form.addEventListener("submit", event => {
  event.preventDefault();
  output.textContent = "Submitted without reloading the page";
});
```

---

## 📖 Chapter 9: Extracting Form Data
`form.elements` gives access to inputs by their `name`:
```javascript
form.addEventListener("submit", event => {
  event.preventDefault();

  const username = form.elements.username.value.trim();
  const course = form.elements.course.value;

  if (username === "") {
    output.textContent = "Please enter a username";
    return;
  }

  output.textContent = `${username} is studying ${course}`;
  form.reset();
});
```

> [!IMPORTANT]
> Show user input with `textContent`, not `innerHTML`, so it cannot run as code.

---

## 📖 Chapter 10: More Events

| Event | Fires When |
|---|---|
| `input` | The value changes, on every keystroke |
| `change` | The value changed and the field lost focus |
| `focus` | The field becomes active |
| `blur` | The field stops being active |

```javascript
nameInput.addEventListener("input", () => {
  live.textContent = nameInput.value;
});
```

---

## 📊 Comparison Table: Ways to Handle Events

| Feature | Inline `onclick=""` | `element.onclick` | `addEventListener()` |
|---|---|---|---|
| **Keeps JS out of HTML** | ❌ No | ✅ Yes | ✅ Yes |
| **Multiple handlers** | ❌ No | ❌ No | ✅ Yes |
| **Can be removed** | ⚠️ By changing the attribute | ⚠️ Set to `null` | ✅ `removeEventListener()` |
| **Recommended** | ❌ No | ⚠️ Simple cases | ✅ Yes |

### `input` vs `change`

| Feature | `input` | `change` |
|---|---|---|
| **Timing** | Every edit | After the edit is finished |
| **Best for** | Live previews | Saving a final value |
