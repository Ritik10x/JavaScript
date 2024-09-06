const cart =["shoes","Pants","kurta"];
const promise = createOrder(cart);
promise.then(function(orderId){
 console.log(orderId);
})
.catch(function(err){// here i used catch to handle error
    console.log(err.message);
});



function createOrder(cart)
{
    const pr = new Promise(function(resolve,reject)
{
    if(!validatecart(cart))
    {
        const err= new Error("cart is not valid");
        reject(err);
        
    }
    const orderId = "12345";
    if(orderId)
    {
        setTimeout(function()
    {
        resolve(orderId);
    },5000);
    }
});
return pr;
}

function validatecart()
{
    return false; // if i put false here so the promise is rejecting
                // to handle the rejection promise method gives us catch
};