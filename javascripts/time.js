/**
 *  Time function in JavaScript
 */

// let date = new Date()

// // console.log(time.getDate())
// // console.log(time.getDay())
// // console.log(time.getFullYear())
// // console.log(time.toLocaleDateString())
// // console.log(time.getUTCMonth())
// // console.log(time.toDateString())

// // Getting time and date component

// let year = date.getFullYear()

// // console.log(year)

// let month = date.getMonth()

// // console.log(++month)

// ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// /**
//  *  Note : JavaScript treated January as 0
//  *          When ever we try to print month number kindly increment the month number by one
//  *          0 - based: January is 0, December is 11
//  */

// let today = date.getDate()

// // console.log(today)

// let day = date.getDay()

// // console.log(day)

// /**
//  *  Note: Day method also returns the number of day
//  *          based on Sunday is 0, and Saturday is 6
//  */

// let hours = date.getHours()

// // console.log(hours)


// // Formatting date and time

// let now = new Date()

// let isoString = now.toISOString();

// console.log(isoString)

// let localeString = now.toLocaleString();

// console.log(localeString)

// let localeDateString = now.toLocaleDateString();

// console.log(localeDateString)

// let localeTimeString = now.toLocaleTimeString();

// console.log(localeTimeString)

// let timestamp = Date.now();

// console.log(timestamp)

// Get the current date and time
let now = new Date();
console.log(`Current Date and Time: ${now}`);

// Get specific components of the date and time
let year = now.getFullYear();
let month = now.getMonth() + 1; // Add 1 since months are 0-based
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);

// Format the date and time
let isoString = now.toISOString();
let localeString = now.toLocaleString();

console.log(`ISO String: ${isoString}`);
console.log(`Locale String: ${localeString}`);
