# HTML Part 3: Tables & Forms

This guide explains how to present structured data using tables and how to build interactive inputs using form elements.

---

## 📖 Chapter 1: Tables & Semantics
HTML tables organize data into rows and columns. Using semantic table elements helps search engines and screen readers parse your data correctly:

*   `<table>`: The wrapper element for the entire table.
*   `<thead>`: Groups header content (usually the first row showing column names).
*   `<tbody>`: Groups the body/data content rows.
*   `<tfoot>`: Groups footer or summary data at the bottom of the table.
*   `<tr>` (Table Row): Defines a horizontal row of cells.
*   `<th>` (Table Header): Defines a header cell. Text renders **bold** and **centered** by default.
*   `<td>` (Table Data): Defines a standard data cell.

---

## 📖 Chapter 2: Colspan & Rowspan
You can expand a cell to occupy multiple columns or rows using span attributes:

*   **`colspan` (Column Span)**: Merges a cell horizontally across multiple columns (e.g., `colspan="2"` stretches the cell across two columns).
*   **`rowspan` (Row Span)**: Merges a cell vertically down across multiple rows (e.g., `rowspan="2"` stretches the cell down across two rows).

---

## 📖 Chapter 3: Forms in HTML
The `<form>` tag wraps all input controls and coordinates how data is submitted to a server.
*   **Syntax**: `<form action="/submit-path" method="POST"> ... </form>`
*   `action`: The URL endpoint where data is sent.
*   `method`: The HTTP transmission method (`GET` or `POST`).

---

## 📖 Chapter 4: Form Elements & Attributes

### 1. The `<input>` Element
The primary element used to collect user data. Its behavior changes based on the `type` attribute.

### 2. Labels & Placeholders
*   **`<label>`**: Defines a label caption for a form control.
    *   *Usage*: The `for` attribute in the label **must match** the `id` of the input element to link them together.
*   **`placeholder` Attribute**: Displays temporary hint text inside the input box before the user types anything.
```html
<label for="email-field">Email:</label>
<input type="email" id="email-field" placeholder="name@example.com">
```

### 3. The `name` Attribute
The `name` attribute is critical. When a form is submitted, the data is sent as `name=value` pairs. **If an input does not have a `name` attribute, its value will not be sent to the server.**

### 4. The `<button>` Element
Used to submit the form or trigger JavaScript actions.
*   Use `<button type="submit">` inside a form to trigger submission.

---

## 📖 Chapter 5: Advanced Form Inputs

### 1. Checkboxes (`type="checkbox"`)
Used when a user can select **one or more** options from a list.
```html
<input type="checkbox" id="coding" name="hobby" value="code">
<label for="coding">Coding</label>
```

### 2. Radio Buttons (`type="radio"`)
Used when a user can select **only one** option from a group.
*   *Rule*: All radio buttons in the same group **must share the same `name` attribute** so the browser knows they are mutually exclusive.
```html
<input type="radio" id="yes" name="subscribe" value="y">
<label for="yes">Yes</label>
<input type="radio" id="no" name="subscribe" value="n">
<label for="no">No</label>
```

### 3. Dropdowns (`<select>` Element)
Creates a dropdown select menu. Wrap selection items in `<option>` tags. Note that `<select>` is a standalone tag, not an `<input>` tag.
```html
<label for="cars">Choose a car:</label>
<select id="cars" name="car_brand">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
</select>
```

### 4. Range Sliders (`type="range"`)
Displays a visual slider bar to select a numerical value within bounds.
*   Attributes: `min` (minimum value), `max` (maximum value), and `step` (increment intervals).
```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="vol_level" min="0" max="100">
```

### 5. Multi-line Text Area (`<textarea>`)
Used for entering long, multi-line text (like comments or descriptions). Unlike input, it requires a closing tag and does not use `value`.
```html
<label for="bio">Bio:</label>
<textarea id="bio" name="user_bio" rows="4" cols="30"></textarea>
```
