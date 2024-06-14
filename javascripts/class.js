/**
 *  Class in JavaScript
 */

class RegdForm {
  constructor(username) {
    // console.log("You have to pay 500 Rs/-");
    // console.log("Your form is submitting!\nPlease wait")
    // setTimeout(() => {
    //     console.log("Please wait.")
    // }, 500);
    // setTimeout(() => {
    //     console.log("Please wait..")
    // }, 1000);
    // setTimeout(() => {
    //     console.log("Please wait...")
    // }, 1500);
    setTimeout(() => {
      console.log(`${username} your form has been submitted!`);
    }, 3000);
  }
  // submit(){
  //     console.log(`${this.name}, Your form is submitted successfully!`)
  // }
  // cancel(){
  //     console.log(`Sorry ${this.name}, Your form is cancelled!`)
  // }
  // // username = (username)=> {this.name = username}
  // username = function(username){
  //     this.name = username
  // }
}

// let Vikash = new RegdForm("Vikash");
// let Ajay = new RegdForm("Ajay");
// let Sneha = new RegdForm("Sneha");

// Form.username("vikash")
// Form.submit()

// Form.username("Ajay")
// Form.cancel()

class product {
  constructor(productName, price, stock){
    this.productName = productName;
    this.price = price;
    this.stock = stock
  }
}

let classMateNoteBook = new product("CM notebook", 89, true)

// console.log(classMateNoteBook.stock)

class studentInfo {
  constructor(name, age, rollno, course){
    this.name = name;
    this.age = age;
    this.rollno = rollno;
    this.course = course;
  }

  // dataView = function() {
  //   console.log(`Name : ${this.name}`)
  //   console.log(`Age : ${this.age}`)
  //   console.log(`Course : ${this.course}`)
  // }
  dataView() {
    console.log(`Name : ${this.name}`)
    console.log(`Age : ${this.age}`)
    console.log(`Course : ${this.course}`)
  }
}

let A = new studentInfo("Avi", 17, 56, "HTML")

A.dataView()
