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

const request = saveToDb("First record");

console.log("Right after the call:", request);

request.then(() => {
  console.log("After it finishes:", request);
});
