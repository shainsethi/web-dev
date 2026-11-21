# JavaScript Fundamentals (Part 9 Study Guide)

This study guide explains how JavaScript reads and changes web pages through the DOM, matching the lessons and examples in this directory.

Open any `.html` file in a browser, then press `F12` and choose **Console** to see its output.

---

## 📖 Chapter 1: Introduction
JavaScript can change a page after it loads, including its text, styles, and elements.
```javascript
const heading = document.querySelector("h1");
heading.textContent = "After JavaScript";
```

---

## 📖 Chapter 2: What is the DOM?
The **Document Object Model (DOM)** is the browser's representation of an HTML page as a tree of objects. JavaScript reaches it through the `document` object.

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p
```

```javascript
document.title;                    // The page title
document.documentElement.tagName;  // "HTML"
document.body.tagName;             // "BODY"
console.dir(document.body);        // Shows the element as an object
```

> [!IMPORTANT]
> Place your `<script>` just before `</body>`. A script in `<head>` runs before the elements exist, so selecting them returns `null`.

---

## 📖 Chapter 3: Starter Code
`03_starter_code.html` is a small practice page with an ID, classes, a list, and a link. Use it to try the selectors from the next chapters in the browser console.

---

## 📖 Chapter 4: Selecting Elements by ID
```javascript
const heading = document.getElementById("mainHeading");

document.getElementById("missing"); // null
```

An ID should be unique, so this method returns a **single element** or `null`.

---

## 📖 Chapter 5: Selecting Elements by Class Name
```javascript
const notes = document.getElementsByClassName("note");

notes.length; // 3
notes[0];     // The first element
```

This returns an **HTMLCollection**, a list-like object. If nothing matches, it is empty rather than `null`.

---

## 📖 Chapter 6: Selecting Elements by Tag Name
```javascript
const items = document.getElementsByTagName("li");

for (let item of items) {
  item.textContent = item.textContent.toUpperCase();
}
```

---

## 📖 Chapter 7: Query Selectors
Query selectors accept any **CSS selector**.
```javascript
document.querySelector("p");       // First <p>
document.querySelector("#intro");  // By ID
document.querySelector(".item");   // First match by class
document.querySelector("div a");   // Nested selector
document.querySelectorAll(".item"); // All matches
```

`querySelector()` returns one element or `null`. `querySelectorAll()` returns a **NodeList**, which supports `forEach()`.

---

## 📖 Chapter 8: Setting Content in Objects

| Property | Reads | Hidden Text | HTML Tags |
|---|---|---|---|
| `innerText` | Text as displayed | ❌ Excluded | Not parsed |
| `textContent` | All text | ✅ Included | Not parsed |
| `innerHTML` | Full markup | ✅ Included | ✅ Parsed |

```javascript
plain.textContent = "<b>Shown as plain text</b>";
markup.innerHTML = "<b>Shown as bold text</b>";
```

> [!WARNING]
> Never put user input into `innerHTML`. A visitor could inject code that runs on your page (an XSS attack). Use `textContent` for user input.

---

## 📖 Chapter 9: Manipulating Attributes
```javascript
link.getAttribute("href");
link.setAttribute("title", "Open the MDN documentation");
field.hasAttribute("disabled"); // true
field.removeAttribute("disabled");
```

---

## 📖 Chapter 10: Manipulating Style
The `style` property sets **inline styles**. CSS names with hyphens become camelCase:
```javascript
paragraph.style.color = "white";
paragraph.style.backgroundColor = "purple"; // background-color
```

> [!NOTE]
> `element.style` reads only inline styles. Use `getComputedStyle(element)` to read the final styles, including those from a stylesheet.

---

## 📖 Chapter 11: `classList` Property
Using classes keeps styling in your CSS and is usually better than many inline styles.
```javascript
box.classList.add("active");
box.classList.remove("active");
box.classList.contains("active"); // true or false
box.classList.toggle("rounded");  // Adds if missing, removes if present
```

---

## 📖 Chapter 12: Navigation on Page
Move between related elements:
```javascript
middle.parentElement;            // The <ul>
list.children;                   // Child elements
list.childElementCount;          // 3
middle.previousElementSibling;   // The previous <li>
middle.nextElementSibling;       // The next <li>
```

If no such element exists, the sibling properties return `null`.

---

## 📖 Chapter 13: Adding Elements on Page
First create an element, then insert it:
```javascript
const item = document.createElement("li");
item.textContent = "New item";

list.appendChild(item);                         // Adds one node at the end
list.append(item, " plain text");               // Adds nodes or text at the end
list.prepend(item);                             // Adds at the start
list.insertAdjacentElement("beforebegin", item); // Adds before the list
```

| Position | Location |
|---|---|
| `beforebegin` | Before the element |
| `afterbegin` | Inside, at the start |
| `beforeend` | Inside, at the end |
| `afterend` | After the element |

---

## 📖 Chapter 14: Removing Elements from Page
```javascript
list.removeChild(firstItem); // Called on the parent
secondItem.remove();         // Called on the element
```

---

## 📖 Chapter 15: Practice Questions
Solutions are in `15_practice.html`.

1.  Add a `<p>` with red text saying `Hey, I am red!`.
2.  Add an `<h3>` with blue text saying `I am a blue h3!`.
3.  Add a pink `<div>` with a black border that contains an `<h1>` and a `<p>`.

---

## 📖 Chapter 16: Assignment Questions
The solution is in `16_assignment.html`.

### Q1. Create an input and a button using JavaScript
```javascript
const input = document.createElement("input");
const button = document.createElement("button");

button.textContent = "Click me";
document.body.append(input, button);
```

### Q2. Add attributes
```javascript
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");
```

### Q3. Style the button through `querySelector`
```javascript
const btn = document.querySelector("#btn");

btn.style.backgroundColor = "blue";
btn.style.color = "white";
```

### Q4. Create an underlined purple heading
```javascript
const heading = document.createElement("h1");

heading.textContent = "DOM Practice";
heading.style.textDecoration = "underline";
heading.style.color = "purple";
document.body.append(heading);
```

### Q5. Create a paragraph with a bold word
```javascript
const paragraph = document.createElement("p");

paragraph.innerHTML = "Web Dev <b>Mastery</b> Practice";
document.body.append(paragraph);
```

---

## 📊 Comparison Table: DOM Selection Methods

| Method | Selects By | Returns | If Nothing Matches |
|---|---|---|---|
| `getElementById()` | ID | One element | `null` |
| `getElementsByClassName()` | Class | HTMLCollection | Empty list |
| `getElementsByTagName()` | Tag | HTMLCollection | Empty list |
| `querySelector()` | CSS selector | First element | `null` |
| `querySelectorAll()` | CSS selector | NodeList | Empty list |
