async function getJoke(accept) {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: accept },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  console.log(`Asked for ${accept}, got:`, response.headers.get("content-type"));

  return response;
}

async function main() {
  try {
    const jsonResponse = await getJoke("application/json");
    const data = await jsonResponse.json();
    console.log("Joke from JSON:", data.joke);

    const textResponse = await getJoke("text/plain");
    console.log("Joke from text:", await textResponse.text());
  } catch (error) {
    console.log("Could not load the joke:", error.message);
  }
}

main();
