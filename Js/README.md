# JavaScript Fundamentals Course

Welcome to the JavaScript Fundamentals section! These parts cover the basics of programming in JavaScript.

All code examples are written in simple, uncommented JavaScript files located in each `part_N/` directory.

> [!TIP]
> **Study Guide Available**: For step-by-step beginner-friendly explanations of all concepts, read the [part_1.md Study Guide](file:///home/shain/Workspace/Web%20development/Js/part_1/part_1.md) inside the `part_1/` folder.

---

## 🏃 How to Run the Examples

You can run each of these JavaScript files directly from your terminal using **Node.js**:

1. Open your terminal.
2. Navigate to this directory:
   ```bash
   cd "/home/shain/Workspace/Web development/Js"
   ```
3. Run any file using `node "part_1/filename.js"`:
   ```bash
   node "part_1/01_console.js"
   ```

---

## 🗺️ Part 1 Chapters

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Console** | [01_console.js](file:///home/shain/Workspace/Web%20development/Js/part_1/01_console.js) | Print messages, warnings, errors, and grids. |
| **02** | **REPL Environment** | [02_repl.js](file:///home/shain/Workspace/Web%20development/Js/part_1/02_repl.js) | Run JavaScript code statements interactively inside Node.js. |
| **03** | **Casing & Typing** | [03_casing_typing.js](file:///home/shain/Workspace/Web%20development/Js/part_1/03_casing_typing.js) | Learn about case-sensitive identifiers and dynamic typing. |
| **04** | **The 7 Data Types** | [04_data_types.js](file:///home/shain/Workspace/Web%20development/Js/part_1/04_data_types.js) | Declarations of Number, Boolean, String, Undefined, Null, Bigint, and Symbol. |
| **05** | **Number Types** | [05_numbers.js](file:///home/shain/Workspace/Web%20development/Js/part_1/05_numbers.js) | Review positive, negative, integer, and decimal numbers. |
| **06** | **Types of Operations** | [06_operations.js](file:///home/shain/Workspace/Web%20development/Js/part_1/06_operations.js) | Math equations including addition, modulo, and exponentiation. |
| **07** | **NaN (Not a Number)** | [07_nan.js](file:///home/shain/Workspace/Web%20development/Js/part_1/07_nan.js) | Understand invalid mathematical results and their type mapping. |
| **08** | **Booleans** | [08_booleans.js](file:///home/shain/Workspace/Web%20development/Js/part_1/08_booleans.js) | Initialize logical truth/false flag markers. |
| **09** | **Standard Conversions** | [09_number_conversions.js](file:///home/shain/Workspace/Web%20development/Js/part_1/09_number_conversions.js) | Convert boolean values to integer outputs using `Number()` and unary `+`. |
| **10** | **Bitwise Conversions** | [10_bitwise_conversions.js](file:///home/shain/Workspace/Web%20development/Js/part_1/10_bitwise_conversions.js) | Convert boolean false to number 0 using the double bitwise NOT operator `~~`. |
| **11** | **Type Checking** | [11_typeof.js](file:///home/shain/Workspace/Web%20development/Js/part_1/11_typeof.js) | Inspect variable data types using the `typeof` utility. |
| **12** | **Operator Precedence** | [12_precedence.js](file:///home/shain/Workspace/Web%20development/Js/part_1/12_precedence.js) | Learn the strict evaluation order of math operations (`()`, `**`, `*|/|%`, `+|-`). |
| **13** | **`let`, `var` & `const`** | [13_let_var_const.js](part_1/13_let_var_const.js) | Declare variables and compare reassignment rules. |
| **14** | **Scope** | [14_scope.js](part_1/14_scope.js) | Understand function scope, block scope, and implicit globals. |
| **15** | **Hoisting & TDZ** | [15_hoisting_tdz.js](part_1/15_hoisting_tdz.js) | Learn how declarations are hoisted and the Temporal Dead Zone. |
| **16** | **Strict Mode** | [16_use_strict.js](part_1/16_use_strict.js) | Catch common mistakes with `"use strict"`. |

---

## 🗺️ Part 2 Chapters

Study guide: [part_2.md](part_2/part_2.md). Run files from this directory with `node part_2/01_console_log.js`. Chapters 2, 19, and assignment Q2 run in a browser by opening their `.html` file.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **`console.log()`** | [01_console_log.js](part_2/01_console_log.js) | Print text, expressions, and multiple values. |
| **02** | **Linking a JS File** | [02_linking_js.html](part_2/02_linking_js.html) | Connect an external script to HTML. |
| **03** | **Template Literals** | [03_template_literals.js](part_2/03_template_literals.js) | Embed expressions in backtick strings. |
| **04** | **Operators** | [04_operators.js](part_2/04_operators.js) | Use increment, decrement, and assignment operators. |
| **05** | **Comparison Operators** | [05_comparison_operators.js](part_2/05_comparison_operators.js) | Compare values with loose and strict equality. |
| **06** | **Comparison for Non-numbers** | [06_comparison_non_numbers.js](part_2/06_comparison_non_numbers.js) | Compare strings, `null`, `undefined`, and `NaN`. |
| **07** | **Conditional Statements** | [07_conditional_statements.js](part_2/07_conditional_statements.js) | Control which code runs. |
| **08** | **`if` Statement** | [08_if_statement.js](part_2/08_if_statement.js) | Run code when a condition is true. |
| **09** | **Practice: `if`** | [09_practice_if.js](part_2/09_practice_if.js) | Solve basic condition problems. |
| **10** | **`else if` Statement** | [10_else_if_statement.js](part_2/10_else_if_statement.js) | Check several conditions in order. |
| **11** | **`else` Statement** | [11_else_statement.js](part_2/11_else_statement.js) | Add a fallback branch. |
| **12** | **Practice: `else`** | [12_practice_else.js](part_2/12_practice_else.js) | Solve even/odd, largest number, and grade problems. |
| **13** | **Nested `if-else`** | [13_nested_if_else.js](part_2/13_nested_if_else.js) | Place conditions inside conditions. |
| **14** | **Logical Operators** | [14_logical_operators.js](part_2/14_logical_operators.js) | Combine conditions with `&&`, `\|\|`, and `!`. |
| **15** | **Practice: Logical** | [15_practice_logical.js](part_2/15_practice_logical.js) | Solve leap year and eligibility problems. |
| **16** | **Truthy & Falsy** | [16_truthy_falsy.js](part_2/16_truthy_falsy.js) | Learn how values behave in conditions. |
| **17** | **`switch` Statement** | [17_switch_statement.js](part_2/17_switch_statement.js) | Match one value against many cases. |
| **18** | **Practice: `switch`** | [18_practice_switch.js](part_2/18_practice_switch.js) | Build day, month, and calculator programs. |
| **19** | **Alerts & Prompts** | [19_alerts_prompts.html](part_2/19_alerts_prompts.html) | Show popups and read user input. |
| **20** | **Assignment Questions** | [20_assignment.js](part_2/20_assignment.js), [Q2 page](part_2/20_assignment_q2.html) | Solve the six Part 2 assignment problems. |

---

## 🗺️ Part 3 Chapters

Study guide: [part_3.md](part_3/part_3.md). Run files from this directory with `node part_3/01_string_methods.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **String Methods** | [01_string_methods.js](part_3/01_string_methods.js) | Call methods and read properties on strings. |
| **02** | **Trim** | [02_trim.js](part_3/02_trim.js) | Remove surrounding whitespace. |
| **03** | **Strings are Immutable** | [03_strings_immutable.js](part_3/03_strings_immutable.js) | See why string methods return new strings. |
| **04** | **Upper & Lower Case** | [04_upper_lower_case.js](part_3/04_upper_lower_case.js) | Change case and compare text. |
| **05** | **`indexOf`** | [05_index_of.js](part_3/05_index_of.js) | Pass arguments to find text positions. |
| **06** | **Method Chaining** | [06_method_chaining.js](part_3/06_method_chaining.js) | Combine methods in one expression. |
| **07** | **Slice** | [07_slice.js](part_3/07_slice.js) | Extract part of a string. |
| **08** | **Replace & Repeat** | [08_replace_repeat.js](part_3/08_replace_repeat.js) | Replace and repeat text. |
| **09** | **Practice: Strings** | [09_practice_strings.js](part_3/09_practice_strings.js) | Solve string cleanup and extraction problems. |
| **10** | **Array Data Structure** | [10_array_data_structure.js](part_3/10_array_data_structure.js) | Store ordered lists of values. |
| **11** | **Visualizing Arrays** | [11_visualizing_arrays.js](part_3/11_visualizing_arrays.js) | Understand zero-based indexes. |
| **12** | **Creating Arrays** | [12_creating_arrays.js](part_3/12_creating_arrays.js) | Create empty, mixed, and constructed arrays. |
| **13** | **Arrays are Mutable** | [13_arrays_mutable.js](part_3/13_arrays_mutable.js) | Change array items in place. |
| **14** | **Array Methods** | [14_array_methods.js](part_3/14_array_methods.js) | Use `push`, `pop`, `shift`, and `unshift`. |
| **15** | **Practice: Array Methods** | [15_practice_array_methods.js](part_3/15_practice_array_methods.js) | Solve queue, history, and swap problems. |
| **16** | **`indexOf` & `includes`** | [16_index_of_includes.js](part_3/16_index_of_includes.js) | Search arrays. |
| **17** | **Concat & Reverse** | [17_concat_reverse.js](part_3/17_concat_reverse.js) | Join and reverse arrays. |
| **18** | **Slice in Arrays** | [18_slice_arrays.js](part_3/18_slice_arrays.js) | Copy part of an array. |
| **19** | **Splice in Arrays** | [19_splice_arrays.js](part_3/19_splice_arrays.js) | Remove, insert, and replace items. |
| **20** | **Sort in Arrays** | [20_sort_arrays.js](part_3/20_sort_arrays.js) | Sort strings and numbers correctly. |
| **21** | **Practice: Arrays** | [21_practice_arrays.js](part_3/21_practice_arrays.js) | Combine array methods. |
| **22** | **Array References** | [22_array_references.js](part_3/22_array_references.js) | Understand shared references and copies. |
| **23** | **Constant Arrays** | [23_constant_arrays.js](part_3/23_constant_arrays.js) | See what `const` does and does not protect. |
| **24** | **Nested Arrays** | [24_nested_arrays.js](part_3/24_nested_arrays.js) | Work with rows and columns. |
| **25** | **Practice: Nested Arrays** | [25_practice_nested_arrays.js](part_3/25_practice_nested_arrays.js) | Solve board, grid, and student list problems. |
| **26** | **Assignment Questions** | [26_assignment.js](part_3/26_assignment.js) | Solve the six Part 3 assignment problems. |

---

## 🗺️ Part 4 Chapters

Study guide: [part_4.md](part_4/part_4.md). Run files from this directory with `node part_4/01_for_loops.js`. Chapters 9 and 15 run in a browser by opening their `.html` file.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **`for` Loops** | [01_for_loops.js](part_4/01_for_loops.js) | Repeat code a set number of times. |
| **02** | **Dry Run** | [02_dry_run.js](part_4/02_dry_run.js) | Trace a loop step by step. |
| **03** | **Print Odd Numbers** | [03_print_odd_numbers.js](part_4/03_print_odd_numbers.js) | Print odd numbers in two ways. |
| **04** | **Print Even Numbers** | [04_print_even_numbers.js](part_4/04_print_even_numbers.js) | Print even numbers in two ways. |
| **05** | **Infinite Loops** | [05_infinite_loops.js](part_4/05_infinite_loops.js) | Recognize and fix loops that never end. |
| **06** | **Multiplication Table** | [06_multiplication_table.js](part_4/06_multiplication_table.js) | Print a table with a loop. |
| **07** | **Nested `for` Loop** | [07_nested_for_loop.js](part_4/07_nested_for_loop.js) | Place loops inside loops and build patterns. |
| **08** | **`while` Loops** | [08_while_loops.js](part_4/08_while_loops.js) | Repeat while a condition is true. |
| **09** | **Favorite Movie** | [09_favorite_movie.html](part_4/09_favorite_movie.html) | Build a guessing game. |
| **10** | **`break` Keyword** | [10_break_keyword.js](part_4/10_break_keyword.js) | Exit a loop early. |
| **11** | **Loops with Arrays** | [11_loops_with_arrays.js](part_4/11_loops_with_arrays.js) | Visit and calculate array values. |
| **12** | **Loops with Nested Arrays** | [12_loops_with_nested_arrays.js](part_4/12_loops_with_nested_arrays.js) | Loop through rows and columns. |
| **13** | **`for-of` Loops** | [13_for_of_loops.js](part_4/13_for_of_loops.js) | Read values without an index. |
| **14** | **Nested `for-of` Loop** | [14_nested_for_of.js](part_4/14_nested_for_of.js) | Read nested arrays with `for-of`. |
| **15** | **Todo App** | [15_todo_app.html](part_4/15_todo_app.html) | Build a list, add, delete, and quit app. |
| **16** | **Assignment Questions** | [16_assignment.js](part_4/16_assignment.js) | Solve the five Part 4 assignment problems. |

---

## 🗺️ Part 5 Chapters

Study guide: [part_5.md](part_5/part_5.md). Run files from this directory with `node part_5/01_object_literals.js`. Chapter 12 runs in a browser by opening its `.html` file.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Object Literals** | [01_object_literals.js](part_5/01_object_literals.js) | Store data as key-value pairs. |
| **02** | **Creating Object Literals** | [02_creating_object_literals.js](part_5/02_creating_object_literals.js) | Create objects with different value types. |
| **03** | **Creating a Post** | [03_creating_a_post.js](part_5/03_creating_a_post.js) | Model a social media post. |
| **04** | **Get Values** | [04_get_values.js](part_5/04_get_values.js) | Read values with dot and bracket notation. |
| **05** | **Conversion in Get Values** | [05_conversion_get_values.js](part_5/05_conversion_get_values.js) | See how keys become strings. |
| **06** | **Add / Update Values** | [06_add_update_values.js](part_5/06_add_update_values.js) | Add, change, and delete properties. |
| **07** | **Nested Objects** | [07_nested_objects.js](part_5/07_nested_objects.js) | Store objects inside objects. |
| **08** | **Array of Objects** | [08_array_of_objects.js](part_5/08_array_of_objects.js) | Work with lists of records. |
| **09** | **Math Object** | [09_math_object.js](part_5/09_math_object.js) | Use built-in math constants and methods. |
| **10** | **Random Integers** | [10_random_integers.js](part_5/10_random_integers.js) | Generate whole numbers in a range. |
| **11** | **Practice: Random** | [11_practice_random.js](part_5/11_practice_random.js) | Solve random range problems. |
| **12** | **Guessing Game** | [12_guessing_game.html](part_5/12_guessing_game.html) | Build a number guessing game. |
| **13** | **Assignment Questions** | [13_assignment.js](part_5/13_assignment.js) | Solve the Part 5 assignment problems. |

---

## 🗺️ Part 6 Chapters

Study guide: [part_6.md](part_6/part_6.md). Run files from this directory with `node part_6/01_what_are_functions.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **What are Functions?** | [01_what_are_functions.js](part_6/01_what_are_functions.js) | Define and call reusable code. |
| **02** | **Practice 1** | [02_practice_1.js](part_6/02_practice_1.js) | Print a poem with a function. |
| **03** | **Practice 2** | [03_practice_2.js](part_6/03_practice_2.js) | Roll a dice with a function. |
| **04** | **Functions with Arguments** | [04_functions_with_arguments.js](part_6/04_functions_with_arguments.js) | Pass values and use default parameters. |
| **05** | **Practice 3** | [05_practice_3.js](part_6/05_practice_3.js) | Print the average of 3 numbers. |
| **06** | **Practice 4** | [06_practice_4.js](part_6/06_practice_4.js) | Print a multiplication table. |
| **07** | **`return` Keyword** | [07_return_keyword.js](part_6/07_return_keyword.js) | Send values back to the caller. |
| **08** | **Practice 5** | [08_practice_5.js](part_6/08_practice_5.js) | Return the sum from 1 to `n`. |
| **09** | **Practice 6** | [09_practice_6.js](part_6/09_practice_6.js) | Join an array of strings. |
| **10** | **What is Scope?** | [10_what_is_scope.js](part_6/10_what_is_scope.js) | Understand global and function scope. |
| **11** | **Block Scope** | [11_block_scope.js](part_6/11_block_scope.js) | Compare `let`, `const`, and `var` in blocks. |
| **12** | **Lexical Scope** | [12_lexical_scope.js](part_6/12_lexical_scope.js) | Access variables from outer functions. |
| **13** | **Practice 7** | [13_practice_7.js](part_6/13_practice_7.js) | Predict output with nested scopes. |
| **14** | **Function Expressions** | [14_function_expressions.js](part_6/14_function_expressions.js) | Store functions in variables. |
| **15** | **Higher Order Functions** | [15_higher_order_functions.js](part_6/15_higher_order_functions.js) | Pass functions as arguments. |
| **16** | **Higher Order Functions (Returns)** | [16_higher_order_returns.js](part_6/16_higher_order_returns.js) | Return functions from functions. |
| **17** | **Methods** | [17_methods.js](part_6/17_methods.js) | Store functions in objects. |
| **18** | **Assignment Questions** | [18_assignment.js](part_6/18_assignment.js) | Solve the Part 6 assignment problems. |

---

## 🗺️ Part 7 Chapters

Study guide: [part_7.md](part_7/part_7.md). Run files from this directory with `node part_7/01_this.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **`this`** | [01_this.js](part_7/01_this.js) | Understand how a call sets `this`. |
| **02** | **Try & Catch** | [02_try_catch.js](part_7/02_try_catch.js) | Handle and throw errors. |
| **03** | **Arrow Functions** | [03_arrow_functions.js](part_7/03_arrow_functions.js) | Write shorter function expressions. |
| **04** | **Implicit Return** | [04_implicit_return.js](part_7/04_implicit_return.js) | Return values without `return`. |
| **05** | **`setTimeout`** | [05_set_timeout.js](part_7/05_set_timeout.js) | Run code once after a delay. |
| **06** | **`setInterval`** | [06_set_interval.js](part_7/06_set_interval.js) | Run code repeatedly. |
| **07** | **`this` with Arrow Functions** | [07_this_with_arrow.js](part_7/07_this_with_arrow.js) | Compare regular and arrow `this`. |
| **08** | **Practice** | [08_practice.js](part_7/08_practice.js) | Use arrows and intervals. |
| **09** | **Assignment Questions** | [09_assignment.js](part_7/09_assignment.js), [Q4 page](part_7/09_assignment_q4.html) | Solve the four Part 7 assignment problems. |

---

## 🗺️ Part 8 Chapters

Study guide: [part_8.md](part_8/part_8.md). Run files from this directory with `node part_8/01_array_methods.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Array Methods** | [01_array_methods.js](part_8/01_array_methods.js) | Loop with `forEach`. |
| **02** | **Map & Filter** | [02_map_filter.js](part_8/02_map_filter.js) | Transform and select items. |
| **03** | **Every & Some** | [03_every_some.js](part_8/03_every_some.js) | Test items in an array. |
| **04** | **Reduce** | [04_reduce.js](part_8/04_reduce.js) | Combine an array into one value. |
| **05** | **Maximum in Array** | [05_maximum_in_array.js](part_8/05_maximum_in_array.js) | Find the largest value. |
| **06** | **Practice** | [06_practice.js](part_8/06_practice.js) | Use `every` and `reduce`. |
| **07** | **Default Parameters** | [07_default_parameters.js](part_8/07_default_parameters.js) | Provide fallback argument values. |
| **08** | **Spread** | [08_spread.js](part_8/08_spread.js) | Expand values into arguments. |
| **09** | **Spread (Array Literals)** | [09_spread_array_literals.js](part_8/09_spread_array_literals.js) | Copy and merge arrays. |
| **10** | **Spread (Object Literals)** | [10_spread_object_literals.js](part_8/10_spread_object_literals.js) | Copy and merge objects. |
| **11** | **Rest** | [11_rest.js](part_8/11_rest.js) | Collect arguments into an array. |
| **12** | **Destructuring** | [12_destructuring.js](part_8/12_destructuring.js) | Unpack arrays. |
| **13** | **Destructuring (Objects)** | [13_destructuring_objects.js](part_8/13_destructuring_objects.js) | Unpack objects. |
| **14** | **Assignment Questions** | [14_assignment.js](part_8/14_assignment.js) | Solve the five Part 8 assignment problems. |

---

## 🗺️ Part 9 Chapters

Study guide: [part_9.md](part_9/part_9.md). Open each `.html` file in a browser and check the console.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Introduction** | [01_introduction.html](part_9/01_introduction.html) | Change a page with JavaScript. |
| **02** | **What is the DOM?** | [02_what_is_dom.html](part_9/02_what_is_dom.html) | Explore the document object. |
| **03** | **Starter Code** | [03_starter_code.html](part_9/03_starter_code.html) | Practice page for selectors. |
| **04** | **Selecting by ID** | [04_select_by_id.html](part_9/04_select_by_id.html) | Use `getElementById`. |
| **05** | **Selecting by Class** | [05_select_by_class.html](part_9/05_select_by_class.html) | Use `getElementsByClassName`. |
| **06** | **Selecting by Tag** | [06_select_by_tag.html](part_9/06_select_by_tag.html) | Use `getElementsByTagName`. |
| **07** | **Query Selectors** | [07_query_selectors.html](part_9/07_query_selectors.html) | Select with CSS selectors. |
| **08** | **Setting Content** | [08_setting_content.html](part_9/08_setting_content.html) | Compare text and HTML properties. |
| **09** | **Attributes** | [09_manipulating_attributes.html](part_9/09_manipulating_attributes.html) | Read and change attributes. |
| **10** | **Style** | [10_manipulating_style.html](part_9/10_manipulating_style.html) | Change inline styles. |
| **11** | **`classList`** | [11_class_list.html](part_9/11_class_list.html) | Add, remove, and toggle classes. |
| **12** | **Navigation** | [12_navigation.html](part_9/12_navigation.html) | Move between related elements. |
| **13** | **Adding Elements** | [13_adding_elements.html](part_9/13_adding_elements.html) | Create and insert elements. |
| **14** | **Removing Elements** | [14_removing_elements.html](part_9/14_removing_elements.html) | Remove elements from the page. |
| **15** | **Practice** | [15_practice.html](part_9/15_practice.html) | Build elements with JavaScript. |
| **16** | **Assignment Questions** | [16_assignment.html](part_9/16_assignment.html) | Solve the five Part 9 assignment problems. |

---

## 🗺️ Part 10 Chapters

Study guide: [part_10.md](part_10/part_10.md). Open each `.html` file in a browser and interact with it.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **DOM Events** | [01_dom_events.html](part_10/01_dom_events.html) | Respond to clicks. |
| **02** | **Mouse / Pointer Events** | [02_mouse_pointer_events.html](part_10/02_mouse_pointer_events.html) | Handle mouse and pointer actions. |
| **03** | **Event Listeners** | [03_event_listeners.html](part_10/03_event_listeners.html) | Add and remove listeners. |
| **04** | **Activity** | [04_activity_color_generator.html](part_10/04_activity_color_generator.html) | Build a random color generator. |
| **05** | **Listeners for Elements** | [05_listeners_for_elements.html](part_10/05_listeners_for_elements.html) | Listen on many elements. |
| **06** | **`this` in Listeners** | [06_this_in_listeners.html](part_10/06_this_in_listeners.html) | Reuse one handler with `this`. |
| **07** | **Keyboard Events** | [07_keyboard_events.html](part_10/07_keyboard_events.html) | Read pressed keys. |
| **08** | **Form Events** | [08_form_events.html](part_10/08_form_events.html) | Handle form submission. |
| **09** | **Extracting Form Data** | [09_extracting_form_data.html](part_10/09_extracting_form_data.html) | Read and validate form values. |
| **10** | **More Events** | [10_more_events.html](part_10/10_more_events.html) | Use `input`, `change`, `focus`, and `blur`. |

---

## 🗺️ Mini-Project Chapters

Study guide: [mini_project.md](mini_project/mini_project.md). Open each `.html` file in a browser. The finished game is [11_display_score.html](mini_project/11_display_score.html).

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Event Bubbling** | [01_event_bubbling.html](mini_project/01_event_bubbling.html) | See events move up through parents. |
| **02** | **Todo with DOM** | [02_todo_with_dom.html](mini_project/02_todo_with_dom.html) | Build a Todo list on the page. |
| **03** | **Event Delegation** | [03_event_delegation.html](mini_project/03_event_delegation.html) | Handle child clicks from one parent. |
| **04** | **Sequence Memory Game** | [Guide](mini_project/mini_project.md) | Learn the rules of Echo Tiles. |
| **05** | **Setting up Project** | [05_setting_up_project.html](mini_project/05_setting_up_project.html) | Build the game board. |
| **06** | **Start Game** | [06_start_game.html](mini_project/06_start_game.html) | Start the game. |
| **07** | **Flash & Level Up** | [07_flash_level_up.html](mini_project/07_flash_level_up.html) | Flash tiles and grow the pattern. |
| **08** | **Button Listeners** | [08_button_listeners.html](mini_project/08_button_listeners.html) | Read player clicks. |
| **09** | **Matching Sequence** | [09_matching_sequence.html](mini_project/09_matching_sequence.html) | Check the player's pattern. |
| **10** | **Reset Game** | [10_reset_game.html](mini_project/10_reset_game.html) | Restart after a loss. |
| **11** | **Display Score** | [11_display_score.html](mini_project/11_display_score.html) | Show the score and best score. |

---

## 🗺️ Part 11 Chapters

Study guide: [part_11.md](part_11/part_11.md). Run files from this directory with `node part_11/01_call_stack.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **JS Call Stack** | [01_call_stack.js](part_11/01_call_stack.js) | Track running functions. |
| **02** | **Visualizing the Call Stack** | [02_visualizing_call_stack.js](part_11/02_visualizing_call_stack.js) | Watch pushes and pops. |
| **03** | **Breakpoints** | [03_breakpoints.js](part_11/03_breakpoints.js) | Pause and inspect code. |
| **04** | **JS is Single Threaded** | [04_single_threaded.js](part_11/04_single_threaded.js) | See the order of async callbacks. |
| **05** | **Callback Hell** | [05_callback_hell.js](part_11/05_callback_hell.js) | See why nested callbacks get messy. |
| **06** | **Setting up for Promises** | [06_setup_for_promises.js](part_11/06_setup_for_promises.js) | Add success and failure callbacks. |
| **07** | **Refactoring with Promises** | [07_refactoring_with_promises.js](part_11/07_refactoring_with_promises.js) | Return a Promise. |
| **08** | **`then()` and `catch()`** | [08_then_catch.js](part_11/08_then_catch.js) | Handle success and failure. |
| **09** | **Promise Chaining** | [09_promise_chaining.js](part_11/09_promise_chaining.js) | Run async tasks in order. |
| **10** | **Results & Errors** | [10_results_errors.js](part_11/10_results_errors.js) | Pass values and recover from errors. |
| **11** | **Refactoring Old Code** | [11_refactoring_old_code.js](part_11/11_refactoring_old_code.js) | Flatten callback code. |

---

## 🗺️ Part 12 Chapters

Study guide: [part_12.md](part_12/part_12.md). Run files from this directory with `node part_12/01_async_functions.js`. Chapter 8 is in the guide, and Chapter 9 runs in a browser. API lessons need an internet connection.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **`async` Functions** | [01_async_functions.js](part_12/01_async_functions.js) | Return Promises automatically. |
| **02** | **`await` Keyword** | [02_await_keyword.js](part_12/02_await_keyword.js) | Wait for Promises. |
| **03** | **Handling Rejections** | [03_handling_rejections.js](part_12/03_handling_rejections.js) | Use `try...catch` with `await`. |
| **04** | **What is an API?** | [04_what_is_api.js](part_12/04_what_is_api.js) | Model a request and response. |
| **05** | **Accessing Some APIs** | [05_accessing_apis.js](part_12/05_accessing_apis.js) | Read live API data. |
| **06** | **What is JSON?** | [06_what_is_json.js](part_12/06_what_is_json.js) | Convert objects and JSON. |
| **07** | **Accessing JSON Data** | [07_accessing_json_data.js](part_12/07_accessing_json_data.js) | Read nested JSON values. |
| **08** | **API Testing Tools** | [Guide](part_12/part_12.md) | Test APIs without writing an app. |
| **09** | **What is Ajax?** | [09_what_is_ajax.html](part_12/09_what_is_ajax.html) | Update a page without reloading. |
| **10** | **HTTP Verbs** | [10_http_verbs.js](part_12/10_http_verbs.js) | Use GET, POST, PUT, PATCH, and DELETE. |
| **11** | **Status Codes** | [11_status_codes.js](part_12/11_status_codes.js) | Understand response results. |
| **12** | **Adding Information in URLs** | [12_adding_info_in_urls.js](part_12/12_adding_info_in_urls.js) | Build paths and query strings. |
| **13** | **HTTP Headers** | [13_http_headers.js](part_12/13_http_headers.js) | Request different response formats. |
| **14** | **Our First API Request** | [14_first_api_request.js](part_12/14_first_api_request.js) | Use `fetch` with `.then()`. |
| **15** | **Fetch with async-await** | [15_fetch_async_await.js](part_12/15_fetch_async_await.js) | Use `fetch` with `await`. |

---

## 🗺️ Part 13 Chapters

Study guide: [part_13.md](part_13/part_13.md). Open each `.html` file in a browser with an internet connection. Chapter 5 is in the guide.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Using Axios** | [01_using_axios.html](part_13/01_using_axios.html) | Make a request with Axios. |
| **02** | **Dog Pictures API** | [02_dog_pictures_api.html](part_13/02_dog_pictures_api.html) | Show a random dog picture. |
| **03** | **Sending Headers** | [03_sending_headers.html](part_13/03_sending_headers.html) | Send headers with a request. |
| **04** | **Activity Using Query Strings** | [04_activity_query_strings.html](part_13/04_activity_query_strings.html) | Build a book search. |
| **05** | **Free APIs List** | [Guide](part_13/part_13.md) | Find APIs for projects. |
