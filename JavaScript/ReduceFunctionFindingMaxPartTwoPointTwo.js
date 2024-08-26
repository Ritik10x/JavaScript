const arr = [5,1,3,2,6];
const output = arr.reduce(function (accumator,current)
{
    if(current > accumator)
    {
        accumator = current;

    }
    return accumator;//// acc is just a label which represent the accumulated value till now,
    // so we can also label it as max in this case
},0);
console.log(output);