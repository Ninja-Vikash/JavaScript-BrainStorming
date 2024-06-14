##### JavaScript Brainstorming 📚

# Getting Started
<img src="logo.png" height="100" align="left"/>

**Javascript** is one of the most important assets for **Web Developers.**<br/>
But this is not very complicated language to understand 😮<br>
To simplify the understanding of **JavaScript**<br/>
This repo will help and boost your knowledge in **JavaScript**💡

### Content table
- Core Concepts of JavaScript ⚡
    - What is JavaScript ?
    - Features
    - History
    - Core of Programming
- Jewels of JavaScript 💎
    - Array
    - Conditionals
    - Class
    - DOM (Data Object Model)
    - Events
    - Function
    - Loop
    - Math
    - Objects
    - Object Date
- Exercises 🏋️‍♂️
-  [Contribute](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#contributions) 🤝<br/>
Explore the contribution section for more information and guidance<br/> 
How to contribute? 👆

## Core Concepts of JavaScript 🤓
### What is JavaScript ?
- JavaScript is a **high-level**, **versatile programming language** primarily used for creating interactive and dynamic content on websites.
- JavaScript allows developers to implement complex features such as **real-time** updates, **interactive** forms, **animations**, and **multimedia integration**.
- JavaScript is an essential part of **web development**, working alongside HTML and CSS to enhance user experiences.
- It is supported by all modern web browsers and can be used on both the **client side** (in the browser) and the **server side** (using environments like Node.js).

### Features of JavaScript

- Interpreted Language
- Dynamic Typed
- Object Oriented
- DOM Manipulation<br/>
    Are the key-features of JavaScript

### Where to write JavaScript ?
1. Directly in your **browser's console**.
2. Inside a `HTML` file using `<script>` tag
    ```html
    <script>
        console.log("Hello World!")
    </script>
    ```
3. Using a external JavaScript file
    ```js
    // index.js
    console.log("Hello World!")
    ```
    Or,
4. We can run our javascript file using a extension `code runner` in vs-code<br/>
    Suppose we have a JavaScript file named as `index.js`<br/>
    Go to the `terminal` window in vs-code and run the command
    ```bash
    node index.js
    ```
> [!IMPORTANT]\
> The above node command will only work, If you have intalled node.js in your machine.

### History of JavaScript ⌛

#### Creation
- In 1995, **Netscape Communications Corporation** wanted a lightweight scripting language for its **Netscape Navigator web browser**.
- *Brendan Eich*, a programmer at Netscape, **created JavaScript in just 10 days**. Initially called "`Mocha`," it was later renamed "`LiveScript`" and finally "`JavaScript`" to capitalize on the popularity of **Java**.

#### Early Development
- JavaScript was released with **Netscape Navigator 2.0** in 1995.
- Microsoft responded by creating a similar language called JScript, which was included in **Internet Explorer 3.0** in 1996.

#### Standardization
- To ensure compatibility across different browsers, JavaScript was standardized by the **European Computer Manufacturers Association (ECMA)**.
- The first standardized version, **ECMAScript 1** (ES1), was released in 1997.

#### Growth and Evolution
- Subsequent versions introduced more features and improvements. Notably, ECMAScript 3 (ES3) in 1999 added regular expressions, better string handling, and new control statements.
- ECMAScript 4 (ES4) was ambitious but never fully realized due to disagreements within the community.

#### Modern JavaScript
- **ECMAScript 5** (ES5) was released in 2009, bringing significant features like `strict mode`, `JSON support`, and more robust object properties.
- **ECMAScript 6** (ES6) or ECMAScript 2015 was a major update in 2015, introducing `classes`, `modules`, `arrow functions`, `let` and `const` keywords, and `promises`.
- Since ES6, the language has received yearly updates, with ECMAScript 2016 (ES7), ECMAScript 2017 (ES8), and so on, each adding new features and improvements.

#### JavaScript Today
- JavaScript is now a powerful, full-fledged programming language used for both **client-side** and **server-side** development.
- It is the backbone of modern web development, supported by vast ecosystems, including libraries like **React**, **Angular**, and **Vue**, and runtime environments like **Node.js**.

***
### Core of Programming 🧠

**Print**<br/>
In JavaScript we use `console.log()` to print
```js
console.log("Hello World!")
```

**Comments**<br/>
Comments are used to inhance readability or prevent execution of any code block.
```js
// Single line comment

/*
  This is
  multi-line
  comment
*/
```

**Variables**<br/>
Variables are like containers to store data.<br/>
In JavaScript we can create a variable using `var`, `let` or `const` keyword.
> [!IMPORTANT]\
> In modern JavaScript\
> `let` & `const` keywords are used for most of the coding.

**Declaration vs Assigning**
```js
let myName;         // Variable declaration part

myName = "Vikash";  // Variable assigning part
```

**Data Types**<br/>
At a very high level, there are two types of data types in JavaScript
1. Primitive Data Types<br/>
    `undefined`, `null`, `numbers`, `string`, `boolean`, `symbol`
2. Reference Data Types<br/>
    `Arrays` and `Object`


`var` vs `let` & `const`
```js
// Declaration using var keyword
var myName = "Vikash"

console.log(myname)         // Vikash
```
> [!WARNING]\
> `var` keyword supports `Hoisting` method to declare a variable.\
> `Hoisting` breaks the variable statement into two parts as
> ```js
> var myName;
> myName = "Vikash";
> ```
> And moves the declaration part on the top of the file\
> Initially the variable stored as `undefined` value during the memory creation phase.\
> If we try to access the variable before declaring it will print the special keyword `undefined`.
> ```js
> console.log(myName);          // Undefined
> var myName = "Vikash";
> ```

In modern JavaScript, Most of the time we will use `let` and `const` keyword to declare a variable.
```js
// Declaration using let keyword
let myName = "Vikash";

console.log(myName);            // Vikash
```
> [!NOTE]\
> When we create a variable using `let` keyword, We have access to re-assign the value.
> ```js
> let myName = "Vikash";
> 
> console.log(myName);          // Vikash 
>
> myName = "Ninja Vikash";
>
> console.log(myName);          // Ninja Vikash 
> ```
```js
// Declaration using const keyword
const myName = "Vikash";

console.log(myName);            // Vikash
```
> [!WARNING]\
> We cannot re-assign a variable declared using `const` keyword
>
> `let` and `const` don't support `Hoisting` method.\
> If we try to access a variable declared using `let` and `const` keyword.
> ```js
> console.log(myName);
>
> const myName = "Vikash";
> ```
> It will through an error.
> ```
> ReferenceError: Cannot access 'myName' before initialization
> ```

#### Primitive Data Types
Since, **JavaScript is not a typed Language**.<br/>
Therefore, We don't need to define data type of any variable `explicitly`<br/>
JavaScript is smart enough to identify the variable type<br/>
For checking the data type of any variable we use `typeof()` method.<br/>

```js
let num1 = 123;
let num2 = 99.56;

console.log(typeof(num1));          // number

let str1 = "Vikash";
let str2 = "Kumar";

console.log(typeof(str1));          // string

let isCodingFun = true;

console.log(typeof(isCodingFun))    // boolean

let undValue;

console.log(typeof(undValue));      // undefined

let nulValue = null;

console.log(typeof(nulValue));      // object
```

#### Operators
Operators are used to perform some task on variables.<br/>
- **Arithmetic Operator**
    - Addition `(+)`
    - Subtraction `(-)`
    - Multiplication `(*)`
    - Division `(/)`
    - Modulas `(%)`
- **Assignment Operator**
    - `a = 2`
    - `a += 2`
    - `a -= 2`
    - `a *= 2`
    - `a /= 2`
    - `a %= 2`
- **Comparison Operator**
    - Greater than `x > y`
    - Less than `x < y`
    - Greater than or Equal to `x >= y`
    - Less than or Equal to `x <= y`
    - Equal-equal to `x == y`
    - Not equal to `x != y`
- **Logical Operator**
    - AND `&&`
    - OR `||`
    - NOT `!`

## Jewels of JavaScript 💎
- Array
    - [What is an Array?](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#array)
    - [Exercise](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#exercise-array)
- Conditionals
    - [If-else and Switch](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#conditionals)
    - [Exercise](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#exercise-conditionals)
- Class
    - What is class?
- DOM (Data Object Model)
    - What is DOM?
    - DOM Operations
- Events
    - What is an Event in JavaScript?
    - Common Events
    - Event Handling
- Function
    - [What is a Function?](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#function)
    - [Exercise](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#exercise-function)
- Loop
    - [What is Loop?](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#loop)
    - [Exercise](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#exercise-loop)
- Math
    - Math Object in JavaScript
    - List of Math method
- Object
    - [What is an Object?](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#object)
    - [Exercise](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#exercise-object)
- Object Date


## Exercises 🏋️‍♂️
### Exercise Array
- [Generate table using array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#generate-table-using-array)
- [Get even or odd numbers from the array list](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#get-even-or-odd-numbers-from-the-array-list)
- [Create counting table up to 100 using the array list of 10 elements](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#create-counting-table-upto-100-using-the-array-list-of-10-elements)
- [Insertion in Array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#insertion-in-array)
- [Deletation in Array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#deletation-in-array)
- [Basic methods in Array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#basic-methods-in-array)
- [Replace any particular value from the array list](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#replace-any-particular-value-from-the-array-list)
- [Array destructuring *](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#array-destructuring-)
- [Case changing of a string elements in an array list](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#case-changing-of-a-string-elements-in-a-array-list)
- [Change the CASE of elements in a dynamic array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#case-changing-of-elements-in-a-dynamic-array)
- [Get candidates who can apply for government job](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#get-candidates-who-can-apply-for-government-job)
- [Printing each individual element using for-each loop](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#printing-each-individual-element-using-for-each-loop)
- [Reverse Array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#reverse-array)

### Exercise Conditionals
- [Eligiblity check for voting](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#eligiblity-check-for-voting)
- [Advanced eligibility check](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#advanced-eligibility-check)
- [Workout schedule](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#workout-schedule)
- [Get exponential values of any single or a range](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#get-exponential-values)

### Exercise Function
- [A normal function to print welcome note](https://github.com/Ninja-Vikash/JavaScript-Collection?tab=readme-ov-file#a-normal-function-to-print-welcome-note)
- [A arrow function to print welcome note](https://github.com/Ninja-Vikash/JavaScript-Collection?tab=readme-ov-file#a-arrow-function-to-print-welcome-note)
- [Calculate total marks and grade](https://github.com/Ninja-Vikash/JavaScript-Collection?tab=readme-ov-file#calculate-total-marks-and-grade)
- [For getting square of one and more values](https://github.com/Ninja-Vikash/JavaScript-Collection?tab=readme-ov-file#for-getting-square-of-one-and-more-values)
- [To understand implicit return in arrow function](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#to-understand-implicit-return-in-arrow-function)
- [A high-order function to get square, cube & quad values of any number](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#to-get-power-value-from-passed-argument)

### Exercise Loop
- [Construct a table for any number using loop](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#construct-a-table-for-any-number-using-loop)
- [For getting a square table](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#for-getting-a-square-table)
- [For getting exponential values of any range or a single value](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#for-getting-exponential-values-of-any-range-or-a-single-value)
- [Form an Infinite loop](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#form-an-infinite-loop)
- [Usage of for-in loop](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#usage-of-for-in-loop)
- [Usaage of for-of loop and for-each loop](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#usaage-of-for-of-loop-and-for-each-loop)
- [Break and continue statement](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#break-and-continue-statement)

### Exercise Object
- [Create an object](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#create-an-object)
- [Add new values and Update values in the existing object at once](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#add-new-values-and-update-values-in-the-existing-object-at-once)
- [Create an object for student marks entry and get total marks, grade](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#create-an-object-for-student-marks-entry-and-get-total-marks-grade)
- [Course Constructor & Data Viewer](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#course-constructor--data-viewer)

<br/>

## Array
### What is an array?
An Array is a **collection of data** in a list.<br/>
Array can hold elements of any type, including `numbers`, `strings`, `objects`, `functions`, and even other `arrays`
```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```
Each value inside of an array is known as an `element` and each element has its own `index`
```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array.indexOf(2)    // OUTPUT : 1
```
In the array index value starts from `0(zero)`<br/>
JavaScript arrays come with a variety of built-in methods for common tasks such as *adding*, *removing*, or *iterating* over elements.<br/>
**Reference**: [w3schools](https://www.w3schools.com/js/js_array_methods.asp)
| [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
| [geeksforgeek](https://www.geeksforgeeks.org/javascript-array-methods/)

### Exercise Array
#### Generate table using array.
```js
// ------> Code for generating table
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Table(n){
    let table = arr.map((e)=> e*n)
    console.log(`Table of ${n}`);

    table.forEach((element) => {
        console.log(element);
    });
}

// Pass value for getting the table
Table(132)
```

#### Get even or odd numbers from the array list
```js
// ------> Checking using multiple functions
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Even = () => {
  let even = arr.filter((e) => e % 2 == 0);
  console.log(even);
};

Even()

const Odd = () => {
  let odd = arr.filter((e) => e % 2 == 1);
  console.log(odd);
};

Odd()
```
```js
// ------> Checking using a single function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function get(numType){

    let result = arr.filter((e) => {
        if (numType == "even") {
            return e % 2 == 0
        }
        else
        if (numType == "odd") {
            return e % 2 == 1
        }
    });

    if (numType == "even" || numType =="odd"){
        console.log(result);
    }

    else {
        console.log("Please enter a valid type!")
    }
}

get("even")
// get("odd")
// get("red")
```

#### Create counting table upto 100 using the array list of 10 elements
```js
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr1.map((e) => e + 10);
let arr3 = arr2.map((e) => e + 10);
let arr4 = arr3.map((e) => e + 10);
let arr5 = arr4.map((e) => e + 10);
let arr6 = arr5.map((e) => e + 10);
let arr7 = arr6.map((e) => e + 10);
let arr8 = arr7.map((e) => e + 10);
let arr9 = arr8.map((e) => e + 10);
let arr10 = arr9.map((e) => e + 10);

let finalArr = arr1.concat(...arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10);
console.log(finalArr)

/**
 *  NOTE : For concatenation, I used the (...)spread operator
 */
```
#### Insertion in Array
```js
// ------> Inserting in an empty array

let arr = []
function insert (...val){
    arr.push(...val)
}

insert("Hello", "World", "!")
console.log(arr)
```
```js
// ------> Inserting in an existing array using PUSH
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

const add = (...value)=>{
    studentName.push(...value)
}

add("Sanjeev", "Kumar", "Suraj")

console.log(studentName)

// ------> Using UNSHIFT
const addBegin = (...value)=>{
    studentName.unshift(...value)
}

addBegin("Aditi", "Nandini", "Sneha")

console.log(studentName)
```
#### Deletation in Array
```js
// ------> Deletation using POP
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

function remove (n){
    for (let i = 0; i < n; i++) {
        studentName.pop()
    }
}

remove(4)

console.log(studentName)
```
```js
// ------> Advanced code
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

function remove (n){
    if (n <= studentName.length && n >= 0) {
        for (let i = 0; i < n; i++) {
            studentName.pop()
        }
        console.log(studentName)
    }
    else {
        console.log("Please enter lesser value than the array length")
    }
}

remove(6)
```
```js
// ------> Deletation using SHIFT
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

function removeBegin (n){
    for (let i = 0; i < n; i++) {   
        studentName.shift()
    }
}

removeBegin(1)
console.log(studentName)
```
```js
// ------> Advanced code
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

function removeBegin (n){
    if (n <= studentName.length) {
        for (let i = 0; i < n; i++) {
            studentName.shift()
        }
        console.log(studentName)
    }
    else {
        console.log("Please enter lesser value than the array length")
    }
}

removeBegin(5)
```
```js
// ------> SPLICE METHOD
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

studentName.splice(2,5)

console.log(studentName)
```
#### Basic methods in Array 
```js
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

let getIndex = studentName.indexOf("Sanjay")
console.log(getIndex)

let getValue = studentName[1]
console.log(getValue)

let sliced = studentName.slice(2, 3)
console.log(sliced)
```

#### Replace any particular value from the array list
```js
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

studentName[2] = "King"
studentName[0] = "VIAKSH"
console.log(studentName)
```

#### Array destructuring *
```js
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];
let secondList = ["Ankush", "Sid"]

// -------> Merging two arrays
studentName = [...studentName, ...secondList]
// studentName = studentName.concat(secondList)
console.log(studentName)

// -------> Getting value
let [a, b, ...rest] = studentName
console.log(a)
console.log(b)
console.log(rest)

let [x, y, , ,...other] = studentName
console.log(x)
console.log(y)
console.log(other)

/**
 *  NOTE : A blank comma separation will skip value in Destructuring
 */
```

#### Case changing of a string elements in a array list
```js
// -------> Using multiple functions
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

function ToUpper (){
    let upper = studentName.map(e=> e.toUpperCase())
    console.log(upper)
}

ToUpper()

function ToLower (){
    let lower = studentName.map(e=> e.toLowerCase())
    console.log(lower)
} 

ToLower()

/**
 *  NOTE : We can't change the existing Array's string case
 *  but we can form a new array using the old array.
 */
```
```js
// -------> Using a single function
let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

function toCase(change){
    if(change == "UPPER"){
        let newlist = studentName.map(e=>e.toUpperCase())
        console.log(newlist)
    }
    else
    if(change == "LOWER"){
        let newlist = studentName.map(e=> e.toLowerCase())
        console.log(newlist)
    }
    else {
        console.log("Please enter a valid operation.")
    }
}

toCase("UPPER")
// toCase("LOWER")
// toCase("HYPER")
```
#### Case changing of elements in a dynamic array
```js
let studentName = [];

function addStudent(...names) {
  studentName.push(...names);
}

function toCase(change) {
  if (change == "UPPER") {
    let newlist = studentName.map((e) => e.toUpperCase());
    console.log(newlist);
  } else if (change == "LOWER") {
    let newlist = studentName.map((e) => e.toLowerCase());
    console.log(newlist);
  } else {
    console.log("Please enter a valid operation.");
  }
}

// ------> Insert names here
addStudent("vikash", "rajiv", "sanjay", "hari")

// ------> Get your output value
toCase("UPPER");
// toCase("LOWER")
// toCase("HYPER")
```

#### Get candidates who can apply for government job
```js
// ------> Candidate data
let candidate = [
    {
        name: "Vikash",
        age: 20
    },
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 30
    },
    {
        name: "Charlie",
        age: 35
    },
    {
        name: "David",
        age: 40
    },
    {
        name: "Emily",
        age: 22
    },
    {
        name: "Frank",
        age: 28
    },
    {
        name: "Grace",
        age: 32
    }
];

function candidateSelector (min, max){
    candidate.filter(e=>{
        if(e.age <= max && e.age >= min){
            console.log(`Name = ${e.name} | Age = ${e.age}`)
        }
    })
}

// Pass age range in the function
candidateSelector(19, 33)
```
#### Printing each individual element using for-each loop
```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getList(){
    nums.forEach((element,index)=>{
        console.log(`Value at index ${index} is ${element}`)
    })
}

getList()
```
#### Reverse Array
```js
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ------> By using reverse method
function reverse (){
    let newNum = num.reverse()
    console.log(newNum)
}

reverse()

// ------> By using for loop
function reverse (){
    let newNum = []
    
    for (let i = num.length - 1; i >= 0; i--){
            newNum.push(num[i])
        }
    console.log(newNum)
}

reverse()
```

<br/>

## Class
### What is class ?
In JavaScript, classes are a way to create **reusable blueprints** for objects.<br/>
Classes were introduced in ECMAScript 6 (ES6) and provide a more structured and syntactically sugar-coated way to work with `prototypes` and `inheritance`.

- Classes: Use the `class` keyword to define a class
- Constructor: The `constructor` method is used to initialize object properties.
    ```js
    class Person {
    // Constructor method to initialize the object
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    // Creating an instance of the Person class
    let person1 = new Person('Vikash', 20);
    console.log(person1.describe()); // Vikas is 20 years old.
    ```
- Instance Methods: Methods that operate on instances of the class.
    ```js
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        describe() {
            return `${this.name} is ${this.age} years old.`;
        }
    }

    let person1 = new Person('Ninja Vikash', 20);
    console.log(person1.describe()); // Ninja Vikash is 20 years old.
    ```
- Static Methods: Methods that belong to the class itself.
    ```js
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        describe() {
            return `${this.name} is ${this.age} years old.`;
        }

        // Static method
        static species() {
            return 'Homo sapiens';
        }
    }

    console.log(Person.species()); // Homo sapiens
    ```
- Inheritance: Use the `extends` keyword to create a subclass and `super` to call the parent class's constructor.
    ```js
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        describe() {
            return `${this.name} is ${this.age} years old.`;
        }
    }

    class Student extends Person {
        constructor(name, age, role) {
            super(name, age); // Call the constructor of the parent class
            this.role = role;
        }

        describe() {
            return `${this.name} is ${this.age} years old and a ${this.role}.`;
        }
    }

    let student1 = new Student('Vikash', 20, 'Coder');
    console.log(student1.describe()); // Vikash is 20 years old and a Coder.
    ```

> [!IMPORTANT]\
> The only important method in class is `constructor` method, In which we create instances.

**Reference** : [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) | 
[w3schools](https://www.w3schools.com/js/js_classes.asp)

<br/>

## Conditionals
### What is a conditional statement ?
A conditional statement in programming is a feature that allows you to perform different actions based on whether a certain condition is `true` or `false`<br/>
In JavaScript, conditional statements help control the flow of the code by executing specific blocks of code only if certain conditions are met.

1. if-else statement
```js
// ------> Single if statement

if (condition){
    // Statement
}

// ------> if-else statement

if (condition){
    // Statement
}
else{
    // Statement
}

// ------> if-else ladder

if (condition){
    // Statement
}
else
if(condition){
    // Statement
}
else{
    // Statement
}
```
2. Switch case statement
```js
switch (key) {
    case value:
        // Statement
        break;

    default:
        // Default Statement
        break;
}
```
**Reference** : [mdn](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) | 
[w3schools](https://www.w3schools.com/js/js_if_else.asp)

### Exercise Conditionals
#### Eligiblity check for voting
```js
// Single if statement
function EligiblityCheck(name,age){
    if (age >=18) {
        console.log(`${name}, You are eligible for voting!`)
    }
}

EligiblityCheck("Akash",30)
```
```js
// if-else ladder statement
function EligiblityCheck(name,age){
    if (age < 18) {
        console.log(`${name}, You are not eligible for voting!`)
    }
    if(age >=18 && age <=65){
        console.log(`${name}, You are eligible for voting!`);
    }
    else 
    if(age > 65){
        console.log(`${name}, You are eligible!`)
    }
}

EligiblityCheck("Akash",64)
```
#### Advanced eligibility check
```js
// Strictly checks the condition
function EligiblityCheck(...arg){
    let voterName = arg[0]
    let age = arg[1]

    if(arg.length == 1){
        console.log("Kindly pass your age as second argument");
    }
    else
    if(arg.length == 2){
        if(typeof(voterName)=="string"){

            if(age > 0){
                if (age < 18) {
                    console.log(`${voterName}, You are not eligible for voting!`);
                }
                else
                if(age >=18 && age <=65){
                    console.log(`${voterName}, You are eligible for voting!`);
                }
                else 
                if(age > 65){
                    console.log(`${voterName}, You are eligible!`);
                }
            }
            else{
                console.log("Please insert a valid age");
            }

        }
        else{
            console.log("Please pass your name as first argument");
        }
    }
    else
    if(arg.length > 2){
        console.log(`You have passed ${arg.length} arguments.`);
    }
}

// EligiblityCheck("Vikash")
EligiblityCheck("Vikash", 20)
// EligiblityCheck("Vikash", 20, 21)

/**
 *  EligiblityCheck(_NAME_,_AGE_)
 *  Pass your name as first argument and your age as second argument
 *  You can try by passing only one or more than arguments as well as by not passing name as first arguemnt
 */
```
#### Workout schedule
```js
function workout(day){
    let dayName = day.toUpperCase()
    
    switch (dayName) {
        case "SUN":
            console.log("LEG WORKOUT DAY")
            break;
        case "MON":
            console.log("LEG WORKOUT DAY")
            break;
        case "TUE":
            console.log("REST")
            break;
        case "WED":
            console.log("BICEP & BACK WORKOUT DAY")
            break;
        case "THU":
            console.log("BICEP & BACK WORKOUT DAY")
            break;
        case "FRI":
            console.log("CHEST WORKOUT DAY")
            break;
        case "SAT":
            console.log("CHEST WORKOUT DAY")
            break;
        default:
            console.log("PLEASE ENTER A VALID DAY.")
            break;
    }
}

workout("FRI")
workout("Thu")

/**
 *  NOTE : Enter a valid day name to get your workout schedule
 */
```

#### Get exponential values
```js
function power(...args) {
    let [expo, start, end] = args;

    if(args.length > 3){
        console.log("Pass only 3 or less arguments");
    }
    else{
        if (start != undefined && end != undefined) {
            for (let i = Math.min(start , end); i <= Math.max(start, end); i++) {
              console.log(`${i}^${expo}= ${Math.pow(i, expo)}`);
            }
        }
        else
        if(expo == undefined) {
            console.log("Pass atleast two arguments");
        }
        else
        if (start == undefined) {
            console.log("Pass Second Argument");
        }
        else {
            console.log(`${start}^${expo} = ${Math.pow(start, expo)}`);
        }
    }
  }
  
  power(2, 12, 1);

/**
 *  power(EXPONENT, START, END)
 *  You can get power value of any range or any order
 */
```

<br/>

## Function
### What is a Function?
A function in JavaScript is a block of code designed to perform a specific task.<br/>
It allows you to **encapsulate logic**, making your code more **reusable** and easier to understand.<br/>
Functions can take input through `parameters` and return a value or output.
```js
function addNumbers(a, b) {
  let result = a + b;
  return result;
}

// Call the function
let sum = addNumbers(3, 4);
console.log(sum); // Output: 7
```

**Reference** : [w3schools](https://www.w3schools.com/js/js_functions.asp) | 
[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) |
[geeksforgeeks](https://www.geeksforgeeks.org/functions-in-javascript/)

### Exercise Function
#### A normal function to print welcome note
```js
function Welcome(user){
    console.log(`Hello ${user}!`)
    console.log("Now, You are a part of JavaScript BrainStorming!")
    console.log("Keep Learning!")
}

Welcome("Ninja")
```
#### A arrow function to print welcome note
```js
const congrats = (candidate)=>{
    console.log("Congratulations! " + candidate + " for performing excellent in the test.")
}

const congratulation = (candidate)=>{
    console.log(`Congratulations! ${candidate} for performing excellent in the test.`)
}

congrats('ninja')
congratulation('vikash')
```
#### To understand implicit return in arrow function
```js
// ------> Sum of two numbers using normal function
function add (a, b){
    return a + b
}

let sum = add(23, 23)
console.log(sum)
```
```js
// ------> Sum of two numbers using arrow function with explicit return
let add = (a, b)=>{
    return (
        a + b
    )
}

let sum = add(23, 23)
console.log(sum)
```
```js
// ------> Sum of two numbers using arrow function with implicit return
let add = (a, b) => a + b

let sum = add(23, 23)
console.log(sum)
```
#### Calculate total marks and grade
```js
let marksData = []

function studentEntry(...marks){
    console.log("STUDENT REPORT")
    marksData.push(...marks)

    let [a, b, c, d, e] = marksData
    let marksToSum = [a, b, c, d, e]
    
    let total = marksToSum.reduce((a,b)=>a+b)
    console.log(`TOTAL MARKS : ${total}`)

    let grade = total/5
    if(grade <= 33){
        console.log(`GRADE MARKS : 'F'`)
    }
    else
    if (grade > 33 && grade <= 40) {
        console.log(`GRADE MARKS : 'C'`)
    }
    else
    if (grade > 40 && grade <= 48) {
        console.log(`GRADE MARKS : 'C+'`)
    }
    else
    if (grade > 48 && grade <= 54) {
        console.log(`GRADE MARKS : 'B'`)
    }
    else
    if (grade > 54 && grade <= 59) {
        console.log(`GRADE MARKS : 'B+'`)
    }
    else
    if (grade > 59 && grade <= 67) {
        console.log(`GRADE MARKS : 'A'`)
    }
    else
    if (grade > 67 && grade <= 84) {
        console.log(`GRADE MARKS : 'A+'`)
    }
    else
    if (grade > 85 && grade <= 89) {
        console.log(`GRADE MARKS : 'A++'`)
    }
    else
    if (grade > 89 && grade <= 100) {
        console.log(`GRADE MARKS : 'EX'`)
    }
}

studentEntry(67, 76, 63, 98, 69)
// studentEntry(88, 76, 66, 94, 73, 65)
// studentEntry(20, 20, 20, 20, 20)

/**
 *  NOTE : If you enter more than five values
 *  except initial five values all the other values will be neglected
 */
```
#### For getting square of one and more values
```js
function square(...value) {
  let values = [];
  values.push(...value);
  if (values.length == 0) {
    console.log("PLEASE ENTER AT LEAST ONE VALUE TO GET RESULT!");
  } else {
    values.forEach((element) => {
      console.log(`SQUARE OF ${element} is ${element ** 2}`);
    });
  }
}

square(4);
// square();
// square(2, 4, 5);

/**
 *  NOTE : Pass values in the function to get squares, If you don't pass
 *  any single value in the function. A message will appear on the console.
 */
```
#### To get power value from passed argument
```js
function power(num, expo){
    return expo(num)
}

function square(num){
    console.log(`SQUARE OF ${num} : ${num**2}`)
}

function cube(num){
    console.log(`CUBE OF ${num} : ${num**3}`)
}

function quad(num){
    console.log(`QUAD OF ${num} : ${num**4}`)
}

power(3, square)
```

<br/>

## Loop
### What is Loop?
A loop in JavaScript is a programming tool used to repeat a set of instructions until a certain condition is met. 

There are three main types of loops in JavaScript:
1. for loop
```js
for (initialization; condition; increment/decrement) {
  // Code block to be executed
}
```
2. while loop
```js
while (condition) {
  // Code block to be executed
}
```
3. do-while loop
```js
do {
  // Code block to be executed
} while (condition);
```
> [!IMPORTANT]\
> `do-while` loop executes once the code block then it checks the condition.

**Special loops**
- **forEach loop**<br/>
    forEach loop is a special loop, which is used to iterate each elements of an array
    ```js
    let arr = [1, 2, 3, 4, 5];

    arr.forEach(e => console.log(e));
    ```
- **for-of loop**<br/>
    for-of loop is used to iterate each elements of an array
    ```js
    let arr = [1, 2, 3, 4, 5];

    for (const iterator of arr) {
        console.log(iterator)
    }
    ```
- **for-in loop**<br/>
    for-in loop is used to iterate each value of an object
    ```js
    let obj = {
        name : "vikash",
        role : "coder",
        age : 20
    }

    for (const key in obj) {
        const element = obj[key];
        console.log(element, key)
    }
    ```

**Reference** : [w3schools](https://www.w3schools.com/js/js_loop_for.asp) |
[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) | 
[freecodecamp](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/)

### Exercise Loop
#### Construct a table for any number using loop
```js
// ------> Using for loop
function Table(value){
    for(let i = 1; i <= 10; i++ ){
        console.log(i*value)
    }
}

Table(19)

// ------> Alternate
const Table = (val)=> {
    console.log(`TABLE OF ${val}`)
    for(let i = val; i <= val*10; i+=val ){
        console.log(i)
    }
}

Table(5)
// Table(11)
// Table(99)
// Table(202)
```
```js
// ------> Using while loop
const Table = (num)=>{
    let i = 1
    console.log(`TABLE OF ${num}`)
    while (i<=10) {
        console.log(i*num);
        i++
    }
}

Table(13)

// ------> Alternate 
const Table = (num)=>{
    let i = num
    console.log(`Table of ${num} :`)
    while (i<=num*10) {
        console.log(i);
        i+=num
    }
}

Table(24)
```
```js
// ------> Using do-while loop
function Table (value){
    let i = 1
    console.log(`${value}'s table`)
    do {
        console.log(i*value);
        i++
    } while (i<=10);
}

Table(23)

// ------> Alternate
function Table (number){
    let i = number
    console.log(`${number}'s table`)
    do {
        console.log(i);
        i+=number
    } while (i<=number*10);    
}

Table(7)
```
#### For getting a square table
```js
const sqTable = (end)=>{
    for (let i = 1; i <= end; i++) {
        console.log(`SQUARE OF ${i} \t = ${i*i}`)
    }
}

sqTable(7)

// ------> Alternate
const sqTable = (end)=>{
    for (let i = 1; i <= end; i++) {
        console.log(`SQUARE OF ${i} \t = ${i**2}`)
    }
}

sqTable(10)

/**
 *  NOTE : Both the operator will return the same value
 *  Use anyone of them
 */
```
#### For getting exponential values of any range or a single value
```js
function power(expo, start, end) {
  if (start == undefined) {
    console.log("PLEASE PASS AT LEAST TWO VALUES");
  } else if (end == undefined) {
    for (let i = start; i <= start; i++) {
      console.log(`SQUARE OF ${i} = ${i ** expo}`);
    }
  } else {
    for (let i = start; i <= end; i++) {
      console.log(`SQUARE OF ${i} = ${i ** expo}`);
    }
  }
}

// power(2);
// power(2, 17);
power(2, 17, 24);

/**
 *  NOTE : power(exponent_value, start, end)
 *  We can get the exponent value of any single value
 *  By passing only two values as :
 *  power(exponent_value, start)
 */
```

#### Form an Infinite loop
```js
// ------> Using while loop
let i = 1
while (i<=10) {
    console.log(i*3);
    // Declare an afterthought to avoid infinite loop 
}
```
```js
// ------> Using do-while loop
let i = 1
do {
    console.log(i*3);
    // Declare an afterthought to avoid infinite loop 
} while (i<=10);
```
#### Usage of for-in loop
```js
let OBJ = {
    notebook : "classmate",
    pencil : "doms",
    eraser : "doms",
    pen : "fort"
}

for (const key in OBJ) {
    const element = OBJ[key];
    console.log(key, element)
}

/**
 *  NOTE : for-in loop specially used in objects
 */
```
#### Usaage of for-of loop and for-each loop
```js
let ARRAY = ["AKASH", "SHIV", "SONAL", "SNEHA", "VIKASH"]

for (const iterator of ARRAY) {
    console.log(iterator)
}

ARRAY.forEach(element => {
    console.log(element)
});

/**
 *  NOTE : for-of and forEach loop specially used in the array for iterating
 */
```
#### Break and Continue statement
```js
for (let i = 1; i <= 10; i++) {
    console.log("I am ",i)
    if(i==6){
        break
    }
}

for (let i = 1; i <= 10; i++) {
    if(i==6){
        break
    }
    console.log("I am ",i)
}

for (let i = 1; i <= 10; i++) {
    if(i==6){
        continue
    }
    console.log("I am ",i)
}

/**
 *  NOTE : break statement stops the chain
 *  while the continue statement continues the chain excluding the condition
 */
```

<br/>

## Object
### What is an Object?
An object in JavaScript is a collection of `key-value` pairs where the keys are strings or symbols, and the values can be of any data type, including other objects.<br/>
Objects are used to store and organize complex data in a structured manner.<br/>
They are created using `object literals`, `constructor functions`, or object creation methods like `Object.create()`

1. **Using an object literal**:
```js
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {
    console.log("Engine started.");
  }
};
```
2. **Using a constructor function**:
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

const person1 = new Person("Ninja Vikash", 20);
person1.sayHello();
```
3. **Using `Object.create()`**:
```js
const animal = {
  speak: function() {
    console.log("The animal makes a sound.");
  }
};

const dog = Object.create(animal);
dog.speak(); // Output: The animal makes a sound.
```

**Reference** : [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
[w3schools](https://www.w3schools.com/js/js_objects.asp)

### Exercise Object
#### Create an object.
```js
function About (name, age, role, state){
  this.name = name;
  this.age = age;
  this.role = role;
  this.state = state;
  this.data = ()=>{
    console.log(`Hi, I am ${this.name} and I am a ${this.age} years old ${this.role}. and I am based on ${this.state}.`)
  }
}

const Vikash = new About("Vikash Kumar", 20, "Developer", "Jharkhand")
Vikash.data()
```
#### Add new values and Update values in the existing object at once.
```js
let StudentData = {
  name : "Vikash",
  role : "Web Developer",
  age : 20,
  state : "JH",
  status : "Married"
}

let newData = {
  country : "INDIA",
  contact : 1234567890,
  email : "abc@gmail.com"
}

let update = {
  name : "Vikash Kumar",
  status : "Single"
}

StudentData = {...StudentData, ...newData, ...update}
console.log(StudentData)
```
#### Create an object for student marks entry and get total marks, grade
```js
function studentEntry(...marks) {
  let MARK = [];
  MARK.push(...marks);

  this.result = function () {
    if (MARK.length > 5 || MARK.length < 5) {
      console.log("PLEASE CHECK YOUR INPUT MARKS MAY BE YOU HAVE ENTERED MORE OR LESS INPUTS");
    } else {

      let total = MARK.reduce((a, b) => a + b);
      let grade = total / 5;

      if (grade >= 0 && grade < 33) {
        console.log(`YOUR SCORE IS : ${total} AND GRADE : F`);
      } else if (grade >= 33 && grade < 45) {
        console.log(`YOUR SCORE IS : ${total} AND GRADE : D`);
      } else if (grade >= 45 && grade < 55) {
        console.log(`YOUR SCORE IS : ${total} AND GRADE : C`);
      } else if (grade >= 55 && grade < 65) {
        console.log(`YOUR SCORE IS : ${total} AND GRADE : B`);
      } else if (grade >= 65 && grade < 75) {
        console.log(`YOUR SCORE IS : ${total} AND GRADE : A`);
      } else {
        console.log(`YOUR SCORE IS : ${total} AND GRADE : A+`);
      }
    }
  };
}

let Ajay = new studentEntry(30, 30, 30, 30);
// Ajay.result()
let Rohit = new studentEntry(67, 56, 78, 56, 77);
Rohit.result()
let Sanjay = new studentEntry(90, 79, 56, 45, 44, 56);
// Sanjay.result()
```

#### Course Constructor & Data Viewer
```js
function Course(...arg){
  this.title = arg[0];
  this.price = arg[1];
  this.duration = arg[2];
  this.author = "Ninja-Vikash"
}

// ------> Create your course here
let DSA = new Course("DSA", 1999, 4);
let JAVASCRIPT = new Course("JavaScript", 1499, 6);
let HTML = new Course("HTML", 799, 5);
let CSS = new Course("CSS", 899, 3);
let REACT = new Course("React", 1999, 8);
let NODEJS = new Course("Node.js", 1799, 9);

/**
 *  Pass values as Course(_course_name, _price, _duration)
 */

function dataViewer(courseName){
  console.log("---COURSE DETAILS---")
  for (const key in courseName) {
    const value = courseName[key];
    console.log(`${key} : ${value}`)
  }
  console.log("---COURSE DETAILS---")
}

// ------> Get Your course details
// dataViewer(DSA)
// dataViewer(REACT)
dataViewer(NODEJS)
// dataViewer(CSS)
```

<br/>

## DOM
### What is DOM ?
DOM stands for **Data Object Model**.<br/>
The DOM represents a document as a **hierarchical tree structure** of nodes.<br/>
Each node can be an `element`, `attribute`, or `text` content.<br/>
The nodes in the DOM tree are objects with **properties** and **methods**.<br/>
> [!NOTE]\
> `innerHTML` for content\
> `style` for CSS styles\
> `appendChild()` for add a new child node

### DOM Operations
#### Accessing elements
We can select elements using various methods like `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, and `querySelectorAll()`.

```js
// Accessing an element by ID
let element = document.getElementById('myElement');

// Accessing elements by class name
let elements = document.getElementsByClassName('myClass');

// Accessing elements by tag name
let paragraphs = document.getElementsByTagName('p');

// Accessing an element using a CSS selector
let firstParagraph = document.querySelector('p');
```
> [!NOTE]\
> `querySelector()` uses CSS selector syntax\
> We can target any inner element as below
> ```js
> let element = document.querySelector(".container h2")
> ```

#### Modifying Elements
We can change the **content**, **style** and **attribute** of elements.

```js
// Changing the inner HTML
element.innerHTML = 'New content';

// Changing the style
element.style.color = 'blue';

// Changing an attribute
element.setAttribute('src', 'newImage.jpg');
```

#### Creating and Appending Elements
We can create new elements and add them to the DOM.
```js
// Creating a new element
let newElement = document.createElement('div');
newElement.innerHTML = 'Hello, world!';

// Appending the new element to an existing element
document.body.appendChild(newElement);
```

**Reference** : [w3schools](https://www.w3schools.com/js/js_htmldom.asp) |
[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) |
[geeksforgeeks](https://www.geeksforgeeks.org/dom-document-object-model/)

### Exercise DOM
#### Create an ordered list
```js
let list = document.getElementById("list")

let listItems = ["Mango", "Apple", "Banana", "Orange"]

let olList = document.createElement("ol")

let list1 = document.createElement("li")
let list2 = document.createElement("li")
let list3 = document.createElement("li")
let list4 = document.createElement("li")

list1.innerText = listItems[0]
list2.innerText = listItems[1]
list3.innerText = listItems[2]
list4.innerText = listItems[3]

olList.appendChild(list1)
olList.appendChild(list2)
olList.appendChild(list3)
olList.appendChild(list4)

list.appendChild(olList)
```

<br/>

## Events
### What is an Event in JavaScript ?
Events in JavaScript are **actions** or **occurrences**<br/>
Happen in the browser window, which JavaScript can respond.<br/>
These events can be triggered by user interactions<br/>
Such as `clicking` a button, `typing` in a text field, or `moving` the mouse<br/>
As well as by other actions, like loading a web page or playing a video.

By handling these events, we can make web pages interactive and responsive to user input.

### Common Events
#### Mouse Events
`click`: Fired when an element is clicked.<br/>
`dblclick`: Fired when an element is double-clicked.<br/>
`mousedown`: Fired when the mouse button is pressed down.<br/>
`mouseup`: Fired when the mouse button is released.<br/>
`mousemove`: Fired when the mouse pointer is moved.<br/>
`mouseover`: Fired when the mouse pointer moves over an element.<br/>
`mouseout`: Fired when the mouse pointer moves out of an element.

#### Keyboard Events
`keydown`: Fired when a key is pressed down.<br/>
`keyup`: Fired when a key is released.<br/>
`keypress`: Fired when a key is pressed and released.

#### Form Events
`submit`: Fired when a form is submitted.<br/>
`change`: Fired when the value of an element changes.<br/>
`focus`: Fired when an element gains focus.<br/>
`blur`: Fired when an element loses focus.

#### Document/Window Events
`load`: Fired when the document or an image is fully loaded.<br/>
`resize`: Fired when the window is resized.<br/>
`scroll`: Fired when the document view is scrolled.<br/>
`unload`: Fired when the user navigates away from the page.


#### Clipboard Events
`copy`: Fired when content is copied.<br/>
`cut`: Fired when content is cut.<br/>
`paste`: Fired when content is pasted.

### Event Handling
#### Using `addEventListener`

```js
let button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button was clicked!');
});
```

#### Using HTML Event Attributes

```js
<button id="myButton" onclick="alert('Button was clicked!')">Click Me</button>
```

#### Using DOM Properties

```js
let button = document.getElementById('myButton');
button.onclick = function() {
    alert('Button was clicked!');
};
```

**Reference** : [w3schools](https://www.w3schools.com/js/js_events.asp) |
[mdn](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) |
[geeksforgeeks](https://www.geeksforgeeks.org/javascript-events/)

<br/>

## Math
### Math Object in JavaScript
JavaScript provides a built-in Math object that contains properties and methods for performing mathematical operations and calculations.<br/>
object is static, meaning you do not need to create an instance of it to use its methods and properties.

> [!NOTE]\
> We can see the list all Math methods by simple logging the Math object in console.\
> ```js
> console.log(Math)
> ```

#### List of Math method
**`Math.abs(x)`**
```js
let absoluteValue = Math.abs(-5); // 5

// Returns the absolute value of a number
```

**`Math.ceil(x)`**
```js
let roundedUp = Math.ceil(4.2); // 5

// Rounds a number upwards to the nearest integer
```

**`Math.floor(x)`**
```js
let roundedDown = Math.floor(4.8); // 4

// Rounds a number downwards to the nearest integer
```

**`Math.round(x)`**
```js
let rounded = Math.round(4.5); // 5

// Rounds a number to the nearest integer.
```

**`Math.max(x, y, ...)`**
```js
let maxNumber = Math.max(1, 2, 3, 4); // 4

// Returns the largest of the zero or more numbers given as input parameters
```

**`Math.min(x, y, ...)`**
```js
let minNumber = Math.min(1, 2, 3, 4); // 1

// Returns the smallest of the zero or more numbers given as input parameters
```

**`Math.random()`**
```js
let randomNumber = Math.random(); // e.g., 0.123456789

// Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
```

**`Math.sqrt(x)`**
```js
let squareRoot = Math.sqrt(16); // 4

// Returns the square root of a number
```

**`Math.pow(base, exponent)`**
```js
let power = Math.pow(2, 3); // 8

// Returns the base to the exponent power (i.e., base^exponent)
```

**`Math.trunc(x)`**
```js
let truncated = Math.trunc(4.9); // 4

// Returns the integer part of a number by removing any fractional digits
```

**`Math.sign(x)`**
```js
let sign = Math.sign(-5); // -1

// Returns the sign of a number, indicating whether the number is positive, negative, or zero
```

**`Math.sin(x), Math.cos(x), Math.tan(x)`**
```js
let sine = Math.sin(Math.PI / 2); // 1
let cosine = Math.cos(0); // 1
let tangent = Math.tan(Math.PI / 4); // 1

// Return the sine, cosine, and tangent of a number (the argument is in radians)
```

**`Math.log(x), Math.log10(x)`**
```js
let naturalLog = Math.log(1); // 0
let logBase10 = Math.log10(10); // 1

// Returns the natural logarithm (base e) and the logarithm base 10 of a number
```

**Reference** : [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) |
[w3schools](https://www.w3schools.com/js/js_math.asp)

<br/>

## Date
### What is Date object ?
In JavaScript, We have a built-in `Date` object.<br/>
We use it to get time.

### Methods to access date
We can create a new instance using date object as
```js
let date = new Date();

console.log(date);
```
We can use the above object to extract any particular value
```js
// for getting year
let year = date.getFullYear();

console.log(year);

// for getting date
let today = date.getDate();

console.log(today);

// for getting month
let month = date.getMonth() + 1;

console.log(month);
```
> [!NOTE]\
> `Date()` object uses an array of months as\
> ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];\
> Whenever we use `getMonth()` method it returns the index value of the month.\
> To get the expected month number just **increment** it by one (`month += 1`) before using it.
```js
// for getting day
let day = date.getDay() + 1;

console.log(day);
```
> [!NOTE]\
> As months, `Date()` object also has an array for days\
> ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];\
> We need to **increment** it by one (`day += 1`) before using it.
```js
// for getting hours
let hours = date.getHours();

console.log(hours);

// for getting minutes
let minutes = date.getgetMinutes();

console.log(minutes);

// for getting seconds
let seconds = date.getSeconds();

console.log(seconds);

// for getting mili-seconds
let miliseconds = date.getMilliseconds();

console.log(miliseconds);

// for getting localeString
let localeString = now.toLocaleString();

console.log(localeString);

// for getting localeDateString
let localeDateString = now.toLocaleDateString();

console.log(localeDateString);

// for getting localeTimeString
let localeTimeString = now.toLocaleTimeString();

console.log(localeTimeString);
```

**Reference** : [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) |
[w3schools](https://www.w3schools.com/jsref/jsref_obj_date.asp)

<br/>

## Contribute! 🤝
This repository is open for collaboration, and your contributions are welcome! 🥰<br/>
If you spot any error, have a suggestion, or want to add new content, feel free to submit a pull request.<br/>
Let's make this guide a vibrant and up-to-date resource for the entire **JavaScript Aspirants**

**Fork the Repository**<br/>
Fork this repository to contribute and become a part of JavaScript-Collection

### [Fork: JavaScript BrainStorming⚡](https://github.com/Ninja-Vikash/JavaScript-Collection/fork) 👈(Click here)

**Clone repository**<br/>
Clone your forked repository to your local machine using the `git clone` command.<br/>
Replace `username` with your GitHub username.
```bash
git clone https://github.com/username/JavaScript-BrainStorming.git
```

Create a new branch for your ideas named it as `new-idea`<br/>
Make changes on your branch and push your changes using these commands.
```bash
git checkout -b new-idea

git add .
git commit -m "Brief description of your changes"

git push origin new-idea
```

#### Happy Coding 💖
