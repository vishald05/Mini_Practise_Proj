let opkey = document.querySelectorAll(".opkey");
let computer = document.getElementById("computer");
let result = document.getElementById("result");
let box = document.querySelectorAll(".MainB");
let compchoicetext = document.getElementById("compchoicetext");

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
    compchoicetext.textContent = "Computer Choice";
    computer.style.padding = "20px";
    let Cchoice = arr[comp_choice()];
    console.log(Cchoice);
    
    if(now === '🪨'){
        if(Cchoice === '🪨'){
            changes('🪨',"Its a Tie");
            tie();
        }
        if(Cchoice === '📃'){
            changes('📃',"You Lose");
            Ulose();
        }
        if(Cchoice === '✂️'){
            changes('✂️',"You Win");
            Uwin();
        }    
    }
    if(now === '📃'){
        if(Cchoice === '🪨'){
            changes('🪨',"You Win");
            Uwin();
        }
        if(Cchoice === '📃'){
            changes('📃',"Its a Tie");
            tie();
        }
        if(Cchoice === '✂️'){
            changes('✂️',"You Lose");
            Ulose();
        }  

    }
    if(now === '✂️'){
        if(Cchoice === '🪨'){
            changes('🪨',"You Lose");
            Ulose();
        }
        if(Cchoice === '📃'){
            changes('📃',"You Win");
            Uwin();
        }
        if(Cchoice === '✂️'){
            changes('✂️',"Its a Tie");  
            tie(); 
        }  
    }
}
function Uwin(){
    box.forEach(EL =>{
        if(EL.classList.contains("losebg"))
            EL.classList.remove("losebg");
        EL.classList.add("winbg");
        result.textContent = "You WIN!!!";
        setTimeout(tie, 1500);
    })
}

function Ulose(){
    box.forEach(EL =>{
        if(EL.classList.contains("winbg"))
            EL.classList.remove("winbg");
        EL.classList.add("losebg");
        result.textContent = "You LOSE 🥲";
        setTimeout(tie, 1500);
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
    computer.textContent = c;
    result.textContent = res;
}