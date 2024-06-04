## Chapter 1 (Data Types)

### Assignments

- **1.1:** Create a code to check difference between `null` and `undefined` data type. Also check their type using `typeof`.

  - ans:
    ```javascript
    function check(variable) {
      if (variable == null) {
        console.log(null);
        console.log("type of variable = ", typeof variable);
      } else if (varibale === undefined) {
        console.log(undefined);
        console.log("type of variable = ", typeof variable);
      }
    }
    ```

- **1.2:** Which type of variables (var, let or const) must be **initialized** at the time of declaration?

  - const

- **1.3:** Guess the **Output** and Explain Why?

  _[From video lecture 1.5]_

  ```js
  let languages = "java javaScript python cSharp";

  let result = languages.lastIndexOf("S");

  console.log(result);
  ```

  - ans: result will be 24
  - Explanation: lastIndexOf searches for the index of character appearing last in the string.

- **1.4:** Guess the **Output** and Explain Why?

  _[From video lecture 1.8]_

  ```js
  let variable = "hello programmers";

  let result = Number(variable);

  console.log(result);
  ```

  - ans: NaN
  - explanation: a string cannot be converted to a number. so it return NaN (not a number)

- **1.5:** Guess the **Output** and Explain Why?

  ```js
  let num1 = 32;

  let num2 = "32";

  let result1 = num1 !== num2;

  let result2 = num1 != num2;

  console.log(result1, result2);
  ```

  - ans: true, false
  - explanation: in strict equality(===) we check for the value as well as datatype, but in loose equality (==) we check only for value

- **1.6:** Guess the **Output** and explain Why?

  ```js
  let str = "Hello Programmers";

  let result = str.includes("r");

  console.log(result);
  ```

  - ans: true
  - exlplanation: .includes() checks for tehthe existence of a character ina strng or an array

- **1.7:** Guess the **Output** and Explain Why?

  _[From video lecture 1.6]_

  ```js
  let num1 = 2;

  let num2 = 5;

  let result = num1 ** num2 * 2;

  console.log(result);
  ```

  - ans: 64 ((2^5)\*2)
  - explanation: order of priority of mathematical operations, multiplication comes after exponent

- **1.8:** Guess the **Output** and Explain Why?

  ```js
  let num1 = [1, 2, 4, 5];

  let num2 = [6, 5, 8, 0];

  let result = num1.concat(num2);

  console.log(result);
  ```

  - ans: [1, 2, 4, 5, 6, 5, 8, 0]
  - exp: .concat() joins strings or arrays

- **1.9:** Guess the **Output** and Explain Why?

  ```js
  let a = 5;

  let b = 7;

  let c = 8;

  let result = a < b > c;

  console.log(result);
  ```

  - ans: false
    -exp: a<b=true, then true is forcefully changed to 1 upon conversion from boolean to number, then 1>8 = false

- **1.10:** If your State is split into **four** equal parts such that in each part there are **1/4** number of people live. You have to find how many people would live in each part? which operators will you use ?

  _[From video lecture 1.6]_

  - ans: division operator
  - exp: state/4 gives the number of people living in each part

## Chapter 2 (Control Flow / Conditional)

### Assignments:

- **2.1:** Guess the **Output** And Explain Why?

  ```js
  let i = 4;

  for (let j = 0; i < 10; i++) {
    if (j === 1 || i === 6) {
      continue;
    } else {
      console.log(i, j);

      if (i === 7) {
        break;
      }
    }
  }
  ```

  - ans: (4, 0), (5, 0), (7, 0)

- **2.2:** Guess the **Output** and Explain Why?

  ```js
  let i = 0;

  for (i; i < 5; i++) {
    console.log(i);
  }
  ```

  - ans: 0, 1, 2, 3, 4
  - exp: for loop will run as usual. just that initialisation happened outside

- **2.3:** Write a simple **Program** in which You have to print first **10** numbers in **descending** order (10...1)?

  - ans:
    ```js
    for (let i = 10; i <= 0; i--) {
      console.log(i);
    }
    ```

- **2.4:** Lets say `John` is looking a new `country` to live in. He want to live in a country that speaks `English`, has less than 10 million people. One of the `food` option between these two must present `Spanish food` OR `English food`.

  **Write** an if/else if statement to help john figure out Your country is right for him?

  _[From video lecture 2.4]_

  - ans:
    ```js
    var language = "English",
      population = 3,
      food = "English food";
    if (
      (language == "English" &&
        population < 10000000 &&
        food == "Spanish food") ||
      food == "English food"
    ) {
      console.log("yes");
    } else {
      console.log("No");
    }
    ```

- **2.5:** Guess the **Output** And Explain Why?

  ```js
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(i);
  ```

  - ans: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9), 10

- **2.6:** use **nested-if** statement to check your `age>18`

  than check your height `height > 5.10`.

  If **both** true show any message(**I can sit in exam**) in the console?

  - ans:
    ```js
    if (age > 18) {
      if (height > 5.1) {
        console.log("i can sit in exam");
      }
    }
    ```

- **2.7:** Create two variables `grade` and `passingYear`.Check if your `grade == "A"` and `passingYear < 2020` with the help of **ternary** operator(Not allowed to use any logical operator).If both condition `true` print on console **Qualify**. Otherwise **Fail**

  _[From video lecture 2.9]_

  - ans:
    ```js
    let grade = "A",
      passingYear = 2019;
    console.log(grade === "A" && passingYear < 2020 ? "Qualify" : "Fail");
    ```

## Chapter 3 (Functions)

### Assignments

- **3.1:** Create a **function Declaration** called `describeYourState` Which take three parameters `Population`, `traditional food` and `historical place`. Based on this input function should return a `String` with this format.

  **My state population is ** Its traditional food is ** and historical place name is \_\_\_**

  - ans:
    ```js
    function describeYourState(Population, traditionalFood, historicalPlace) {
      return (
        "My state population is " +
        Population +
        ". Its traditional food is " +
        traditionalFood +
        " and historical place name is " +
        historicalPlace
      );
    }
    ```

