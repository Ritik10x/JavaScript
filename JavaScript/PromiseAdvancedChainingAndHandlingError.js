const cart = ["shoes","pants","kurtas"];
 createOrder(cart)// once we get the orderId from this function createOrder 
 .then(function(orderId)// then we can pass it to the next function To proceedToPayment
{                               
    console.log(orderId);
    return orderId;// return to down to the function
})


.then(function(orderId){///      this is called PromiseCHaining
   return  proceedToPayment(orderId);// the main thing we always forget is to return
})
// this function will go down in the paymentinfp

.then(function(paymentinfo)
{
    console.log(paymentinfo);
})


// if  there is any Error the catch will handle any error in the chain

.catch(function(err)
{
    console.log(err.message);
});
 




function createOrder(orderId)
{
        const pr = new Promise(function(resolve,reject)
    {
            if(!validatecart(cart))
        {
                const err = new Error("cart is not valid");
                reject(err);
        }
             orderId = "12345";
        if(orderId)
        {
            setTimeout(function()
            {
                 resolve(orderId)
            },5000);
        }
    }) ;                  return pr;
}

function proceedToPayment(orderId)// instead of what we up there created promises we can aslo 
                        // create promise like that
{
    return new Promise(function(resolve,reject)
{
    resolve("payment successful");
})
}

function validatecart()
{
    return true;
}