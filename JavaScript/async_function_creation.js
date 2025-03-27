// async is keywword which we put before the function to maken it async function

// async function will always return a promise
async function getData()        // either we can return promise lik return new promise
{                               // or if return  a value like string " rertun Namaste"
    return "namaste";                       // this function will automaticaly wrap a promise around it and will retun
}                               // async function will always return a promise

const dataPromise = getData();
//console.log(dataPromise);  output 
/* 
Promise {<fulfilled>: 'namaste'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"namaste"*/



dataPromise.then(function(res) { //.then handle the resolve value of promise
 console.log(res);               // instead of .then if simple console.log(dataPromise)         
})                               // then it will give whole promise current state not the the actual value