/**
 *  -------------------------- OBJECT IN JAVASCRIPT ---------------------------
 */

// ----------------------------------------------------------------------------
/**
 *  TEST : My data object exporting
 */
let myData = {
  name : "Ninja",
  role : "Developer",
  age : 20
}

export default {myData}

// ----------------------------------------------------------------------------
/**
 *  TEST : Create an object.
 */

// function About (name, age, role, state){
//   this.name = name;
//   this.age = age;
//   this.role = role;
//   this.state = state;
//   this.data = ()=>{
//     console.log(`Hi, I am ${this.name} and I am a ${this.age} years old ${this.role}. and I am based on ${this.state}.`)
//   }
// }

// const Vikash = new About("Vikash Kumar", 20, "Developer", "Jharkhand")
// Vikash.data()
// const Sneha = new About("Sneha Sharma", 17, "Student", "Jammu")
// Sneha.data()

// ----------------------------------------------------------------------------
/**
 *  TEST : Add new values and Update values in the existing object at once.
 */

// let StudentData = {
//   name : "Vikash",
//   role : "Web Developer",
//   age : 20,
//   state : "JH",
//   status : "Married"
// }

// let newData = {
//   country : "INDIA",
//   contact : 1234567890,
//   email : "abc@gmail.com"
// }

// let update = {
//   name : "Vikash Kumar",
//   status : "Single"
// }

// StudentData = {...StudentData, ...newData, ...update}
// console.log(StudentData)

// ----------------------------------------------------------------------------
/**
 *  TEST : Common array operations with an array of objects
 */

// let Pokemon = [
//   {
//     butterfree: {
//       leg: 2,
//       type: "bug",
//     },
//   },
//   {
//     bulbasaur: {
//       leg: 4,
//       type: "grass",
//     },
//   },
//   {
//     charmendar: {
//       leg: 2,
//       type: "fire",
//     },
//   },
//   {
//     squirtle: {
//       leg: 2,
//       type: "water",
//     },
//   },
// ];

// Pokemon.push({
//   pikachu: {
//     leg: 2,
//     type: "electric",
//   },
// });

// Pokemon.pop()

// console.log(Pokemon);

// ----------------------------------------------------------------------------
/**
 *  TEST : For finding all the available types in PokeDex
 */

// let Pokedex = [
//   {
//     butterfree: {
//       leg: 2,
//       type: "bug",
//     },
//   },
//   {
//     bulbasaur: {
//       leg: 4,
//       type: "grass",
//     },
//   },
//   {
//     charmendar: {
//       leg: 2,
//       type: "fire",
//     },
//   },
//   {
//     squirtle: {
//       leg: 2,
//       type: "water",
//     },
//   },
// ];

// for (const key in Pokedex) {
//   const pokemon = Pokedex[key];
//   for (const key in pokemon) {
//     const e = pokemon[key];
//     console.log(e.type);
//   }
// }