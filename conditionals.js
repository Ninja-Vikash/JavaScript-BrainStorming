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
    let PName = arg[0]
    let age = arg[1]
    
    if(arg.length == 1){
        console.log("Kindly pass your age as second argument")
    }
    else
    if(arg.length == 2){

        if(age < 0){
            console.log("Please insert a valid age")
        }
        else{
            if (age < 18) {
                console.log(`${PName}, You are not eligible for voting!`)
            }
            else
            if(age >=18 && age <=65){
                console.log(`${PName}, You are eligible for voting!`);
            }
            else 
            if(age > 65){
                console.log(`${PName}, You are eligible!`)
            }
        }
    }
    else
    if(arg.length > 2){
        console.log("You have passed 3 arguments.")
    }
}

EligiblityCheck("Vikash", 20)

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

workout("FRI")
workout("Thu")

/**
 *  NOTE : Enter a valid day name to get your workout schedule
 */