- **3.2:** Create a **function expression** which does the exact same thing as defined in **Question 1**

  - ans:
    ```js
    const describeYourState = (
      Population,
      traditionalFood,
      historicalPlace
    ) => {
      return (
        "My state population is " +
        Population +
        ". Its traditional food is " +
        traditionalFood +
        " and historical place name is " +
        historicalPlace
      );
    };
    ```

- **3.3:** Create function **addition** which takes two numbers as an argument And return the result of **sum of two numbers**

  **Important Note**: In the function call you are **not** passing any **parameter**. You can modify function to achieve this.
  _[From video lecture 3.2]_

  ```js
  Example;

  function addition(num1, num2) {
    return num1 + num2;
  }

  console.log(addition()); //You are not allowed to modify this line any more
  ```

- ans:

  ```js
  // by using default values
  function addition(num1 = 1, num2 = 3) {
    return num1 + num2;
  }
  ```

- **3.4:** Identify which **type** of value passed below into the function **greet()**. What will be the return value of greet ?

  ```js
  let person = {
    name: "john",

    age: 25,
  };

  function greet(person) {
    person.name = `Mr ${person.name}`;

    return `Welcome ${person.name}`;
  }

  greet(person);
  ```

  - ans: type of value=object, return value=string

- **3.5:** Create **higher** order function named as `transformer` which take `string` and `firstUpperCaseWord` function as an arguments. `firstUpperCaseWord` is function which make first word UpperCase from a given `String`.

  _[From video lecture 3.5]_

  - ans:

    ```js
    function transformer(string, firstUpperCaseWord) {
      return firstUpperCaseWord(string);
    }

    function firstUpperCaseWord(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    ```

- **3.6:** create function which will display Your name after every 5 seconds

  _[From video lecture 3.8]_

  ```js

  input

  let  yourName  =  "john";



  output

  "john"  after  5  second

  "john"  after  5  second

  "john"  after  5  second

  "john"  after  5  second

  .

  .

  .

  and  so  on.

  ```

  - ans:
    ```js
    setInterval(() => {
      console.log(yourName);
    }, 5000);
    ```

- **3.7:** Guess the **Output** And Explain Why?

  _[From video lecture 3.4]_

  ```js
  let arrowFunction = (name = "Coders") => {
    `Welcome ${name}`;
  };

  console.log(arrowFunction("Programmers"));
  ```

  - ans: undefined
  - exp: return value is not defined

- **3.8:** Create a JavaScript **Function** to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : **Area = Square root of√s(s - a)(s - b)(s - c)** where **s** is half the perimeter, or **(a + b + c)/2**.

  ```js
  input: area_of_triangle(5, 6, 7);

  output: 14.69;
  ```

  - ans:
    ```js
    function area_of_triangle(a, b, c) {
      return (a + b + c) / 2;
    }
    ```

- **3.9:** Create a JavaScript **Function** to capitalize the first letter of each word of a given string.

  ```js
  input: capitalize("we are the champions");

  output: "We Are The Champions";
  ```

  - ans:

    ```js
    function capitalize(string) {
      string = string.split("");
      string.forEach((item, index) => {
        if (string[index - 1] == " " || index == 0) {
          string[index] = string[index].toUpperCase();
        }
      });

      return string.join("");
    }
    ```

## Chapter 4 (Objects)

### Assignments

- **4.1:** Guess the **Output** And Explain ?

  ```js
  console.log(Math.round(Math.random() * 10));
  ```

  - ans: output will be integers between 0 to 10

- **4.2:** Create an object called `country` for a country of your choice, containing properties `name` , `capital`, `language`, `population` and `neighbors`

  1. Increase the country population by two million using **dot** notation.
  2. Decrease the country population by one million using **bracket** notation.
  3. Make `language` value in Uppercase.

  _[From video lecture 4.1]_

  - ans:

    ```js
    let country = {
      name: "x",
      capital: "x",
      language: "english",
      population: 2,
      neighbors: 2,
    };

    country.population = country.population + 2 * 10 ** 6;
    country["population"] = country["population"] - 10 ** 6;
    country["language"] = country["language"].toUpperCase();
    ```

- **4.3:** Guess the **Output** and explain Why?

  ```js
  let car = {
    color: "Blue",

    model: 2021,

    company: "Toyota",
  };

  let carColor = "Blue";

  console.log(car[carColor]);

  console.log(car.carColor);
  ```

  - ans: both are undefined, because property carColor doesnt exist in object 'car'

- **4.4:** Create a method **describeCar** inside `car` object in which you have to print like this in console using template literals

  _[From video lecture 4.3]_

  **Company of my car is ** . It color is** And Model of my car is \_\_**

  - ans:
    ```js
    car.describeCar = (company, color, model) => {
      return `Company of my car is ${company} . It color is ${color} And Model of my car is ${model}`;
    };
    ```

- **4.5:** Generate random numbers between 0 and 10 using **trunc** method of **MATH** object

  ```js

  Example

  getRandomNumbers(){



  }

  Ouput  value  0-10

  ```

  - ans:
    ```js
    function getRandomNumbers() {
      return Math.trunc(Math.random() * 10);
    }
    ```

- **4.6:** Guess the **Output** and Explain Why?

  _[From video lecture 4.4]_

  ```js

  let  arr  = [1,2,3,4];

  arr.forEach(elem  =>{

  if(elem  ==  1){

  continue;

  }

  console.log(elem);

  })

  ```

  - ans: syntax error
  - exp: continue is not valid inside forEach loop

