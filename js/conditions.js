/* let username = prompt("adınız")
let age = prompt("yaş")
let info=document.querySelector('#info')

if (username && age >= 18) {
    info.innerHTML="`ehliyet alırsın`"
} else if (!username) {
    info.innerHTML="`adın yok`"
} else if (!(age >= 18)) {
    info.innerHTML="yaşın yok yada küçüksün"
} */


/* //ternary operatör  -> if ? true :false
let username = prompt("adınız")
let info = document.querySelector('#info')

info.innerHTML = `${username.length>1?username:"kullanıcı bulunamadı"}` */


//exercise
let score =prompt("enter your score")
let info=document.querySelector("#info")

if(score>=0 && score<=100){
    if(score>=90) {
        info.innerHTML=`AA => ${score}`
    }else if(score>=85){
        info.innerHTML=`BA => ${score}`
    }else if(score>=80){
        info.innerHTML=`BB => ${score}`
    }else if(score>=75){
        info.innerHTML=`CB => ${score}`
    }else if(score>=70){
        info.innerHTML=`CC => ${score}`
    }else if(score>=65){
        info.innerHTML=`DC => ${score}`
    }else if(score>=60){
        info.innerHTML=`DD => ${score}`
    }else if(score>=50){
        info.innerHTML=`FD => ${score}`
    }else if(score>=0){
        info.innerHTML=`FF => ${score}`
    }
}else{
    info.innerHTML="info is not correct"
}