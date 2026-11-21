function saveToDb(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data !== "") {
        resolve({ saved: data });
      } else {
        reject(new Error("Connection failed"));
      }
    }, 100);
  });
}

saveToDb("First record")
  .then(result => {
    console.log("Result value:", result);
    return saveToDb("");
  })
  .then(() => {
    console.log("This step is skipped");
  })
  .catch(error => {
    console.log("Error value:", error.message);
    return "Recovered";
  })
  .then(value => {
    console.log("After catch:", value);
  })
  .finally(() => {
    console.log("finally always runs");
  });
