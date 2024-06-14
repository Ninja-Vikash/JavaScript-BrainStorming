// console.log(document)

// console.log(document.childNodes)
// let body = document.children
// console.log(body)

// Selecting Elements from document

let element1 = document.getElementById("first")
element1.innerHTML = "<h2>Welcome</h2>"

let element2 = document.querySelector(".second")
element2.innerHTML = "This is BrainStroming Session"

// Creating element

let main = document.querySelector("main")

let headerFile = document.createElement("h1")
headerFile.innerText = "Bingo!"

// main.prepend(headerFile)
main.append(headerFile)

// Updating element

let para = document.querySelector(".para")

para.innerText = "This is important paragraph"

// Deleting element

let deletableText = document.querySelector("h5")

deletableText.remove()

// Manipulation

para.style.color = "red"

let textStyle = {
    color : "blue",
    fontSize : "30px",
    fontWeight : 700,
}

para.style.fontSize = "30px"
para.style.fontWeight = 700

// Creating an ordered list

let list = document.getElementById("list")

let listItems = ["Mango", "Apple", "Banana", "Orange"]

let olList = document.createElement("ol")

let list1 = document.createElement("li")
let list2 = document.createElement("li")
let list3 = document.createElement("li")
let list4 = document.createElement("li")

list1.innerText = listItems[0]
list2.innerText = listItems[1]
list3.innerText = listItems[2]
list4.innerText = listItems[3]

olList.appendChild(list1)
olList.appendChild(list2)
olList.appendChild(list3)
olList.appendChild(list4)

list.appendChild(olList)

console.log(Math)