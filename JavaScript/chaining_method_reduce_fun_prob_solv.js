const users = 
[
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
]   
console.log(users.reduce((acc, curr) => (curr.age < 30 ? acc.push(curr.firstName) : null, acc), []));