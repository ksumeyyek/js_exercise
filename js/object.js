/* //object oluşturmak
let item={}
let item2=new Object()

let object={obj:1}
let arrayObj=[1,2,3]
 */


/* let laptop1 = {
    brand: "Apple",
    model: "Macbook",
    "2kg": 2,
    model_name: "Macbook Pro"
}
console.log(laptop1["2kg"])

laptop1.brand = "Mac"
console.log(laptop1)
laptop1.version = "10.15.7"
console.log(laptop1)
//anahtar bilgilerini ulaşmak
keys = Object.keys(laptop1)
console.log(keys)


keys.forEach(item => {
console.log(item)
console.log(laptop1[item])    
});
 */

/* let user1={
    firstName:"Sumeyye",
    lastName:"Korkmaz",
    score:[1,2,3,4],
    isActive:true,
    shortName:function(){
        return `${this.firstName[0].toUpperCase()} ${this.lastName}`
    }

}
console.log(user1.shortName) */

let settings = {
    userName: "Sumeyye",
    password: "blabla_123",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "google.com"


}
//rename descructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings
console.log(user, password, isActive, serverIP, serverName)

let { userName: user1, password: password1, isActive: isActive1, ...newSettings } = settings //newsettings içine geriye kalanları atyıyor
console.log(user1,password1,isActive1,newSettings) 
