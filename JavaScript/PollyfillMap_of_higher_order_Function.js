const radius = [1,2,3,4]
const area =  function(radius)
{
    return Math.PI*radius*radius;
}
Array.prototype.calculate = function(operation)
{
    const output =[];
    for(let i=0; i<= radius.length;i++)
    {
output.push(operation(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));
//// Over here calculate is nothing but polyfill of map function
// console.log(radius.map(area)) == console.log(calculate(radius, area));
