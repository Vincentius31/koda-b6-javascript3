function queue(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) {
        reject("Nama tidak boleh kosong");
      } else {
        console.log(name);
        resolve();
      }
    }, delay);
  });
}

// Chaining then-catch

queue("John", 1500)
  .then(() => queue("Ed", 2000))
  .then(() => queue("Jane", 500))
  .catch((error) => {
    console.log("Error:", error);
  });

// Try catch

async function runQueue() {
  try {
    await queue("John", 1500);
    await queue("Ed", 2000);
    await queue("Jane", 500);
  } catch (error) {
    console.log("Error:", error);
  }
}

runQueue();