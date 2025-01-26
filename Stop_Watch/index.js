var res = document.getElementById("Count");
var START = document.getElementById("Start");
var STOP = document.getElementById("Stop");
var RESET = document.getElementById("Reset");
var dis = document.getElementById("Count");

let working = false;
let tracker = null;
var start = 0;
var timeElasped = 0;

START.onclick = function(){
    if(!working){
        working = true;
        start = Date.now() - timeElasped;
        tracker = setInterval(Ticker, 10);
    }
}

STOP.onclick = function(){
    if(working){
        working = false;
        clearInterval(tracker);
        timeElasped = Date.now() - start;
    }
}

RESET.onclick = function() {
    working = false;
    clearInterval(tracker);
    tracker = null;
    start = 0;
    timeElasped = 0;
    dis.textContent = "00 : 00 : 00 : 00";
}

function Ticker(){
    const CURRENT_TIME = Date.now();
    timeElasped = CURRENT_TIME - start;

    const Hour = (Math.floor(timeElasped / (1000 * 60 * 60))).toString().padStart(2,0);

    const Mins = (Math.floor(timeElasped / (1000 * 60) % 60)).toString().padStart(2,0);

    const Sec = (Math.floor(timeElasped / 1000 % 60)).toString().padStart(2,0);

    const Milsec = (Math.floor(timeElasped % 1000 / 10)).toString().padStart(2,0);

    dis.textContent = `${Hour} : ${Mins} : ${Sec} : ${Milsec}`;
}