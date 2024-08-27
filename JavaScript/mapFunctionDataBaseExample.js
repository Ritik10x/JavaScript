const user = [
    { firstname: "Alok" , lastname:"raj",age:23 },
    { firstname: "ashish", lastname:"kumar",age:29},
    { firstname: "ankit", lastname:"roy",age:29},
    { firstname: "pranav", lastname:"mukherjee",age:50},
];
const output = user.map(x=>x.firstname + x.lastname)// the X represent the first item of object means = firstname
console.log(output);