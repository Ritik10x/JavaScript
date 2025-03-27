//async and await combo are used to handle promises

/// await is a keyword that can only be used inside a async function.
const p = new Promise(function (resolve,reject)
{
    return resolve ("Promsie resolved value");
})

async function handlePromsie() { 
    
    //we ahve use await befoe the Promise "p"
    //⬇                                 //Using 'await' to handle the resolved value of the promise
                                     //thats how we will handle promise now instead of .then
    
    const val = await p;  // await is a keyword that can only be used inside a async function          
    console.log(val);

}   //the val will contain 
// the resolved value  "("Promsie resolved value");"  

handlePromsie();


 

                                        /* old method
                                        function getData()
                                        {
                                            return p;
                                        }.then(function(result){
                                            console.log(result);
                                        })*/

