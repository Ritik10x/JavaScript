const arr = [5,1,3,2,6]; 

function double(x)
{
    return x*2;
}
function triple(y)
{
    return y*3;
}
const output = arr.map(triple,double);// map work as loop and return new index in previous question we did
console.log(output);