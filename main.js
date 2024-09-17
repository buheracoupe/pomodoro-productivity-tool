const clock = document.querySelector(".time");
const startBtn = document.querySelector("#start-pause")
const timeBtns = document.querySelectorAll("[data-time]")
const endTime = document.querySelector(".time-notice")
const rulers = document.querySelectorAll(".ruler")




let timeSelected;
let intervalId;
let intervalSelection = false;


// udpate selected btn
timeBtns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        intervalSelection = true;
        clearInterval(intervalId)
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
    if(!intervalSelection){
        endTime.textContent = "Please select an Interval from the options above!"
        return
    }
    clearInterval(intervalId)
    const now = Date.now();
    const then = timeSelected*1000 + now;
    const timeOver = new Date(then);
    const timeHours = timeOver.getHours();
    const timeMinutes = timeOver.getMinutes();

    endTime.innerHTML = `<p>Your interval ends at <span id="end-time">${timeHours}:${timeMinutes < 10 ? "0" + timeMinutes : timeMinutes}</span> GET TO WORK!</p>`
    updateTimer()
}

//
function updateTimer(){

    function updateClock(){
        const minutes = Math.floor(timeSelected/60);
        const seconds = timeSelected % 60;
        clock.textContent = `${minutes}:${seconds < 10 ? `0` + seconds : seconds}`
        timeSelected--;
        document.title = `${minutes}:${seconds < 10 ? `0` + seconds : seconds}`;
        if(timeSelected === -1){
            clearInterval(intervalId)
            alert("Time is Up!")
        }
    }
    updateClock();//call the function initially then pass it to setInterval to fix the start delay
     intervalId = setInterval(updateClock, 1000)

}



startBtn.addEventListener("click", handleStart)
