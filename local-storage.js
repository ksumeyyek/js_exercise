let user={userName:"sumeyyekorkmaz",isActive:true}

localStorage.setItem('userInfo',JSON.stringify(user))//convert string

let userInfo=localStorage.getItem('userInfo')
userInfo=JSON.parse(userInfo)
console.log(userInfo.isActive)

let items=[1,2,3,user]
localStorage.setItem("newitem",JSON.stringify(items))
let newitem=localStorage.getItem("newitem")
newitem=JSON.parse(newitem)
console.log(newitem)
