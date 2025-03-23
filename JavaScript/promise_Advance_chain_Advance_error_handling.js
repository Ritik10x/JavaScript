const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart)

.then( function (orderId) { 
     console.log(orderId); //data from this function goes to next chain
      return orderId;
}) 
.then(function(orderId){
   return (proceedToPayment(orderId))// data of this chain will got to the next chain
    // here its returning a promise to next
})
.then(function(paymentInfo)             // whatever we are passing to chain for that we need to retun from top function to down
{                                       // IT Means from first function return data or promise 
console.log(paymentInfo);
})

.catch(function(err) // this catch will handle any error in the chain 
{
    console.log(err.message);
}
)
.then(function(orderId)
{
    console.log("no matter what happen promise after the catch will stil run");
})



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
    return true;
}

function proceedToPayment(orderId)
{
    return new Promise(function(resolve, reject)
{
    resolve("payment sucessful")
});
}
