const users = 
[
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
]                                                     //            "||" means Or  
console.log(users.reduce((acc,curr)=> (acc[curr.age] = (acc[curr.age] || 0) + 1, acc), {}));
            //                                                                         empty object {}