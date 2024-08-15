function x()
{
    for( var i=1; i<=5;i++)// change the var into let output will be okay
    {
        setTimeout(function x() // but if we have to do with the "Var"
        {
            console.log(i);// the var method and explain in next 
            // SetTimeoutUsingVAR code
            
        }, 3000);
    }
} x();
/* with this  code out put is  because of "var" used in for loop but if we 
6 change the var to loop the output will be correct
6
5
6
6*/
