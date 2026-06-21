# CSS Part 3: Box Model, Display Modes & Units

This guide explains the CSS Box Model, displays controls (`block`, `inline`, `inline-block`, `none`), sizing boundaries, and relative formatting units like `%`, `em`, and `rem`.

---

## 📖 Chapter 1: The CSS Box Model

Every element in HTML is rendered as a rectangular box. The CSS Box Model controls the dimensions and spacing of these boxes.

```
┌───────────────────────────────────────────┐
│                  MARGIN                   │  <- Space outside the border
│  ┌─────────────────────────────────────┐  │
│  │               BORDER                │  │  <- Border line
│  │  ┌───────────────────────────────┐  │  │
│  │  │            PADDING            │  │  │  <- Space inside the border
│  │  │  ┌─────────────────────────┐  │  │  │
│  │  │  │         CONTENT         │  │  │  │  <- Text, images, or child elements
│  │  │  └─────────────────────────┘  │  │  │
│  │  └───────────────────────────────┘  │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
```

### Box Model Components:
1.  **Content**: The actual text, images, or elements inside.
2.  **Padding**: Space between the content and its border. It is transparent and inherits the background color of the element.
3.  **Border**: A line wrapping the padding and content.
4.  **Margin**: Transparent space outside the border. It separates the element from surrounding boxes.

### Controlling Sizing: `box-sizing`
By default, standard sizing is computed using `content-box`, which leads to layout math bugs.
*   **`content-box` (Default)**: Sizing width and height properties only apply to the content box. Padding and borders are added to the outside.
    *   *Calculation*: Total element width = `width` + `padding-left` + `padding-right` + `border-left-width` + `border-right-width`.
*   **`border-box` (Recommended)**: The width and height properties define the entire box size. Padding and borders are absorbed inside the specified size.
    *   *Calculation*: Total element width = specified `width`.

```css
* {
    box-sizing: border-box; /* Standard reset for modern layouts */
}
```

---

## 📖 Chapter 2: Sizing Boundaries

*   **`width` / `height`**: Sets exact dimensions of the box.
*   **`min-width` / `min-height`**: Prevents an element from shrinking below a specific size.
*   **`max-width` / `max-height`**: Prevents an element from stretching beyond a specific size (great for responsive images!).

---

## 📖 Chapter 3: CSS Display Property

The `display` property determines how an element behaves in the document flow and interacts with other elements.

| Feature | `block` | `inline` | `inline-block` | `none` |
| :--- | :--- | :--- | :--- | :--- |
| **New Line?** | Yes | No | No | Hidden |
| **Width / Height?**| Respects | Ignored | Respects | N/A |
| **Margin / Padding?**| Respects all sides | Left/Right only | Respects all sides | N/A |
| **Flow Impact?** | Takes up full row | Fits content width | Fits content width | Completely removed |
| **Examples** | `<div>`, `<p>`, `<h1>` | `<span>`, `<a>`, `<strong>` | `<img>`, `<button>` | - |

---

## 📖 Chapter 4: CSS Sizing Units

Sizing units tell browsers how large text, margins, padding, and boxes should be.

### 1. Absolute Units
*   **`px` (Pixels)**: Fixed, physical units. Easy to use but does not scale if users change default browser font sizes.

### 2. Relative Units
*   **Percentage (`%`)**: Relative to the parent element's size.
    ```css
    .child { width: 50%; } /* Half the width of its parent container */
    ```
*   **`em`**: Scaled relative to the **font-size of the element itself** (or parent's font-size if used for `font-size`).
    *   *Example*: If `font-size` is `16px`, `padding: 2em` equals `32px`.
*   **`rem` (Root EM)**: Scaled relative to the **font-size of the root HTML element** (usually `16px` by default in browsers).
    *   *Benefit*: Using `rem` makes your entire site typography and layout scale together if a user increases their browser font zoom!
    *   *Conversion table (assuming 16px root)*:
        *   `0.5rem` = `8px`
        *   `1rem` = `16px`
        *   `1.5rem` = `24px`
        *   `2rem` = `32px`
        *   `3rem` = `48px`
