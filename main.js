const clock = document.querySelector(".time");
const startBtn = document.querySelector("#start-pause")
const timeBtns = document.querySelectorAll("[data-time]")
const endTime = document.querySelector(".time-notice")
let timeSelected;

// udpate selected btn
timeBtns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        timeBtns.forEach((btn) =>{
            btn.classList.remove("active")
        })
        btn.classList.add("active")
        console.log(btn.dataset.time)
       const programTime = parseInt(btn.dataset.time)
       clock.textContent = `${programTime}:00`
       timeSelected = programTime * 60//time selected in seconds

    })
})


function handleStart(){
    const now = Date.now();
    const then = timeSelected*1000 + now;
    const timeOver = new Date(then);
    const timeHours = timeOver.getHours();
    const timeMinutes = timeOver.getMinutes();

    endTime.textContent = `Your interval ends at ${timeHours}:${timeMinutes}`
    updateTimer()
}

//
function updateTimer(){
    
const minutes = timeSelected/60;
const seconds = timeSelected % 60;
}



startBtn.addEventListener("click", handleStart)
