/* let users=["Lorem","Ipsum","Dolor"]
let userListDOM=document.querySelector('#userList')
for(let i=0;i<users.length;i++){
    let liDOM=document.createElement('li')
    liDOM.innerHTML=users[i]
    userListDOM.appendChild(liDOM) //ekleme
    console.log(users[i])
}
 */


/* //break continue
const LOREM_LIST=['lorem','ipsum','dolor','amet','consectetur','adipisicing','elit']
let counter=0

/* for(;counter<10;counter++){
    if(counter==5){
        break
    }
    console.log(counter)
}
 */
/* for(;counter<10;counter++){
    if(counter==5){ //5i yazdırmıcak
        continue
    }
    console.log(counter)
} */
/* const UL_DOM=document.querySelector('#userList')
for(let i=0;i<LOREM_LIST.length;i++){
    if(LOREM_LIST[i]=='dolor'){break}
    let LI_DOM=document.createElement('li')
    LI_DOM.innerHTML=LOREM_LIST[i]
    UL_DOM.appendChild(LI_DOM)
} */
/* const UL_DOM=document.querySelector('#userList')
for(let i=0;i<LOREM_LIST.length;i++){
    if(LOREM_LIST[i]=='dolor'){continue}
    let LI_DOM=document.createElement('li')
    LI_DOM.innerHTML=LOREM_LIST[i]
    UL_DOM.appendChild(LI_DOM)
} */

//while
/* let i=0
while(i<10){
    console.log(i)
    i++
} */

/* let userName
while(!userName){
    userName=prompt("Ad") //isim girene kadar sürekli alert vericek
    

} */

//foreach
/* const PRODUCTS=["Laptop","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]
PRODUCTS.forEach((product,index,array)=>console.log(array[index]=product.toUpperCase()))

const userListDOM=document.querySelector('#userList')
PRODUCTS.forEach((item)=>{
    const liDOM=document.createElement('li')
    liDOM.innerHTML=item
    userListDOM.append(liDOM)

}) */

//filter
/* const PRODUCTS=["Laptop","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard","Mic"]
const NEW_PRODUCT=PRODUCTS.filter(item=>item.length>5)
console.log(NEW_PRODUCT)

const USERS=[
    {fullname:"Ayse Sumer",isActive:false},
    {fullname:"Ahmett Urgan",isActive:true},
    {fullname:"Asya Basar",isActive:true},
    {fullname:"Aksel Durmaz",isActive:false},
] */
//const ACTIVE_USERS=USERS.filter(user=>user.isActive==true)
/* const ACTIVE_USERS=USERS.filter(user=>user.isActive) //her zaman true verisini verir false için belirmemiz gerekir
console.log(ACTIVE_USERS)

const PERSON = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
    ];

const PERSON_AGE=PERSON.filter(person=>person.languages.includes("JavaScript"))

console.log(PERSON_AGE) */


//array map
const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)
//{userName:"AYSE",shortName:"A.",newName:"Ayse"}
/* const USERS_OBJ=USERS.map(item=>
    {

        return {userName:item ,
            shortName:`${item[0]}.`,
            newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}

    }) */
const USERS_OBJ = USERS.map(item => //returnsuz hali böyle aslında tek komutumuz var
(
    {
        userName: item,
        shortName: `${item[0]}.`,
        newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }
)
)
console.log(USERS_OBJ)
