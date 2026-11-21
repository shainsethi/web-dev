const user = {
  username: "riya_codes",
  city: "Delhi",
  subjects: ["math", "english"],
};

const { username, subjects } = user;
console.log(username, subjects);

const { city: location } = user;
console.log("Renamed:", location);

const { age = 18 } = user;
console.log("Default:", age);

function printUser({ username, city }) {
  console.log(`${username} lives in ${city}`);
}

printUser(user);
