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