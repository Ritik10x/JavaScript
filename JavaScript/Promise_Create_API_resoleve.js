const cart = [ "shoes","pants","kurta"]
// Consumer part of promise
const promise = createOrder(cart); // orderId 
                                // createOrder will give you a promise
    // Our expectation is above function is going to return me a promise.
promise.then( orderId =>
   console.log(orderId)//proceedToPayment(orderId);  
) ;                                                     

// now we will try to write a our on createOrder(cart) function
// now we will see, how createorder is implemented so that it is returning a promise
//  In short we will see, "How we can create Promise" and then return it.

// now we will write our producer part of promise

// this is we are creating our own API
function createOrder(cart)
{
    const pr = new Promise(function(resolve,reject) // promise is a constructor // used to create or intialize new function and things
                                                //  resolve and reject are function given by javascript to build promises
                                        // this is not something that we passes 
                                    // here we are creating a promise and sending it 
                                // in the fetch function we directly fetch the promise from GITHUB_APi here we are  creatin our own

    {
        // createOrder
        // validateOrder
        // OrderId


        if (!validateCart(cart)) // not validate then we will reject the Promise
                                // by using reject function
        {                       // lets throw an error
            const err = new Error("cart is not valid") // lets pass a message
            reject(err);
        }
        //logic for createOrder if the Order is sucessful ,lets give them an oder id
        // lets take a dummy orderId here
        const orderId = "12345";
        if(orderId)
            {
                resolve(orderId);
            }


    });
    
    
    return pr;
}

function validateCart(cart)
{
    return true;
}