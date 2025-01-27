let opkey = document.querySelectorAll(".opkey");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementById("result");
let box = document.querySelectorAll(".MainB");

opkey.forEach(EL => {
    EL.addEventListener("mouseover", event =>{
        EL.classList.add("opkeyhover");
    })
})

opkey.forEach(EL => {
    EL.addEventListener("mouseout", event =>{
        EL.classList.remove("opkeyhover");
        EL.classList.remove("opkeyclick");
    })
})

opkey.forEach(EL => {
    EL.addEventListener("click", event =>{
        EL.classList.add("opkeyclick");
        played(event);
    })
})
let arr = ['🪨','📃','✂️'];
function comp_choice(){
    let r = Math.floor(Math.random() * 3);
    return r;
}

function played(event){
    let now = event.target.textContent;
    let Cchoice = arr[comp_choice()];
    console.log(Cchoice);
    if(now === '🪨'){
        player.textContent = "You have Choosen Rock";
        if(Cchoice === '🪨'){
            changes("Rock","Its a Tie");
            tie();
        }
        if(Cchoice === '📃'){
            changes("Paper","You Lose");
            Ulose();
        }
        if(Cchoice === '✂️'){
            changes("Scissors","You Win");
            Uwin();
        }    
    }
    if(now === '📃'){
        player.textContent = "You have Choosen Paper";
        if(Cchoice === '🪨'){
            changes("Rock","You Win");
            Uwin();
        }
        if(Cchoice === '📃'){
            changes("Paper","Its a Tie");
            tie();
        }
        if(Cchoice === '✂️'){
            changes("Scissors","You Lose");
            Ulose();
        }  

    }
    if(now === '✂️'){
        player.textContent = "You have Choosen Scissors";
        if(Cchoice === '🪨'){
            changes("Rock","You Lose");
            Ulose();
        }
        if(Cchoice === '📃'){
            changes("Paper","You Win");
            Uwin();
        }
        if(Cchoice === '✂️'){
            changes("Scissors","Its a Tie");  
            tie(); 
        }  
    }
}
// box.style.backgroundColor = "Green";
function Uwin(){
    box.forEach(EL =>{
        if(EL.classList.contains("losebg"))
            EL.classList.remove("losebg");
        EL.classList.add("winbg");
        result.textContent = "You WIN!!!";
        setTimeout(tie, 2000);
    })
}

function Ulose(){
    box.forEach(EL =>{
        if(EL.classList.contains("winbg"))
            EL.classList.remove("winbg");
        EL.classList.add("losebg");
        result.textContent = "You LOSE 🥲";
        setTimeout(tie, 2000);
    })
}

function tie(){
    box.forEach(EL =>{
        if(EL.classList.contains("winbg"))
            EL.classList.remove("winbg");

        if(EL.classList.contains("losebg"))
            EL.classList.remove("losebg");

    })
}
function changes(c, res){
    computer.textContent = "Computer have Choosen " + c;
    result.textContent = res;
}