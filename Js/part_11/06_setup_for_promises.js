function saveToDb(data, success, failure) {
  setTimeout(() => {
    if (data !== "") {
      success();
    } else {
      failure();
    }
  }, 100);
}

saveToDb(
  "First record",
  () => {
    console.log("First record saved");

    saveToDb(
      "",
      () => {
        console.log("Second record saved");
      },
      () => {
        console.log("Second record failed");
      },
    );
  },
  () => {
    console.log("First record failed");
  },
);
