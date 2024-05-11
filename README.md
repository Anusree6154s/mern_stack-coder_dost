# Project:

- Website:[Ebazar Ecommerce Website](https://ebazar-ecommerce-website.onrender.com/)
- Code:[Code for Ebazar Ecommerce Website](https://github.com/Anusree6154s/mern_stack_full_tutorial-coder_dost/tree/main/3.%20React-Redux%20-%20Ecommerce%20Project%20-%20Ebazar)

# Notes

## Topics:

1. [React](#1-react)
2. [Redux](#2-redux)
3. [Javascript](#3-javascript)
   1. [Basic](#1-basic-javascript)
      1. [Javascript Datatypes]()
      2. Flow control with JS
      3. Functions
      4. Objects
      5. DOM
      6. Forms
      7. Array Methods
      8. Date Library
      9. Local Storage
      10. Object Oriented JS
      11. Async JS
      12. ES6
      13. Misc Tools
   2. Advanced
4. NodeJS

## 1. React

## 2. Redux

## 3. Javascript

### 1. Basic Javascript

> 1. **Setup:** _using Widnows and VS Code_
> 2. **Live Server:**
>    - _a VS Code Extension_
>    - _To reload console without running `node index`_

#### 1. **JavaScript Data types**

1.  **Variable Constants and comments**


      - var - Redeclarable, reassignable (Global Scope)
      - let - reassignable, NOT redeclarable (Block Scope)
      - const - NOT redeclarable, NOT reassignable

2.  **Data types (& types)**


      - Number, String, Boolean, Null, undefined. Object, Symbol

3.  **Strings**


      - Concatenation using +
      - using "", '' ``
      - has string methods (`toUpperCase`, `indexOf`, `trim`, `includes`, `slice`, `split`-> string to arrray )

4.  **Numbers**


      - Priority:
         1.  Parenthesis - ()
         2.  Exponent - \*\*
         3.  Multiplication, Division, Modulus - \*, /, % (left to right)
         4.  addition, subtration - +, - (left to right)
      - Loose equality (==), strict equality (===), NOT equality (!=), strict NOT equality (!==)

5.  **Type conversion**


      - `typeof variableNmae`

6.  **Arrays**


      - `.join()`, `.concat()`, `.length()`, `.push()`, `.pop()`

7.  **Comparison Operators**


      - `===`, `==`, `!==`, `!=`, `>`, `>=`, `<`, `<=`

8.  **Control FLow**
    1. Loops
       - for loop, while loop, do while, if/else/elseif, nested if, break and continue, switch case
    2. Logical Operators
       - From highest priority to lowest - &&, ||, !
    3. Ternary Operator
       - if/else conditions in single line
       - (condition? if-case : else-case )
9.  **Functions**

    1. Declaration and call
       - **function declaration:** This is **where you define a function.** It typically consists of the function keyword, followed by the function name, parameters (if any), and the function body.
         ```javascript
         function functionName(parameter) {
           //code
         }
         ```
       - **function call:** Once you have declared a function, you can call it to execute the code inside it. `functionName(argument)`
    2. Arguments and Parameters
       - argument: passed to the function call
       - parameter: passed to the function declaration
    3. Arrow Functions:
       ```javascript
       fucntionName = (parameter) => {
         //code
       };
       ```
    4. Higher Order Function:
       - Functions passed an dreturned within funcitions
       - Callbak: another funciton as argument
         ```javascript
         function functionName(function2) {
           //code
         }
         ```
       - Closure: another funciton as return value
         ```javascript
         function functionName() {
             //code
             return function2(){
                 //code
             }
         }
         ```
    5. Function Returning another function: Closure

       - funciton declaration:

         ```javascript
         fucntion x(parameter1){
             return (parameter2){
                 //code
             }
         }
         ```

         or

         ```javascript
         fucntion x(parameter1){
             fucntion y (parameter2){
                 //code
             }
             return y
         }
         ```

       - function call:
         ```javascript
         x(arg1)(arg2);
         ```
         or
         ```javascript
         let functionCall1 = x(arg1);
         fucntionCall1(arg2);
         ```

    6. IIFE:
       - Immediately Invoked Function Expression
       - To declare a function and call it at the same time
       ```javascript
       (fucntion functionName(){})()
       ```
       or
       ```javascript
       (fucntion functionName(parameter){
           //code
       })(argument)
       ```
    7. SetTimeout, SetInterval - Timer Functions
       - SetTimeout:
       ```javascript
       setTimeout(function (){
           //code
       }, time, arg1, arg2, ...)
       ```
       - SetInterval:
       ```javascript
       setInterval(function (){
           //code
       }, time, arg1, arg2, ...)
       ```
    8. Hoisting
       - Function Declarations are hoisted means it is taken to the top pf the document

10. **Objects**

    1. Accessing: using `[]` (bracket) or `.` (dot)
    2. Delete: `delete objName`
    3. Method: funciton ind=side objects
    4. `this` keyword: refering current object
    5. Arrays methods:
       - for-each method: called as functional programming
       - object inside array
    6. Math Objects:
       - `.round()` - round up if above 5, else round down
       - `.floor()` - round down
       - `.ceil()` - round up
       - `.trunc()` - remove decimal
    7. Call and Apply method

       1. **call() method**: This method allows you to call a function with a given `this` value and individual arguments.

          Syntax:

          ```javascript
          function.call(thisArg, arg1, arg2, ...)
          ```

          Example:

          ```javascript
          function greet() {
            console.log("Hello, " + this.name + "!");
          }

          const person = { name: "Alice" };
          greet.call(person); // Outputs: "Hello, Alice!"
          ```

       2. **apply() method**: This method is similar to `call()`, but it accepts arguments as an array.

          Syntax:

          ```javascript
          function.apply(thisArg, [argsArray])
          ```

          Example:

          ```javascript
          function greet() {
            console.log("Hello, " + this.name + "!");
          }

          const person = { name: "Bob" };
          greet.apply(person); // Outputs: "Hello, Bob!"
          ```

          **Both `call()` and `apply()` let you explicitly specify the `this` value within the function.** The difference lies in how arguments are passed: **`call()` accepts arguments individually, while `apply()` accepts them as an array.**

    8. Bind Method:

       - to addnew method/funtion to an object
       - The **`bind()` method in JavaScript creates a new function** that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

         Here's how it works:

         ```javascript
         const boundFunc = func.bind(thisArg, arg1, arg2, ...);
         ```

         - `func`: The original function whose `this` context you want to set.
         - `thisArg`: The value that will be passed as `this` when the new function is called.
         - `arg1`, `arg2`, ...: Arguments that should be prepended to arguments provided to the bound function when it is called.

         Example:

         ```javascript
         const person = {
           name: "Alice",
           greet: function () {
             console.log("Hello, " + this.name + "!");
           },
         };

         const boundGreet = person.greet.bind(person);
         boundGreet(); // Outputs: "Hello, Alice!"

         // You can also pass arguments to the bound function
         const boundGreetCustom = person.greet.bind(person, "Bob");
         boundGreetCustom(); // Outputs: "Hello, Bob!"
         ```

         In the example, `boundGreet` is a new function where `this` will always refer to the `person` object, regardless of how it's called. When you call `boundGreet()`, it still prints "Hello, Alice!" because the `this` context is bound to `person`.

         Similarly, `boundGreetCustom` is another bound function, but with an argument `"Bob"` already provided. When you call it, it prints "Hello, Bob!", still with the `this` context bound to `person`.

    9. Array Reference:
       - In JavaScript, arrays are also objects.
       - if a new variab;e is assigned to the same object, it basically references the same object, and not a copy of it.
         ```javascript
         let x = { name: "jhon", age: 6 }; // x variable is pointing to an array { name: "jhon", age: 6 }
         let y = x;
         console.log(y);
         // y is not a diffrent cFopy of { name: "jhon", age: 6 }
         // it is the same array
         //just that a new variable y is pointing to it now
         ```
    10. For-in loop: for loop for objects

        ```javascript
        for (variable in object) {
          // code block to be executed
        }
        ```

        ```javascript
        for (let key in person) {
          console.log(key + ": " + person[key]); //code
        }
        ```

11. **DOM**

    1. Document Object Model
       - gives DOM for html
       - gives built inmethods to use
       - Means now the document acts like an object (with methods and properties)
    2. Get Elements / query Selection

       - one method of DOM
       - to get elements

         ```javascript
         for (variable in object) {
           // code block to be executed
         }
         ```

         ```javascript
         for (let key in person) {
           console.log(key + ": " + person[key]); //code
         }
         ```

    3. Other Methods:

       - `element.innerHTML = '<p>New content</p>';`
       - `element.classList.add('active');`
       - `element.addEventListener('click', handleClick);`
       - `element.getAttribute('class');`
       - `element.setAttribute('class', 'myClass');`
       - `const elements = document.getElementsByTagName('div');`
       - `const elements = document.getElementsByTagName('div');`
       - `.addEventListener()`
       - `const newDiv = document.createElement('div');`
       - `parentElement.removeChild(childElement);`
       - `parentElement.appendChild(newChild);`

    4. Event Basics:

       - keyboard event
       - Event Bubbling
       - Event delegation

         > _Browser Object Model_

12. **Forms**

    1. Form Events:
       - Regular expressions, often abbreviated as "regex," are patterns combination meant to mean letters and characters
       - example:
         - `/hello/` matches the string "hello".
         - `/[aeiou]/` matches any vowel.
         - `/[0-9]/` matches any digit.
         - `/a+/` matches one or more occurrences of the letter "a".
         - `/b*/` matches zero or more occurrences of the letter "b".
         - `/pattern/i` enables case-insensitive matching.
         - `/pattern/g` enables global matching (matches all occurrences).

13. **Arrays**

    1. Arrays and array methods:
       - reduce, flat, every, sort(increasing and decreasing order)
       - `reduce` : to add
       - `flat` : to flatten nested arrays
       - `flatMap` : to flatten nested array and map it with necessary logic
       - `some`: to find any elemet with a specific condition satisfied
       - `every` : find all elements with the specific condition specified
    2. Function Chaining: one can chain all the functions said above and use it

14. **Date Library**
    1. Date and Time:- `new Date()`, `getTime()`, `getFullYear()`, `getMonth()`, `getSecond()`
15. **Local Storage**
    1. Local Storage:
       - similar to storing data in JSON files
       - used to store in local place without the use of APIs
       - using setItem(), getItem() `localStorage.getItem('username');`, `localStorage.setItem('username', 'John');`
       - Values in Local Storage are stored as strings. We nmust always convert it to object before and after storage
       - This storage is not accessible via URLs
16. **Object Oriented JS**

    1. Constructor function and `new` operator:

       1. Constructor function:

          - constructor functions are **used to create multiple instances of objects with similar properties and methods**
          - They serve as blueprints for creating objects of the same type
          - using `this.` keyword
          - it is an object linked to prototype

            ```javascript
            function Person(name, age) {
              this.name = name;
              this.age = age;
              this.sayHello = function () {
                console.log(
                  "Hello, my name is " +
                    this.name +
                    " and I am " +
                    this.age +
                    " years old."
                );
              };
            }
            ```

            In this example, `Person` is a constructor function that takes `name` and `age` parameters and assigns them to properties of the newly created object using the `this` keyword. It also defines a method `sayHello()`.

       2. `new` operator:

          - The new operator is used with constructor functions to create new instances of objects based on those blueprints
          - It creates a new empty object.
          - It **sets the `this` value** within the constructor function **to point to the newly created object.**
          - It implicitly returns the newly created object.

            ```javascript
            const john = new Person("John", 30);
            const alice = new Person("Alice", 25);

            john.sayHello(); // Outputs: "Hello, my name is John and I am 30 years old."
            alice.sayHello(); // Outputs: "Hello, my name is Alice and I am 25 years old."
            ```

            So, in the above example, `john` and `alice` are both instances of the `Person` object, each with its own `name`, `age`, and `sayHello()` method.

    2. prototypes:
       - any instancefrom a constructorcan access th eprototype methods of that constructor
    3. Static Methods:

       - Static methods are methods that are called on the class itself rather than on instances of the class.
       - They are defined using the static keyword.
       - In this example, `add()` is a static method of the MathUtils class that adds two numbers.
       - It **can be called directly on the class without needing to create an instance of the class.**

         ```javascript
         class MathUtils {
           static add(x, y) {
             return x + y;
           }
         }
         console.log(MathUtils.add(5, 3)); // Outputs: 8
         ```

    4. Inheritance:

       - mechanism in object-oriented programming where a class (subclass) can inherit properties and methods from another class (superclass).
       - implemented using the `extends` keyword.
       - In this example, the Dog class extends the Animal class, inheriting its speak() method. The Dog class also defines its own bark() method.

         ````javascript
         class Animal {
         speak() {
         console.log('Animal speaks');
         }
         }

                class Dog extends Animal {
                   bark() {
                      console.log('Dog barks');
                   }
                }

                const dog = new Dog();
                dog.speak(); // Outputs: "Animal speaks"
                dog.bark(); // Outputs: "Dog barks"

                ```
         ````

    5. Chaining Methods:

       - technique where multiple methods can be called on an object in a single statement, with each method returning the object itself (usually this).

         ```javascript
         class Calculator {
           constructor(value) {
             this.value = value;
           }

           add(num) {
             this.value += num;
             return this; // Return the object itself for chaining
           }

           subtract(num) {
             this.value -= num;
             return this; // Return the object itself for chaining
           }
         }

         const calc = new Calculator(10);
         const result = calc.add(5).subtract(3).value; // Chaining methods
         console.log(result); // Outputs: 12 (10 + 5 - 3)
         ```

17. **Async JS**

    1. HTTP Request:

       - a message sent by a client (typically a web browser) to a server to perform an action, such as retrieving a web page, submitting form data, or fetching resources like images or scripts.
       - It consists of a request line, headers, an optional body, and methods like `GET`, `POST`, `PUT`, `DELETE`, etc.

         ```javascript
         // Example of making an HTTP GET request using fetch API
         fetch("https://api.example.com/data")
           .then((response) => response.json())
           .then((data) => console.log(data))
           .catch((error) => console.error("Error:", error));
         ```

    2. HTTP Response code:
       - a **status code sent by a server in response to an HTTP request** made by a client.
       - It indicates the success, failure, or status of the request.
       - Common HTTP response codes include 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.
    3. Callback function:

       - a **function passed as an argument to another function**, which is then invoked or called back asynchronously to handle the result of an asynchronous operation.
       - Callbacks are commonly used in JavaScript for asynchronous tasks like HTTP requests, event handling, and timers.

         ```javascript
         // Example of a callback function
         function processResponse(response) {
           console.log(response);
         }

         // Usage of callback function
         fetchData("https://api.example.com/data", processResponse);
         ```

    4. JSON Data:

       - a **lightweight data interchange format** that is easy for humans to read and write and easy for machines to parse and generate.
       - It consists of key-value pairs and is often used to transmit data between a server and a web application.
       - JSON data is commonly used in web development for APIs, AJAX requests, and storing configuration data.

         ```javascript
         {
         "name": "John",
         "age": 30,
         "city": "New York"
         }

         ```

    5. Callback Hell / Pyramid of doom:

       - refers to the situation in asynchronous JavaScript programming where multiple nested callback functions create code that is difficult to read, understand, and maintain.
       - This **typically occurs when dealing with multiple asynchronous operations that depend on each other's results**.
       - Callback hell can be mitigated using techniques like named functions, promises, async/await, or libraries like async.js.
       - These techniques help to flatten the code structure and make it more manageable.

         ```javascript
         // Example of callback hell
         function fetchData(url, callback) {
           fetch(url)
             .then((response) => response.json())
             .then((data1) => {
               fetch("https://api.example.com/another-data")
                 .then((response) => response.json())
                 .then((data2) => {
                   // More nested callbacks...
                   callback(data1, data2);
                 })
                 .catch((error) => console.error("Error:", error));
             })
             .catch((error) => console.error("Error:", error));
         }

         // Usage of callback hell
         fetchData("https://api.example.com/data", function (data1, data2) {
           console.log(data1, data2);
         });
         ```

18. **ES6 Features**

    1.  Destructuring Arrays:

        - Destructuring allows you to extract values from arrays or objects and assign them to variables.

          ```javascript
          const numbers = [1, 2, 3, 4, 5];
          const [first, second] = numbers;
          console.log(first); // Output: 1
          console.log(second); // Output: 2
          ```

    2.  Destructuring Objects

        - Similar to array destructuring, but for objects:

          ```javascript
          const person = { name: "John", age: 30 };
          const { name, age } = person;
          console.log(name); // Output: John
          console.log(age); // Output: 30
          ```

    3.  Spread Operator and Rest Operator:

        - Spread operator (`...`) **allows an iterable** (like an array) **to be expanded in places** where zero or more arguments or elements are expected.
        - Rest operator (`...`) **collects the remaining elements into an array**.

          ```javascript
          const arr1 = [1, 2, 3];
          const arr2 = [...arr1, 4, 5]; // Spread operator
          console.log(arr2); // Output: [1, 2, 3, 4, 5]

          function sum(...numbers) {
            return numbers.reduce((acc, num) => acc + num, 0); // Rest operator
          }
          console.log(sum(1, 2, 3, 4)); // Output: 10
          ```

    4.  Short circuiting (&& and ||):

        - Short-circuit evaluation is a technique where an expression is not evaluated fully if the result can be determined by evaluating only part of it.
        - It's commonly used with logical operators `&&` and `||`.

          ````javascript
          // Example using && (AND)
          const value = false && true;
          console.log(value); // Output: false

              // Example using || (OR)
              const result = 0 || 10;
              console.log(result); // Output: 10
              ```
          ````

    5.  Nullish Coalesing Operator (??):

        - returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, otherwise, it returns its left-hand side operand.

          ```javascript

            const someValue = null ?? 'default value';
            console.log(someValue); // Output: 'default value'
            `6. For-of loop: - A new loop for iterating over iterable objects such as arrays, strings, maps, sets, etc.`javascript
            const fruits = ["apple", "banana", "cherry"];
            for (const fruit of fruits) {
            console.log(fruit);
            }
            // Output:
            // apple
            // banana
            // cherry
          ```

    6.  Enhanced Object Literals:

        - Provides additional features when defining object literals.

                 ```javascript
                 const name = "John";
                 const age = 30;

                 const person = {
                 name, // shorthand property assignment
                 age,
                 sayHi() {
                    // shorthand method definition
                    console.log(
                       `Hi, my name is ${this.name} and I'm ${this.age} years old.`
                    );
                 },
                 };

                 person.sayHi();
                 // Output: Hi, my name is John and I'm 30 years old.
                 ```

    7.  Optional ChaIning

        - Allows you to access properties of an object that may not be defined without causing an error.

          ````javascript
          const user = {
          name: 'Alice',
          address: {
          city: 'New York'
          }
          };

              console.log(user.address?.city); // Output: New York
              console.log(user.address?.zipCode); // Output: undefined
              ```
          ````

    8.  Sets:

        - A collection of unique values.

          ````javascript
          const mySet = new Set();

              mySet.add(1);
              mySet.add(2);
              mySet.add(1); // Duplicates are ignored
              console.log(mySet); // Output: Set { 1, 2 }

              console.log(mySet.has(2)); // Output: true
              ```
          ````

    9.  Maps:

        - A collection of key-value pairs where keys can be of any type.

          ```javascript
          const myMap = new Map();

          myMap.set("name", "John");
          myMap.set(1, "One");
          myMap.set({}, "Object Key");

          console.log(myMap.get("name")); // Output: John
          console.log(myMap.get(1)); // Output: One
          console.log(myMap.get({})); // Output: undefined, because the object key is different
          ```

19. **Misc Tools**

    1. Exporting and Importing:

       - **Exporting** allows you to expose functions, objects, or primitives from one JavaScript file so that they can be imported into another file.
       - **Importing** is the process of bringing in those exported elements into another JavaScript file.

         ```javascript
         // Exporting file: math.js
         export function add(a, b) {
           return a + b;
         }

         // Importing file: index.js
         import { add } from "./math.js";

         console.log(add(2, 3)); // Output: 5
         ```

    2. NPM:

       - NPM (Node Package Manager) is the **default package manager for** JavaScript runtime environment **Node.js.**
       - It **allows developers to install, manage, and share packages** **of reusable code.**

         ```javascript
         npm install package-name // Install a package using terminal
         npm install // Install all dependencies listed in package.json
         npm start // Run a script named "start" defined in package.json

         ```

    3. Closure:

       - A closure is a feature in JavaScript **where an inner function has access to the outer (enclosing) function's variables**.
       - This allows for creating private variables and functions.

         ```javascript
         function outerFunction() {
           const outerVar = "I am outer";

           function innerFunction() {
             console.log(outerVar); // innerFunction has access to outerVar
           }

           return innerFunction;
         }

         const myFunc = outerFunction();
         myFunc(); // Output: I am outer
         ```

20. Variable Constants and comments
21. Variable Constants and comments
22. Variable Constants and comments
23. Variable Constants and comments

### 2. Advanced Javascript

## 4. Node Js

```

```
