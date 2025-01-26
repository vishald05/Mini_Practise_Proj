let timeFormat = 24;

function clock_ticker(){
    const time = new Date();
    let Hour = time.getHours().toString().padStart(2,0);
    const Min = time.getMinutes().toString().padStart(2,0);
    const Sec = time.getSeconds().toString().padStart(2,0);
    let Meridian = "";
    if(timeFormat == 12){
        if(Hour >= 12){
            Meridian = " PM";
        }
        else{
            Meridian = " AM";
        }
        Hour = (Hour % 12 || 12).toString().padStart(2,0);
    }
    else{
        Hour = Hour.toString().padStart(2,0);
    }
    const res = `${Hour}:${Min}:${Sec}${Meridian}`;
    document.getElementById("clock").textContent = res;

}

clock_ticker();
setInterval(clock_ticker, 1000);

let convert = document.getElementById("converter");
convert.onclick = function(){
    if(timeFormat == 24){
        timeFormat = 12;
        convert.textContent = "Convert to 24hr Format";
    }       
    else{
        timeFormat = 24;
        convert.textContent = "Convert to 12hr Format";
    }
        
}