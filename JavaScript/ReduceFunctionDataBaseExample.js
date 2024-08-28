const user = [
    { firstname: "Alok" , lastname:"raj",age:23 },
    { firstname: "ashish", lastname:"kumar",age:29},
    { firstname: "ankit", lastname:"roy",age:29},
    { firstname: "pranav", lastname:"mukherjee",age:50},
];
const output = user.reduce(function(accumaltor, current)
{   if(accumaltor[current.age])
    {
        accumaltor[current.age] = ++accumaltor[current.age];
    } 
        else
            {
                accumaltor[current.age]=1;
            }
            return accumaltor;
     
},{})
console.log(output);