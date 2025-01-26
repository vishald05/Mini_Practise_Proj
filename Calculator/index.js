var display = document.getElementById("Display");
var body = document.body;
function addto(NEWVAL){
    display.value += NEWVAL;
}

function cleardisplay(){
    display.value = "";
}

function deletelast(){
    var curr = display.value;
    display.value = (curr.slice(0,curr.length - 1));
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}
var theme = false;
function dummy(){
    if(!theme){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        theme = true;
    }
    else{
        body.style.backgroundColor = "hsl(0, 0%, 7%)";
        body.style.color = "white";
        theme = false;
    }
}