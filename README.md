# Project:

- Website:[Ebazar Ecommerce Website](https://ebazar-ecommerce-website.onrender.com/)
- Code:[Code for Ebazar Ecommerce Website](https://github.com/Anusree6154s/mern_stack_full_tutorial-coder_dost/tree/main/3.%20React-Redux%20-%20Ecommerce%20Project%20-%20Ebazar)

# Notes

## Topics:

1. [React](#1-react)
2. [Redux](#2-redux)
3. [Javascript](#3-javascript)

   1. [Basic](#1-basic-javascript)
      1. [Javascript Datatypes](#1-javascript-data-types)
      2. [Flow control with JS](#2-control-flow)
      3. [Functions](#3-functions)
      4. [Objects](#4-objects)
      5. [DOM](#5-dom)
      6. [Forms](#6-forms)
      7. [Array Methods](#7-arrays)
      8. [Date Library](#8-date-library)
      9. [Local Storage](#9-local-storage)
      10. [Object Oriented JS](#10-object-oriented-js)
      11. [Async JS](#11-async-js)
      12. [ES6](#12-es6-features)
      13. [Misc Tools](#13-misc-tools)
   2. [Advanced](#2-advanced-javascript)
      1. [Scope and Closure](#1-scope-and-closure)
      2. [Objects](#2-objects)
      3. [Function](#3-function)
      4. [Iterables, Generators](#4-iterables-generators)
      5. [Prototypes](#5-prototypes)
      6. [Class](#6-class)
      7. [Async JS](#7-async-js)

4. [NodeJS](#4-node-js)

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

2.  **Data types (7 types)**

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

    - used to store multiple values in a single variable.
    - `.join()`, `.concat()`, `.length()`, `.push()`, `.pop()`

7.  **Comparison Operators**

    - `===`, `==`, `!==`, `!=`, `>`, `>=`, `<`, `<=`

#### 2. **Control FLow**

- Control flow refers to the order in which statements are executed in a program.
- It includes decisions (like if statements), loops (like for and while loops), and branching (like switch statements).

1.  Loops
    - used to execute a block of code repeatedly as long as a specified condition is true.
    - for loop, while loop, do while, if/else/elseif, nested if, break and continue, switch case
2.  Logical Operators
    - used to perform logical operations on boolean expressions
    - From highest priority to lowest - &&, ||, !
3.  Ternary Operator
    - a compact way of writing an if-else statement.
    - It consists of a condition followed by a question mark (?), then an expression to execute if the condition is truthy, followed by a colon (:), and finally an expression to execute if the condition is falsy.
    - if/else conditions in single line
    - (condition? if-case : else-case )

#### 3. **Functions**

1.  Declaration and call
    - **function declaration:** This is **where you define a function.** It typically consists of the function keyword, followed by the function name, parameters (if any), and the function body.
      ```javascript
      function functionName(parameter) {
        //code
      }
      ```
    - **function call:** Once you have declared a function, you can call it to execute the code inside it. `functionName(argument)`
2.  Arguments and Parameters
    - argument: passed to the function call
    - parameter: passed to the function declaration
3.  Arrow Functions:
    ```javascript
    fucntionName = (parameter) => {
      //code
    };
    ```
4.  Higher Order Function:
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
5.  Function Returning another function: Closure

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

6.  IIFE:
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
7.  SetTimeout, SetInterval - Timer Functions
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
8.  Hoisting

    - Function Declarations are hoisted means it is taken to the top pf the document

#### 4. **Objects**

1.  Accessing: using `[]` (bracket) or `.` (dot)
2.  Delete: `delete objName`
3.  Method: funciton ind=side objects
4.  `this` keyword: refering current object
5.  Arrays methods:
    - for-each method: called as functional programming
    - object inside array
6.  Math Objects:
    - `.round()` - round up if above 5, else round down
    - `.floor()` - round down
    - `.ceil()` - round up
    - `.trunc()` - remove decimal
7.  Call and Apply method

    1.  **call() method**: This method allows you to call a function with a given `this` value and individual arguments.

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

    2.  **apply() method**: This method is similar to `call()`, but it accepts arguments as an array.

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

8.  Bind Method:

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

9.  Array Reference:
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

#### 5. **DOM**

1.  Document Object Model
    - gives DOM for html
    - gives built inmethods to use
    - Means now the document acts like an object (with methods and properties)
2.  Get Elements / query Selection

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

3.  Other Methods:

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

4.  Event Basics:

    - keyboard event
    - Event Bubbling
    - Event delegation

      > _Browser Object Model_

#### 6. **Forms**

1.  Form Events:
    - Regular expressions, often abbreviated as "regex," are patterns combination meant to mean letters and characters
    - example:
      - `/hello/` matches the string "hello".
      - `/[aeiou]/` matches any vowel.
      - `/[0-9]/` matches any digit.
      - `/a+/` matches one or more occurrences of the letter "a".
      - `/b*/` matches zero or more occurrences of the letter "b".
      - `/pattern/i` enables case-insensitive matching.
      - `/pattern/g` enables global matching (matches all occurrences).

#### 7. **Arrays**

1.  Arrays and array methods:
    - reduce, flat, every, sort(increasing and decreasing order)
    - `reduce` : to add
    - `flat` : to flatten nested arrays
    - `flatMap` : to flatten nested array and map it with necessary logic
    - `some`: to find any elemet with a specific condition satisfied
    - `every` : find all elements with the specific condition specified
2.  Function Chaining: one can chain all the functions said above and use it

#### 8. **Date Library**

1.  Date and Time:- `new Date()`, `getTime()`, `getFullYear()`, `getMonth()`, `getSecond()`

#### 9. **Local Storage**

1.  Local Storage:
    - similar to storing data in JSON files
    - used to store in local place without the use of APIs
    - using setItem(), getItem() `localStorage.getItem('username');`, `localStorage.setItem('username', 'John');`
    - Values in Local Storage are stored as strings. We nmust always convert it to object before and after storage
    - This storage is not accessible via URLs

#### 10. **Object Oriented JS**

1.  Constructor function and `new` operator:

    1.  Constructor function:

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

    2.  `new` operator:

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

2.  prototypes:
    - any instancefrom a constructorcan access th eprototype methods of that constructor
3.  Static Methods:

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

4.  Inheritance:

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

5.  Chaining Methods:

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

#### 11. **Async JS**

1.  HTTP Request:

    - a message sent by a client (typically a web browser) to a server to perform an action, such as retrieving a web page, submitting form data, or fetching resources like images or scripts.
    - It consists of a request line, headers, an optional body, and methods like `GET`, `POST`, `PUT`, `DELETE`, etc.

      ```javascript
      // Example of making an HTTP GET request using fetch API
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
      ```

2.  HTTP Response code:
    - a **status code sent by a server in response to an HTTP request** made by a client.
    - It indicates the success, failure, or status of the request.
    - Common HTTP response codes include 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.
3.  Callback function:

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

4.  JSON Data:

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

5.  Callback Hell / Pyramid of doom:

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

#### 12. **ES6 Features**

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

8.  Falsy Values

    - values that evaluate to `false` when converted to a boolean.

      1.  **false**: The boolean value `false` itself.

      2.  **0**: The number `0`.

      3.  **-0**: Negative zero.

      4.  **0n**: BigInt zero.

      5.  **''** (empty string): An empty string.

      6.  **null**: The absence of any value or object.

      7.  **undefined**: A variable that has not been assigned a value.

      8.  **NaN**: Not-a-Number, which results from invalid arithmetic operations.

9.  Sets:

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

10. Maps:

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

#### 13. **Misc Tools**

1.  Exporting and Importing:

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

2.  NPM:

    - NPM (Node Package Manager) is the **default package manager for** JavaScript runtime environment **Node.js.**
    - It **allows developers to install, manage, and share packages** **of reusable code.**

      ```javascript
      npm install package-name // Install a package using terminal
      npm install // Install all dependencies listed in package.json
      npm start // Run a script named "start" defined in package.json

      ```

3.  Closure:

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

### 2. Advanced Javascript

#### 1. Scope and Closure

1.  Block Scope and Global Scope

    - Block Scope:
      - Variables declared inside a block (within curly braces {}) are only accessible within that block.
    - Global Scope:

      - Variables declared outside of any function or block
      - can be accessed from anywhere in the code.

      ```javascript
      //since let is block scope we get error
      {
        let localVar = "I am inside a block";
        console.log(localVar); // Output: I am inside a block
      }
      console.log(localVar); // Error: localVar is not defined

      //since var is global/funciton scope, and not block scope, we dont get error
      {
        var localVar = "I am inside a block";
        console.log(localVar); // Output: I am inside a block
      }

      console.log(localVar); // Output: I am inside a block
      ```

2.  Temporal Dead Zone

    - period between entering a scope and the actual declaration of a variable.
    - During this period, accessing the variable **will result in a `ReferenceError`.**
    - **applies to** variables declared with **`let` and `const`**, **not to** variables declared with **var**.
    - When using **`var`**, variables are **hoisted to the top of their containing scope and initialized with the value undefined**.

      ```javascript
      //for let
      console.log(myVar); // Error: Cannot access 'myVar' before initialization
      let myVar = 10;

      //for var
      console.log(car); // Output: undefined (no error)
      var car = "Toyota";
      ```

3.  Variable Shadowing

    - when a **variable declared within a local scope has the same name as a variable in an outer scope**.
    - The inner variable shadows the outer one within its scope.

      ```javascript
      let x = 10;

      function myFunction() {
        let x = 20;
        console.log(x); // Output: 20
      }

      myFunction();
      console.log(x); // Output: 10
      ```

4.  Hoisting

    - JavaScript's default behavior of **moving variable and function declarations to the top of their containing scope** during compilation.

      ```javascript
      console.log(myVar); // Output: undefined and not an error
      var myVar = 10;
      ```

5.  Module Scope

    - refers to the **scope of variables declared in a module (file)** in JavaScript. Variables declared with const or let have block scope within the module.

      ```javascript
      // module.js
      const moduleVariable = "I am a module variable";

      export function greet() {
        console.log("Hello from the module!");
      }

      // main.js
      import { greet } from "./module.js";

      console.log(moduleVariable); // Error: moduleVariable is not defined
      greet(); // Output: Hello from the module!
      ```

6.  Global Object

    - global object is the **top-level object** in the JavaScript environment.
    - accessible from any other file
    - **In** **browsers**, the global object is `window`, while **in Node.js**, it's `global`.
    - it's generally recommended to avoid polluting the global namespace with too many variables to prevent naming conflicts and maintain code readability and maintainability.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <title>Global Object Example</title>
        </head>
        <body>
          <script>
            // Assigning a global variable in a browser environment
            window.globalVariable = "I am a global variable in a browser";
            console.log(window.globalVariable); // Output: I am a global variable in a browser
          </script>
        </body>
      </html>
      ```

      ```javascript
      // globalObject.js
      // Assigning a global variable in a Node.js environment
      global.globalVariable = "I am a global variable in Node.js";
      console.log(global.globalVariable); // Output: I am a global variable in Node.js
      ```

7.  Function Scope

    - refers to variables declared within a function.
    - Variables declared inside a function are only accessible within that function.

      ```javascript
      function myFunction() {
        let localVar = "I am a local variable";
        console.log(localVar); // Output: I am a local variable
      }

      myFunction();
      console.log(localVar); // Error: localVar is not defined
      ```

8.  Lexical Environment

    - Lexical environment describes how variable names are connected with their values in the code, which determines how variables can be accessed and where they are available.
    - It's like a map that helps JavaScript know where to find variables when the code is run.
      Sure, here's a simplified example to illustrate lexical environment:

      ```javascript
      function outerFunction() {
        let outerVar = "I am from outer function";

        function innerFunction() {
          let innerVar = "I am from inner function";
          console.log(outerVar); // Output: I am from outer function
          console.log(innerVar); // Output: I am from inner function
        }

        innerFunction();
      }

      outerFunction();
      ```

    - In this example:
      - `outerFunction` and `innerFunction` have their own lexical environments.
      - `innerFunction` can access variables declared in its own lexical environment (`innerVar`) as well as variables declared in the outer lexical environment (`outerVar`).
      - This access is possible because JavaScript uses lexical scoping, meaning functions can access variables defined in their outer scope, regardless of where they are called from.
      - The lexical environment helps JavaScript know where to find the values of `outerVar` and `innerVar` when `innerFunction` is executed.

9.  Functions Hoisting

    - Hoisting of functions to the top of their containing scope, allowing you to call a function before it's declared in the code.
    - Fucntion declarations are hoisted but Fucntion expressions are not

      ```javascript
      sayHello(); // Output: Hello!
      function sayHello() {
        consofle.log("Hello!");
      }

      sayHi(); // TypeError: sayHi is not a function
      const sayHi = function () {
        console.log("Hi!");
      };
      ```

10. Closure

    - a feature in JavaScript that allows a function to remember and access its lexical scope even when that function is executed outside its lexical scope.

      ```javascript
      function outerFunction() {
        let outerVar = "I am from outer function";

        function innerFunction() {
          console.log(outerVar);
        }

        return innerFunction;
      }

      let myFunc = outerFunction();
      myFunc(); // Output: I am from outer function
      ```

11. IIFE

    - a function that is executed immediately after it is defined.

      ```javascript
      (function () {
        console.log("I am an IIFE");
      })();
      ```

12. Currying

    - a technique in functional programming **where a function with multiple arguments is converted into a sequence of functions**, each taking a single argument.

      ```javascript
      //function add(x, y) {
      //   return x + y;
      //}

      //above multiparameter function is converted to below function with single parameter
      function add(x) {
        return function (y) {
          return x + y;
        };
      }

      //one way of currying
      const add2 = add(2); // Returns a function that adds 2 to its argument
      console.log(add2(3)); // Output: 5

      //another way of currying
      console.log(add(2)(3)); // Output: 5
      ```

| Variable Declaration | Scope          | Hoisting    | Reassignment | Redeclaration | Errors                                                                               |
| -------------------- | -------------- | ----------- | ------------ | ------------- | ------------------------------------------------------------------------------------ |
| `var`                | Function scope | Hoisted     | Allowed      | Allowed       | No errors                                                                            |
| `let`                | Block scope    | Not hoisted | Allowed      | Not allowed   | ReferenceError (Temporal Dead Zone) if accessed before declaration                   |
| `const`              | Block scope    | Not hoisted | Not allowed  | Not allowed   | TypeError (if reassignment is attempted) SyntaxError (if redeclaration is attempted) |

#### 2. Objects

1. Objects

   - collections of key-value pairs, where each key is a string (or Symbol) and each value can be of any data type.
   - They are one of the most fundamental data structures in JavaScript.

     ```javascript
     // Creating an object
     const person = {
       name: "John",
       age: 30,
       city: "New York",
     };

     //accessing object properties
     console.log(person.name); // Output: John
     console.log(person["age"]); // Output: 30

     const { city } = person;
     console.log(city); // Output: New York
     ```

2. Nested Objects

   - contain other objects as values
   - creates a hierarchical or nested structure

     ```javascript
     const student = {
       name: "Alice",
       age: 25,
       address: {
         street: "123 Main St",
         city: "Boston",
         zip: "12345",
       },
     };
     console.log(student.address.street); // Output: 123 Main St
     ```

3. Copying Objects
   - done using object spread syntax (...) or Object.assign() method.
     ```javascript
     const originalObject = { a: 1, b: 2 };
     const copiedObject1 = { ...originalObject }; // Using object spread syntax
     const copiedObject2 = Object.assign({}, originalObject); // Using Object.assign()
     ```
4. `this` and methods

   - When used in object methods(fucntions inside objects), `this` keyword is used to refer to the object itself.

     ```javascript
     const car = {
       brand: "Toyota",
       model: "Camry",
       info() {
         return `${this.brand} ${this.model}`;
       },
       run: () => {
         console.log(`${this.brand} is running`);
       },
     };

     console.log(car.info()); // Output: Toyota Camry
     console.log(car.run()); // Output: Toyota is running
     ```

5. Symbol

   - unique and immutable data types introduced in ES6.
   - often used as property keys in objects to prevent accidental name collisions.
   - Symbols provide a way to create "hidden" properties in objects that cannot be accessed using normal property access syntax, and won't appear in property lists or be included in iterations over object properties, thus helping to avoid unintentional overwriting or conflicts in object properties.
   - if we want to access Symbols in Objects, we have to access them by their actual names using bracket notations
   - we cant access it using dot notation or by iteration

     ```javascript
     // Creating a Symbol
     const secretKey = Symbol("secret");

     // Creating an object with a normal property and a Symbol property
     const user = {
       name: "Alice",
       [secretKey]: "12345",
     };

     // Accessing the normal property
     console.log(user.name); // Output: Alice

     // Attempting to access the Symbol property directly
     console.log(user[secretKey]); // Output: 12345

     // Iterating over object properties (Symbol property won't be included)
     for (let key in user) {
       console.log(key); // Output: name
     }
     ```

#### 3. Function

1.  Functions

    - blocks of reusable code that perform a specific task when invoked or called.

      ```javascript
      function greet() {
        console.log("Hello!");
      }
      greet(); // Output: Hello!
      ```

2.  Function decarations are hoisted, but functions expresions are not

    ```javascript
    sayHello(); // Output: Hello!
    function sayHello() {
      consofle.log("Hello!");
    }

    sayHi(); // TypeError: sayHi is not a function
    const sayHi = function () {
      console.log("Hi!");
    };
    ```

3.  Functions can be called as contructor

    - Functions in JavaScript can also be used as constructors to create new objects with the `new` keyword.

      ```javascript
      function Person(name) {
        this.name = name;
      }

      const john = new Person("John");
      console.log(john.name); // Output: John
      ```

4.  Named Function Expressions (NFE)

    - functions defined in expressions that have a name.

      ```javascript
      const add = function sum(a, b) {
        return a + b;
      };

      console.log(add(2, 3)); // Output: 5
      console.log(sum(2, 3)); // ReferenceError: sum is not defined
      ```

5.  Decorator (Wrapper)

    - **function that wraps another function** to extend or modify its behavior.

      ```javascript
      function decorator(func) {
        return function () {
          console.log("Before function execution");
          func();
          console.log("After function execution");
        };
      }

      function greet() {
        console.log("Hello!");
      }

      const decoratedGreet = decorator(greet);
      decoratedGreet(); // Output: Before function execution, Hello!, After function execution

      //also can be called as
      decorator(greet)(); // Output: Before function execution, Hello!, After function execution
      ```

6.  Call, apply, bind, `this`

    - The **`call` method** invokes a function with a specified `this` value and arguments provided individually.

      ```javascript
      const person = {
        name: "Alice",
        greet: function (age) {
          console.log(
            `Hello, my name is ${this.name} and I am ${age} years old`
          );
        },
      };

      const otherPerson = { name: "Bob" };

      person.greet.call(otherPerson, 30); // Output: Hello, my name is Bob and I am 30 years old
      obj1Name.objMethod.call(obj2Name, argumentForMethod);
      ```

    - similar to `call`, but it accepts arguments as an array.

      ```javascript
      const person = {
        name: "Alice",
        greet: function (age, city) {
          console.log(
            `Hello, my name is ${this.name}, I am ${age} years old, and I live in ${city}`
          );
        },
      };

      const otherPerson = { name: "Bob" };
      const args = [30, "New York"];

      person.greet.apply(otherPerson, args); // Output: Hello, my name is Bob, I am 30 years old, and I live in New York
      ```

    - creates a new function that, when called, has its `this` value set to a specific value.

      ```javascript
      const person = {
        name: "Alice",
        greet: function () {
          console.log(`Hello, my name is ${this.name}`);
        },
      };

      const otherPerson = { name: "Bob" };
      const greetBob = person.greet.bind(otherPerson);

      greetBob(); // Output: Hello, my name is Bob
      ```

7.  Debounce

    - Debouncing is a technique used to limit the rate at which a function is executed.
    - Here, when a function is called, the previous delay is removed and a new delay is added. so now the funciton will be called onoy after the new delay
    - For eg, after typing a letter in google search bar, website waits for few milliseconds before providing autosearch results. Incase we type another letter before the autosearch comes, it will wait agian for the same amount of milliseconds. (Means delay the function)
    - Debounce is suitable for scenarios where you want to wait for a pause in a continuous stream of events before executing a function, such as search input or resize events.

      ```javascript
      function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      }

      // Function to be debounced
      function search(query) {
        console.log(`Searching for '${query}'...`);
        // Simulate an API call or heavy operation
      }

      // Debounce the search function with a delay of 300 milliseconds
      const debouncedSearch = debounce(search, 300);

      // Simulate rapid input events, like typing in a search bar
      debouncedSearch("apple");
      debouncedSearch("banana");
      debouncedSearch("orange");

      // Only the last invocation will trigger the actual search after 300ms
      // Output after 300 milliseconds: Searching for 'orange'...
      ```

8.  Throttle

    - Throttling is a technique used to limit the number of times a function can be called over time.
    - Here the next fucntion will not even be considered for calling till the previous delay is over. Once the prev delay is over, the functino will be called immediately
    - Throttle is useful for scenarios where you want to limit the rate of function invocation, ensuring that it is not called more frequently than a specified delay, such as scroll or mouse move events.

      ```javascript
      function throttle(func, delay) {
        let timeoutId;
        return function (...args) {
          if (!timeoutId) {
            timeoutId = setTimeout(() => {
              func.apply(this, args);
              timeoutId = null;
            }, delay);
          }
        };
      }

      // Function to be throttled
      function updatePosition() {
        console.log("Updating position...");
        // Simulate updating the position on the screen
      }

      // Throttle the updatePosition function with a delay of 300 milliseconds
      const throttledUpdatePosition = throttle(updatePosition, 300);

      // Simulate rapid scroll events
      window.addEventListener("scroll", throttledUpdatePosition);

      // The updatePosition function will be called at most once every 300 milliseconds
      ```

9.  Arrow function

    - concise way to write functions in JavaScript.

      ```javascript
      const add = (a, b) => a + b;
      console.log(add(2, 3)); // Output: 5
      ```

#### 4. Iterables, Generators

1.  weak MAp, weak Sets

    - WeakMap:

      - collection of key-value pairs where keys are weakly referenced.

        ```javascript
        const weakMap = new WeakMap();
        const key = {};

        weakMap.set(key, "value");
        console.log(weakMap.get(key)); // Output: 'value'

        // The key can be garbage-collected
        key = null;
        ```

    - WeakSet:

      - collection of unique objects where objects are weakly referenced.

        ```javascript
        const weakSet = new WeakSet();
        let obj = {};

        weakSet.add(obj);
        console.log(weakSet.has(obj)); // Output: true

        // The object can be garbage-collected
        obj = null;
        ```

2.  Generators

    - special functions that can be paused and resumed during execution.
    - cannot be called without assigning it to a variable (eg; will no treturn any value if we call it simly as generator(). it needs to be called after const gen = generator() )
    - to get the value in a generator function, we need to call it using next() method only

      ```javascript
      function* generator() {
        yield 1;
        yield 2;
        yield 3;
      }

      const gen = generator();
      console.log(gen.next()); // Output: { value: 1, done: false }
      console.log(gen.next()); // Output: { value: 2, done: false }
      console.log(gen.next()); // Output: { value: 3, done: false }
      console.log(gen.next()); // Output: { value: undefined, done: true }
      ```

3.  Generator - composition

    - Generators can be composed to create complex iteration patterns.
    - can be used for pagination

      ```javascript
      function* generator1() {
        yield 1;
        yield 2;
      }

      function* generator2() {
        yield* generator1();
        yield 3;
      }

      const gen = generator2();
      console.log(gen.next()); // Output: { value: 1, done: false }
      console.log(gen.next()); // Output: { value: 2, done: false }
      console.log(gen.next()); // Output: { value: 3, done: false }
      console.log(gen.next()); // Output: { value: undefined, done: true }
      ```

4.  Generator function methods

    - next():

      - used to resume the execution of the generator function or move it to the next yield statement.
      - It returns an object with two properties:

        - value: The value yielded by the generator.
        - done: A boolean indicating whether the generator has finished executing (true if it has finished, false otherwise).

          ```javascript
          function* generatorFunction() {
            yield 1;
            yield 2;
            yield 3;
          }

          const iterator = generatorFunction();

          console.log(iterator.next()); // Output: { value: 1, done: false }
          console.log(iterator.next()); // Output: { value: 2, done: false }
          console.log(iterator.next()); // Output: { value: 3, done: false }
          console.log(iterator.next()); // Output: { value: undefined, done: true }
          ```

    - return():

      - used to forcefully end the execution of the generator function.
      - It accepts an optional argument that specifies the value to be returned by the generator.

        ```javascript
        function* generatorFunction() {
          yield 1;
          yield 2;
          yield 3;
        }

        const iterator = generatorFunction();

        console.log(iterator.next()); // Output: { value: 1, done: false }
        console.log(iterator.return(4)); // Output: { value: 4, done: true } -> return the parameter value and ends the call
        console.log(iterator.next()); // Output: { value: undefined, done: true }
        ```

    - throw():

      - used to throw an error into the generator function.
      - It accepts an argument representing the error that will be thrown.

        ```javascript
        function* generatorFunction() {
          try {
            yield 1;
            yield 2;
            yield 3;
          } catch (error) {
            console.log("Caught error:", error);
          }
        }

        const iterator = generatorFunction();

        console.log(iterator.next()); // Output: { value: 1, done: false }
        console.log(iterator.throw(new Error("An error occurred"))); // Output: Caught error: Error: An error occurred
        console.log(iterator.next()); // Output: { value: undefined, done: true }
        ```

5.  Generator can take inputs

    - Generators can accept inputs as parameters when they are initialized.

      ```javascript
      function* generatorWithInput(value) {
        yield value;
      }

      const gen = generatorWithInput(10);
      console.log(gen.next()); // Output: { value: 10, done: false }
      console.log(gen.next()); // Output: { value: undefined, done: true }
      ```

6.  Iterables and Iterators

    - Iterables:

      - **an object** that defines how to iterate over its elements.
      - its property name is Symbol.iterator nas value is a generator funciton
        ```javascript
        const iterable = {
          [Symbol.iterator]: function* () {
            yield 1;
            yield 2;
            yield 3;
          },
        };
        ```

    - Iterators:

      - an object returned by an iterable's Symbol.iterator method.

      ```javascript
      const iterator = iterable[Symbol.iterator]();

      console.log(iterator.next()); // Output: { value: 1, done: false }
      console.log(iterator.next()); // Output: { value: 2, done: false }
      console.log(iterator.next()); // Output: { value: 3, done: false }
      console.log(iterator.next()); // Output: { value: undefined, done: true } 6. Async iterator / Async Generator
      ```

7.  Parts of Iterables and Iterator
    1. Iterable Object:
       - **an object** that defines how to iterate over its elements.
         ```javascript
         const iterable = {
           [Symbol.iterator]: function* () {
             yield 1;
             yield 2;
             yield 3;
           },
         };
         ```
    2. Symbol.iterator :
       - a **predefined symbol** in JavaScript used specifically to define the default iterator for iterable objects
    3. Generator function/Iterator function:
       - **special functions** that can be paused and resumed during execution.
       - Here also called as iterator function when associated with an iterable
         ```javascript
            function* () {
               yield 1;
               yield 2;
               yield 3;
               }
         ```
    4. Iterator Object :
       - result of calling the iterator function
         ```javascript
         const iterator = iterable[Symbol.iterator]();
         ```
8.  Special info about iterators and iterables:

    1. For loop on Iterator Object:

       - When we iterate through an iterable, actually we are calling the iterator function first and then running a loop of the iterator object.

       - Incase of iterables with one key, when running loop on iterable Name, it automatically runs on the iterator object
       - in case of iterables with 2 or more keys, we have to specifically run the loop on th eiterator object

         ```javascript
         // iterable with a single key
         //const iterable = {
         //  [Symbol.iterator]: iterator funciton
         //};

         const iterable = {
           [Symbol.iterator]: function* () {
             yield 1;
             yield 2;
             yield 3;
           },
         };

         for (const value of iterable) {
           console.log(value); // Output: 1, 2, 3
         }
         //here when we run a for loop on iterables with single key, it automatically calls teh iterator function

         // iterable with a two keys
         //const iterable = {
         //  [Symbol.iterator]: iterator funciton,
         //  [Symbol.iterator+"something"]: iterator funciton2
         //};

         const iterable = {
           [Symbol.iterator]: function* () {
             yield 1;
             yield 2;
             yield 3;
           },
           [Symbol.iterator]: function* () {
             yield "a";
             yield "b";
             yield "c";
           },
         };

         for (const value of iterable[Symbol.iterator]()) {
           console.log(value); // Output: 1, 2, 3
         }
         //in here we have to specifically call iterator function first and then on the iterator function run the loop
         ```

    2. Normal function to write Iterable:

       - We can write an Iterable Object using a normal function instead of generator fuction

         ```javascript
         const iterable = {
           [Symbol.iterator]: function () {
             let index = 0;
             const data = [1, 2, 3]; // Sample data

             return {
               next: function () {
                 if (index < data.length) {
                   return { value: data[index++], done: false };
                 } else {
                   return { value: undefined, done: true };
                 }
               },
             };
           },
         };

         // Using the iterator
         for (const value of iterable) {
           console.log(value); // Output: 1, 2, 3
         }
         ```

9.  Async Iterator / Async Generator

    > - Generator/iterator with delay
    > - Exmaple: paginated API calls, pagination of JSON data

    1. Async Generator:

       - Async generators allow for asynchronous iteration and yielding of values.

         ```javascript
         async function* asyncGenerator() {
           yield await Promise.resolve(1);
           yield await Promise.resolve(2);
           yield await Promise.resolve(3);
         }

         (async () => {
           for await (const value of asyncGenerator()) {
             console.log(value); // Output: 1, 2, 3
           }
         })(); //in IIFE to call as well as define function
         //to run only once async generator is called
         ```

    2. Async Iterator:

       - Async iterators allow for asynchronous iteration over elements.

         ```javascript
         const asyncIterable = {
           [Symbol.asyncIterator]: async function* () {
             yield await Promise.resolve(1);
             yield await Promise.resolve(2);
             yield await Promise.resolve(3);
           },
         };

         (async () => {
           for await (const value of asyncIterable) {
             console.log(value); // Output: 1, 2, 3
           }
         })();
         ```

#### 5. Prototypes

1.  Prototype

    - another object that the current object inherits properties and methods from.
    - acts like a parent object from which its child objects inherits properties
    - one can create child objects from its prototype object in various ways:

      1. Using `Object.setPrototypeOf()`:

         ```javascript
         const childObj = {};
         const newPrototype = {
           /* new prototype properties/methods */
         };
         Object.setPrototypeOf(childObj, newPrototype); //set newPrototype as the prototype of childObj
         ```

         ```javascript
         const obj = {};
         const newPrototype = {
           greet: function () {
             console.log("Hello!");
           },
         };
         Object.setPrototypeOf(obj, newPrototype);

         // Now `obj` inherits from `newPrototype`
         obj.greet(); // Output: Hello!
         ```

      2. Using `Object.create()` with the desired prototype:

         ```javascript
         const newPrototype = {
           /* new prototype properties/methods */
         };
         const obj = Object.create(newPrototype); //create an obj based on newPrototype
         ```

         ```javascript
         const newPrototype = {
           greet: function () {
             console.log("Hello!");
           },
         };
         const obj = Object.create(newPrototype);

         // Now `obj` inherits from `newPrototype`
         obj.greet(); // Output: Hello!
         ```

      3. Using constructor functions and `prototype`:

         - only a contructor function can have a prototype object.
         - Its instances cannot have a prototype
         - Its instance now acts child objects of the constructor prototype and the contructor.
         - Which means it will inherit constructor.protoype's properties as well as contructor's own properties.
         - Since constructor is not an object, it will not inherit th eproperties of contructor.prototype. So if we wan tto access teh properties o fits prototype, we have to specifically console constructor.prototype
         - while using .prototype to seta prototype we must always set it using .prototype.newProperty = newValue and NOT as

           ```javascript
           function CustomConstructor() {}
           CustomConstructor.prototype = {
             /* new prototype properties/methods */
           };
           const obj = new CustomConstructor();
           ```

           ```javascript
           function CustomConstructor() {
             this.name = "Maya"; // Assigning the name property using this.name
           }

           //acts like parent to CustomConstructor
           CustomConstructor.prototype.greet = function () {
             console.log("Hello!");
           };

           //create a new instance of CustomConstructor
           const obj = new CustomConstructor();

           // Now `obj` inherits from `CustomConstructor.prototype`
           obj.greet(); // Output: Hello!
           //obj also has access to CustomConstructor's own properties
           console.log(obj.name); // Outputs: Maya
           ```

      4. Using class syntax (introduced in ES6):

         ```javascript
         class CustomClass {
           /* new prototype properties/methods */
         }
         const obj = new CustomClass();
         ```

         ```javascript
         class CustomClass {
           greet() {
             console.log("Hello!");
           }
         }
         const obj = new CustomClass();

         // Now `obj` inherits from `CustomClass.prototype`
         obj.greet(); // Output: Hello!
         ```

      5. Using ES6 `extends` keyword (for subclassing):

         ```javascript
         class ParentClass {
           /* parent prototype properties/methods */
         }

         class ChildClass extends ParentClass {
           /* new prototype properties/methods */
         }
         const obj = new ChildClass();
         ```

         ```javascript
         class ParentClass {
           greet() {
             console.log("Hello!");
           }
         }

         class ChildClass extends ParentClass {
           // `ChildClass` inherits from `ParentClass`
         }
         const obj = new ChildClass();

         // Now `obj` inherits from `ParentClass.prototype`
         obj.greet(); // Output: Hello!
         ```

2.  Prototypical inheritance

    - concept in JavaScript where objects inherit properties and methods from their prototype.

          ```javascript
          function Person(name) {
          this.name = name;
          }

          Person.prototype.sayHello = function () {
          console.log(`Hello, my name is ${this.name}`);
          };

          const person1 = new Person("Alice");
          person1.sayHello(); // Output: Hello, my name is Alice
          ```

3.  `__proto__`

    - a deprecated property that provides access to the prototype of an object. It's recommended to use `Object.getPrototypeOf()` and `Object.setPrototypeOf()` instead.

      ```javascript
      // Define a parent object
      const parentObject = {
        greet: function () {
          console.log("Hello from the parent object!");
        },
      };

      // Getting the prototype of parentObject using __proto__
      console.log(parentObject.__proto__);
      // Output: {
      //greet: function() {
      //  console.log('Hello from the parent object!');
      //}
      //}

      // Create a child object
      const childObject = {};

      // Setting the prototype of childObject using __proto__
      childObject.__proto__ = parentObject;

      // Access the greet method from the prototype chain
      childObject.greet(); // Output: Hello from the parent object!
      ```

4.  Properties of an object

    1.  Own vs. Inherited Properties:

        - **Own properties**: These are properties directly defined on the object itself.
          ```javascript
          const person = {
            name: "Alice",
            age: 30,
          };
          ```
        - **Inherited properties**: These are properties that an object inherits from its prototype chain.

          ```javascript
          function Person(name, age) {
            this.name = name;
            this.age = age;
          }

          Person.prototype.sayHello = function () {
            console.log(`Hello, my name is ${this.name}`);
          };

          const alice = new Person("Alice", 30);
          alice.sayHello(); // Output: Hello, my name is Alice since the property from Person's prototype is ing=herited by the instance alice
          ```

    2.  Enumerable vs. Non-enumerable Properties:

        - **Enumerable properties**: These properties can be iterated over using a `for...in` loop or retrieved using methods like `Object.keys()`.

          ```javascript
          const person = {
            name: "Alice",
            age: 30,
          };

          for (const key in person) {
            console.log(key); // Output: name, age
          }

          console.log(Object.keys(person)); // Output: ['name', 'age']
          ```

        - **Non-enumerable properties**: These properties cannot be iterated over using a `for...in` loop, and they are not included when you use methods like `Object.keys()`.

          ```javascript
          Object.defineProperty(person, "address", {
            value: "123 Main St",
            enumerable: false, //making it nonenumerable using Object.defineProperty
          });

          for (const key in person) {
            console.log(key); // Output: name, age
          }

          console.log(Object.keys(person)); // Output: ['name', 'age']
          ```

    3.  String vs. Symbol Properties:

        - **String properties**: These are properties with string keys.
          ```javascript
          const person = {
            name: "Alice",
            age: 30,
          };
          ```
        - **Symbol properties**: These are properties with symbol keys, introduced in ES6. Symbols are unique and can be used as property keys to prevent naming conflicts.

          ```javascript
          const mySymbol = Symbol("id");
          const obj = {
            [mySymbol]: "value",
          };

          console.log(obj[mySymbol]); // Output: value
          ```

    4.  Property Configurations: using Object.defineProperty

        1. **Value:**

           - The `value` configuration determines the value associated with the property.
             ```javascript
             const person = {};
             Object.defineProperty(person, "name", {
               value: "Alice",
             });
             console.log(person.name); // Output: Alice
             ```

        2. **Writable:**

           - The `writable` configuration determines whether the value of the property can be changed.
             ```javascript
             const person = {};
             Object.defineProperty(person, "name", {
               value: "Alice",
               writable: false,
             });
             person.name = "Bob"; // This will not change the value of 'name'
             console.log(person.name); // Output: Alice
             ```

        3. **Enumerable:**

           - The `enumerable` configuration determines whether the property can be iterated over using a `for...in` loop or retrieved using methods like `Object.keys()`.
             ```javascript
             const person = {
               name: "Alice",
               age: 30,
             };
             Object.defineProperty(person, "address", {
               value: "123 Main St",
               enumerable: false,
             });
             for (const key in person) {
               console.log(key); // Output: name, age
             }
             console.log(Object.keys(person)); // Output: ['name', 'age']
             ```

        4. **Configurable:**
           - The `configurable` configuration determines whether the property's configuration can be changed or the property can be deleted.
             ```javascript
             const person = {};
             Object.defineProperty(person, "age", {
               value: 30,
               configurable: false,
             });
             delete person.age; // This will not delete the 'age' property
             console.log(person.age); // Output: 30
             ```

5.  Protoype property, Constructor

    - Any funciton can become a constructor with `this` keyword and can have a default prototype

      1.  Protoype property:

      - Each function in JavaScript has a `prototype` property, which is an object used as the prototype for objects created by the constructor function.

        ````javascript
        // Define a constructor function
        function Person(name, age) {
        this.name = name;
        this.age = age;
        }

           // Add a method to the prototype of Person
           Person.prototype.sayHello = function() {
           console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
           };

           // Create an instance of Person
           const person1 = new Person('Alice', 30);

           // Call the method from the prototype
           person1.sayHello(); // Output: Hello, my name is Alice and I'm 30 years old.

           // Access the prototype property of the constructor function
           console.log(Person.prototype); // Output: { sayHello: [Function] }
           ```
        ````

      2.  Constructor

      - The `constructor` property of the prototype points back to the constructor function.

            ```javascript
            function Car(make, model) {
               this.make = make;
               this.model = model;
            }

            const car1 = new Car("Toyota", "Camry");
            console.log(car1.constructor === Car); // Output: true
            ```

6.  Native Prototype

    - JavaScript provides built-in constructors such as `Array`, `String`, and `Object`, each of which has a prototype property that defines methods and properties available to instances of those constructors.

    1. **Array Prototype:**

       - The `Array.prototype` object contains methods for manipulating arrays. These methods are available to all instances of arrays created using the `Array` constructor.
         ```javascript
         const numbers = [1, 2, 3];
         console.log(numbers.length); // Output: 3
         console.log(numbers.reverse()); // Output: [3, 2, 1]
         ```

    2. **String Prototype:**

       - The `String.prototype` object contains methods for working with strings. These methods are available to all string instances created using the `String` constructor.
         ```javascript
         const greeting = "Hello";
         console.log(greeting.length); // Output: 5
         console.log(greeting.toUpperCase()); // Output: "HELLO"
         ```

    3. **Object Prototype:**
       - The `Object.prototype` object contains methods and properties that are available to all objects in JavaScript.
         ```javascript
         const person = {
           name: "Alice",
           age: 30,
         };
         console.log(Object.keys(person)); // Output: ['name', 'age']
         console.log(person.hasOwnProperty("name")); // Output: true
         ```

7.  Primitives

    - Primitives in JavaScript, such as strings, numbers, and booleans, are not objects, but they have associated wrapper objects that provide access to methods and properties. These wrapper objects have prototype objects, which define methods and properties that can be accessed on primitive values.
    - These wrapper objects are created and discarded automatically by JavaScript as needed when you access methods or properties on primitive values. It's important to note that modifying methods or properties on these wrapper object prototypes does not affect the primitive values themselves, as primitives are immutable.

    1. **String Prototype:**

       - The `String.prototype` object contains methods for working with strings. When you access a method on a primitive string value, JavaScript automatically wraps the primitive value in a temporary object, allowing you to use methods defined on `String.prototype`. However, these changes do not affect the original primitive value.

         ```javascript
         const str = "Hello";
         console.log(str.toUpperCase()); // Output: "HELLO"
         ```

    2. **Number Prototype:**

       - The `Number.prototype` object contains methods for working with numbers. Similarly to strings, when you access a method on a primitive number value, JavaScript temporarily wraps the primitive value in a `Number` object, allowing you to use methods defined on `Number.prototype`.
         ```javascript
         const num = 42;
         console.log(num.toFixed(2)); // Output: "42.00"
         ```

    3. **Boolean Prototype:**
       - The `Boolean.prototype` object contains methods for working with boolean values. Similarly to strings and numbers, when you access a method on a primitive boolean value, JavaScript temporarily wraps the primitive value in a `Boolean` object, allowing you to use methods defined on `Boolean.prototype`.
         ```javascript
         const bool = true;
         console.log(bool.toString()); // Output: "true"
         ```

8.  Polyfills

    - Polyfills are code snippets that implement modern JavaScript features in older browsers or environments that do not support them natively.
    - They are commonly used to fill the gaps left by older browsers or to provide compatibility with future JavaScript features.
    - There are several reasons why you might use a polyfill:

      1. **To Change Native Prototypes:**

         - Polyfills can be used to extend or modify the behavior of built-in JavaScript objects or prototypes. For example, you can add new methods to the `Array.prototype` or `String.prototype` objects to provide additional functionality.

           ```javascript
           // Polyfill for Array.prototype.sum
           if (!Array.prototype.sum) {
             Array.prototype.sum = function () {
               return this.reduce((total, current) => total + current, 0);
             };
           }

           const numbers = [1, 2, 3, 4, 5];
           console.log(numbers.sum()); // Output: 15
           ```

      2. **To Provide Futuristic APIs:**

         - Polyfills can provide access to APIs that are not yet standardized or implemented in all browsers. This allows developers to use new features in their code without worrying about browser support.

           ```javascript
           // Polyfill for Object.entries
           if (!Object.entries) {
             Object.entries = function (obj) {
               return Object.keys(obj).map((key) => [key, obj[key]]);
             };
           }

           const obj = { a: 1, b: 2, c: 3 };
           console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]]
           ```

      3. **To Correct Existing Behavior (Shims):**

         - Shims are a specific type of polyfill that corrects or modifies existing behavior to be more consistent across different environments or browsers.

           ```javascript
           // Shim for String.prototype.startsWith
           if (!String.prototype.startsWith) {
             String.prototype.startsWith = function (searchString, position) {
               position = position || 0;
               return this.indexOf(searchString, position) === position;
             };
           }

           const str = "Hello, world!";
           console.log(str.startsWith("Hello")); // Output: true
           ```

9.  Static properties and methods

    - Some of the Static Properties and Methods of default Object in js:
    - Array.isArray, Object.assign, String.fromCharCode(65, 66, 67), Number.isNaN("abc"), Boolean("abc"), etc

#### 6. Class

1.  Classes with Syntactic sugar was introduced in ES6

    1.  What is syntactic sugar

        - Syntactic sugar is **a term** used in programming **to describe syntax within a language that makes it easier to write and understand**, but doesn't add any new functionality.
        - Essentially, it's **a shorthand or convenience feature** **that simplifies the** way you write **code** without changing how it behaves.
        - examples: 1. **Arrow Functions:**

          ````javascript
          // Traditional function
          function add(a, b) {
          return a + b;
          }

                    // Arrow function
                    const add = (a, b) => a + b;
                  ```
              2. **Template Literals**:
                 ```javascript
                 const name = "Alice";
                 console.log(`Hello, ${name}!`);
                 ```
              3. **Destructuring Assignment:**
                 ```javascript
                 const person = { name: "Alice", age: 30 };
                 const { name, age } = person;
                 console.log(name); // Output: Alice
                 ```
              4. **Default Parameters:**.
                 ```javascript
                 function greet(name = "World") { //name is set to "World" in default case
                 console.log(`Hello, ${name}!`);
                 }

                 greet(); // Output: Hello, World!
                 ```
              5. **Spread Syntax:**
                 ```javascript
                 const numbers = [1, 2, 3];
                 const combined = [...numbers, 4, 5, 6];
                 console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
                 ```

              6. **Object Literal Shorthand:**
                 ```javascript
                 const name = "Alice";
                 const age = 30;

                 // Traditional object creation
                 const person = { name: name, age: age };

                 // Shorthand object creation
                 const person = { name, age };
                 ```
          ````

    2.  Difference between traditional Classes and Classes with Syntactic Sugar:

        1. Traditional Prototype-Based Inheritance:(Classes without Syntactic Sugar (ES5))

           - objects and their behavior are defined using constructor functions and prototype chains.

           ```javascript
           // Constructor function
           function Person(name) {
             this.name = name;
           }

           // Prototype methods
           Person.prototype.sayHello = function () {
             console.log(`Hello, my name is ${this.name}`);
           };

           // Creating an instance
           const person = new Person("Alice");
           person.sayHello(); // Output: Hello, my name is Alice
           ```

        2. Classes with Syntactic Sugar:

           - JavaScript classes provide a cleaner and more structured way to define objects and their behavior.
           - The same functionality as above can be achieved using the `class` syntax:
           - Have same functions as in traditional classes
           - class methods here are non enumerable (hidden)
           - class to string is different
           - class can only be called with `new`
           - always in `use strict` mode

           ```javascript
           // Using class syntax
           class Person {
             constructor(name) {
               this.name = name;
             }

             sayHello() {
               console.log(`Hello, my name is ${this.name}`);
             }
           }

           // Creating an instance
           const person = new Person("Alice");
           person.sayHello(); // Output: Hello, my name is Alice
           ```

2.  Getters/Setters

    - Getters and setters allow you to define custom behavior when getting or setting the value of an object property.

      ```javascript
      class Circle {
        constructor(radius) {
          this._radius = radius;
        }

        get radius() {
          return this._radius;
        }

        set radius(value) {
          if (value <= 0) {
            throw new Error("Radius must be positive");
          }
          this._radius = value;
        }
      }

      const circle = new Circle(5);
      console.log(circle.radius); // Output: 5
      circle.radius = 10;
      console.log(circle.radius); // Output: 10
      ```

3.  Computed Property Names

    - You can use computed property names to define object properties dynamically using expressions.

      ```javascript
      const propertyName = "age";

      class Person {
        constructor() {
          this[propertyName] = 30;
        }
      }

      const person = new Person();
      console.log(person.age); // Output: 30
      ```

4.  SetTimeout Issue

    - Classes do not bind `this` automatically to class methods. To ensure that `this` refers to the class instance within class methods passed as callbacks (e.g., to `setTimeout`), you need to explicitly bind `this`.

      ```javascript
      class Counter {
        constructor() {
          this.count = 0;
        }

        increment() {
          this.count++;
          console.log(this.count);
          setTimeout(function () {
            console.log(this.count); // Output: undefined (this refers to the global object, not the Counter instance)
          }, 1000);
        }
      }

      const counter = new Counter();
      counter.increment(); // Output: 1, undefined
      ```

5.  Ineritance

    - Classes support inheritance, allowing you to create subclasses that inherit properties and methods from a parent class.

      ```javascript
      class Animal {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(`${this.name} makes a sound`);
        }
      }

      class Dog extends Animal {
        speak() {
          console.log(`${this.name} barks`);
        }
      }

      const dog = new Dog("Buddy");
      dog.speak(); // Output: Buddy barks
      ```

6.  Static Methods
    - Static methods are methods that belong to the class itself and are not tied to instances of the class.
      ```javascript
      class MathUtils {
        static add(a, b) {
          return a + b;
        }
      }
      const mathInstance = new MathUtils();
      console.log(MathUtils.add(2, 3)); // Output: 5
      // Attempting to call a static method on an instance (throws error)
      console.log(mathInstance.add(3, 5)); // Throws an error
      ```
7.  Access (Private , public, protected)

    - JavaScript does not have built-in support for private, public, or protected access modifiers in classes. However, you can use naming conventions or symbols to emulate privacy.

      1. Private Members:

         - Starting from ECMAScript 2022 (ES12), JavaScript introduced a new syntax for private class members using the # symbol.

         ````javascript
         class Person {
         #name; // Private field

         constructor(name) {
            this.#name = name; // Initializing private field
         }

         getName() {
            return this.#name; // Accessing private field
         }
         }

         const person = new Person("Alice");
         console.log(person.getName()); // Output: Alice
         console.log(person.#name); // Attempting to access private field directly (throws an error)
         ```ible, but not recommended)
         ````

    2. Public Members:

       - Public members in JavaScript classes are accessible from outside the class without any restrictions.
       - You don't need any special syntax to define public members; they are just properties and methods of the class.

       ```javascript
       class Person {
         constructor(name) {
           this.name = name; // Public member
         }

         getName() {
           return this.name; // Accessing public member
         }
       }

       const person = new Person("Alice");
       console.log(person.getName()); // Output: Alice
       console.log(person.name); // Accessing public member directly
       ```

    3. Protected Members:

       - JavaScript doesn't have built-in support for protected members, but you can achieve a similar effect by convention or using symbols.
       - By prefixing members with an underscore `_`, you can signal to other developers that they are intended to be protected, meaning they should not be accessed or modified from outside the class, but there's no actual enforcement.

         ```javascript
         class Person {
           constructor(name) {
             this._name = name; // Protected member
           }

           getName() {
             return this._name; // Accessing protected member
           }
         }

         const person = new Person("Alice");
         console.log(person.getName()); // Output: Alice
         console.log(person._name); // Accessing protected member directly (possible, but not recommended)
         ```

    4. Symbols for Privacy:

       - Using symbols is another way to emulate privacy in JavaScript classes.
       - By defining private members using symbols, you can ensure that they are not accessible from outside the class.

       ```javascript
       const _name = Symbol("name"); // Private symbol

       class Person {
         constructor(name) {
           this[_name] = name; // Private member
         }

         getName() {
           return this[_name]; // Accessing private member
         }
       }

       const person = new Person("Alice");
       console.log(person.getName()); // Output: Alice
       console.log(person[_name]); // Attempting to access private member directly (throws an error)
       ```

8.  instanceOf

    - The `instanceof` operator allows you to check whether an object is an instance of a particular class.

    ```javascript
    class Car {}

    const car = new Car();
    console.log(car instanceof Car); // Output: true
    ```

#### 7. Async JS

1. Async JS- Callbacks
   - using event-loop
   - eg: setTimeout, setInterval, etc
2. Errors
3. Multiple callbacks
   - causes callback hell/ pyramid of doom
   - uses promises to avoid this
4. Promise
   - works in publisher-subsrciber model
   - publishers already has subscribers attached to it. When it is time, event is automatically sent to subscriber
   - Publisher has resolve and reject
   - Subscriber has a listeer called as 'then' and 'catch' and 'finally'
   - Promise has 3 states - loading, fulfilled(resolve), rejected(reject)
5. Promise API

   - promise .all - as an arary
   - promise .allSettled - to given then even when there is error
   - promise .race - will give any 1 result which fulfils or rejects first
   - promise .any- will give the first result which fulfills
   - promise .reject - used for testing, not used much

   ```javascript
   // Example of Promise.all
   const promise1 = Promise.resolve(1);
   const promise2 = Promise.resolve(2);
   const promise3 = new Promise((resolve, reject) => {
     setTimeout(() => resolve(3), 1000);
   });

   Promise.all([promise1, promise2, promise3]).then((values) => {
     console.log(values); // [1, 2, 3]
   });

   // Example of Promise.race
   const promiseA = new Promise((resolve, reject) => {
     setTimeout(() => resolve("A"), 2000);
   });

   const promiseB = new Promise((resolve, reject) => {
     setTimeout(() => resolve("B"), 1000);
   });

   Promise.race([promiseA, promiseB]).then((value) => {
     console.log(value); // B
   });
   ```

6. Async/ await
   - a syntactic sugar for promises
   - to simplify use of promises

## 4. Node Js
