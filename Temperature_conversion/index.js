let typ1 = document.getElementById('typ1');
let typ2 = document.getElementById('typ2');

let input = document.getElementById("input");

let convert = document.getElementById("convert");
let result = document.getElementById("result");

let c,f;
convert.onclick = function(){
    if(typ1.checked){
        c = Number(input.value);
        f = (1.8 * c) + 32;
        result.textContent = `${c} Celsius in Fahrenheit is ${f}F`;

    }
    
    else if(typ2.checked){
        f = Number(input.value);
        c = (f - 32) / 1.8;
        result.textContent = `${f} Fahrenheit in Celsius is ${c}C`;

    }

    else{
        result.textContent = ("Select a Method to convert");
    }
}