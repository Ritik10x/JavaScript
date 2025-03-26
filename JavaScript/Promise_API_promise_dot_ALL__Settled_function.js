// all these are dummy Promises we can actucally makes APi call

const P1 = new Promise((resolve,reject) =>
    setTimeout(() => resolve("P1 Sucess"),3000)) // here i used arrow function


const P2 = new Promise(function(resolve,reject){ // lets fail p2
    setTimeout(function(){
        reject("P2 fail");// p2 fail is a message will be catch by cath()
    },1000);
   /*setTimeout(function(){
        resolve("P2 Sucess");
    },1000); */
}
)


const P3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P3 Sucess");
    },2000);
   
}
)
/* arrow function for .then

Promise.all([p1, p2, p3]).then((res) => {
console.log(res);
});*/




// here we are using settled it will wait for all the promise to fullfil 
// whether it goint to be success or not
// promise.allsettled is the safest option
// it will only give the result if all the promise will settled

Promise.allSettled([P1,P2,P3]) // whatever this promise api will fetch will go insidie this.then
.then(function(result){// this parameter result will store the resolve outcome of promise
 console.log("Result",result);
})


.catch(function(err) { // in this err pe
    console.error("error",err)// if i put console.error instead of console.log
                              //  it will display as error in web red 
})
// never realy on uncaught error, always catch your erro


/* arrow function for .then

Promise.all([p1, p2, p3]).then((res) => {
console.log(res);
});*/

/* so if P2 and all sucess the result would be

Result [ 'P1 Sucess', 'P2 Sucess', 'P3 Sucess' ]
*/

// but here p2 fails so result is unacaught error 
// so lets  catch error too here by using catch()