- **4.7:** Guess the **Output** And explain Why?

  **Important Note**: if there is any error, How we can solve that **error**?

  _[From video lecture 4.7]_

  ```js
  let airplane = {
    flightName: "fly india",

    atacode: "FI",

    ratings: 4.9,

    book(passenger, flightNum) {
      console.log(
        `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      );
    },
  };

  let bookMethod = airplane.book;

  bookMethod("john", 8754);
  ```

  - ans: john Booked flight in _undefined_ with flight Number _undefined8754_
  - exp: when you give another name for the function inside an object, this keyword doesnt refer to the object itslef uless you bind it.
    ```js
    let bookMethod = airplane.book.bind(airplane);
    ```

- **4.8:** Guess the **Output** And Explain Why?

  _[From video lecture 4.9]_

  ```js
  let arr = [1, 2, 3, 4];

  for (let elem in arr) {
    console.log(elem);
  }
  ```

  - ans: it will return 0, 1, 2, 3 which are the array indices (the property names)
  - exp: its because for in loop isnt for values, but for keys in objects (and indices in arrays). for of loop is for values in arrays
  - to get the values in objects we need Object.values() or [key, value] in Object.entries()

- **4.9:** You have to create a **Shopping_Cart** array with following features :

  - **addItem(itemName)** : this function should add string itemName to cart

  - **removeItem(itemName)**: this function should remove any item which matches itemName. _Hint : search for index of itemName and then remove it_

  - **cartSize()** : returns size of cart in terms of number of cart Items.
  - ans:
    ```js
    function addItem(itemName) {
      Shopping_Cart.push(itemName);
    }
    function removeItem(itemName) {
      let index = Shopping_Cart.indexOf(itemName);
      Shopping_Cart.splice(index, 1);
    }
    function cartSize() {
      return Shopping_Cart.length();
    }
    ```

## Chapter 5 (DOM)

### Assignments

- **5.1:** Explain difference between **innerText** and **innerHTML** in the following example?

  _[From video lecture 5.4]_

  **HTML**

  ```html
  <div id="content">
    <h2>Hello Coders</h2>
  </div>
  ```

  **JavaScript**

  ```js
  let content = document.getElementById("content");

  console.log(content.innerHTML);

  console.log(content.innerText);
  ```

  - ans: innerText will change the text "Hello Coders", whereas innerHTML will change the html inside content div which is <h2>Hello Coders</h2>

## Chapter 6 ( DOM - Forms )

### Assignments

- **6.1:** Create regex for password with the following **validations**.

  1. Length of password at least of 8 characters

  2. contain at least one special character

  3. contain at least one alphabet (a-z) character

  _[From video lecture 6.2]_

  **HTML**

  ```html
  <form action="" class="testForm">
    <input
      type="password"
      name=""
      class="inputPass"
      placeholder="Enter Password"
    />

    <input type="submit" value="Check Password" />
  </form>
  ```

  **JavaScript**

  ```js
  let form = document.querySelector(".testForm");

  let inputPassword = document.querySelector(".inputPass");

  let requiredPasswordPattern = "create your regex here"; //create your regex here

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let password = inputPassword.value;

    let result = requiredPasswordPattern.test(password);

    if (result == true) {
      console.log("Your password validated successfully");
    } else {
      console.log("try again with new password");
    }
  });
  ```

  - ans: ^(?=._[a-zA-Z])(?=._[^a-zA-Z0-9]).{8,}$
  - exp: ^: Asserts the start of the string.
    - (?=.\_[a-zA-Z]): Positive lookahead to ensure that the string contains at least one alphabet character (a-z or A-Z).
    - (?=.\_[^a-zA-Z0-9]): Positive lookahead to ensure that the string contains at least one special character (anything except a-z, A-Z, and 0-9).
    - .{8,}: Matches any character (except newline) for at least 8 times, and atmost any number of times.
    - $: Asserts the end of the string.

## Chapter 7 (Array Methods)

### Assignments

- **7.1:** You have given array of **strings**. Your task is to obtain last **two** elements of given array using **slice** method?

  ```js
  Input;

  let admins = ["john", "paul", "Neha", "harry"];

  Ouput[("Neha", "harry")];
  ```

  - ans:
    ```js
    let output = admins.slice(admins.length - 2);
    ```

- **7.2:** You have given an array of **5** elements(1-5). Your task is defined as below.

  _[From video lecture 7.2]_

  ```js
  const arr = [1, 4, 7, 6, 8];
  ```

  1. You have to delete **2** elements starting from index **2**.

  2. You have to add **3** new elements on index **1** choice.

  3. Display the **2 deleted** elements in console (from step 1)

  - ans:
    ```js
    let deleted = arr.splice(2, 2); //delete 2 elelements from index 2
    arr.splice(1, 0, 10, 11, 12); // delete 0 elements from index 1 and add 3 elements of my choice
    console.log(deleted); // console the deleted elements
    ```

- **7.3:** What happens if we use **negative** number inside **slice** method?

  ```js
  const arr = [1, 4, 7, 6, 8];
  ```

  Example : arr.slice(-2);

  - ans: When a negative number is used inside the slice method, it represents an index counting from the end of the array towards the beginning
    ```js
    console.log(arr.slice(-2)); // will return elements from index 3 till end of arr. that is, [6, 8]
    ```

- **7.4:** Write **three** different methods/approaches to get **last** element of the array?

  ```js
  const arr = [1, 4, 7, 6, 8];
  ```

  _[From video lecture 7.3]_

  - ans:
    ```js
    console.log(arr.pop());
    console.log(arr[arr.length - 1]);
    console.log(arr.slice(arr.length - 1, 1));
    ```

- **7.5:** You have given an array of **nums**. Create new Array with the help of **nums** array. In new Array each element will be a result of **multiplication by 2** of the original array element

  ```js
  const arr = [1, 4, 7, 6, 8];
  ```

  _[From video lecture 7.4]_

  ```js
  Example: Input;

  let nums = [1, 2, 3, 4, 5];

  output;

  updatedNums = [2, 4, 6, 8, 10];
  ```

  - ans: `console.log(nums.map(item=> item*2))`

- **7.6** You have given an array of **scores** in which score of each student stored. Create a new array with the help of original **scores** array in which only those scores exist **greater** than 75%

  ```js
  const arr = [10, 40, 70, 60, 80];
  ```

  _[From video lecture 7.5]_

  ```js
  let totalScore = 150;

  let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];
  ```

  - ans:`console.log(arr.filter(item=> item>75))`

- **7.7:** You have given an array of numbers **nums**. You have to find **sum** of all array elements using **reduce** method?

  ```js
  let nums = [2, 3, 5, 7, 8, 4, 9];
  ```

  **7.8:** You have given an array of numbers **nums**. You have to find the index of value **8** using **built-in** method of array

  ```js
  let nums = [2, 3, 5, 6, 8, 6, 4, 8];
  ```

  - ans:
    ```js
    console.log(nums.reduce((acc, curr) => acc + curr, 0));
    ```
    <!-- const result = array.reduce((accumulator, currentValue, index, array) => { -->
    <!-- // Perform some operation using accumulator and currentValue -->
    <!-- return updatedAccumulatorValue; -->
    <!-- }, initialValue); -->

- **7.9:** You have given an array of **objects** of users as below. Find the specified **user** with `name = "John" `

  Also find the **position** `(index+1)` of that **user** inside the array?

  ```js
  let users = [
    {
      name: "Paul",

      age: 24,

      verified: true,
    },

    {
      name: "John",

      age: 21,

      verified: false,
    },

    {
      name: "Neha",

      age: 19,

      verify: true,
    },
  ];
  ```

  - ans:
    ```js
    let user = users.find((item) => item.name === "John");
    let index = users.findIndex((item) => item.name === "John");
    ```

- **7.10:** Guess the **Output** and explain Why?

  ```js
  let nums = [1, 2, 4, 5, [6, [8]], [9, 0]];

  let res1 = nums.flat(1);

  let res2 = nums.flatMap((elem) => elem);

  console.log(res1, res2);
  ```

  - ans: res1 = [1, 2,3 ,4 ,5 ,6 7, [8], 9, 0], res2 = [1, 2,3 ,4 ,5 ,6 7, [8], 9, 0] (both doesnt get completely flattened)

    > **flat Method:**
    > The flat method is used to flatten a nested array structure.
    > It takes an optional parameter depth, which specifies the depth level up to which the nested arrays should be flattened.
    > If no depth parameter is provided, it defaults to 1, meaning that only one level of nesting is flattened.
    > It returns a new array with the nested arrays flattened according to the specified depth.
    >
    > ```js
    > const flattenedArray = array.flat([depth]);
    > ```

    > **flatMap Method:**
    > The flatMap method is used to both flatten and map elements in an array.
    > It first maps each element using a mapping function, and then flattens the result into a new array.
    > It combines the functionalities of map and flat in a single method call.
    > The mapping function passed to flatMap can return either a single value or an array of values. If it returns an array, flatMap will flatten it.
    > It always flattens the result to a depth of 1, meaning it does not perform deep flattening like flat.
    >
    > ```js
    > const mappedAndFlattenedArray = array.flatMap((element, index, array) => {
    >   // return value or array of values
    > });
    > ```

- **7.11:** You have given an array of `nums`. Write a program to `sort` the elements of array in `descending` order **using built-in** method of array.

  ```js
  Input;

  let nums = [5, 1, 4, 6, 8, 3, 9];

  Output[(9, 8, 6, 5, 4, 3, 1)];
  ```

  - ans: nums.sort((a, b)=>b-a)

- **7.12:** Guess the **Output** and Explain Why?

  _[From video lecture 7.13]_

  ```js
  let arr = [1, 2, 3, 4];

  let result = arr.splice(1, 2).pop();

  console.log(result);
  ```

  - ans: 3

- **7.13:** You have given an array of numbers `nums` You have to check if all elements of the **array > 15** using **built-in** array method. return `true` or `false`

  _[From video lecture 7.9]_

  ```js
  let nums = [16, 17, 18, 28, 22];
  ```

  - ans: console.log(nums.every(item=> item>15))
    > The every method tests whether all elements in the array pass the test implemented by the provided function.

### More Practice Questions (Arrays)

- **Question 1:** Guess the **Output** And explain Why?

  ```js
  let strArray = [1, 2, 3, 4, 5];

  let result = strArray.reverse();

  console.log(result === strArray);
  ```

  - ans: true (even though the array values have been changed), because reverse() manipluates array **in-place**. so result also points to the same array which strArray points to (like objects)

- **Question 2:** You have **given** two **arrays** below as an example. Your task is to **combine** them into one By using array method

  ```js
  input;

  let arr1 = [1, 2, 3, 4, 5];

  let arr2 = [6, 7, 8, 9, 10];

  ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];
  ```

  - ans: arr1.concat(arr2)

- **Question 3:** You have given an array of **letters** below. Convert that array into string of letters **Without Space**

  ```js
  input;

  let arr = ["a", "b", "h", "i", "s", "h", "e", "k"];

  output;

  ("abhishek");
  ```

  - ans: arr.join("")

- **Question 4:** Guess the **Output** and explain why?

  ```js
  let arr = [11, 62, 1, 27, 8, 5];

  let sorted = arr.sort();

  console.log(sorted);
  ```

  - ans: arr will get sorted lexicographically. which means [1, 11, 27, 5, 62, 8]

- **Question 5:** Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following thing in order:

  1. Calculate the dog `age` in human years using the following formula: if the `dogAge <= 2 years` old, `humanAge = 2 \* dogAg`e. If the `dog is > 2 years` old, `humanAge = 16 + dogAge`

  ```js
  Test  data
  let  arr  = [12,2,5,12,8,13,9];

  ```

  - ans:

    ```js
    function calcAverageHumanAge(arr) {
      let humanArr = arr.map((item) => {
        if (item <= 2) {
          return item * 2;
        } else {
          return item + 16;
        }
      });

      return humanArr;
    }
    ```

- **Question 6:** Guess the **Output** and Explain Why?

  ```js
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  let elem = arr.at(-1);

  console.log(elem);
  ```

  - ans: 8. (-1) means start counting from back

- **Question 7:** Guess the **Output** and Explain why?

  ```js
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  let result = arr.slice(2, 5).splice(0, 2, 21).pop();

  console.log(result, arr);
  ```

  - ans: result = 4, arr = [1, 2, 3, 4, 5, 6, 7, 8];
  - exp: arr.slice(2, 5) returns [3, 4, 5] (excluding 6)
  - .splice(0, 2, 21) edits arr.slice to [21, 5], but returns the spliced values, i.e, [3, 4]
  - .pop() return 4 from [3, 4]. ∴ result = 4

## Chapter 8 (Date)

### Assignments

- **8.1:** How can we get current time in **millisecond** of current time?

  - ans: new Date()

- **8.2:** Guess the **Output** and Explain Why?

  _[From video lecture 8.2]_

  ```js
  let currentDate = new Date();

  let result1 = currentDate.getDay();

  let result2 = currentDate.getDate();

  console.log(result1, result2);
  ```

  - ans: result1= 2 (index of days between 0 to 6 of days of the week, today was tuesday. days start from sunday)
  - result2= 4 (4th day of this month)

  > **ALL ABOUT DATE**
  >
  > ```js
  > console.log(new Date()); // o/p: new Date('2024-06-04T06:35:16.000Z')
  > // Year: 2024
  > // Month: June (06)
  > // Day: 4th
  > // Time: 06:13:37 (6 hours, 13 minutes, 37 seconds)
  > // Milliseconds: 000
  > // Timezone: Z (Zulu Time Zone), also known as Coordinated Universal Time (UTC)
  > console.log(new Date().toString()); //o/p: 'Tue Jun 04 2024 12:05:59 GMT+0530 (India Standard Time)'
  >
  > //GETTING
  > // new Date(year, monthIndex, day, hour, minute, second, millisecond)
  > console.log(new Date(2022, 0, 1, 12, 30, 0));
  > console.log(new Date(2022, 0, 1, 12, 30, 0).toString());
  > console.log(new Date().getFullYear());
  > console.log(new Date().getMonth());
  > console.log(new Date().getDate());
  > console.log(new Date().getDay());
  > console.log(new Date().getHours());
  > console.log(new Date().getMinutes());
  > console.log(new Date().getSeconds());
  > console.log(new Date().getMilliseconds());
  > console.log(new Date(new Date().getTime()).toString()); // to make it readble.
  > console.log(new Date().getTime()); // Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
  >
  > //SETTING
  > console.log(new Date().setFullYear(2019)); //returns the number of milliseconds between the specified date and midnight January 1, 1970 UTC (Coordinated Universal Time), known as the Unix epoch/timestamp.
  > console.log(new Date(1559628667236).toString()); //to make timestamp readable
  > console.log(new Date().setMonth(5));
  > console.log(new Date().setDate(15));
  > console.log(new Date().setHours(4));
  > console.log(new Date().setMinutes(4));
  > console.log(new Date().setSeconds(4));
  > console.log(new Date().setMilliseconds(4));
  >
  > //CONVERTING FROM STRING TO TIMESTAMP
  > console.log(Date.parse("2024-06-04T06:13:37.000Z")); // Parses a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
  >
  > // Date Arithmetic
  > console.log(new Date(new Date().getTime() + 86400000).toString()); // Adding one day (in milliseconds))
  >
  > // Formatting Dates
  > console.log(new Date().toLocaleDateString());
  > console.log(new Date().toLocaleTimeString());
  > console.log(new Date().toUTCString());
  > ```

## Chapter 9 (LocalStorage)

### Assignments

- **9.1:** Create two variables **myHobby** , **age** . Now **set** their value in local storage (according to your hobby and age).

  After setting also **get** value from local storage and display their values in **console**.

  _[From video lecture 9.2]_

  - ans:
    ```js
    let myHobby = "dance",
      age = 20;
    localStorage.setItem("myHobby", myHobby);
    localStorage.setItem("age", age.toString()); //everything has to be set as string in local storage
    console.log(localStorage.getItem("myHobby"));
    console.log(localStorage.getItem("age"));
    ```

## Chapter 10 (OOP)

### Assignments

- **10.1:** Your tasks:

  1. Use a **constructor** function to implement a `Bike`. A bike has a `make` and a `speed` property. The `speed` property is the current speed of the bike in km/h

  2. Implement an `accelerate` method that will increase the bike's speed by **50**, and log the new speed to the console

  3. Implement a `brake` method that will decrease the bike's speed by **25**, and log the new speed to the console

  4. Create **2** 'Bike' objects and experiment with calling `accelerate` and `brake` multiple times on each of them

  **Sample Data**

  Data car 1: `bike1` going at 120 km/h

  Data car 2: `bike` going at 95 km/h

  - ans:

    ```js
    function Bike(make, speed) {
      this.make = make;
      this.speed = speed;
    }

    Bike.prototype.accelerate = function () {
      this.speed = this.speed + 50;
      console.log(this.speed);
    };

    Bike.prototype.brake = function () {
      this.speed = this.speed - 25;
      console.log(this.speed);
    };

    let bike = new Bike(2014, 120);
    let bike2 = new Bike(2016, 95);
    bike.accelerate();
    bike2.brake();
    ```

- **10.2:** Re-create **Question 1** But this time using **ES6**

  class.

  _[From video lecture 10.4]_

  - ans: using es6 (means classes)

    ```js
    class Bike {
      constructor(make, speed) {
        this.make = make;
        this.speed = speed;
      }

      accelerate = function () {
        this.speed = this.speed + 50;
        console.log(this.speed);
      };

      brake = function () {
        this.speed = this.speed - 25;
        console.log(this.speed);
      };
    }

    let bike = new Bike(2014, 120);
    let bike2 = new Bike(2016, 95);
    bike.accelerate();
    bike2.brake();
    ```

- **10.3:** Guess the **Output** And Explain Why?

  _[From video lecture 10.2]_

  ```js
  function Person(name) {
    this.name = name;
  }

  let me = new Person("John");

  console.log(me.__proto__ == Person.prototype);

  console.log(me.__proto__.__proto__ == Object.prototype);
  ```

  - ans: true, true

- **10.4:** Create **constructor** function inside **Car** class with three properties **color** , **model** , **company**

  ```js
  class Car {}
  ```

  - ans: assign a new constructor function to its prototype.
    ```js
    Car.prototype.constructor = function (color, model, company) {
      this.color = color;
      this.model = model;
      this.company = company;
    };
    ```

- **10.5:** **Identify** all **mistakes** in the following class

  ```js
  class  Car = {
    constructor(){
      //constructor body
    },
    engineMethod  =  function(){
    console.log("This is engine method of Car class");
    }
  }

  ```

  - ans:
    1. class definition should be class Car instead of class Car =.
    2. Comma after constructor needs to be removed

- **10.6:** Guess the **Output** and explain Why? And **if** there is any **error** How we can remove that error?

  _[From video lecture 10.6]_

  ```js
  function Person(name, age) {
    this.name = name;

    this.age = age;

    this.brainMethod = function () {
      console.log("This is brain method of Person");
    };
  }

  Person.heartMethod = function () {
    console.log("This is heart method of Person");
  };

  let me = new Person("john", 34);

  me.brainMethod();

  me.heartMethod();
  ```

  - ans: heart method wil have an error, because we cannot directly make changes on the constructor functions. we have to make changes on the instances

- **10.7:** Create a new class `Dog` (which will be child class) inherited from `Animal` class. In Addition in `Dog` class add some additional properties like **breedType**

  _[From video lecture 10.7]_

  - ans:

    ```js
    class Animal {
      constructor(name) {
        this.name = name;
      }
    }

    class Dog extends Animal {
      constructor(name, breedType) {
        super(name);
        this.breedType = breedType;
      }
    }
    ```

- **Question 8:** Guess the **Output** And Explain Why?

  ```js
  class Car {
    constructor() {}
  }

  let car = new Car();

  console.log(Car.prototype.isPrototypeOf(Car));

  console.log(Car.prototype.isPrototypeOf(car));
  ```

  - ans: false, true
  - exp: Car.prototype is the prototype of instance `car`, not class `Car`

### More Practice Questions (OOP)

- **Question 1:** Guess the **Output** and Explain Why?

  ```js
  function carObject(name, model) {
    let car = Object.create(constructorObject);

    car.name = name;

    car.model = model;

    this.engineMethod = function () {
      console.log("This is engine method of car");
    };

    return car;
  }

  let constructorObject = {
    speak: function () {
      return "This is my car";
    },
  };

  let myCar = carObject("Audi", 2023);

  console.log(myCar.__proto__);
  ```

  - ans:

- **Question 2:** You have given an example of **OOP** Code. Your task is to explain the use of `super` keyword in `Dog` class.

  And you have to **change** the code again after removing `super` keyword from the `Dog` class (You have remove those lines/statements which are not **necessary** after **removing** super **keyword**)

  ```js
  class Animals {
    constructor(name, age) {
      this.name = name;

      this.age = age;
    }

    sing() {
      return `${this.name} can sing`;
    }

    dance() {
      return `${this.name} can dance`;
    }
  }

  class Dogs extends Animals {
    constructor(name, age, whiskerColor) {
      super(name, age);

      this.whiskerColor = whiskerColor;
    }

    whiskers() {
      return `I have ${this.whiskerColor} whiskers`;
    }
  }

  let newDog = new Dogs("Clara", 33, "indigo");

  console.log(newDog);
  ```

  - ans: we use the super keyword to **call the constructor of the parent class (Animals)** from the Dogs class's constructor
  - if we remove super key word, the code will change to :

    ```js
    class Dogs extends Animals {
      constructor(name, age, whiskerColor) {
        this.name = name;
        this.age = age;
        this.whiskerColor = whiskerColor;
      }

      whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
      }
    }
    ```

- **Question 3:** What are the advantages of using **getter** and **setter** method in OOP?

  - ans:

    1. getter and setter methods are used to control access to an object's properties
    2. security, improved code structure, flexibility

    ```js
    class Person {
      constructor(name, age) {
        this._name = name;
        this._age = age;
      }

      // Getter method
      get name() {
        return this._name;
      }

      // Setter method
      set name(value) {
        this._name = value;
      }
    }
    ```

- **Question 4:** You have OOP code below. And there is **single** error in this code? Your task is to **remove that error**.

  **Important Note**: To solve this error You need to know about **method chaining** concept.

  ```js
  class Car {
    constructor(id) {
      this.id = id;
    }

    setMake(make) {
      this.make = make;
    }

    setModel(model) {
      this.model = model;
    }

    setFuelType(fuelType) {
      this.fuelType = fuelType;
    }

    getCarInfo() {
      return {
        id: this.id,

        make: this.make,

        model: this.model,

        fuelType: this.fuelType,
      };
    }
  }

  console.log(
    new Car(233)

      .setMake("Honda")

      .setModel("Civic")

      .setFuelType("Petrol")

      .getCarInfo()
  );
  ```

  - ans: error in this code is that the methods setMake, setModel, and setFuelType **are not returning _this_** (the current instance of the Car object), which is necessary for method chaining.
  - By adding the return this statement at the end of each method, we're allowing method chaining to work correctly. Now, when we call setMake, setModel, or setFuelType on the Car object, it will return the current instance, allowing us to chain multiple method calls together.

    ```js
    class Car {
      constructor(id) {
        this.id = id;
      }

      setMake(make) {
        this.make = make;
        return this; // <--- Return the current instance
      }

      setModel(model) {
        this.model = model;
        return this; // <--- Return the current instance
      }

      setFuelType(fuelType) {
        this.fuelType = fuelType;
        return this; // <--- Return the current instance
      }

      getCarInfo() {
        return {
          id: this.id,
          make: this.make,
          model: this.model,
          fuelType: this.fuelType,
        };
      }
    }
    ```

- **Question 5:** What is difference between ** proto** and prototype property of Object? Try with **Example**?

  - ans:

- **Question 6:** create class of `Person` with properties `name`, `age`.

  Your main task is to add `static` method in that class of your choice ( e.g brainMethod)

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;

      this.age = age;
    }
  }

  let me = new Person("abhishek", 25);

  console.log(me);
  ```

  - ans:

    ```js
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      static brainMethod() {
        console.log("This is a brain method");
      }
    }

    let me = new Person("Abhishek", 25);

    console.log(me);
    // Output: Person { name: "Abhishek", age: 25 }

    Person.brainMethod();
    // Output: This is a brain method
    ```

