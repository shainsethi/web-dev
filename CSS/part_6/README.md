# CSS Part 6: Grid, Animations & Responsive Design

This guide explains the CSS Grid 2D layout model, keyframe animation syntax, media queries for mobile-first designs, and z-index depth stacks.

---

## 📖 Chapter 1: CSS Grid Layout

CSS Grid is a powerful two-dimensional layout engine, meaning it handles both columns (horizontal) and rows (vertical) simultaneously.

### 1. Grid Container Properties
*   **`display: grid`**: Declares the element as a grid container.
*   **`grid-template-columns`**: Configures the columns structure.
    *   *Examples*:
        *   `grid-template-columns: 200px 1fr 1fr;` (first column fixed, other two share space).
        *   `grid-template-columns: repeat(3, 1fr);` (three equal columns).
*   **`grid-template-rows`**: Configures the rows structure.
*   **`gap`**: Gutters between cells. (Shorthand for `row-gap` and `column-gap`).
*   **`grid-template-areas`**: Defines named layouts.
    ```css
    .layout {
        display: grid;
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
    }
    ```

### 2. Grid Item Properties
*   **`grid-column`**: Shorthand for start and end grid line tracking.
    *   *Example*: `grid-column: 1 / 3;` (Starts at line 1, spans to line 3).
    *   *Example*: `grid-column: span 2;` (Spans 2 columns).
*   **`grid-row`**: Start/end row line tracking.
    *   *Example*: `grid-row: 1 / -1;` (Spans from first line to the very last line).
*   **`grid-area`**: Assigns an item to a named template area grid slot.
    ```css
    header { grid-area: header; }
    ```

---

## 📖 Chapter 2: Keyframe Animations

CSS animations let elements transition through multiple states using timeline percentages.

### 1. Defining Animation Keyframes (`@keyframes`)
The `@keyframes` rule specifies the style frames at points on the timeline (`from`/`0%` to `to`/`100%`).
```css
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
```

### 2. Applying Animations
*   `animation-name`: The keyframe identifier.
*   `animation-duration`: Timeline length (e.g. `2s`).
*   `animation-timing-function`: Linear, ease, ease-in, cubic-bezier.
*   `animation-iteration-count`: Repetition limit (`infinite` or numbers like `3`).
*   `animation-direction`: `normal`, `reverse`, `alternate` (cycles back and forth).

### 3. Shorthand Syntax:
```css
/* animation: name duration timing-function delay iteration-count direction; */
.box {
    animation: slideIn 0.5s ease-out 0s infinite alternate;
}
```

---

## 📖 Chapter 3: Responsive Design & Media Queries

Media queries dynamically apply style rules depending on device viewport settings.

### 1. Mobile-First Standard
The standard practice is to style for mobile viewports by default (without media queries), then add query overrides to scale the layout up for larger screen formats.

### 2. Breakpoints & Query Syntax
Common media criteria use screen dimension boundaries:
```css
/* Styles for tablets and small laptops */
@media (min-width: 768px) {
    .container { grid-template-columns: repeat(2, 1fr); }
}

/* Styles for desktop screens */
@media (min-width: 1024px) {
    .container { grid-template-columns: repeat(4, 1fr); }
}
```

### 3. Orientation Rules
*   `orientation: landscape`: Screen is wider than it is tall.
*   `orientation: portrait`: Screen is taller than it is wide.

---

## 📖 Chapter 4: Depth Stacking (`z-index`)

The `z-index` property controls the visual overlap ordering along the z-axis (depth).

*   **Rule 1**: Only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`). It is ignored on `static` elements!
*   **Rule 2**: Higher numbers render on top of lower numbers.
*   ```css
    .popup {
        position: absolute;
        z-index: 999; /* Renders on top of standard content stack */
    }
    ```
