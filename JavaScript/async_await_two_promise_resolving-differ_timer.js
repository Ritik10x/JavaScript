// resolving two promises with diffenrt timing example
const p1 = new Promise(function (resolve,reject){  //first promise 10 sec
    setTimeout(function(){
        return resolve ("Promsie resolved value");
    },10000)
    
})
const p2 = new Promise(function (resolve,reject){  // 2nd 5 sec , it will not print first 
    setTimeout(function(){                         // it will resolve first after the first promise 
        return resolve ("Promsie resolved value"); // 10sec will over it print together will not wawit for 15 sec
    },5000)
    
})
// new await async method

async function handlePromise() {    
    const val1 = await p1;    
    console.log("NamsteJavaScript1");// got to next line, in old method it didnt work like that 
    console.log(val1);


const val2 = await p2;
    console.log("NamsteJavaScript2"); 
    console.log(val2);
}


handlePromise();
 