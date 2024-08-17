function x()
{
    console.log("hi");
};
function y(x)
{
    x();
};
y(x);
//  y is a higher order function
// x is a callback function
//Higher-order functions are regular functions that take one or more functions as arguments and/or return functions as a value from it