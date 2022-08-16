const content = document.getElementById("content")
const speedEl = document.getElementById("speed")
const text= "Self taught front-end developer, art lover & dreamer."
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
    content.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value))

