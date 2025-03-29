const API_url = "https://invalid"//typing invalid ur;


async function handlePromise()
{
try{
 const data =  await fetch(API_url); 
 
 const jsonvalue = await data.json();
 console.log(jsonvalue);
}
catch(err)
{
    console.log(err);
}                                                          

}

handlePromise();
/**
 * 
// In above whenever any error will occur the execution will move to catch block. One could try above with bad url which will result in error.

// Other way of handling error:
handlePromise().catch((err) => console.log(err)); // this will work as handlePromise will return error promise in case of failure.

 */