let myList = document.getElementsByTagName("li")//"li" etiket adına sahip tüm öğeleri alın
for(let i=0;i<myList.length;i++){
    let myArrayList=[]
    myArrayList+=document.querySelectorAll("li")[i].outerText
    localStorage.setItem('task',JSON.stringify(myArrayList))
    console.log(myArrayList)
}
//close button add 

console.log(myList)
for (let i = 0; i < myList.length; i++) {
    let span = document.createElement("span") //span tagi açtı
    let txt = document.createTextNode("\u00D7") //bu çarpının html yazımı bunu oluşturup eklemek için
    span.className = "close" //style close tanımladı ona göre stil vericek
    span.appendChild(txt)
    myList[i].appendChild(span)

}

//active close button

let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () { //class name close olan itema tıklayınca
        let div = this.parentElement //DOM parentElement özelliği, belirli bir alt öğenin üst öğesini döndürmek için kullanılır.Herhangi bir alt düğümün üst düğümünü temsil eden bir dize döndürür veya belirtilen düğüm herhangi bir üst düğüm içermiyorsa null değerini döndürür.
        div.style.display = "none"
    }
}

//checked item
let list = document.querySelector("ul") //ul tagini aldık
list.addEventListener('click', function (event) {
    if (event.target.tagName === "LI") {// Olayın meydana geldiği öğenin adı hem cins hem değer olarak eşitse
        event.target.classList.toggle('checked') //hedefteki öğeye checked classı ekle  ama aynı zamanda kaldırmak içinde toogle var toogle arasındaki geçişi yapan tag
    }
}, false)

const toasts = document.querySelectorAll("#liveToast")
//create new li
function newElement() {
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value
    let text = document.createTextNode(inputValue)
    li.appendChild(text)
    if (inputValue.trim() === '') { //hem boş click hem space sonrası click
        $(toasts[1]).toast('show')
    } else {
        document.getElementById("list").appendChild(li)
        $(toasts[0]).toast('show')

    }
    document.getElementById("task").value = ""

    // ekliceğimiz task ile beraber close butonuda gelicek
    let span = document.createElement("span") //span tagi açtı
    let txt = document.createTextNode("\u00D7") //bu çarpının html yazımı bunu oluşturup eklemek için
    span.className = "close" //style close tanımladı ona göre stil vericek
    span.appendChild(txt)
    li.appendChild(span)
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () { //class name close olan itema tıklayınca
            let div = this.parentElement //DOM parentElement özelliği, belirli bir alt öğenin üst öğesini döndürmek için kullanılır.Herhangi bir alt düğümün üst düğümünü temsil eden bir dize döndürür veya belirtilen düğüm herhangi bir üst düğüm içermiyorsa null değerini döndürür.
            div.style.display = "none"
        }
    }

}

