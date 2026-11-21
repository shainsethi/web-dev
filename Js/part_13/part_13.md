# JavaScript Fundamentals (Part 13 Study Guide)

This study guide explains how to call APIs with Axios, send headers, and build a search using query strings, matching the lessons and examples in this directory.

Open each `.html` file in a browser. These pages need an internet connection to load Axios and call live APIs.

---

## 📖 Chapter 1: Using Axios
**Axios** is a popular library for making HTTP requests. Add it with a `<script>` tag:
```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.7.9/dist/axios.min.js"></script>
```

```javascript
const response = await axios.get("https://catfact.ninja/fact");

console.log(response.data.fact);
```

*   Axios parses JSON automatically into `response.data`.
*   Axios **rejects on error statuses** such as `404` and `500`, unlike `fetch()`.

> [!TIP]
> Pin an exact library version in the URL so an update cannot unexpectedly change your page.

---

## 📖 Chapter 2: Dog Pictures API
The API returns an image URL in `message`, and JavaScript places it in an `<img>`:
```javascript
const response = await axios.get("https://dog.ceo/api/breeds/image/random");

dogImage.src = response.data.message;
dogImage.hidden = false;
```

---

## 📖 Chapter 3: Sending Headers with API Requests
Pass headers in a **config object**, the second argument of `axios.get()`:
```javascript
const config = {
  headers: { Accept: "application/json" },
};

const response = await axios.get("https://icanhazdadjoke.com/", config);

console.log(response.data.joke);
```

For `axios.post(url, data, config)`, the config is the **third** argument.

---

## 📖 Chapter 4: Activity Using Query Strings
This activity builds a book search with the Open Library API. Axios creates the query string from `params` and encodes it safely:
```javascript
const config = {
  params: {
    q: query,
    limit: 5,
    fields: "title,author_name,first_publish_year",
  },
};

const response = await axios.get("https://openlibrary.org/search.json", config);
```

The page handles each result state:

*   An empty search shows a message without calling the API.
*   Results are added with `textContent`, so API data cannot run as HTML.
*   No matches and failed requests each show a clear message.
*   The button is disabled while a search is running.

---

## 📖 Chapter 5: Free APIs List for Projects
These APIs worked without a key when this guide was written.

| API | Data | Example Endpoint |
|---|---|---|
| **Cat Facts** | Cat facts | `https://catfact.ninja/fact` |
| **Dog CEO** | Dog pictures | `https://dog.ceo/api/breeds/image/random` |
| **icanhazdadjoke** | Jokes | `https://icanhazdadjoke.com/` |
| **Open Library** | Books | `https://openlibrary.org/search.json?q=dune` |
| **JSONPlaceholder** | Practice data | `https://jsonplaceholder.typicode.com/posts/1` |
| **Open-Meteo** | Weather | `https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.21&current=temperature_2m` |
| **PokeAPI** | Pokémon data | `https://pokeapi.co/api/v2/pokemon/1` |

> [!NOTE]
> Free APIs can change, add limits, or go offline. Check each provider's documentation and terms before using one in a real project.

---

## 📊 Comparison Table: `fetch()` vs Axios

| Feature | `fetch()` | Axios |
|---|---|---|
| **Installation** | Built in | Added as a library |
| **JSON parsing** | `await response.json()` | Automatic |
| **Response data** | From the parsed body | `response.data` |
| **Rejects on `404` / `500`** | ❌ No | ✅ Yes |
| **Query strings** | `URL` and `searchParams` | `params` option |
