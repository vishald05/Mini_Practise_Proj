let i = document.getElementById("inc");
let d = document.getElementById("dec");
let v;
v = document.getElementById("Val");
i.onclick = function(){
    v.textContent = Number(v.textContent) + 1;
}

d.onclick = function(){
    v.textContent = Number(v.textContent) - 1;
}

let r = document.getElementById("reset");

r.onclick = function(){
    v.textContent = 0;

}