const arr =[5,1,3,2,6];
            /* function findSum(arr)
            {       let sum=0;
                for(let i=0; i<arr.length;i++)
                {
                        sum= sum+arr[i];
                }       return sum;
            }           console.log(findSum(arr));?*/ // this loop method will replace by  reduce
 // Reduce method
 const output = arr.reduce(function(accumlate,current)// current represent the value of array
    {                             //// accumulator is used the result from element of array.
        // In comparison to previous code snippet, *sum* variable is *accumulator* and *arr[i]* is *current*
        acc = accumlate + current;
        return acc;
    }, 0 ////In above example sum was initialized with 0, so over here accumulator also needs to be initialized, so the second argument to reduce function represent the initialization value.
    
    
);
console.log(output);
