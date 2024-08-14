function x()
{
    var i = 1;
    setTimeout(function () { console.log(i); },5000);// here we set ou time
    // of 5 sec so the output will be printed after 5sec
    console.log("hello world");// you might think that it will pritn i 
    // after that it will print hello world but not it will print
    // hello world first
}
x()