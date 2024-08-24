const arr = [5,1,3,2,6];
function isOdd(x) // for odd
{
   return x % 2; 
}
//const output = arr.filter((x)=> x%2); can aslo use something like 
function isEven(y) // for even
{
    return y % 2 ===0;
}
const EvenOutput = arr.filter(isEven);//filter function filter the value inside an aray
const output= arr.filter(isOdd,);
console.log(output,EvenOutput);

//The arr.filter() method is used to create a new array from a given array consisting of only 
//those elements from the given array which satisfy a condition set by the argument method.
 
// for greater than 4
const great4 = arr.filter((z)=> z>4);
console.log(great4);