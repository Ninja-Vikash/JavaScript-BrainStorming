/**
 * -------------------------- IMPORTING IN JAVASCRIPT -------------------------
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Import an array object and Modify,
 *  Copy the existing array and form anther array.
 */

import array from './array.js'

// console.log(array);

// array.push(10);
// array.unshift(0)
// console.log(array);

// let newArr = array.map((e) => e);
// console.log(newArr)

// ----------------------------------------------------------------------------
/**
 *  TEST : Inserting or Updating values in myData object
 */

import myData from './object.js'

// console.log(myData)

myData.name = "Vikash Kumar";
myData.skill = ["JAVASCRIPT", "HTML", "CSS", "REACT", "NODEJS", "TAILWINDCSS"];
// console.log(myData)


/**
 *  NOTE : Spread operator can't be used in imported object
 */
