var  a  = 100; /*var a is in global scope can be access from anyhwhere
 the value it will print a = 10 because its modified 
 if we change var a in first line into let b ; and access it will give us 
100 not 20 because b is in another block scope and same for const it will give 
 us the value c = 100 when we call from outside*/
{
    var a = 10;
    let b = 20;
    const c = 30;

}
console.log(a);