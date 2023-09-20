/* console.log(document.location.pathname)
console.log(document.head)
console.log(document.body)
console.log(document.URL)
console.log(document.baseURI)
console.log(document.body.style.backgroundColor="aqua") */
/* 

let title=document.getElementById('title')
title.innerHTML="Deneme"
console.log(title.innerHTML)

let link=document.querySelector("#link")
link.innerHTML+="değişti"
link.style.color="red"
link.classList.add("btn")
console.log(link.innerHTML) */

/* //prompt veri alma
let fullName=prompt("adınız")
let names=document.querySelector("#names")
names.innerHTML=`${names.innerHTML} ${fullName}`
 */

/* let item=document.querySelector("ul#list>li:last-child")
item.innerHTML="son değişti"

let ulDOM=document.querySelector("#list")
let liDOM=document.createElement("li")
liDOM.innerHTML="kendi olduşturduğumz"

//ulDOM.append(liDOM)
//ulDOM.prepend(liDOM) */

let names=document.querySelector("#names")
names.classList.add("text-primary")
names.classList.remove("text-primary")