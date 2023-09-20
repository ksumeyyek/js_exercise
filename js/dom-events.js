let info = document.querySelector("#info")
info.addEventListener("mouseover", domClick)


function domClick() {
    console.log("tıkla")
    console.log(this.innerHTML = "change info")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}