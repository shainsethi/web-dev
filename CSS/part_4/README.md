# CSS Part 4: Transforms, Positions & Smiley Drawing

This guide details visual properties in CSS: opacity levels, transition controls, 2D transforms, shadows, positioning systems (`static`, `relative`, `absolute`, `fixed`, `sticky`), and how to use positioning to build a custom CSS drawing.

---

## 📖 Chapter 1: Opacity vs Alpha Channel

To make elements transparent, you have two main options:

1.  **`opacity: value` (0.0 to 1.0)**: Makes the **entire element** transparent, including its text, borders, and all child elements.
2.  **`rgba()` or `hsla()` Colors**: Sets transparency on the **background color only**, leaving child text/elements completely opaque (solid).

---

## 📖 Chapter 2: CSS Transitions

Transitions allow you to change property values smoothly over a specified duration rather than instantly.

### Transition Properties:
*   `transition-property`: The CSS property name to watch (e.g. `background-color`, `transform`, `all`).
*   `transition-duration`: How long the animation takes (e.g. `0.3s`, `500ms`).
*   `transition-timing-function`: Speed curve (e.g. `linear`, `ease`, `ease-in`, `ease-out`, `cubic-bezier`).
*   `transition-delay`: Time to wait before starting the transition.

### Shorthand Syntax:
```css
/* transition: property duration timing-function delay; */
.btn {
    transition: background-color 0.3s ease-in-out;
}
```

---

## 📖 Chapter 3: 2D Transforms

The `transform` property applies geometry changes to elements without affecting normal document flow.

1.  **`rotate(angle)`**: Spins the element around its origin point.
    *   *Example*: `transform: rotate(45deg);`
2.  **`scale(x, y)`**: Resizes the element bigger or smaller.
    *   *Example*: `transform: scale(1.2);` (scales up by 20%)
3.  **`translate(x, y)`**: Moves the element from its original position coordinates.
    *   *Example*: `transform: translate(10px, -20px);`
4.  **`skew(x-angle, y-angle)`**: Slants the element along the axes.
    *   *Example*: `transform: skewX(10deg);`

---

## 📖 Chapter 4: Shadows & Background Images

*   **`box-shadow`**: Adds shadow effects to element boxes.
    ```css
    /* box-shadow: h-offset v-offset blur spread color; */
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    ```
*   **`background-image`**: Sets an image background.
    ```css
    .hero {
        background-image: url('hero.jpg');
        background-size: cover; /* Rescales image to cover box */
        background-position: center; /* Centers alignment */
        background-repeat: no-repeat; /* Avoids tiling */
    }
    ```

---

## 📖 Chapter 5: CSS Positioning Systems

The `position` property determines how an element is positioned on the page. Use `top`, `bottom`, `left`, and `right` offsets to move it.

### Position Values:
1.  **`static` (Default)**: Follows normal document flow. Offset properties (`top`, `left`, etc.) have no effect.
2.  **`relative`**: Positioned relative to its **original normal position**. The space it occupied remains in the document flow. It acts as a reference boundary for absolutely positioned children!
3.  **`absolute`**: Removed from normal flow. Positioned relative to its **nearest positioned ancestor** (an ancestor that has `position` set to `relative`, `absolute`, or `fixed`). If none exists, it positions relative to the root `<html>`.
4.  **`fixed`**: Removed from normal flow. Positioned relative to the **viewport (screen)**. Stays fixed in the same spot even when scrolling.
5.  **`sticky`**: Behaves like `relative` until the scroll position reaches a threshold (e.g. `top: 0`), then "sticks" in place like a `fixed` element.

---

## 📖 Chapter 6: Building a CSS Smiley Face

By combining nested elements and absolute positioning, you can paint vector drawings directly in HTML/CSS.

### Basic Recipe:
1.  Create a **relative container** to represent the face head (e.g., `width: 200px`, `height: 200px`, `border-radius: 50%` for a circle).
2.  Add child divs inside for the eyes and mouth.
3.  Use **absolute positioning** to position those eyes and mouth relative to the face boundaries (using percentage coordinates).
4.  Apply `border-radius` to shape the eyes and mouth elements.
5.  Use transforms for fine-tuning angles!
