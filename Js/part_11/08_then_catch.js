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

saveToDb("First record")
  .then(result => {
    console.log("then runs on success:", result);
  })
  .catch(error => {
    console.log("This catch is skipped:", error);
  });

saveToDb("")
  .then(result => {
    console.log("This then is skipped:", result);
  })
  .catch(error => {
    console.log("catch runs on failure:", error);
  });
