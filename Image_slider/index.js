const Pics = document.querySelectorAll(".Picbox img");
let index = 0;
let le = Pics.length;
let ssRun = 0;
let ID = null;

document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
    Pics[index].classList.add("displayPic");
}

function prevP(){
    Pics[index].classList.remove("displayPic");
    index = (index - 1) < 0 ? le - 1 : index - 1;
    Pics[index].classList.add("displayPic");
}

function nextP(){
    Pics[index].classList.remove("displayPic");
    index = (index + 1) % le;
    Pics[index].classList.add("displayPic");
}

function SlideShowpics(){
    if(ssRun == 0){
        ID = setInterval(nextP, 1000);
        ssRun = 1;
    }
    else{
        clearInterval(ID);
        ssRun = 0;
    }

}