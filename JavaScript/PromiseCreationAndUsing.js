const cart = [ "shoes","pants","kurta"];// here how to use promise
const pre =createorder(cart);// order Id , it  give us 
// attaching a callback function to promise object
pre.then(function()
{
    return ProceedPayment(OrderId);
})





// now how to create a promise

function createorder(cart)
{
    const pr = new promise (function(resolve,reject) // creating promise construtor with "new" and function 
{     //create order 
      // validateCart
       // orderId                                   //inside this function we write logic to handle the function createorde
     if(!validateCart(cart))//we are creating promi
     {      // throwing an error
        const err = new Error("Cart is not valid")
        
        // reject function already given by javascript in new Promise constructore
        reject(err)    // if its rejcted our promise will be rejected 2nd line of code pre ,"promise"

     }
            // logic for createOrder,, asumme we get some id lets take dummy id
            const orderId ="12345";
            if(orderId)
            {// how do we resolve we call resolve and pass the orderId
                resolve(orderId);
            }

});
return pr
}
