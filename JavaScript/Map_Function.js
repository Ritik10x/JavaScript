const arr =[5,3,1,2,6]; //

function double(x)
{
    return x*2;
}
function triple(y)
{
    return y*3;
}
const output = arr.map(double); // map function cant take multiple function callback as an arrgument so it wont work
                                // like "const const output = arr.map(double,triple);" this is wrong 
const output_2 = arr.map(triple);// thats why i made another varriable
console.log(output,output_2);

// It is basically used to transform a array.
//The map() method creates a new array with the results of calling a function for every array element.

 // this function tells map that what transformation I want on each element of array