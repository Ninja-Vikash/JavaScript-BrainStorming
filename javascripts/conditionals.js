/**
 * ------------------------- CONDITIONAL STATEMENTS ---------------------------
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Eligiblity check for voting
 */

// // Single if statement
// function EligiblityCheck(name,age){
//     if (age >=18) {
//         console.log(`${name}, You are eligible for voting!`)
//     }
// }

// EligiblityCheck("Akash",30)

// // if-else ladder statement
// function EligiblityCheck(name,age){
//     if (age < 18) {
//         console.log(`${name}, You are not eligible for voting!`)
//     }
//     if(age >=18 && age <=65){
//         console.log(`${name}, You are eligible for voting!`);
//     }
//     else 
//     if(age > 65){
//         console.log(`${name}, You are eligible!`)
//     }
// }

// EligiblityCheck("Akash",64)

// ----------------------------------------------------------------------------
/**
 *  TEST : Advanced eligibility check
 */

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

// EligiblityCheck("Vikash", 20)

/**
 *  EligiblityCheck(_NAME_,_AGE_)
 *  Pass your name as first argument and your age as second argument
 *  You can try by passing only one or more than arguments as well as by not passing name as first arguemnt
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Workout schedule
 */

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

// workout("FRI")
// workout("Thu")

/**
 *  NOTE : Enter a valid day name to get your workout schedule
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : Get exponential values of any single or a range
 */

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