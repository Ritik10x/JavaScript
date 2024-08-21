const arr = [ 5,1,2,3,6];

/* function binary(x) this is how we use write function 
return x.toString(2);  but we can also write function with
const output = arr.map(binary); like that down below
*/
//const output = arr.map(function binary(x){return x.toString(2)});


// or we can use "Arrow Function"
 const output = arr.map((x) => x.toString(2));
 console.log(output);
