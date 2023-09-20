let email="ksumeyyek28@gmail.com"
let firstName="Sümeyye"
let lastName="KORKMAZ"

console.log(email.length)
console.log(firstName[0])
console.log(firstName.charAt(0))

firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)

//search method
console.log(email.search("@"))
console.log(email[11])
console.log(email.search("b"))  //outpu -1
//slice method 
console.log(email.slice(email.search("@" )))
console.log(email.slice(0,5))

//replace
email=email.replace("gmail.com" ,"hotmail.com")
console.log(email)

//includes
console.log(email.includes("@"))

//startsWith or endsWith
console.log(email.startsWith("a"))

//first letter upper make
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)

