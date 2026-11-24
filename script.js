const store = document.querySelector(".store")

const data = "my name is shradha shukla"
let index = 0;

function run(){
    if(index < data.length){
        store.innerHTML += data.charAt(index)
        index++
        
    }
      setTimeout(run, 100)
}
run()

const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const video = document.querySelector(".video")


let firstTime = true

start.addEventListener("click", () => {

    if (firstTime) {
        firstTime = false

        setTimeout(() => {
            video.play()
        }, 4000)

    } else {
        video.play()
    }

})

video.addEventListener("ended", () => {
    video.muted = true
    video.loop = true
    video.play()
})

pause.addEventListener("click", () => {
    video.pause()
})


const audio = new Audio("./song.mpeg");

start.addEventListener("click", () => {

    setTimeout(() => {
        audio.play().catch(error => {
            console.log("Audio Error:", error);
        });

    }, 6000);

}, { once: true });


const counter = document.querySelector("#countnumber")

let started = false

start.addEventListener("click", () => {

    if(started) return
    started = true

    let count = 4
   let alldata = setInterval(() => {
        count--
        counter.innerHTML = count
        if(count === 0){
            clearInterval(alldata)
            counter.innerHTML = ""
        }
    },1000)
})
