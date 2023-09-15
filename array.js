/* let domain="google"
let isActive=false
let items=[1,2,15,isActive,domain]
console.log(items)
items=[1, 2, 15,20]
console.log(items)


let emptyArray=[]

console.log(items.length)

document.querySelector('#info').innerHTML=items.length

console.log(items[0])

//last item
console.log(items[items.length-1])
//middle item
console.log(items[Math.floor(items.length/2)])

console.log(
   // typeof(items)
    Array.isArray(items)
)

console.log(Array.isArray([])) */

/* let items=[10,20,30,40,]
console.log("items-orginal:",items)

//add last items
items.push(50) 
console.log("items-last item:",items)

//add first items
items.unshift(5)
console.log("items -first item:",items)

//remove last item
items.pop()
console.log("items -last item:",items)

//remove first iem
items.shift()
console.log("items -first  item:",items)

//array inside change item info
items[0]=5 //first
console.log(items)

items[items.length-1]=60
console.log(items) */

let items=[1,2,3,4,5]

//array in array
let femaleUsers=["Ayse","Hulya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console.log(items[0].length)
console.log(items[0][0])

//öge ayırma
let newItems=items.splice(4,3)
console.log(newItems)
console.log(items)
//
items.unshift("lorem")
items.push("ipsum")
console.log(items)
console.log(items.indexOf("ipsum"))
//array copy
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))


// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)