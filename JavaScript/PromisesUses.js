const cart = ["shoes","pants","kurta"];

createOrder(cart,function(orderId){// this is the normal call back function
    //in which inversion control problem is occuring
    proceedTopayment(oderId);// here we were passing callback function as an argument 
    //to another functiion
});

//now we are using promise 
// Promise is nothing but we can assume it to be empty object with some data value in it, 
//and this data value will hold whatever this createOrder function will return.
const promise = createOrder(cart);
 
promise.then(function(orderId)// and here we are attaching a function to promise object
{// promises will give us agurranty to call thi function inside
    proceedTopayment(orderId);// promise will call  this function with gurranty but only once
});// with this we have control over our code and not passing our control to some other function

//.then() is used to handle the result of a Promise once it has been fulfilled 
//(i.e., when the task has completed successfully).
// Think of .then() as a way to say, "Once this task is done, do this."