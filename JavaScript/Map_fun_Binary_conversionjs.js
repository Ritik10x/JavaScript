 const arr = [5,1,3,2,6]

 function binary(x)
 {
    return x.toString(2);//Inside the function, 
    //x.toString(2) converts the number into its binary form (base 2).
 }
 const output= arr.map(binary);
 console.log(output);