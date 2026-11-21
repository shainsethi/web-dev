const users = {
  1: { id: 1, name: "Riya" },
  2: { id: 2, name: "Aman" },
};

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[id]) {
        resolve(users[id]);
      } else {
        reject(new Error("User not found"));
      }
    }, 100);
  });
}

async function main() {
  try {
    console.log("Response:", await getUser(1));
    console.log("Response:", await getUser(5));
  } catch (error) {
    console.log("Error response:", error.message);
  }
}

main();
