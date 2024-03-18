/**
 *  -------------------------- ARRAY IN JAVASCRIPT ----------------------------
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : WAP to create a table of any number.
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function Table(n){
//     let table = arr.map((e)=> e*n)
//     console.log(`Table of ${n}`)

//     table.forEach((element) => {
//         console.log(element)
//     });
// }

// Table(132)

// ----------------------------------------------------------------------------
/**
 *  TEST : WAP to get even or odd numbers from the array list
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // For getting all even numbers from the array list
// const Even = () => {
//   let even = arr.filter((e) => e % 2 == 0);
//   console.log(even);
// };

// // Even()

// // For getting all odd numbers from the array list
// const Odd = () => {
//   let odd = arr.filter((e) => e % 2 == 1);
//   console.log(odd);
// };

// // Odd()

// // ----------> Advance method

// function get(numType){

//     let result = arr.filter((e) => {
//         if (numType == "even") {
//             return e % 2 == 0
//         }
//         else
//         if (numType == "odd") {
//             return e % 2 == 1
//         }
//     });

//     if (numType == "even" || numType =="odd"){
//         console.log(result);
//     }

//     else {
//         console.log("Please enter a valid type!")
//     }
// }

// get("even")
// get("odd")
// get("red")

// ----------------------------------------------------------------------------
/**
 *  TEST : Create counting table upto 100 using the array list of 10 elements
 */

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = arr1.map((e) => e + 10);
// let arr3 = arr2.map((e) => e + 10);
// let arr4 = arr3.map((e) => e + 10);
// let arr5 = arr4.map((e) => e + 10);
// let arr6 = arr5.map((e) => e + 10);
// let arr7 = arr6.map((e) => e + 10);
// let arr8 = arr7.map((e) => e + 10);
// let arr9 = arr8.map((e) => e + 10);
// let arr10 = arr9.map((e) => e + 10);

// let finalArr = arr1.concat(...arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10);
// console.log(finalArr)

/**
 *  NOTE : For concatanation I used (...)spread operator
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Insertion in Array
 */

// ------> Inserting in a empty array

// let arr = []
// function insert (...val){
//     arr.push(...val)
// }

// insert("Hello", "World", "!")
// console.log(arr)

// ------> Inserting in a existing array

// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

// const add = (...value)=>{
//     studentName.push(...value)
// }

// add("Sanjeev", "Kumar", "Suraj")

// const addBegin = (...value)=>{
//     studentName.unshift(...value)
// }

// addBegin("Aditi", "Nandini", "Sneha")

// console.log(studentName)

/**
 *  NOTE : Using spread operator you can insert multiple values
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Deletation in Array
 */

// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

// function remove (n){
//     for (let i = 0; i < n; i++) {
//         studentName.pop()
//     }
// }

// remove(4)

// console.log(studentName)

// ------> Advanced

// function remove (n){
//     if (n <= studentName.length) {
//         for (let i = 0; i < n; i++) {
//             studentName.pop()
//         }
//         console.log(studentName)
//     }
//     else {
//         console.log("Please enter lesser value than the array length")
//     }
// }

// remove(2)

// // ------> Deletation using SHIFT
// function removeBegin (n){
//     for (let i = 0; i < n; i++) {
//         studentName.shift()
//     }
// }

// removeBegin(1)
// console.log(studentName)

// // ------> Advanced code
// function removeBegin (n){
//     if (n <= studentName.length) {
//         for (let i = 0; i < n; i++) {
//             studentName.shift()
//         }
//         console.log(studentName)
//     }
//     else {
//         console.log("Please enter lesser value than the array length")
//     }
// }

// removeBegin(5)

// studentName.splice(2,5)

// ----------------------------------------------------------------------------
/**
 *  TEST : Basic methods in Array
 */

// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

// let getIndex = studentName.indexOf("Sanjay")
// console.log(getIndex)

// let getValue = studentName[1]
// console.log(getValue)

// let sliced = studentName.slice(2, 3)
// console.log(sliced)

// ----------------------------------------------------------------------------
/**
 *  TEST : To replace any particular value from the array list
 */

// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

// studentName[2] = "King"
// studentName[0] = "VIAKSH"

// console.log(studentName)

// ----------------------------------------------------------------------------
/**
 *  TEST : Array destructuring
 */

// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];
// let secondList = ["Ankush", "Sid"]

// -------> Merging two arrays

// studentName = [...studentName, ...secondList]
// studentName = studentName.concat(secondList)
// console.log(studentName)

// -------> Getting value
// let [a, b, ...rest] = studentName
// console.log(a)
// console.log(b)
// console.log(rest)

// let [x, y, , ,...other] = studentName
// console.log(x)
// console.log(y)
// console.log(other)

/**
 *  NOTE : A blank comma separation will skip value in Destructuring
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : To change the CASE of elements in a array list
 */

// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

// function ToUpper (){
//     let upper = studentName.map(e=> e.toUpperCase())
//     console.log(upper)
// }

// ToUpper()

// function ToLower (){
//     let lower = studentName.map(e=> e.toLowerCase())
//     console.log(lower)
// }

// ToLower()

// ------> Case changing using single function
// let studentName = ["Vikash", "Anuj", "Shiv", "Rohit", "Sanjay"];

// function toCase(change){
//     if(change == "UPPER"){
//         let newlist = studentName.map(e=>e.toUpperCase())
//         console.log(newlist)
//     }
//     else
//     if(change == "LOWER"){
//         let newlist = studentName.map(e=> e.toLowerCase())
//         console.log(newlist)
//     }
//     else {
//         console.log("Please enter a valid operation.")
//     }
// }

// toCase("UPPER")
// toCase("LOWER")
// toCase("HYPER")

/**
 *  NOTE : We can't change the existing Array's string case
 *  but we can form new array using the old one.
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : To change the CASE of elements in a dynamic array.
 */

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

// ----------------------------------------------------------------------------
/**
 *  TEST : Filtering candidate who can apply for goverment job
 */

// let candidate = [
//     {
//         name: "Vikash",
//         age: 20
//     },
//     {
//         name: "Alice",
//         age: 25
//     },
//     {
//         name: "Bob",
//         age: 30
//     },
//     {
//         name: "Charlie",
//         age: 35
//     },
//     {
//         name: "David",
//         age: 40
//     },
//     {
//         name: "Emily",
//         age: 22
//     },
//     {
//         name: "Frank",
//         age: 28
//     },
//     {
//         name: "Grace",
//         age: 32
//     }
// ];

// function candidateSelector (min, max){
//     candidate.filter(e=>{
//         if(e.age <= max && e.age >= min){
//             console.log(`Name = ${e.name} | Age = ${e.age}`)
//         }
//     })
// }

// // Pass age range in the function
// candidateSelector(19, 33)

// ----------------------------------------------------------------------------
/**
 *  TEST : Print all values
 */

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getList(){
//     nums.forEach((element,index)=>{
//         console.log(`Value at index ${index} is ${element}`)
//     })
// }

// getList()

// ----------------------------------------------------------------------------
/**
 *  TEST : Reverse array
 */

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// By using reverse method
// function reverse (){
//     let newNum = num.reverse()
//     console.log(newNum)
// }

// reverse()

// By using for loop
// function reverse (){
//     let newNum = []

//     for (let i = num.length - 1; i >= 0; i--){
//             newNum.push(num[i])
//         }
//     console.log(newNum)
// }

// reverse()

// ----------------------------------------------------------------------------
/**
 *  Exporting
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default array;
