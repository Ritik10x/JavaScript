const arr = [5,1,3,2,6]
  
function findmax(arr)
{
  let max=0;
   for(let i=0; i<arr.length; i++)
  {
                if(arr[i]>max)// this is checking the value
         {                
              max = arr[i]; // this is updating the value 
        }
  }
  return max;
}
console.log(findmax(arr));
/*
const output= arr.reduce(acc,curr // we can change acc to max 
{
      if(curr>acc)                  // then if(curr > max)
  {
        acc =curr;                  // max = curr;
  }
   return acc;                      // return max;
}0 );
