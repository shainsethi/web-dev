# HTML Part 2: Blocks, Semantics, Formatting & Rendering

This guide covers layout structures, formatting tags, semantic markup, entities, and how browsers translate code into a visual user interface.

---

## 📖 Chapter 1: Block-level vs. Inline-level Elements
In HTML, elements behave in one of two display behaviors by default:

### 1. Block-level Elements
*   Always start on a new line.
*   Automatically occupy the full width of the screen (100% of their parent container).
*   *Examples*: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, `<form>`, `<header>`, `<footer>`.

### 2. Inline-level Elements
*   Do not start on a new line.
*   Only occupy as much width as their inner content requires.
*   *Examples*: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<button>`, `<code>`.

---

## 📖 Chapter 2: Containers (div vs. span)
When you need to group markup elements for styling or layout structures without introducing semantic meaning:
*   **`<div>` (Division)**: A block-level container. Used to wrap sections, cards, grids, and columns.
*   **`<span>`**: An inline container. Used to wrap specific words, characters, or text highlights inside a block element to style them independently.

---

## 📖 Chapter 3: Inline Text Formatters (hr, sup, sub)
*   **`<hr>` (Horizontal Rule)**: Self-closing tag. Renders a separating line across the width of the container.
*   **`<sup>` (Superscript)**: Renders text half-character height above the baseline (e.g. math powers: $x^2$ is `x<sup>2</sup>`).
*   **`<sub>` (Subscript)**: Renders text half-character height below the baseline (e.g. chemical formulas: $H_2O$ is `H<sub>2</sub>O`).

---

## 📖 Chapter 4: Semantic Markup & HTML5
**Semantic markup** means using HTML tags that clearly describe their meaning to both the browser, developers, screen readers, and search engines.

### Why use semantic elements?
1.  **SEO (Search Engine Optimization)**: Helps crawler bots understand content structures.
2.  **Accessibility**: Allows screen readers to announce navigation menus, headers, and articles.
3.  **Clean Code**: Avoids "div-soup" (pages built using hundreds of nested divs with no readability).

| Semantic Tag | Structure Location / Meaning |
| :--- | :--- |
| `<header>` | Introductory header, logo, search bar, navigation links. |
| `<nav>` | Declares primary navigation menu containers. |
| `<main>` | Wraps the unique primary content of the page (only one per document). |
| `<section>` | Groups related articles or topics, usually starts with a heading. |
| `<article>` | Self-contained, syndicatable content block (e.g., blog card, news post). |
| `<aside>` | Sidebars, callout notes, or ads unrelated to main contents. |
| `<footer>` | Document footer (copyright lines, legal links, contact cards). |

---

## 📖 Chapter 5: HTML Entities
HTML uses reserved characters (like `<` and `>`) to compile tags. If you want to render these symbols as actual text on the screen, you must use **HTML Entities**:

*   `&nbsp;` - Non-breaking space (inserts a blank space that doesn't collapse).
*   `&lt;` - Less than (`<`)
*   `&gt;` - Greater than (`>`)
*   `&amp;` - Ampersand (`&`)
*   `&quot;` - Double quotation mark (`"`)
*   `&copy;` - Copyright symbol (`©`)

---

## 📖 Chapter 6: Emmet Abbreviations
Emmet is a plugin built into code editors (like VS Code) that expands shorthand abbreviations into full HTML markup instantly.

### Common Shortcuts:
*   `div.card` expands to `<div class="card"></div>`
*   `ul>li*3` expands to:
    ```html
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    ```
*   `h1+p` expands to:
    ```html
    <h1></h1>
    <p></p>
    ```

---

## 📖 Chapter 7: How HTML Works & Browser Rendering
**HTML5** represents the latest revision of the HTML standard, which introduces semantic elements, rich media tags (`<video>`, `<audio>`), APIs, and responsive guidelines.

### The Browser Rendering Cycle:
When you request a page, the browser downloads the HTML and runs these phases:
1.  **DOM Construction**: The browser parses HTML code to build the **DOM (Document Object Model)** tree representing tags.
2.  **CSSOM Construction**: It parses CSS files to build the **CSSOM (CSS Object Model)** representing styling rules.
3.  **Render Tree**: It combines DOM and CSSOM to build a map of visible elements.
4.  **Layout (Reflow)**: It calculates the exact position and pixel size coordinates of every item.
5.  **Painting**: It draws the text, backgrounds, images, and border layouts onto the monitor screen.
