/* //object oluşturmak
let item={
}
let item2=new Object()

let object={obj:1}
let arrayObj=[1,2,3]
 */


let laptop1={
    brand:"Apple",
    model:"Macbook",
    "2kg":2,
    model_name:"Macbook Pro"
}
console.log(laptop1["2kg"])

laptop1.brand="Mac"
console.log(laptop1)
laptop1.version="10.15.7"
console.log(laptop1)

keys=Object.keys(laptop1)
console.log(keys)

x=5+"5"
console.log(x)