const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then( function (orderId) { // this function will be called if resolve the promise
     console.log(orderId);
}) // catch is just like .then we can attach the failure callback
.catch(function(err)// this will be called if we reject the promise
{
    console.log(err.message);
}
);  


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }

        const orderId = "12345";
        if (orderId) {
            resolve(orderId);
        }
    });

    return pr;
}

function validateCart(cart) {
    return false;
}
