const API_url = "https://api.github.com/users/Ritik10x"


async function handlePromise()
{

 const data =  await fetch(API_url); 
 
 const jsonvalue = await data.json();// its again a promise here so how will be handle promise using await
 // here we are converting data into using .json to json and stoing into jason
 console.log(jsonvalue);
                                                            // fetch function will give you a response objrct in return
                                                             // and this response object have body which is a readable stream
  //const data will get response over here                 // if we have to convert this readable stream to json we will do .json 
                                                             // again this is a promise so it will give us result or value
// fetch() => response.json=> jsonvalue

}

handlePromise();