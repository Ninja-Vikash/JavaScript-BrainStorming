/**
 *  ------------------------ FUNCTIONS IN JAVASCRIPT --------------------------
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : A normal function to print welcome note
 */

// function Welcome(user){
//     console.log(`Hello ${user}!`)
//     console.log("Now, You are a part of JavaScript Collection!")
//     console.log("Keep Learning.")
// }

// Welcome("Ninja")

// ----------------------------------------------------------------------------
/**
 *  TEST : A arrow function to print welcome note
 */

// const congrats = (candidate)=>{
//     console.log("Congratulations! " + candidate + " for performing excellent in the test.")
// }

// const congratulation = (candidate)=>{
//     console.log(`Congratulations! ${candidate} for performing excellent in the test.`)
// }

// congrats('ninja')
// congratulation('vikash')

// ----------------------------------------------------------------------------
/**
 *  TEST : Calculate total marks and grade
 */

// let marksData = []

// function studentEntry(...marks){
//     console.log("STUDENT REPORT")
//     marksData.push(...marks)

//     let [a, b, c, d, e] = marksData
//     let marksToSum = [a, b, c, d, e]

//     let total = marksToSum.reduce((a,b)=>a+b)
//     console.log(`TOTAL MARKS : ${total}`)

//     let grade = total/5
//     if(grade <= 33){
//         console.log(`GRADE MARKS : 'F'`)
//     }
//     else
//     if (grade > 33 && grade <= 40) {
//         console.log(`GRADE MARKS : 'C'`)
//     }
//     else
//     if (grade > 40 && grade <= 48) {
//         console.log(`GRADE MARKS : 'C+'`)
//     }
//     else
//     if (grade > 48 && grade <= 54) {
//         console.log(`GRADE MARKS : 'B'`)
//     }
//     else
//     if (grade > 54 && grade <= 59) {
//         console.log(`GRADE MARKS : 'B+'`)
//     }
//     else
//     if (grade > 59 && grade <= 67) {
//         console.log(`GRADE MARKS : 'A'`)
//     }
//     else
//     if (grade > 67 && grade <= 84) {
//         console.log(`GRADE MARKS : 'A+'`)
//     }
//     else
//     if (grade > 85 && grade <= 89) {
//         console.log(`GRADE MARKS : 'A++'`)
//     }
//     else
//     if (grade > 89 && grade <= 100) {
//         console.log(`GRADE MARKS : 'EX'`)
//     }
// }

// studentEntry(83, 76, 67, 98, 69)
// studentEntry(88, 76, 66, 94, 73, 65)
// studentEntry(20, 20, 20, 20)

/**
 *  NOTE : If you enter more than or less than five values
 *  except initial five values all the other values will be neglected
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : For getting square of one and more values
 */

// function square(...value) {
//   let values = [];
//   values.push(...value);
//   if (values.length == 0) {
//     console.log("PLEASE ENTER ATLEAST ONE VALUE TO GET RESULT!");
//   } else {
//     values.forEach((element) => {
//       console.log(`SQUARE OF ${element} is ${element ** 2}`);
//     });
//   }
// }

// square(4);
// square();
// square(2, 4, 5);

/**
 *  NOTE : Pass values in the function to get squares, If you don't pass
 *  any single value in the function. A message will appear on the console.
 */

// ----------------------------------------------------------------------------