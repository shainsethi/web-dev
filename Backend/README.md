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