## Chapter 11( Async Js )

### Assignments

- **11.1:** Guess the **Output** And Explain Why?

  _[From video lecture 11.7]_

  **Html Code**

  ```html

  <!DOCTYPE  html>

  <html  lang="en">

  <head>

  <meta  charset="UTF-8">

  <meta  http-equiv="X-UA-Compatible"  content="IE=edge">

  <meta  name="viewport"  content="width=device-width, initial-scale=1.0">

  <title>JavaScript-CoderDost</title>

  <style>

  </head>

  <body>

  <div id="content">



  <h2 id = "heading" ></h2>



  </div>

  <script defer src = "./script.js"></script>

  </script>

  </body>

  </html>

  ```

  **JS Code**

  ```js
  async function greeting() {
    let myPromise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve("I love Programming !!");
      }, 2000);
    });

    document.getElementById("heading").innerHTML = await myPromise;
  }

  greeting();
  ```

  - ans: output will be in html <h2 id = "heading" > I love Programming !! </h2> after 2 seconds

- **11.2:** Find the **Logical Error** in below code. And How can we solve them with **callback** function approach?

  _[From video lecture 11.4]_

  ```js
  const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

  function getMovies() {
    setTimeout(() => {
      movies.forEach((movie, index) => {
        console.log(movie.title);
      });
    }, 1000);
  }

  function createMovies(movie) {
    setTimeout(() => {
      movies.push(movie);
    }, 2000);
  }

  getMovies();

  createMovies({ title: `Movie 3` });
  ```

  - ans:

    ```js
    const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

    function getMovies(callback) {
      setTimeout(() => {
        movies.forEach((movie, index) => {
          console.log(movie.title);
        });
      }, 1000);
    }

    function createMovies(movie, callback) {
      setTimeout(() => {
        movies.push(movie);
        callback();
      }, 2000);
    }

    createMovies({ title: `Movie 3` }, getMovies);
    ```

