const notifContainer = document.querySelector(".notifContainer")
const button = document.getElementById("button")

const notifications = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five",
    "Message Six",
]

const colors =["red", "purple", "black", "gray", "green", "blue"]

button.addEventListener("click", ()=>createNotification())

function createNotification(){
    const notif=document.createElement("div")
    notif.classList.add("notif")
    notif.classList.add(getRandomColor())

    notif.innerText = getRandomNotif()

    notifContainer.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },4000)
}

function getRandomNotif(){
    return notifications[Math.floor(Math.random() * notifications.length)]
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}