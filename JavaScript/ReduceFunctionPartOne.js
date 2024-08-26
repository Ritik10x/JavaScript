const arr = [5,1,3,2,6];   // Array Initialization:

function findSum(arr)       //There's a function named findSum that takes an array as  
{                           //input and calculates the sum of all the numbers in that array.
    let sum = 0;            // variable for the SUM Inside the function, you start with a variable sum set to 0
                             //This variable will store the total sum as you go through each number in the array.
    
        for(let i=0;i<arr.length;i++)//The for loop goes through each number in the array, one by one.
                                    // On each loop, it adds the current number (arr[i]) to the sum.
        {
            sum= sum + arr[i];// // Add the current number to the sum
            // Example: On the first loop, sum = 0 + 5, so sum becomes 5. 
            //  On the next loop, sum = 5 + 1,
            // so sum becomes 6, and so on, until all numbers are added. 


        }
            return sum;
            // Return the Sum:

        //Once the loop is done, the function 
        //returns the final value of sum, which is the total of all the numbers in the array.

}
console.log(findSum(arr));
        //Finally, you call the findSum function with the arr array and print the result
        //The function adds up 5 + 1 + 3 + 2 + 6, which equals 17. So, the output will be 17.

        // IN PART TWO WE will use Reduce()====>>>