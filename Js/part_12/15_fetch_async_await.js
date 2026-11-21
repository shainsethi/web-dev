const url = "https://catfact.ninja/fact";

async function getFact() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();

  return data.fact;
}

async function main() {
  try {
    console.log("Fact 1:", await getFact());
    console.log("Fact 2:", await getFact());
  } catch (error) {
    console.log("Could not load the fact:", error.message);
  }
}

main();
