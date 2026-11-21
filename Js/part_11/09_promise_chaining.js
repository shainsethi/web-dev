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
    console.log(result);
    return saveToDb("Second record");
  })
  .then(result => {
    console.log(result);
    return saveToDb("Third record");
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Failed:", error);
  });
