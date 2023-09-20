//take name part
let name = prompt("What is your name?")
let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML, name}`

//clock part
function showTime() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //start 0 so first of write sunday
    let now = new Date()
    let hours = now.getHours() //dont forget the paranthesis
    let min = now.getMinutes()
    let sec = now.getSeconds()

    let day = weekday[now.getDay()]

    let myClock = document.querySelector('#myClock')
    myClock.innerHTML = `${hours}:${min}:${sec} ${day}`
}


setInterval(showTime, 1000); //every 1 second update 