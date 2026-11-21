# JavaScript Fundamentals (Part 11 Study Guide)

This study guide explains the call stack, debugging, asynchronous code, callbacks, and promises in JavaScript, matching the lessons and examples in this directory.

---

## 📖 Chapter 1: JS Call Stack
The **call stack** tracks which function is running. It is **Last In, First Out**: the most recent call finishes first.
```javascript
function square(n) {
  return n * n;
}

function sumOfSquares(a, b) {
  return square(a) + square(b);
}

function printResult(a, b) {
  console.log(sumOfSquares(a, b)); // 25
}

printResult(3, 4);
```

---

## 📖 Chapter 2: Visualizing the Call Stack
When `first()` calls `second()`, and `second()` calls `third()`, the stack grows and then shrinks:

```
[first]
[first, second]
[first, second, third]
[first, second]
[first]
[]
```

Run `02_visualizing_call_stack.js` to see each push and pop.

---

## 📖 Chapter 3: Breakpoints
A **breakpoint** pauses your code so you can inspect its values line by line.

*   **In a browser**: open DevTools, choose **Sources**, and click a line number.
*   **In code**: add the `debugger;` statement.
*   **In Node**: run `node inspect part_11/03_breakpoints.js`, then type `cont` to move to the next `debugger`.

| Control | Action |
|---|---|
| **Resume** | Run until the next breakpoint |
| **Step over** | Run the current line |
| **Step into** | Enter the called function |
| **Step out** | Finish the current function |

> [!NOTE]
> `debugger;` only pauses when a debugger is attached. Otherwise, the code runs normally.

---

## 📖 Chapter 4: JS is Single Threaded
JavaScript runs **one thing at a time** on its main thread. Timers and network requests wait outside the stack, and their callbacks run only after the stack is empty.
```javascript
console.log("First");

setTimeout(() => {
  console.log("Timer with 0 delay");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("Last line");
```

The output order is `First`, `Last line`, `Promise callback`, `Timer with 0 delay`.

> [!WARNING]
> A long-running loop blocks the thread. In a browser, the page cannot respond to clicks until it finishes.

---

## 📖 Chapter 5: Callback Hell
Running async tasks in order with callbacks creates deep nesting that is hard to read:
```javascript
printStep("Step 1", () => {
  printStep("Step 2", () => {
    printStep("Step 3", () => {
      printStep("Step 4");
    });
  });
});
```

---

## 📖 Chapter 6: Setting up for Promises
Adding success and failure callbacks makes the nesting even worse:
```javascript
saveToDb(
  "First record",
  () => {
    saveToDb(
      "",
      () => console.log("Second record saved"),
      () => console.log("Second record failed"),
    );
  },
  () => console.log("First record failed"),
);
```

---

## 📖 Chapter 7: Refactoring with Promises
A **Promise** represents a value that will be available later.
```javascript
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data !== "") {
        resolve(`Saved: ${data}`);
      } else {
        reject("Connection failed");
      }
    }, 100);
  });
}
```

| State | Meaning |
|---|---|
| `pending` | The work is still running |
| `fulfilled` | It succeeded, through `resolve()` |
| `rejected` | It failed, through `reject()` |

---

## 📖 Chapter 8: `then()` and `catch()`
*   `then()` runs when the promise is fulfilled.
*   `catch()` runs when it is rejected.

```javascript
saveToDb("First record")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

---

## 📖 Chapter 9: Promise Chaining
Return a promise from `then()` to run the next task after it finishes. One `catch()` handles a failure from any step:
```javascript
saveToDb("First record")
  .then(result => {
    console.log(result);
    return saveToDb("Second record");
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Failed:", error);
  });
```

> [!IMPORTANT]
> Remember the `return`. Without it, the next `then()` will not wait for the task.

---

## 📖 Chapter 10: Results & Errors in Promises
Values passed to `resolve()` and `reject()` reach the next handler. After a rejection, the chain skips to `catch()`. If `catch()` returns a value, the chain continues:
```javascript
saveToDb("First record")
  .then(() => saveToDb(""))
  .then(() => console.log("This step is skipped"))
  .catch(error => {
    console.log(error.message);
    return "Recovered";
  })
  .then(value => console.log(value))  // Recovered
  .finally(() => console.log("finally always runs"));
```

---

## 📖 Chapter 11: Refactoring Old Code
The callback code from Chapter 5 becomes a flat chain:
```javascript
function printStep(step) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(step);
      resolve();
    }, 100);
  });
}

printStep("Step 1")
  .then(() => printStep("Step 2"))
  .then(() => printStep("Step 3"))
  .then(() => printStep("Step 4"));
```

---

## 📊 Comparison Table: Callbacks vs Promises

| Feature | Callbacks | Promises |
|---|---|---|
| **Sequential tasks** | Nested | Flat `.then()` chain |
| **Error handling** | A failure callback at each step | One `.catch()` |
| **Readability** | Gets worse with depth | Stays linear |
| **Runs after the stack is empty** | ✅ Yes | ✅ Yes |
