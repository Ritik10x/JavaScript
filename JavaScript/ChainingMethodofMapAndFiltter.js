const user = [
    { firstname: "Alok" , lastname:"raj",age:23 },
    { firstname: "ashish", lastname:"kumar",age:29},
    { firstname: "ankit", lastname:"roy",age:29},
    { firstname: "pranav", lastname:"mukherjee",age:50},
]; // here i am using function chaining 
// first i applied filtter and based on this output
// i am getting map result 
const output = user.filter(x => x.age<30 ).map(x=>x.firstname);
// at first "user.filter(x => x.age<30 )" this gives age of peope under 30
// so bsaed on this  output we used another function ".map(x=>x.firstname);"
console.log(output);
  

