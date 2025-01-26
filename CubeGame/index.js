let box = document.getElementById("Box");
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    console.log(event.key);
    if(event.key.startsWith("Arrow")){
        switch(event.key){

            case "ArrowUp":
                y -= 25;
                break;
            case "ArrowRight":
                x += 25;
                break;
            case "ArrowDown":
                y += 25;
                break;
            case "ArrowLeft":
                x -= 25;
                break;
        }
        if(x < 0){
            box.style.left = `0px`;
            box.style.top = `${y}px`;
        }
        
        else{
            box.style.left = `${x}px`;
            box.style.top = `${y}px`;
        }
        box.style.backgroundColor = "red";
    }
});

document.addEventListener("keyup", event => {
    if(event.key.startsWith("Arrow")){
        box.style.backgroundColor = "Blue";
    }
});