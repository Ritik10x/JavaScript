;                                                      // this code calculateing the how many users of same age
                                                        //acc (accumulator) is an empty object {} at the start.
const output = users.reduce(function(acc,curr)          //curr (current object) is each user one by one.

{
    if(acc[curr.age]) // if the age like 29 i already counted 
    {
      acc[curr.age]  = ++acc[curr.age];// this will increse the number by 1
    }
    else
    {
        acc[curr.age] = 1; //  if the age 50 if only on time it will count only one
    }
    return acc;

},{}); //This empty object {} starts the accumulation process.
console.log(output);

/* proper explaination code
Step-by-Step Execution
We go through each user one by one.

1️⃣ First user { age: 23 }
acc is empty → acc[23] doesn’t exist.
So, acc[23] = 1.
✅ acc = { 23: 1 }
2️⃣ Second user { age: 29 }
acc[29] doesn’t exist yet.
So, acc[29] = 1.
✅ acc = { 23: 1, 29: 1 }
3️⃣ Third user { age: 29 }
acc[29] already exists (from previous step).
So, increase it: acc[29] = acc[29] + 1 = 2.
✅ acc = { 23: 1, 29: 2 }
4️⃣ Fourth user { age: 50 }
acc[50] doesn’t exist yet.
So, acc[50] = 1.
✅ acc = { 23: 1, 29: 2, 50: 1 } */