- **11.3:** What are the **three** possible State of any promise?

  - ans:pending, fullfilled, rejected

- **11.4:** Solve **Question 2** again But this time with the help of **promise**

  - ans:

    ```js
    const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

    function getMovies(callback) {
      return new Promise((resolve) => {
        setTimeout(() => {
          movies.forEach((movie, index) => {
            console.log(movie.title);
          });
          resolve(); // resolve the promise with the array of movies
        }, 1000);
      });
    }

    function createMovies(movie, callback) {
      return new Promise((resolve) => {
        setTimeout(() => {
          movies.push(movie);
          console.log("pushed");
          resolve(movies); // resolve it immediately after pushing. dont wait for 2000ms time delay
        }, 2000);
      });
    }

    createMovies({ title: `Movie 3` }).then(() => getMovies()); //then has to be always an arrow function so that the next function gets called only after the first function is resolved
    ```

- **11.5:** Now re-factor **Question 2** with the help of **async-await** keyword?

  - ans:

    ```js
    const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

    function getMovies(callback) {
      return new Promise((resolve) => {
        setTimeout(() => {
          movies.forEach((movie, index) => {
            console.log(movie.title);
          });
          resolve(); // resolve the promise with the array of movies
        }, 1000);
      });
    }

    function createMovies(movie, callback) {
      return new Promise((resolve) => {
        setTimeout(() => {
          movies.push(movie);
          console.log("pushed");
          resolve(movies); // resolve it immediately after pushing. dont wait for 2000ms time delay
        }, 2000);
      });
    }

    //for async await create a thrid async function
    async function Combine() {
      await createMovies({ title: `Movie 3` });
      await getMovies();
      return;
    }

    Combine();
    ```

