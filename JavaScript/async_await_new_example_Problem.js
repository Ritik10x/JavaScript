// same Promise resolving twice
const p = new Promise(function (resolve,reject){ 
    setTimeout(function(){
        return resolve ("Promsie resolved value");
    },10000)
    
})

// new await async method

async function handlePromise() {    
    const val1 = await p;// await will wait here to promise to resolve after that it will
    console.log("NamsteJavaScript");// got to next line, in old method it didnt work like that 
    console.log(val1);// javascript is waiting  in const val = await p; here 

// here i put again so result would be parllel it will not wait for 20sec it will print along with val1
    
const val2 = await p;
    console.log("NamsteJavaScript"); 
    console.log(val2);
}


handlePromise();
 
 /* old tradational method

 javascript will directly go to next Line but in async await it will wait till promise and bypass the Javascipt engine rule
 that javascript wait for none
 function getData()
{

p.then(function(result){
console.log(result);

 })                                 
 console.log("Namaste JavaScript")
}
getData();


                                        
*/ /** output will be 
Namste javascript
 Promsie resolved value  // after 10 sec 

 */