function pass_gen(psize, withlower, withupper, withnum, withsymb)
{
    let low = 'abcdefghijklmnopqrstuvwxyz';
    let upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = '0123456789';
    let symb = '!@#$%^&*()+-/*';
    
    let allowed = '';
    allowed += withlower ? low : '';
    allowed += withupper ? upp : '';
    allowed += withnum ? num : '';
    allowed += withsymb ? symb : '';
    
    if(allowed === ''){
        return `Select atleast 1 parameter`;
    }

    if(psize < 8){
        return 'Length must be greater than 8';
    }

    let ran_val;
    let password = "";
    for(let i = 0; i < psize; i++){
        ran_val = Math.floor(Math.random() * allowed.length);
        password += allowed.charAt(ran_val);
    }
    r.textContent ="Your random password is";
    return password;
}
let ps = document.getElementById("psize");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let res = document.getElementById("result");
let r = document.getElementById("res1");
let submit = document.getElementById("submit");


let psize = ps.value;
let withlower = c1.checked ? true : false;
let withupper = c2.checked ? true : false;
let withnum = c3.checked ? true : false;
let withsymb = c4.checked ? true : false;

submit.onclick = function() {
    let psize = ps.value;
    let withlower = c1.checked ? true : false;
    let withupper = c2.checked ? true : false;
    let withnum = c3.checked ? true : false;
    let withsymb = c4.checked ? true : false;

    let pass = pass_gen(psize, withlower, withupper, withnum, withsymb);
    
    res.textContent = pass;
};




