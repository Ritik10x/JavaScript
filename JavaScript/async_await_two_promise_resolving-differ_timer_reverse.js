
//reverse time order which one will be print first p1 or p2

//looks like p1 but no
//for 5 sec it will resolve the p1 and after 5sec more it will print p1 and p2 together
// coz js engine stops for none that is 100% true it just waiting for it if the case is p1 
// 10sec and p2 5 sec the answer is 10 
//p1 5 Sec p2 10 still it will take 10 sec 

const p1 = new Promise(function (resolve,reject){  //first promise 10 sec
    setTimeout(function(){
        return resolve ("Promsie resolved value");
    },5000)
    
})
const p2 = new Promise(function (resolve,reject){   
    setTimeout(function(){                         
        return resolve ("Promsie resolved value"); 
    },1000)
    
})
// new await async method

async function handlePromise() {    
    const val1 = await p1;    
    console.log("NamsteJavaScript1"); 
    console.log(val1);


const val2 = await p2;
    console.log("NamsteJavaScript2"); 
    console.log(val2);
}


handlePromise();
 