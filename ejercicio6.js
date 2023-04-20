function side (number){ //Pinta el lado de arriba y abajo
    let side = "";
    for(let i = 0 ; i <  number; i++){
        side += "*";
    }
    return side;
}


function square (number){

    let drawing = side(number) + "\n";
    let content = 0;

    for(let i = 2; i < number; i++){
        content = "*";
        for(let x = 0; x < (number-2); x++){
            content += " ";
        }
        content += "*";
        drawing += content + "\n";
    }

    drawing += side(number);
    return drawing;
}
console.log(square(50));