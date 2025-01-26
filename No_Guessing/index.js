let input = document.getElementById('input');
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
submit.onclick = function(){
    if(input.value == random){
        result.textContent = "you Won!! :)";
    }
    else{
        result.textContent = "try Again :("
    }
}