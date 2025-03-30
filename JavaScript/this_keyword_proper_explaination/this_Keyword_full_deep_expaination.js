"use strict"; // by writing like this on our file we can use strict mode



// 1. this in global space
console.log(this);          /* .this => window, global 
                            in the global space this keyword has always a value of global object
                               in  case of browser the global object for .this keyword is "windows" thats why whe log this 
                                 we will see a window  object 
                            but if wo insdie the node.js the value of .this will be "global"              
                                 
                                 */
                            


//2. this inside a function
function x ()
{// the value depends upon strict / non strict mode
    console.log(this);
}
/*  x();  */                          /** 
                                   afte calling this we get same result as window object like global scope
                                   is it same the answer is "NO" 
                                
   *****important defination***
   .this keyword works defferntly in strict mode and non-strict mode
   
   these two methods outside and inside function we  run .this  keyword is  non-strict mode
            
   
   "use strict"; // by writing like this on our file we can use strict mode                   
       
   after using strict mode the value of this function inside of this keyword changed from 
   window object to undefined

      why is it happening like this inside function because of something known as    (this substitution)                       
   
   */












// 3.this in strict mode - (this substitution)
/*
 * If the value of this keyword is undefined or null
this keyword will be replaced with global object
only in non- strict mode
 
 */




// this keyword value depends on how the function is called (window)

x();// if we call function without any reffernce than the value is undefined in strict mode
window.x(); // if i call the function like this the undefined of strict mode will become window object



//4. this inside a object's method

                                                /*differnce between function and method
                                               
                                                if we make a function a part of an object that is known as method


                                                */

                                            //An object literal is a list of property names:values inside curly braces {}.
                                            //{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};




const obj = {
    a: 10, 
    b: 17,                 // if we create an object and inside the object if we create a function
    x: function(){          // here function x is a method 
                            // so x is amethod of function obj
                            //important Line // this keyword value depends on how the function is called (window)


console.log(this.a)             // the value of this keyword inside the () is  " obj "          
    }                           // by log (this) will print all value but if i do (this.a)           
}                               // so in the outout  only a value 10 will be print
obj.x();








//5. call apply bind methods (sharing methods) 

/*  when we have to share method  lets take real life example */

const Student1 = {      /** the value of this keyword in this object is student1 */
    name: "RITIK",
    PrintName: function(){     // now i want to share this printname function with student 2
        console.log(this.name)// or reuse the function
    }

}
Student1.PrintName();

const Student2 ={
    name: "deepika",   
}                                   /* so can i do this here "Student2.PrintName" the answer is No it will throw an error
                                     beacuse it is not a part of student2 object
                                    to do that by overriding the value of this keyword used in student1 object
                                    .call will take the value of this keyword inside it
                                    now the value of this keyword in studnt1 obje here console.log(this.name)
                                    will become student2 afte doing call keyword and passing 
                                    now i have override the value of  this keyword in student1
                                     learn bind and apply deep from his other youtube video */  
  Student1.PrintName.call(Student2);


//6. this inside arrow function
const object = {
    a: 10,
    x: () => { 
    console.log(this);// here the value of this will not be the value of object but it will be its enclosing lexical context
                            // lexical means how it is written over here, it means where is our object is lexcial present inisde the code
    },                      ////// how it is written inside the code
    };           // here this keyword presnt in the global scope so it will not behave like it is indside a function, it will behave as a global sscope
    object.x();  //  so after invoking it will give us output =>  window object
                    // it will behave as like if write console.log(this) not inside method

/* the arrow function above was not the method of object here  */

//7. this inside nested arrow function

const obj2 = {
    a: 10,
    x: function () {const y = () => {       //the arrow function here is enclosed with another function here
                   console.log(this);       // which is a method of another function
                    };
                     y();               // here the arrow is lexical enclosed with another function
                    },    
                };
            
            obj2.x();           /*  
                             the lexical closed context is this here       
                                {
                                const y = () {
                                console.log(this);
                                };
                                y();

                                    */

   




//8. this inside DOM I
/*
 write this in html file

 here the button elemtnt is the value of this keyword 

 this inside DOM elements refence to HTMLplement


 <button onclick="alert(this)">Click Me</button>
<!-- [object HTMLButtonElement] Button element -->

*/




// differnce between function vs method

/**
 * 1️⃣ Function
✅ A function is an independent block of code that is not associated with any object.
✅ It can be declared using function or const/let with an arrow function.
 * example

                         function greet() {
                              console.log("Hello, world!");
                                }
                                greet(); // ✅ Calling the function directly

 

            2️⃣ Method
            ✅ A method is a function that is associated with an object.
             ✅ It is called using the dot (.) notation on an object. 
             example

                    const person = {
                    name: "Alice",
                    greet: function () {
                    console.log("Hello, " + this.name);
                    }   
                    };

                    person.greet(); // ✅ "Hello, Alice"


   ⚡ Quick Analogy
Function = Standalone worker → Works on its own

Method = Worker inside a company → Works within an organization (object)          


🔑 Key Differences



Feature	                Function	                                Method
Definition	        Independent block of code	                    Function inside an object
Invocation	        Called directly	                                Called on an object (obj.method())
Uses this?	        No, unless inside an object	                    Yes, refers to the object it belongs to


 */





/** 
 * whatever is outside the function is a global scope for ".this" kewyword
 * ex=> 
 * var a = 2
 * 
 * function
 * {
 * whatever inside the function is the
 * function scope for ".this" keyword
 * }
 * 
 * 
 */



/**
 now you can understand this defination of this keyword


this
A function's this keyword behaves a little differently in JavaScript compared to other
languages. It also has some differences between strict mode and non-strict mode.


In most cases, the value of this is determined by how a function is called (runtime
binding). It can't be set by assignment during execution, and it may be different each
time the function is called. The Function.prototype.bind() method can set the value of
a function's this regardless of how it's called, and arrow functions don't provide their
own this binding (it retains the this value of the enclosing lexical context).
 

*/



/** this keyword also behave differntly inside clases and constructor also */