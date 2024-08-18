const radius = [3,1,2,4];// same array used in three differnt function
                                //otherwise we have to write 3 diffent code for calulate
                                // the "area","cicumfrence","diameter"
const area = function (radius)  // but with help of high order function we optimized the code
{
    return Math.PI * radius * radius;//
};


const circumference = function(radius)
{
    return 2* Math.PI * radius;
};


const diameter = function(radius)
{
    return 2*radius;
};

const calculate = function( radius, logic)// 
{
    const output = [];
    
    for(let i=1; i<=radius.length;i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}
    console.log(calculate(radius,area));
    console.log(calculate(radius,circumference));
    console.log(calculate(radius,diameter));
    Over here calculate is HOF
    // Over here calculate is HOF
    // Over here we have extracted logic into separate functions. 
    //This is the beauty of functional programming.