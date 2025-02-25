const p1 = new Promise((resolve, reject) => { // These are dummy promises
    setTimeout(() => resolve("p1 Success"), 3000);  // p1 resolves after 3 seconds
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 fail"), 1000);  // p2 rejects after 1 second
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3 fail"), 2000);  // p3 rejects after 2 seconds
});

// Promise.all will reject as soon as the first promise fails
Promise.all([p1, p2, p3])
    .then(res => {
        console.log(res);  // This will not execute because p2 or p3 will reject
    })
    .catch((err) => {
        console.log('Caught an error:', err);  // This will catch the first rejection
    });
