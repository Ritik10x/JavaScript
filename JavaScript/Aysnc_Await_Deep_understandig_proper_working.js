 

const p1 = new Promise(function (resolve,reject){  //first promise 10 sec
    setTimeout(function(){
        return resolve ("Promsie resolved value");
    },5000) 
    
})
const p2 = new Promise(function (resolve,reject){   
    setTimeout(function(){                         
        return resolve ("Promsie resolved value"); 
    },10000)
    
})
// new await async method

async function handlePromise() { 
    console.log("Hello World")   
    const val1 = await p1;    
    console.log("NamsteJavaScript1"); 
    console.log(val1);


    const val2 = await p2;
    console.log("NamsteJavaScript2"); 
    console.log(val2);
}


handlePromise();
/**
 javaScipt is a single threaded language and has only one gernal execution context
 for one thread , so when we call hadnlePromise()
 it will directlyy print Hello world Line after it will go next Line where it will see
 there is await so,

 javaScipt is a single threaded language and has only one gernal execution context
 for one thread and one call stack it wait for none so, 
 
 handlpromise() will not wait for promise to resolve and block the call stack
 as soon as it will see there is  await it will suspend the execution of handlepromise from call stack for that time

 and after that it will wait till await p1 resolved after that it will move ahead to

the P1 will be resolved after 5 sec so after resolve this handlePRomise() will come back inside GEC call stack

it will start executing again from where it left "const val1 = await p1; " here so it will start executeing 

from next Line "console.log("NamsteJavaScript1"); " it will log this NamasteJavScript1 Line 

after it will go to next Line "console.log(val1);" afte that it will reach the 

next Line "const val2 = await p2;"

and P2 will stil has to resolve and it will take 10sec

so after reaching await p2 line it will again suspend the  handlePromise() from the call stack

basically it will not block the main thread and call stack will be free

after 10sec p2 is resolved the hadnlePromise() will again comeback into the call stack like before

and it start exceuting  from the place it left " console.log("NamsteJavaScript2");" it will log Namaste JavaScript
 
it will go to the next Line console.log(val2);


javascript will run evereything when it will see promise it will suspend the promise one it was resolved
it will come back and display

___if we take reverse example where p1 is 10sec and p2 is 5 sec______ 


first handlePromie function() will be supended from call stack and wait for 10sec p1 to resolve
    handlePromise() will comeback into the call satck will start from it left
after resolving it will directly print next whatever line is

by the time it will reach to await await p2 Line which is 5sec 

this promise will be resolved till then
so after 10 sec it will print


 console.log("NamsteJavaScript1"); 
    console.log(val1);

     console.log("NamsteJavaScript2"); 
    console.log(val2);
*/
 