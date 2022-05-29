var lightButton = document.querySelector(".lightBtn");

var darkButton = document.querySelector(".darkBtn");

var body = document.querySelector("body")

var text = document.querySelector("h1")

lightButton.addEventListener("click", (e)=>{
    body.style.background = "white"
    text.style.color ="black"
    body.style.transition = '1s ease'
})

darkButton.addEventListener("click", (e)=>{
    body.style.background = 'black'
    text.style.color = "white"
    body.style.transition = '1s ease'
})