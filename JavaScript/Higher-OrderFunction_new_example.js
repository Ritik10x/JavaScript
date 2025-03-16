const arr = [5,1,3,2,6]; 

function double(x)
{
    return x*2;
}
function triple(y)
{
    return y*3;
}

const output = function(arr, logic){
const exit = [] ;
 for (let i =0; i<arr.length;i++)
 {
    exit.push(logic(arr[i]));
 }
 return exit;
}
console.log(output(arr,double));
console.log(output(arr,triple));
