// passsing a promise function to a async function
const p = new Promise(function (resolve,reject)
{
    return resolve ("Promsie resolved value");
})


async function getData() {  // async will always return a promise
    return p;               // here i am returning a promise function 
                            // which is already have a promise attached
}                           // but it async will not attach or wrap a promise around p function

const dataPromise = getData();  

dataPromise.then(function(res) {  
    console.log(res);  
});  
