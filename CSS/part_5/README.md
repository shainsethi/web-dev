# CSS Part 5: Flexbox Layout Engine

This guide covers CSS Flexbox, a one-dimensional layout system designed for distributing space and aligning items within containers in a predictable layout flow.

---

## 📖 Chapter 1: Flexbox Architecture (Axes)

Flexbox behaves relative to two perpendicular axes:

```
                  MAIN AXIS (flex-direction: row)
         ─────────────────────────────────────────►
        ┌─────────────────────────────────────────┐
        │  ┌───────┐      ┌───────┐      ┌───────┐  │
  CROSS │  │Item 1 │      │Item 2 │      │Item 3 │  │
  AXIS  │  └───────┘      └───────┘      └───────┘  │
        └─────────────────────────────────────────┘
        ▼
```

*   **Main Axis**: The primary axis along which flex items are laid out. Set by `flex-direction`.
*   **Cross Axis**: The axis perpendicular to the main axis.

---

## 📖 Chapter 2: Flex Container Properties

These properties must be declared on the parent element wrapper (`display: flex`).

### 1. Direction & Wrapping
*   **`flex-direction`**: Sets the main axis orientation.
    *   `row` (default): Horizontal from left to right.
    *   `column`: Vertical from top to bottom.
    *   `row-reverse` / `column-reverse`: Reverses the starting point directions.
*   **`flex-wrap`**: Controls if items stay on one line or wrap to multiple lines.
    *   `nowrap` (default): Fits all items onto a single line, shrinking them if needed.
    *   `wrap`: Wraps overflowing items onto new rows or columns.
*   **`flex-flow`**: Shorthand for `flex-direction` and `flex-wrap`.
    *   *Example*: `flex-flow: row wrap;`

### 2. Main Axis Alignment
*   **`justify-content`**: Aligns items along the **Main Axis**.
    *   `flex-start`: Items align against the start edge.
    *   `flex-end`: Items align against the end edge.
    *   `center`: Items cluster in the center of the container.
    *   `space-between`: Spreads items evenly; first item is at start edge, last is at end edge.
    *   `space-around`: Distributes equal space around all sides of each item.
    *   `space-evenly`: Distributes equal space between every item and the container edges.

### 3. Cross Axis Alignment
*   **`align-items`**: Aligns items along the **Cross Axis** inside a single row or column line.
    *   `stretch` (default): Stretches items to fill the container height/width.
    *   `flex-start` / `flex-end`: Aligns items to the top or bottom edge of the cross axis.
    *   `center`: Centers items along the cross axis line.
    *   `baseline`: Aligns text base-lines inside elements.
*   **`align-content`**: Aligns multi-row flex lines along the cross axis when `flex-wrap` is active. (Has no effect on single-row layouts!).
    *   *Values*: Similar to `justify-content` (`flex-start`, `center`, `space-between`, etc.).

### 4. Gaps
*   **`gap`**: Sets explicit gutters (empty space) between items.
    *   *Example*: `gap: 20px;` (vertical and horizontal gutters) or `gap: 10px 20px;` (row gap, column gap).

---

## 📖 Chapter 3: Flex Item Properties

These properties are declared on individual children inside a flex container.

### 1. Individual Alignment
*   **`align-self`**: Overrides the container's `align-items` setting for a single item.
    ```css
    .special-item { align-self: center; }
    ```

### 2. Dynamic Sizing (Grow, Shrink, Basis)
*   **`flex-grow`**: A ratio representing how much an item will grow relative to others to occupy leftover empty space. (0 = do not grow, default).
*   **`flex-shrink`**: A ratio representing how much an item will shrink if container space overflows. (1 = shrink, default).
*   **`flex-basis`**: Defines the initial default width/height size of the element before space distribution is calculated.
    *   *Values*: `auto` (default), or sizes (e.g., `200px`, `20%`).
*   **`flex` Shorthand**: Standard way to write all three.
    ```css
    /* flex: flex-grow flex-shrink flex-basis; */
    .flex-item {
        flex: 1 1 200px;
    }
    ```
    *   *Common shorthand preset*: `flex: 1;` equals `flex: 1 1 0%;` (makes elements grow/shrink evenly and take equal space).

### 3. Layout Reordering
*   **`order`**: Alters the visual sequence order of children without touching the HTML source order.
    ```css
    .sidebar { order: -1; } /* Moves sidebar to the far left visual spot */
    ```
