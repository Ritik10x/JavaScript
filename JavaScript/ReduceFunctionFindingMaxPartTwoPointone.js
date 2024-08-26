const arr = [5,1,3,2,6];// simple method find max in array
function FindMax(arr)
{//The for loop goes through each number in the array, one by one.
//On each loop, it checks if the current number (arr[i]) is larger than the current max value.
    let max =0;
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max= arr[i];// Update `max` if the current number is bigger
        }
    }
    return max;
}  console.log(FindMax(arr));
/*
On the first loop, max is 0 and arr[i] is 5, so max becomes 5.
On the second loop, arr[i] is 1, which is less than 5, so max remains 5.
This continues until all numbers are checked, and 6 is found to be the largest number.
*/
 // reduce function in next part
 