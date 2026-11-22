const store = document.querySelector(".store")

const data = "my name is roshan shukla"
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

  start.addEventListener("click", () => {
    video.play()
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

    }, 10000);

}, { once: true });
