const radius = [1, 2, 3, 4]; // this is the radius

const area = function(radius)// logic to calculate area 
{
  return Math.PI *radius* radius;
}
 const circumfrence = function(radius)// logic to calculate circumfrence 
 {
  return 2* Math.PI *radius;
 }

 const calculate = function(radius,logic) // logic will be replace by the function like area , circumfrence
 {
   const output = []; // output is empty array we can change the name to exit
  for( let i=0;i<radius.length;i++)
  {   // if change the output to exit then we have to change this lin
    output.push(logic(radius[i]));// exit.push(logic(radius[i]));
  }
  return output; // change here to return exit
 }
 console.log(calculate(radius ,area));
 console.log(calculate(radius,circumfrence));