setTimeout(function()  { // this is a setTimeout function
    console.log("timer");
}, 5000);

function x(y) { // here is the function x and calling function Y inside it
    console.log("x");
    y();
}
x(function y()  // here i called function y as an argument insdie the function x
// so it will execute inside function x
{
    console.log("y");
});//This callback function gives us the access to whole Asynchronous world in Synchronous world.