let todo = [];

while (true) {
  let request = prompt("Enter a command: list, add, delete, quit");

  if (request === null) {
    break;
  }

  request = request.trim().toLowerCase();

  if (request === "quit") {
    break;
  } else if (request === "list") {
    let output = "Your tasks:";

    for (let i = 0; i < todo.length; i++) {
      output += `\n${i}: ${todo[i]}`;
    }

    if (todo.length === 0) {
      output = "No tasks yet.";
    }

    alert(output);
  } else if (request === "add") {
    let task = prompt("Enter the task:");

    if (task !== null && task.trim() !== "") {
      todo.push(task.trim());
      alert("Task added.");
    } else {
      alert("Task was not added.");
    }
  } else if (request === "delete") {
    let input = prompt("Enter the task index to delete:");
    let index = Number(input);

    if (input !== null && input.trim() !== "" && Number.isInteger(index) && index >= 0 && index < todo.length) {
      let deleted = todo.splice(index, 1);
      alert(`Deleted: ${deleted[0]}`);
    } else {
      alert("Invalid index.");
    }
  } else {
    alert("Unknown command.");
  }
}

alert("Goodbye!");
