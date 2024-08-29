const cart =["shoes","pants","Kurtas"];

/*

createOrder(cart,function(orderId)
 {
    proceedToPayment(OrderID,function(paymentInfp)
{
    showOrderSummary(PaymentInp,function(){
        updateWalletBalance();
    });
});
 });

 */
 
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
