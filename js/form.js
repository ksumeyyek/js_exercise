/* let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit) //her seferinde sayfanın yenilenmemesini sağlayoru


function formSubmit(event){
    event.preventDefault() //ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar
    console.log("islem gercekleşti")
    let scoreInputDOM=document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score',scoreInputDOM.value)
}
 */


//exercise part
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM=document.querySelector('#alert')

const alertFunction=(title,message,className)=>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if (USER_NAME.value && SCORE.value) {

        addItem(USER_NAME.value, SCORE.value) //item ekle daha sonra input kısmını 0la
        alertDOM.innerHTML=alertFunction("Başarılı","Bilgileriniz eklendi","success")
        USER_NAME.value=""
        SCORE.value=""

    }else{
        alertDOM.innerHTML=alertFunction("Başarısız","Eksik bilgi girdiniz","danger")
    }

}
let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {

    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill text-light">${score}</span> `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)

}