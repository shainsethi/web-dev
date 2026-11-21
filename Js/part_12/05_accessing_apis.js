async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function main() {
  try {
    const catData = await getJson("https://catfact.ninja/fact");
    console.log("Cat fact:", catData.fact);

    const dogData = await getJson("https://dog.ceo/api/breeds/image/random");
    console.log("Dog image:", dogData.message);
  } catch (error) {
    console.log("Could not load data:", error.message);
  }
}

main();