- **11.6:** Status code starting with **404** represent which type of message/error?

  _[From video lecture 11.3]_

  - ans: Page not Found

## Chapter 12 (ES6)

### Assignments

- **12.1:** Guess the **Output** and Explain Why?

_[From video lecture 12.1]_

    ```js
    let arr = [3, 4, 5, 7, 98, 0];

    let [a, b, , c] = arr;

    console.log(a, b, c);
    ```
    - ans: 3, 4, 7

- **12.2:** Guess the **Output** And Explain Why?

  _[From video lecture 12.1]_

  ```js
  let arr = [1, 3, [2, 55], [9, 8, 7]];

  let [a, , [b, c], d] = arr;

  console.log(a, b, c, d);
  ```

  - ans: 1, 2, 55, [9, 8, 7]

- **12.3:** Guess the **Output** and explain Why?

  _[From video lecture 12.2]_

  ```js
  let obj = {
    name: "John",

    age: 25,

    weight: 70,
  };

  let { name: objName, age } = obj;

  console.log(name, age);
  ```

  - ans: will return undefined, 25.
  - to access the destructured name key from the obj, we must use its new variable 'objName'

    ```js
    let { name: objName, age } = obj;

    console.log(objName, age);
    ```

- **12.4:** You have given an array of **nums**.Create **shallow** copy of that array and store them in another **variable**

  _[From video lecture 12.3]_

  ```js
  let nums = [5, 7, 4, 9, 2, 8];

  let newNums = "store Shallow copy of nums inside newNums variable";
  ```

  - ans: let arr = nums // shallow copy (means same obj/arr, but diff variable)

