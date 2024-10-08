console.log("start");

setTimeout(function(){
    console.log("callBack")
},5000);
console.log("End");
// million of Lines

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000)
{
    endDate = new Date().getTime();
}
console.log("while Expires");
// Over here setTimeout exactly doesn't guarantee that the callback function will be called exactly after 5s. Maybe 6,7 or even 10! It all depends on callstack. 
/*
Reason?

First GEC is created and pushed in callstack.
Start is printed in console
When setTimeout is seen, callback function is registered into webapi's env. And timer is attached to it and started. callback waits for its turn to be execeuted once timer expires. But JS waits for none. Goes to next line.
End is printed in console.
After "End", we have 1 million lines of code that takes 10 sec(say) to finish execution. So GEC won't pop out of stack. It runs all the code for 10 sec.
But in the background, the timer runs for 5s. While callstack runs the 1M line of code, this timer has already expired and callback fun has been pushed to Callback queue and waiting to pushed to callstack to get executed.
Event loop keeps checking if callstack is empty or not. But here GEC is still in stack so cb can't be popped from callback Queue and pushed to CallStack. Though setTimeout is only for 5s, it waits for 10s until callstack is empty before it can execute (When GEC popped after 10sec, callstack() is pushed into call stack and immediately executed (Whatever is pushed to callstack is executed instantly).
This is called as the Concurrency model of JS. This is the logic behind setTimeout's trust issues.
*/