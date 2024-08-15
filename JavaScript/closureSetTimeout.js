function x() // this is function
{
     for( let i=1;i<= 5;i++)
    {   // for loop
        /*{setTimeout(() => {}, timeout);*/ //this is set timeout function
        //...........here function name.. inside curly bracket the 
        // thing you want to delay and in timeout put number in millisec
      setTimeout(function x () {console.log(i)}, 3000);//timer  of 3sec or 3000 millisec
    }
    
    console.log("Hello World"); //this will print first beacuse a sperate memory space 
    // will be provided to function x so it will delay " hello world "
    // will be print first
}
x();