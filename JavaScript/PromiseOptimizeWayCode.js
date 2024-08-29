const cart =["shoes","pants","Kurtas"];



createOrder(cart,function(orderId)
 {
    proceedToPayment(OrderID,function(paymentInfp)
{
    showOrderSummary(paymentInfo,function(){
        updateWalletBalance();
    });
});
 });

 
 
 // this is call BackHell


 // we were creating promiese like this

/*
const Promise = createOrder(cart);

Promise.then(Function (orderID)
{
    proceedToPayment(OrderId);
});

*/



// but we can also do this  like that

createOrder(cart).then(Function(OrderId){// this is a optimize way
    proceedToPayment(OrderID);

});
.then(function(paymentInfo)// we can attach next promise like that without varriable
{//                      this is called Promise Chaining
    return showOrdersummary(paymentInfo);
})//if we have to update balnce also  we can also one more call aback promise
.then(function(paymentInfo)
{
    return updateWalletBalance(PaymentInfo);
});// people always forget one thing that is return promise 
// som make sure dont forget to return thats how data keep flowing
//because function will retun thats how function work