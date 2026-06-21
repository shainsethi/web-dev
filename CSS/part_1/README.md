# CSS Part 1: Syntax, Inclusion, Colors & Typography

This guide covers the entry-level concepts of CSS styling, including inclusion methods, text formatting, color models, and typography settings.

---

## 📖 Chapter 1: What is CSS?
CSS (**Cascading Style Sheets**) is a stylesheet language used to describe the presentation, design, colors, and layout structure of HTML documents.

### Basic CSS Format:
CSS rules consist of a **selector** (what to style) and a **declaration block** (how to style it):
```css
selector {
    property: value;
    another-property: another-value;
}
```
*   **Property**: The styling feature you want to change (e.g. `color`, `font-size`).
*   **Value**: The setting applied to that feature (e.g. `red`, `16px`).

---

## 📖 Chapter 2: Including CSS in HTML
You can attach CSS styles to your HTML document in three ways:

1.  **Inline CSS**: Applied directly to a single tag using the `style` attribute.
    ```html
    <h1 style="color: blue; text-align: center;">Inline Styled Heading</h1>
    ```
2.  **Internal CSS**: Defined in the `<head>` of the HTML file inside `<style>` tags.
    ```html
    <style>
        h1 { color: blue; }
    </style>
    ```
3.  **External CSS**: Written in a separate `.css` file and linked in the HTML `<head>` using `<link>`. **This is the recommended standard method!**
    ```html
    <link rel="stylesheet" href="style.css">
    ```

---

## 📖 Chapter 3: Color & Background Color Properties
*   **`color`**: Sets the foreground (text) color of the element.
*   **`background-color`**: Sets the background color behind the element content.

---

## 📖 Chapter 4: CSS Color Systems
JavaScript/CSS supports various ways to declare colors:

1.  **Color Names**: Using preset keyword names (e.g., `red`, `blue`, `tomato`, `darkgreen`).
2.  **HEX Code**: Hexadecimal representation starting with `#`. Format is `#RRGGBB` using base-16 digits (`0-9` and `a-f`).
    *   *Examples*: `#ffffff` (white), `#000000` (black), `#ff0000` (pure red).
3.  **RGB System**: Defines Red, Green, and Blue intensity values ranging from `0` to `255`.
    *   *Example*: `rgb(255, 0, 0)` is red. `rgba(255, 0, 0, 0.5)` includes an alpha channel for 50% transparency.
4.  **HSL System**: Defines Hue (0-360 degrees on color wheel), Saturation (0-100% intensity), and Lightness (0-100% brightness). Recommended for easy color adjustments!
    *   *Example*: `hsl(0, 100%, 50%)` is red.

---

## 📖 Chapter 5: Text Formatting & Typography

### 1. Alignment
*   **`text-align`**: Positions text elements. Options: `left`, `right`, `center`, `justify`.

### 2. Styling
*   **`font-weight`**: Controls thickness of text. Options: keywords (`normal`, `bold`) or numbers (`100` to `900`).
*   **`text-decoration`**: Adds lines over, under, or through text. Common values: `none` (often used to remove underlines from links), `underline`, `line-through`.

### 3. Spacing
*   **`line-height`**: Specifies the height of text lines (used for line spacing).
*   **`letter-spacing`**: Increases or decreases the space between text characters.

### 4. Sizing Units
*   **Absolute (`px`)**: Represents physical pixels on the screen (e.g., `16px`).
*   **Relative (`%`, `em`, `rem`)**: Scalable sizes.
    *   `rem`: Scaled relative to the HTML root font size (usually `16px`).

### 5. Font Family
*   **`font-family`**: Defines the typeface. Always declare a fallback stack in case the user does not have your primary font installed:
    ```css
    body {
        font-family: 'Helvetica', 'Arial', sans-serif;
    }
    ```
    *   *Fallbacks*: `sans-serif` (clean fonts without serifs), `serif` (fonts with small strokes), `monospace` (fixed-width fonts).
