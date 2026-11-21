function saveToDb(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data !== "") {
        resolve(`Saved: ${data}`);
      } else {
        reject(new Error("Connection failed"));
      }
    }, 100);
  });
}

async function saveAll() {
  try {
    console.log(await saveToDb("First record"));
    console.log(await saveToDb(""));
    console.log("This line is skipped");
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("finally always runs");
  }

  console.log("The function keeps running");
}

saveAll();
