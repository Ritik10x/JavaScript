function a() // this is a parent 
{
    let num = 10;
    function b()// this is a child function we 
    {
        let tum = 20;
        console.log(num+tum); // in closure we can access the num from
        // parent function but vice-versa is not possible for example
    }//  if console.log was not in the funnction b and in funnction a
    // we called it , would have shown us error... this is closure
    b();

}a();
