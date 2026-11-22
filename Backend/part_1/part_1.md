# Backend Fundamentals (Part 1 Study Guide)

This study guide explains Node.js, modules, and npm, matching the lessons and examples in this directory.

Run the commands below from the `Backend/part_1/` folder.

---

## 📖 Chapter 1: What is Node.js?
**Node.js** is a JavaScript **runtime**. It lets JavaScript run outside the browser, so you can build servers, command-line tools, and scripts.

*   It uses Chrome's **V8 engine** to execute JavaScript.
*   It adds server features such as files, networking, and processes.
*   It does **not** have browser features such as `window` and `document`.

```bash
node 01_what_is_node.js
```

---

## 📖 Chapter 2: Node Installation
1.  Download the **LTS** (Long Term Support) version from [nodejs.org](https://nodejs.org/en/download).
2.  Run the installer and keep the default options.
3.  Open a new terminal and check both tools:
    ```bash
    node -v
    npm -v
    ```

npm is installed together with Node.

> [!TIP]
> Choose **LTS** for learning and real projects because it is the most stable release line.

---

## 📖 Chapter 3: Node REPL
REPL means **Read, Eval, Print, Loop**. Type `node` to open it:
```
$ node
> 2 + 3
5
> _ * 2
10
> .exit
```

| Command | Purpose |
|---|---|
| `.help` | Show REPL commands |
| `.editor` | Write several lines |
| `.exit` | Leave the REPL |
| `_` | Use the last result |
| `Ctrl+C` twice | Leave the REPL |

---

## 📖 Chapter 4: Node Files
Save JavaScript in a `.js` file and run it with `node`:
```bash
node 04_node_files.js
```

Every Node CommonJS file also has these values:

*   `__filename`: the full path of the current file.
*   `__dirname`: the full path of its folder.

---

## 📖 Chapter 5: Process in Node
`process` is a global object with information about the running program.

| Property | Purpose |
|---|---|
| `process.argv` | Command-line arguments |
| `process.env` | Environment variables |
| `process.cwd()` | Current working folder |
| `process.version` | Node version |
| `process.exit()` | Stop the program |

```javascript
const names = process.argv.slice(2);

for (let name of names) {
  console.log(`Hello, ${name}!`);
}
```

```bash
node 05_process.js Riya Aman
```

The first two `argv` items are the Node path and the file path, so `slice(2)` keeps only your arguments.

> [!WARNING]
> `process.env` can contain secrets, so never print all of it or share it.

---

## 📖 Chapter 6: Export in Files
Each file is a separate **module**. Share values with `module.exports`:
```javascript
const PI = 3.14;

function add(a, b) {
  return a + b;
}

module.exports = { PI, add };
```

Load them with `require()`:
```javascript
const math = require("./math");
const { add } = require("./math");

math.PI;    // 3.14
add(2, 3);  // 5
```

> [!IMPORTANT]
> Local files need a path such as `./math`. Without `./`, Node looks for a built-in module or an installed package.

```bash
node 06_export_in_files/app.js
```

---

## 📖 Chapter 7: Export in Directories
When you require a folder, Node loads its `index.js` file:
```
07_export_in_directories/
├── app.js
└── fruits/
    ├── apple.js
    ├── banana.js
    └── index.js
```

```javascript
const apple = require("./apple");
const banana = require("./banana");

module.exports = [apple, banana];
```

```javascript
const fruits = require("./fruits");
```

```bash
node 07_export_in_directories/app.js
```

---

## 📖 Chapter 8: What is npm?
**npm (Node Package Manager)** has three parts:

*   **Registry**: an online library of JavaScript packages.
*   **CLI**: the `npm` command used to install and manage them.
*   **Website**: [npmjs.com](https://www.npmjs.com), used to search for packages.

A **package** is reusable code published by another developer.

---

## 📖 Chapter 9: Installing Packages
```bash
cd 09_installing_packages
npm install
node app.js
```

To add a package to your own project:
```bash
npm install ms
```

```javascript
const ms = require("ms");

ms("2 days"); // 172800000
ms(60000);    // "1m"
```

Installing creates or updates:

| Item | Purpose | Commit to Git? |
|---|---|---|
| `package.json` | Project details and dependencies | ✅ Yes |
| `package-lock.json` | Exact installed versions | ✅ Yes |
| `node_modules/` | Downloaded package code | ❌ No |

> [!WARNING]
> Packages run with your permissions. Check the exact name, maintainers, and popularity before installing, because lookalike package names can be malicious.

---

## 📖 Chapter 10: `package.json`
`package.json` describes your project:
```json
{
  "name": "package-json-demo",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "greet": "node app.js Riya"
  }
}
```

```bash
npm init -y       # Create a package.json
npm start         # Run the start script
npm run greet     # Run a custom script
npm install       # Install everything listed
```

Because `package.json` lists every dependency, a teammate only needs `npm install` to recreate `node_modules`.

---

## 📖 Chapter 11: Local vs Global Installation
```bash
npm install ms       # Local: this project only
npm install -g serve # Global: available everywhere
npm list             # Show local packages
npm list -g --depth=0 # Show global packages
npm uninstall ms     # Remove a local package
```

Use `npx` to run a command-line tool without installing it globally:
```bash
npx serve
```

> [!TIP]
> Prefer **local** installs for libraries, so each project keeps its own versions.

---

## 📖 Chapter 12: Import Modules
**ES Modules** are the modern JavaScript module system. Enable them in `package.json`:
```json
{
  "type": "module"
}
```

```javascript
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  return a * b;
}
```

```javascript
import multiply, { PI, add as sum } from "./math.js";
import * as math from "./math.js";
import { basename } from "node:path";
```

> [!WARNING]
> ES Modules need the full file extension, so write `./math.js`. `require`, `__filename`, and `__dirname` are not available by default.

```bash
node 12_import_modules/app.js
```

---

## 📊 Comparison Table: `require` vs `import`

| Feature | CommonJS | ES Modules |
|---|---|---|
| **Import** | `require("./math")` | `import { add } from "./math.js"` |
| **Export** | `module.exports = {}` | `export` / `export default` |
| **Setup** | Default for `.js` files | `"type": "module"` or `.mjs` |
| **File extension** | Optional | Required |
| **Strict mode** | Optional | Always on |

### Local vs Global Packages

| Feature | Local | Global |
|---|---|---|
| **Command** | `npm install name` | `npm install -g name` |
| **Location** | Project `node_modules/` | System-wide folder |
| **Listed in `package.json`** | ✅ Yes | ❌ No |
| **Best for** | Project libraries | Command-line tools |
