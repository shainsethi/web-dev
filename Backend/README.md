# Backend Development Course

Welcome to the Backend section! This part starts with running JavaScript on the server using Node.js and managing code with modules and npm.

All code examples are simple and uncommented, and each part has its own study guide.

> [!TIP]
> **Study Guide Available**: For step-by-step explanations, read the [Part 1 Study Guide](part_1/part_1.md).

---

## 🏃 How to Run the Examples

Open a terminal in `Backend/part_1/` and run a file with Node:

```bash
node 01_what_is_node.js
```

Chapter 9 needs its package installed first:

```bash
cd 09_installing_packages
npm install
node app.js
```

---

## 🗺️ Part 1 Chapters: Node.js

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **What is Node.js?** | [01_what_is_node.js](part_1/01_what_is_node.js) | Run JavaScript outside the browser. |
| **02** | **Node Installation** | [02_check_installation.js](part_1/02_check_installation.js) | Install and check Node. |
| **03** | **Node REPL** | [03_node_repl.js](part_1/03_node_repl.js) | Try code interactively. |
| **04** | **Node Files** | [04_node_files.js](part_1/04_node_files.js) | Run JavaScript files. |
| **05** | **Process in Node** | [05_process.js](part_1/05_process.js) | Read command-line arguments. |
| **06** | **Export in Files** | [06_export_in_files/](part_1/06_export_in_files/app.js) | Share code with `module.exports`. |
| **07** | **Export in Directories** | [07_export_in_directories/](part_1/07_export_in_directories/app.js) | Load a folder with `index.js`. |
| **08** | **What is npm?** | [Guide](part_1/part_1.md) | Learn about the package manager. |
| **09** | **Installing Packages** | [09_installing_packages/](part_1/09_installing_packages/app.js) | Install and use a package. |
| **10** | **package.json** | [10_package_json/](part_1/10_package_json/package.json) | Describe a project and add scripts. |
| **11** | **Local vs Global Installation** | [Guide](part_1/part_1.md) | Choose where packages live. |
| **12** | **Import Modules** | [12_import_modules/](part_1/12_import_modules/app.js) | Use ES Modules. |

---

## 🗺️ Part 2 Chapters: Express

Study guide: [part_2.md](part_2/part_2.md). Run `npm install` once inside `Backend/part_2/`, then start a lesson with `node 02_getting_started.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **What is Express?** | [01_what_is_express.js](part_2/01_what_is_express.js) | Compare with a plain Node server. |
| **02** | **Getting Started** | [02_getting_started.js](part_2/02_getting_started.js) | Create an Express server. |
| **03** | **Handling Requests** | [03_handling_requests.js](part_2/03_handling_requests.js) | Read the request. |
| **04** | **Sending a Response** | [04_sending_a_response.js](part_2/04_sending_a_response.js) | Send text, HTML, JSON, and redirects. |
| **05** | **Routing** | [05_routing.js](part_2/05_routing.js) | Match methods and paths. |
| **06** | **Installing Nodemon** | [06_installing_nodemon.js](part_2/06_installing_nodemon.js) | Restart automatically on save. |
| **07** | **Path Parameters** | [07_path_parameters.js](part_2/07_path_parameters.js) | Read values from the URL path. |
| **08** | **Query Strings** | [08_query_strings.js](part_2/08_query_strings.js) | Read search and filter values. |

---

## 🗺️ Part 3 Chapters: EJS

Study guide: [part_3.md](part_3/part_3.md). Run `npm install` once inside `Backend/part_3/`, then start a lesson with `node 02_using_ejs.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **What is Templating?** | [01_what_is_templating.js](part_3/01_what_is_templating.js) | Compare manual HTML with a template. |
| **02** | **Using EJS** | [02_using_ejs.js](part_3/02_using_ejs.js) | Render a first view. |
| **03** | **Views Directory** | [03_views_directory.js](part_3/03_views_directory.js) | Set a reliable views path. |
| **04** | **Interpolation Syntax** | [04_interpolation_syntax.js](part_3/04_interpolation_syntax.js) | Use the EJS tags safely. |
| **05** | **Passing Data to EJS** | [05_passing_data.js](part_3/05_passing_data.js) | Send values to a template. |
| **06** | **Instagram EJS** | [06_instagram_ejs.js](part_3/06_instagram_ejs.js) | Render a page from a username. |
| **07** | **Conditional Statements** | [07_conditional_statements.js](part_3/07_conditional_statements.js) | Show different HTML by value. |
| **08** | **Loops** | [08_loops.js](part_3/08_loops.js) | Repeat HTML for a list. |
| **09** | **data.json** | [data.json](part_3/data.json) | Use sample profile data. |
| **10** | **Instagram Page with EJS** | [10_instagram_page.js](part_3/10_instagram_page.js) | Build a data-driven profile. |
| **11** | **Serving Static Files** | [11_serving_static_files.js](part_3/11_serving_static_files.js) | Serve CSS and browser JS. |
| **12** | **Includes** | [12_includes.js](part_3/12_includes.js) | Reuse shared page parts. |

