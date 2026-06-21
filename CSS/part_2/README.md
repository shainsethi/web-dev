# CSS Part 2: Selectors, Specificity & Cascading

This guide covers how CSS targets elements, how conflicts are resolved (cascading and specificity), how style inheritance works, and how browsers parse styles under the hood.

---

## 📖 Chapter 1: CSS Selectors Reference

Selectors define which HTML elements style declarations apply to. They range from simple tags to advanced relationship and attribute queries.

### 1. Simple Selectors
*   **Universal Selector (`*`)**: Targets every element in the HTML document.
    ```css
    * { box-sizing: border-box; }
    ```
*   **Element (Tag) Selector**: Targets elements matching the tag name.
    ```css
    h1 { color: navy; }
    ```
*   **ID Selector (`#id`)**: Targets a single element with a matching `id` attribute. (Must be unique within a page!)
    ```css
    #hero-header { font-size: 32px; }
    ```
*   **Class Selector (`.class`)**: Targets any element with a matching `class` attribute. Multiple elements can share the same class.
    ```css
    .btn-primary { background-color: blue; }
    ```

### 2. Combinator Selectors (Relationships)
*   **Descendant Selector (`A B`)**: Targets element `B` if it is a descendant (child, grandchild, etc.) inside element `A`.
    ```css
    div p { color: gray; } /* Matches any <p> inside a <div> */
    ```
*   **Child Selector (`A > B`)**: Targets element `B` only if it is a **direct** child of element `A`.
    ```css
    ul > li { list-style: square; }
    ```
*   **Adjacent Sibling Selector (`A + B`)**: Targets element `B` if it immediately follows element `A` at the same level.
    ```css
    h1 + p { font-weight: bold; }
    ```
*   **General Sibling Selector (`A ~ B`)**: Targets all `B` elements that follow element `A` at the same level (does not need to be immediate).
    ```css
    h1 ~ p { color: red; }
    ```

### 3. Attribute Selector
Targets elements based on the presence or value of an HTML attribute.
*   `[attr]`: Has the attribute. (e.g., `input[required]`)
*   `[attr="val"]`: Attribute value matches exactly. (e.g., `input[type="text"]`)
*   `[attr^="val"]`: Attribute value starts with prefix.
*   `[attr$="val"]`: Attribute value ends with suffix.
*   `[attr*="val"]`: Attribute value contains substring.

### 4. Pseudo-Classes (`:`)
Select elements based on their state or structural position.
*   **Interaction**: `:hover` (mouse over), `:focus` (keyboard focus), `:active` (element clicked).
*   **Structure**: `:first-child`, `:last-child`, `:nth-child(n)` (selects the nth element, e.g., `:nth-child(2)` or `:nth-child(odd)`).

### 5. Pseudo-Elements (`::`)
Create virtual elements or target specific parts of elements.
*   `::before`: Inserts virtual content before the element's actual content. Requires the `content` property!
*   `::after`: Inserts virtual content after the element's actual content.
*   `::placeholder`: Targets the placeholder text inside inputs.

---

## 📖 Chapter 2: Cascading, Specificity & Overriding

If multiple rules target the same element with conflicting property values, CSS uses three criteria to determine the winner (ordered from highest priority to lowest):

1.  **Importance**: The `!important` flag overrides everything else.
2.  **Specificity**: A score calculating how specific a selector is.
3.  **Source Order**: If importance and specificity are equal, the rule written last in the CSS code wins.

### Calculating Specificity Scores
Specificity is calculated as a three-part score: `[ID, Class/Attribute/Pseudo-class, Element/Pseudo-element]`.

| Selector | Specificity Score | Example Score |
| :--- | :---: | :---: |
| Inline styles | *Highest* | `1, 0, 0, 0` |
| ID Selector (`#header`) | `0, 1, 0, 0` | `100` |
| Class, Attribute, Pseudo-class (`.btn`, `[type]`, `:hover`) | `0, 0, 1, 0` | `10` |
| Element, Pseudo-element (`div`, `p`, `::before`) | `0, 0, 0, 1` | `1` |
| Universal (`*`) & Combinators (`>`, `+`) | `0, 0, 0, 0` | `0` |

#### Comparison Example:
*   `div p` has a score of `0, 0, 0, 2` (2 element selectors).
*   `.container p` has a score of `0, 0, 1, 1` (1 class + 1 element = 11).
*   `.container p` wins over `div p` because its class selector gives it higher specificity!

### The `!important` Flag
Adding `!important` to a CSS declaration forces it to win over any standard specificity rules.
```css
p {
    color: red !important; /* Overrides any class or ID selectors! */
}
```
> [!WARNING]
> Use `!important` with extreme caution. It makes styles difficult to debug because it bypasses specificity scoring, leading to conflicts that can only be resolved with more `!important` rules.

---

## 📖 Chapter 3: Inheritance in CSS

Some CSS properties are passed down from parent elements to children, while others are not.

*   **Inherited Properties (default)**: Properties dealing with text/typography: `color`, `font-family`, `font-size`, `line-height`, `text-align`.
*   **Non-Inherited Properties**: Properties dealing with layout, spacing, and boxes: `width`, `height`, `margin`, `padding`, `border`, `background-color`, `display`.

To force a child element to inherit a non-inherited property, use the `inherit` value:
```css
.child {
    border: inherit; /* Copies parent's border rule */
}
```

---

## 📖 Chapter 4: How Browsers Render CSS

Understanding how browsers compile and apply styles to HTML helps prevent rendering performance bugs.

1.  **HTML parsing & DOM creation**: The browser parses HTML markup to construct the Document Object Model (DOM) tree.
2.  **CSS parsing & CSSOM creation**: The browser parses the linked and internal CSS to construct the CSS Object Model (CSSOM) tree.
3.  **Render Tree generation**: The DOM and CSSOM are combined to form the Render Tree (representing only visible elements).
4.  **Layout (Reflow)**: The browser calculates exact geometry coordinates and dimensions for each element node on the page screen.
5.  **Painting (Repaint)**: The browser fills in pixels, colors, backgrounds, shadows, text styles, and borders.
6.  **Compositing**: Layers are combined to draw the final display on the screen.