- **12.5:** You have given an array as below . Create a function which accept **multiple** elements as an argument and return last **4** element of the array

  _[From video lecture 12.4]_

  ```js

  Example:

  let  nums  = [1,2,3,4,5,6,7,8];

  input data: 1,2,3,4,5,6,7,8

  output data: 5,6,7,8

  ```

  - ans: `console.log(nums.slice(nums.length-4))`

- **12.6:** Guess the **Output** And Explain Why?

  _[From video lecture 12.6]_

  ```js
  let nums = 0;

  let result = nums ?? 50;

  console.log(result);
  ```

  - ans: 0
  - exp: Nullish Coalescing Operator" or "Optional Chaining".
  - It **returns** the first operand **if it is not null or undefined**; otherwise, it returns the second operand.

- **12.7:** You have given an object as below. You have to check wheather **physics** is the subject of that student or not, if true find the **score** of **physics** subject using **optional chaining**

  ```js
  let student = {
    Math: {
      score: 75,
    },

    physics: {
      score: 85,
    },
  };
  ```

  - ans:
    ```js
    console.log(student.physics?.score); // Using optional chaining
    ```

- **12.8:** Guess the **Output** And Explain Why?

  _[From video lecture 12.7]_

  ```js
  let nums = [2, 3, 4, 5, 6];

  for (let key of nums) {
    console.log(key);
  }
  ```

  - ans: 0, 1, 2, 3, 4

