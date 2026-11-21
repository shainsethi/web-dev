function getLargerElements(arr, num) {
  let result = [];

  for (let element of arr) {
    if (element > num) {
      result.push(element);
    }
  }

  return result;
}

console.log("Q1:", getLargerElements([1, 8, 3, 12, 5], 4));

function getUniqueCharacters(str) {
  let result = "";

  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log("Q2:", getUniqueCharacters("abcdabcdefgggh"));

function getLongestCountry(countries) {
  let longest = "";

  for (let country of countries) {
    if (country.length > longest.length) {
      longest = country;
    }
  }

  return longest;
}

console.log("Q3:", getLongestCountry(["Australia", "Germany", "United States of America"]));

function countVowels(str) {
  let count = 0;

  for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log("Q4:", countVowels("JavaScript Is Awesome"));