---

## 🗺️ Miscellaneous Chapters: POST & OOP

Study guide: [miscellaneous.md](miscellaneous/miscellaneous.md). Run `npm install` once inside `Backend/miscellaneous/`, then start with `node 01_get_and_post.js`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **GET & POST Requests** | [01_get_and_post.js](miscellaneous/01_get_and_post.js) | Compare query strings and bodies. |
| **02** | **Handling POST Requests** | [02_handling_post_requests.js](miscellaneous/02_handling_post_requests.js) | Parse and validate request bodies. |
| **03** | **Revisiting JS (OOP)** | [03_revisiting_oop.js](miscellaneous/03_revisiting_oop.js) | Group data and behavior. |
| **04** | **Object Prototypes** | [04_object_prototypes.js](miscellaneous/04_object_prototypes.js) | Follow the prototype chain. |
| **05** | **Factory Functions** | [05_factory_functions.js](miscellaneous/05_factory_functions.js) | Create objects with a function. |
| **06** | **New Operator** | [06_new_operator.js](miscellaneous/06_new_operator.js) | Share methods with constructors. |
| **07** | **Classes in JS** | [07_classes.js](miscellaneous/07_classes.js) | Use class syntax. |
| **08** | **Inheritance** | [08_inheritance.js](miscellaneous/08_inheritance.js) | Extend a parent class. |
| **09** | **Summary Sheet** | [Guide](miscellaneous/miscellaneous.md) | Compare the main ideas. |

---

## 🗺️ Part 4 Chapters: REST

Study guide: [part_4.md](part_4/part_4.md). Run `npm install` once inside `Backend/part_4/`, then start with `npm run dev`.

| Chapter | Topic | Code File Link | Description |
| :---: | :--- | :--- | :--- |
| **01** | **What is REST?** | [01_what_is_rest.js](part_4/01_what_is_rest.js) | See the standard routes. |
| **02** | **CRUD Operations** | [02_crud_operations.js](part_4/02_crud_operations.js) | Create, read, update, and delete. |
| **03** | **Creating RESTful APIs** | [03_creating_restful_apis.js](part_4/03_creating_restful_apis.js) | Set up the API. |
| **04** | **Index Route** | [04_index_route.js](part_4/04_index_route.js) | List all posts. |
| **05** | **Create & New Route** | [05_create_and_new_route.js](part_4/05_create_and_new_route.js) | Show a form and add a post. |
| **06** | **Redirect** | [06_redirect.js](part_4/06_redirect.js) | Redirect after a change. |
| **07** | **Show Route** | [07_show_route.js](part_4/07_show_route.js) | Show one post. |
| **08** | **Creating Ids (UUID)** | [08_creating_ids.js](part_4/08_creating_ids.js) | Generate unique ids. |
| **09** | **Update Route** | [09_update_route.js](part_4/09_update_route.js) | Change a post with PATCH. |
| **10** | **Edit Route** | [10_edit_route.js](part_4/10_edit_route.js) | Edit through an HTML form. |
| **11** | **Destroy Route** | [11_destroy_route.js](part_4/11_destroy_route.js) | Delete a post. |