### More Practice Questions

- **Question 1:** Guess the **Output** and Explain Why?

  ```js
  let arr = [1, 2, 3, 4, 5];

  let arr1 = [...arr];

  arr1[2] = 10;

  console.log(arr, arr1);
  ```

  - ans: [1, 2, 3, 4,5 ] and [1, 2, 10, 4, 5]

- **Question 2:** You have given a list of variable names written in underscore. You have to write a program to convert them into camel casing format

  ```js

  List  of  variable  names



  Input

  user_name

  last_name

  date_of_birth

  user_password



  Output

  userName

  lastName

  dateOfBirth

  userPassword

  ```

  - ans:

    ```js
    function camelCase(input) {
      input = input.split("");
      input.forEach((item, index) => {
        if (input[index] == "_") {
          input[index] = "";
          input[index + 1] = input[index + 1].toUpperCase();
        }
      });

      return input.join("");
    }

    console.log(camelCase("user_name"));
    ```

- **Question 3:** Guess the **Output** and Explain why?

  ```js
  function fun(a, b, ...c) {
    console.log(`${a}  ${b}`);

    console.log(c);

    console.log(c[0]);

    console.log(c.length);

    console.log(c.indexOf("google"));
  }

  fun("apple", "sumsung", "amazon", "google", "facebook");
  ```

  - ans: using rest function
    ```js
      //output
      apple  sumsung
      [ 'amazon', 'google', 'facebook' ]
      amazon
      3
      1
    ```

- **Question 4:** Guess the **Output** and Explain Why?

    ```js
    const fruits = { apple: 8, orange: 7, pear: 5 };

    const entries = Object.entries(fruits);

    for (const [fruit, count] of entries) {
      console.log(`There are ${count}  ${fruit}s`);
    }
    ```
    - ans: 
        ```js
        There are 8  apples
        There are 7  oranges
        There are 5  pears
        ```

- **Question 5:** Write a program in which you have to set **Default** value in case of false input value using **Logical Assignment** Operator?
    - ans:` let result = variable || 20 `

- **Question 6:** Guess the **Output** and Explain Why?

    ```js
    let arr = new Set([1, 2, 3, 1, 2, 1, 3, 4, 6, 7, 5]);

    let length = arr.size;

    console.log(arr, length);
    ```
    - ans: Set(7) { 1, 2, 3, 4, 6, 7, 5 }, 7

- **Question 7:** You have given **Set** below. Your task is to convert that **Set** into an **array**?

    ```js
    input;

    let set = new Set([1, 2, 3, 2, 1, 3, 4, 12, 2]);

    output;

    let arr = "Do something here to convert....";
    ```
    - ans: Array.from(set)

- **Question 8:** Guess the **Output** and Explain Why?

    **Note** : **Change** values of variable to examine the result.

    ```js
    let number = 40;

    let age = 18;

    let result = number > 50 ? (age > 19 ? "pass" : "ageIssue") : "numberIssue";

    console.log(result);
    ```
    - ans: "numberIssue"

## Chapter 13 (Modern Tooling)

### Assignments

- **13.1:** You have given scenario. You are in **script.js** And in same directory there is another file **products.js**. In **products.js** there are two methods called **createProduct** and **deleteProduct**

  > - write an **import** and **export** statement properly in order to import these two methods from **products.js** file into the **script.js**
  - ans: 
      ```js
      //in product.js
      export { createProduct, deleteProduct };

      //in script.js
      import { createProduct, deleteProduct } from './products.js';
      
      ```

- **Question 2** Now **export** only one method **createProduct** using **default** export statement?
    - ans: default export createProduct

- **Question 3:** In **import** statement how can we **customize**/**change** the name of **function** we are importing?

    Example : function is defined as `Addition`. We want to import as 'Add'

    How can can we do this?
    - ans: import { Addition as Add } from './math.js';
