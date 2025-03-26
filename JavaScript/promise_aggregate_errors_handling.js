const P1 = new Promise((resolve, reject) => 
    setTimeout(() => reject("P1 fail"), 3000));

const P2 = new Promise(function(resolve, reject) { 
    setTimeout(function() {
        reject("P2 fail");
    }, 1000);
});

const P3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("P3 fail");
    }, 2000);
});

Promise.any([P1, P2, P3])
    .then(function(result) {
        console.log("Result", result);
    })
    .catch(function(err) {
        console.error("error", err);
        console.log(err.errors); // this is how we handle aggerigate errors
    });
    //aggregate errors  ,it will create an array of errors in which we will get the aggregated errors
