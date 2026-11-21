fetch("https://catfact.ninja/fact")
  .then(response => {
    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    console.log("Fact:", data.fact);
  })
  .catch(error => {
    console.log("Could not load the fact:", error.message);
  });
