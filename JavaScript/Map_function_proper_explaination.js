const arr = [5,1,3,2,6]; 

function double(x)
{
  return x*2;
}
const output = arr.map(double);// .map() is a built-in JavaScript function that applies a function to each element of an array and returns a new array.
                                //Here, it applies the double function to each element in arr.
            //The map() method creates a new array with the results of calling a function for every array element.
console.log(output);
                        /*Understanding map() in Simple Words
                        .map() is like "Hey, apply this function to each element and give me a new array."
                        It does NOT modify the original array.
                        It is a cleaner alternative to using loops like for loop or forEach.*/
  
                        