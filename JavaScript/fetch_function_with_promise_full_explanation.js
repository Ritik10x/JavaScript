/*
// we are using promise instead of relayi
const cart = ["shoes", "pants", "kurta"];

createOrder(cart,function() {proceedToPayment(orderId)});
// here i created object name promise
 const promise = createOrder(cart); // when JS execute this line the data in this line undefined or empty
                          // but later it will be filled with data with order id              
                                        //Promise is nothing but we can assume it to be empty object with some data value in it, 
                                        //and this data value will hold whatever this createOrder function will return
                                        // and we can use the through .then attaching to object which is promise here and with 
                                        // .then will attach a callback function 


promise.then(function() proceedToPayment(orderId)) // promise can be only call once
// fetch() it will make external calls */

const GITHUB_API = "https://api.github.com/users/akshaymarch7"
 
const user =fetch(GITHUB_API);// fetch is returnin a promise ".then" only used  in resolved or
                               //hanle the result of promise
                              // in the fetch the promise is in pending state it will take some time
                              // to fetch then data and return
                              //but javascrit will not wait for anything it will directly 
                              // display the user that why we are seeing here the pending and inside pending
                              // there is fullfiled promise
console.log(user);
/**
   A Promise is in one of these states:

   pending: initial state, neither fulfilled nor rejected.
   fulfilled: meaning that the operation was completed successfully.
   rejected: meaning that the operation failed.
*/

/* console output
▼Promise {<pending>} 1
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response 

*/
// if we open the [[PromiseResult]] it will display this to us 
/*

locked: false
[[Prototype]]: ReadableStream
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://api.github.com/users/akshaymarch7"
[[Prototype]]: Response
*/

// before where we were geting the undefined for data 
// now we have [[PromiseResult]] insie this we have this data body: ReadableStream
// now we will use this data which we get in retun [[PromiseResult]]

user.then (function(data)// here i have attached a callback function to promise whix is user
{
   console.log(data); // now we can use this data however we want
})

// promise object is immutable 
//-> Once promise is fulfilled and we have data we can pass here and there and we don't have to worry that someone can mutate that data. 
// So over above we can't directly mutate user promise object, we will have to use .then

/*💡What is Promise?
-> Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

-> A container for a future value.

-> A Promise is an object representing the eventual completion or failure of an asynchronous operation.*/