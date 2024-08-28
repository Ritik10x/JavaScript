// Create a promise
const getCoffee = new Promise((resolve, reject) => {
  let coffeeArrived = true; // Change this to false to simulate failure

  if (coffeeArrived) {
    resolve("Coffee is here! ☕");
  } else {
    reject("No coffee today. 😢");
  }
});

// Use .then() to handle the promise result
getCoffee
  .then((message) => {
    console.log(message); // This will run if coffeeArrived is true
  })
  .catch((error) => {
    console.log(error); // This will run if coffeeArrived is false
  });
