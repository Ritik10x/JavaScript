const cart =[ "shoes", "pants","kurta"];

createOrder(cart,function(orderId)
{
    proceedToPayment(OrderId,function (paymentInfo)
    {
        showOrderSummary(paymentInfo,function()
    {
        updateWalletBalance();
    });
    });
})

// using Arrow Function

createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo)=> showOrderSummary(paymentInfo);
.then(paymentInfo)=> WalletBalance(PaymentInfo);