let stopwatch = document.querySelector(".stop-watch");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let stop = document.getElementById("stop");

let mili = 0;
let sec = 0;
let min = 0
let timerid = null;


start.addEventListener('click', () => {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(watchtime, 10);
});


stop.addEventListener('click', () => {
    clearInterval(timerid);
});


reset.addEventListener('click', () => {
    clearInterval(timerid);
    mili = min = sec = 0;
    stopwatch.innerHTML = `00 : 00 : 00`;
})


function watchtime() {

    mili++;

    if (mili == 100) {
        sec++;
        mili = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0;
    }

    let minString = min < 10 ? `0${min}` : min;
    let secString = sec < 10 ? `0${sec}` : sec;
    let miliString = mili < 10 ? `0${mili}` : mili;


    stopwatch.innerHTML = `${minString} : ${secString} : ${miliString}`;



}