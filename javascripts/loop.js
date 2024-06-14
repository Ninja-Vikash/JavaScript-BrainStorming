/**
 * ---------------------------- LOOP IN JAVASCRIPT ----------------------------
 */

// ----------------------------------------------------------------------------
/**
 *  NOTE : Structure of a for loop
 */

// for (initialization; condition; afterthought){
//   statement
// }

// ----------------------------------------------------------------------------
/**
 *  TEST : Form a table for any number using loop
 */

// function Table(value){
//     for(let i = 1; i <= 10; i++ ){
//         console.log(i*value)
//     }
// }

// Table(19)

// const Table = (val)=> {
//     console.log(`TABLE OF ${val}`)
//     for(let i = val; i <= val*10; i+=val ){
//         console.log(i)
//     }
// }

// Table(5)
// Table(11)
// Table(99)
// Table(202)

// WHILE LOOP
// const Table = (num)=>{
//     let i = 1
//     console.log(`TABLE OF ${num}`)
//     while (i<=10) {
//         console.log(i*num);
//         i++
//     }
// }

// Table(13)

// const Table = (num)=>{
//     let i = num
//     console.log(`Table of ${num} :`)
//     while (i<=num*10) {
//         console.log(i);
//         i+=num
//     }
// }

// Table(24)

// DO-WHILE LOOP
// function Table (value){
//     let i = 1
//     console.log(`${value}'s table`)
//     do {
//         console.log(i*value);
//         i++
//     } while (i<=10);
// }

// Table(23)

// function Table (number){
//     let i = number
//     console.log(`${number}'s table`)
//     do {
//         console.log(i);
//         i+=number
//     } while (i<=number*10);
// }

// Table(7)

// ----------------------------------------------------------------------------
/**
 *  TEST : For getting a square table
 */

// const sqTable = (end)=>{
//     for (let i = 1; i <= end; i++) {
//         console.log(`SQUARE OF ${i} \t = ${i*i}`)
//     }
// }

// const sqTable = (end)=>{
//     for (let i = 1; i <= end; i++) {
//         console.log(`SQUARE OF ${i} \t = ${i**2}`)
//     }
// }

// sqTable(10)

/**
 *  NOTE : Both the operator will return the same value
 *  Use anyone of them
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : For getting exponential values of any range or a single value
 */

// function power(expo, start, end) {
//   if (start == undefined) {
//     console.log("PLEASE PASS ATLEAST TWO VALUES");
//   } else if (end == undefined) {
//     for (let i = start; i <= start; i++) {
//       console.log(`SQAURE OF ${i} = ${i ** expo}`);
//     }
//   } else {
//     for (let i = start; i <= end; i++) {
//       console.log(`SQAURE OF ${i} = ${i ** expo}`);
//     }
//   }
// }

// power(2);
// power(2, 17);
// power(2, 17, 24);

/**
 *  NOTE : power(exponent_value, start, end)
 *  We can get exponent value of any single value
 *  By passing only two values as :
 *  power(exponent_value, start)
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Form an Infite loop
 */

// let i = 1
// while (i<=10) {
//     console.log(i*3);
//     // Declare an afterthought to avoid infinte loop
// }

// let i = 1
// do {
//     console.log(i*3);
//     // Declare an afterthought to avoid infinte loop
// } while (i<=10);

// ----------------------------------------------------------------------------
/**
 *  TEST : Look the usage of for-in loop
 */

// let OBJ = {
//     notebook : "classmate",
//     pencil : "doms",
//     eraser : "doms",
//     pen : "fort"
// }

// for (const key in OBJ) {
//     const element = OBJ[key];
//     console.log(key, element)
// }

/**
 *  NOTE : for-in loop specially used in objects
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Usaage of for-of loop and for-each loop
 */

// let ARRAY = ["AKASH", "SHIV", "SONAL", "SNEHA", "VIKASH"]

// for (const iterator of ARRAY) {
//     console.log(iterator)
// }

// ARRAY.forEach(element => {
//     console.log(element)
// });

/**
 *  NOTE : for-of and forEach loop specially used in array for iterating
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Break and continue statement
 */

// for (let i = 1; i <= 10; i++) {
//     console.log("I am ",i)
//     if(i==6){
//         break
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     if(i==6){
//         break
//     }
//     console.log("I am ",i)
// }

// for (let i = 1; i <= 10; i++) {
//     if(i==6){
//         continue
//     }
//     console.log("I am ",i)
// }

/**
 *  NOTE : break statement stops the chain
 *  while continue statement continues the chain excluding the condition
 */


let obj = {
    name : "vikash",
    role : "coder",
    age : 20
}

for (const key in obj) {
    const element = obj[key];
    console.log(element, key)
}