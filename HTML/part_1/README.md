# HTML Part 1: Elements, Tags, Lists & Media

This guide explains the foundational building blocks of HTML structure. You can review and run the code examples in this directory to see the markup in action.

---

## 📖 Chapter 1: HTML Elements & Tags
HTML (HyperText Markup Language) describes the layout structure of a web page using **elements**.

*   **Tags**: Annotations wrapped in angle brackets. Every element has an **opening tag** (e.g. `<p>`) and a **closing tag** (e.g. `</p>`).
*   **Elements**: The complete collection consisting of the opening tag, the inner content text/node, and the closing tag:
    ```html
    <p>This is the inner content of a paragraph element.</p>
    ```
*   **Self-Closing (Empty) Elements**: Elements that do not wrap content or require closing tags (e.g. `<img>`, `<br>`, `<hr>`).

---

## 📖 Chapter 2: Headings & Paragraphs
*   **Headings (`<h1>` to `<h6>`)**: Define section headings. `<h1>` represents the highest importance (main page title), while `<h6>` represents the lowest.
    *   *Rule*: Use only **one** `<h1>` per page. Avoid skipping heading levels (e.g. going from `h1` straight to `h3`).
*   **Paragraphs (`<p>`)**: Define text block elements. Browsers automatically wrap paragraph content and add a margin before and after them.

---

## 📖 Chapter 3: The HTML5 Boilerplate
Every HTML file requires a standard skeleton structure to load correctly in web browsers:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Visual page contents go here -->
</body>
</html>
```
### Boilerplate Tag Definitions:
1.  `<!DOCTYPE html>`: Informs the browser that this is an HTML5 document.
2.  `<html lang="en">`: The root wrapper for all page markup, declaring English as the page language.
3.  `<head>`: Contains page metadata, encoding rules, and tab titles (not visible to users).
4.  `<meta charset="UTF-8">`: Enables standard character rendering for almost all world languages.
5.  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configures responsive scaling for mobile screens.
6.  `<body>`: Wraps all visible layout elements.

---

## 📖 Chapter 4: Lists in HTML
HTML supports three list styles to display items:

1.  **Unordered List (`<ul>`)**: Displays items with bullet points. Individual items are wrapped in `<li>` (List Item) tags.
2.  **Ordered List (`<ol>`)**: Displays sequenced items numbered `1, 2, 3...` by default.
    *   *Attributes*: `type` (changes numbering index to letters or roman numerals), `start` (defines starting number), `reversed` (counts backwards).
3.  **Description List (`<dl>`)**: Displays dictionary terms and details:
    *   `<dt>`: Definition Term.
    *   `<dd>`: Definition Detail.

---

## 📖 Chapter 5: Attributes
Attributes provide configurations or change element behaviors. They must:
*   Always be declared inside the **opening tag**.
*   Use the key-value syntax: `name="value"`.

### Global Attributes:
*   `class`: A reusable group styling identifier.
*   `id`: A **unique** element identifier (must occur only once per page).
*   `style`: Applies inline CSS rules.
*   `title`: Defines tooltips shown when hovering over elements.

---

## 📖 Chapter 6: Anchor Elements (`<a>`)
Anchors establish hyperlinks that connect webpages.
*   `href` (Hypertext Reference): The target URL or file path.
*   `target="_blank"`: Opens the link in a new tab.
*   **Bookmark Links**: You can link to specific sections on the same page by setting `href="#target-id"` to match the target element's `id`.

---

## 📖 Chapter 7: Image Elements (`<img>`)
The self-closing `<img>` tag embeds visual media.
*   `src`: The file path/URL of the image asset.
*   `alt` (Alternate Text): Describes the image for accessibility screen readers and search engines. Displays if the image fails to load.
*   `width` / `height`: Defines display dimensions in pixels.
*   `loading="lazy"`: Improves performance by delaying image loads until they scroll into view.

---

## 📖 Chapter 8: Comments & Case Sensitivity

### 1. HTML Comments
Comments are ignored by the browser parser. They are written as:
```html
<!-- This is a comment -->
```

### 2. Case Sensitivity
HTML tags and attributes are **case-insensitive** (`<p>` and `<P>` perform identically). However, standard practice recommends using **lowercase** for clean, readable code.
*   *Warning*: Class names, IDs, and image filenames **are case-sensitive** on most servers.
