1. Everything inside java Script happens inside  Execution context
2. java Script is a single threaded Synchronous
3. java script execute code Line by line
4. there two phases in java script 
5. phase 1 : memory and phase 2  code
6. phase 1 is memory phase : in which we are locating the memory to the variable: and at starting we located these variable with undefined memory location ![[Screenshot 2024-07-31 005819.png]]
7. it manages the call stack , it is stack and in bottom 


how function work in java script
 call stack global memory execution
 memory phase and code phase and inside it also creates a memory of function's variable memory phase and code phase its just work like  parent phase
![[Screenshot 2024-08-06 222332.png]]


==ep 5 the shortest java script Program==
 when there is nothing or no code written  and you run that program that empty program
 that is window  -> inside it there is big object and lot of function which is created by java script
 engine into the global space we can access that anywhere in the java program this functionality is given by java script engine.

java script also creates this keyword which points to the window object, window is a global object which is also creates a along with the global execution context 
this keyword , window, global execution context , global space is created when java script program is created

- In different engines, the name of global object changes. Window in browsers, but in nodeJS it is called something else. At global level, this === window

what is global space ?
global space is any code you write inside java script but not inside the function

 for example
 var x = 10; // this is inside the global space
 function b()
 {
 var x = 10; // this is not inside the global space
 }
 console.log(x);  //it wont find in the global space because it exit inside the function 
 
  
  at simply anything not inside the function is global space
console.log(this.x); // if we put this keyword then it will print its value x = 10...

Episode 6 un defined VS not defined

Undefined - when the memory is allocated but he value is not defined then.
 Not defined - when the object/variable is  not defined not memory is allocated  but still try to access it  ..
- In first phase (memory allocation) JS assigns each variable a placeholder called **undefined**.
    
- **undefined** is when memory is allocated for the variable, but no value is assigned yet.
    
- If an object/variable is not even declared/found in memory allocation phase, and tried to access it then it is **Not defined**
    
- Not Defined !== Undefined

var a;

  

a=10; // if i erase this line its  the code will give undefined value otherwise it will not give undefined

console.log(a);

if (a===undefined)

{

    console.log("a isn undefined")

}

else

{

    console.log("a in not undefined");

}
- JS is a **loosely typed / weakly typed** language. It doesn't attach variables to any datatype. We can say _var a = 5_, and then change the value to boolean _a = true_ or string _a = 'hello'_ later on.
- **Never** assign _undefined_ to a variable manually. Let it happen on it's own accord.


Episode 7
The Scope Chain & Chain lexical Enviornment
Scope in javascript directly related to Lexical environment
for example // CASE 1



function a() {
    console.log(b); // 10   // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope. 
    
}
var b = 10;
a();

the  function inside the function which is not defined yet can access  the outside the  values but the vice- versa is not possible

// CASE 2
function a() {
    c();
    function c() {
        console.log(b); // 10
    }
}
var b = 10;
a();

// CASE 3
function a() {
    c();
    function c() {
        var b = 100;
        console.log(b); // 100
    }
}
var b = 10;
a();


// CASE 4
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // 10
    }
}
a();
console.log(b); // Error, Not Defined

Let's try to understand the output in each of the cases above.

- In **case 1**: function a is able to access variable b from Global scope.
- In **case 2**: 10 is printed. It means that within nested function too, the global scope variable can be accessed.
- In **case 3**: 100 is printed meaning local variable of the same name took precedence over a global variable.
- In **case 4**: A function can access a global variable, but the global execution context can't access any local variable.



here comes Scope
the Scope means where you can access a  specific variable  function in a code

lexical environment - the lexical memory is local environment along with the lexical environment of its parent

Lexical mean in hierarchy or in sequence 
in code the ==c () function== lexical sitting in a  ==() function==___---->>>
 code 
 function a ()
 { 
 var b = 10;
 function c ()
 {
 
 }
 }
 a();
 console log(b);![[Screenshot 2024-08-07 144603.png]]


lexical parent 
![[Pasted image 20240807145541.jpg]]

the orange box is parent address
c to a and global function is null because its has no parent


```
To summarize the above points in terms of execution context:
call_stack = [GEC, a(), c()]
Now lets also assign the memory sections of each execution context in call_stack.
c() = [[lexical environment pointer pointing to a()]]
a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]
GEC =  [a:{},[lexical_environment pointer pointing to null]]
```  


==episode 7#  let & const in JS, Temporal Dead Zone==
let and const declarations are hoisted. But its different from **var**

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15
```
**It looks like let isn't hoisted, but it is, let's understand**
- Both a and b are actually initialized as _undefined_ in hoisting stage. But var **b** is inside the storage space of GLOBAL, and **a** is in a separate memory object called script, where it can be accessed only after assigning some value to it first ie. one can access 'a' only if it is assigned. Thus, it throws error.
or we can say it is in temporal dead zone for the time being

- **Temporal Dead Zone** : Time since when the let variable was hoisted until it is initialized some value.
    
    - So any line till before "let a = 10" is the TDZ for a
    - Since a is not accessible on global, its not accessible in _window/this_ also. window.b or this.b -> 15; But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared anywhere)
- **Reference Error** are thrown when variables are in temporal dead zone.
    
- **Syntax Error** doesn't even let us run single line of code.

- - ```js
         let a = 10;
          let a = 100;  //this code is rejected upfront as SyntaxError. (duplicate declaration)
          ------------------
          let a = 10;
          var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)
        ```
        
- **Let** is a stricter version of **var**. Now, **const** is even more stricter than **let**.
    
    ```js
    let a;
    a = 10;
    console.log(a) // 10. Note declaration and assigning of a is in different lines.
    ------------------
    const b;
    b = 10;
    console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)
    ------------------
    const b = 100;
    b = 1000; //this gives us TypeError: Assignment to constant variable. 
    ```
    - Types of **Error**: Syntax, Reference, and Type.
    
    - Uncaught ReferenceError: x is not defined at ...
        
        - This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.
    - Uncaught ReferenceError: cannot access 'a' before initialization
        
        - This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.
    - Uncaught SyntaxError: Identifier 'a' has already been declared
        
        - This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.
    - Uncaught SyntaxError: Missing initializer in const declaration
        
        - This Error signifies that we haven't initialized or assigned value to a const declaration.
    - Uncaught TypeError: Assignment to constant variable
        
        - This Error signifies that we are reassigning to a const variable.

==Episode 9 #  Block Scope & Shadowing in JS==

What is a **Block**?

- Block aka _compound statement_ is used to group JS statements together into 1 group. We group them within {...}
- - ```js
    {
        var a = 10;
        let b = 20;
        const c = 30;
        // Here let and const are hoisted in Block scope,
        // While, var is hoisted in Global scope.
    }
    Block Scope and its accessibility example

```js
{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined
```
- Reason?
    - In the BLOCK SCOPE; we get b and c inside it initialized as _undefined_ as a part of hoisting (in a seperate memory space called **block**)
        
    - While, a is stored inside a GLOBAL scope.
        
    - Thus we say, _let_ and _const_ are BLOCK SCOPED. They are stored in a separate mem space which is reserved for this block. Also, they can't be accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.

==the word scope refers as a environment mean== 
==global scope // environment outside the curly braces==
==var= 100;//  this outside the curly braces that means this is global scope==
=={==
    ==var a = 10; // this inside the block space or code block or inside curly braces is block scope==
    ==let b = 20;==
    ==const c = 30;==
==}==

# Episode 10 : Closures in JS
