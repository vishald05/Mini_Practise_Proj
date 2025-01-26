let count = document.getElementById("count");
let roll = document.getElementById("roll");
let resultb = document.getElementById("resultb");
let temp,ran_val;
emp = document.createElement("h1");
emp.textContent = "Loser ; )"
roll.onclick = function(){
    resultb.innerHTML = "";
    for(let i = 0; i < count.value; i++){
        temp = document.createElement("img");
        
        ran_val = Math.floor(Math.random() * 6) + 1;

        console.log(ran_val);
        temp.src = "Dice/" + ran_val + ".png";
        temp.alt = "Dice/" + ran_val;
        temp.style.width = '100px';
        temp.style.padding = '3%';
        resultb.appendChild(temp);
    }

}
