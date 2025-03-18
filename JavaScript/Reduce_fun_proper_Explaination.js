const arr = [5,1,3,2,6];      // we will do this same code through reduce method 

function findSum(arr)         // we can not use map function here beacuse map gives us array in return
{
  let sum = 0;                // here we need one value , like sum of all array 
                               // so the right approach is Reduce function
  for(let i=0;i<arr.length;i++)
  {                   // instead of writing this function and loop we will write
    sum= sum+ arr[i]; // or pass two parrameters like "acc" and "curr" we can take  any name but two parameters
  }                   // which will work ass "acc " will do the work of sum int his code
                      // and "curr " will do the work of iterating and we need to put 
  return sum;         // " 0 " at last to intialzie just like in this code we did 
                      // " let sum = 0 ;"
}
console.log(findSum(arr)); // the map function will work like 
                             
                            

/*
                            arr.reduce((acc,curr)
                             {
                              acc = acc+curr;
                             
                             return acc;
                             } 0);

 if we have to write arro function then we will write like this
 
 arr.reduce((acc,curr)=> acc+curr, 0) */