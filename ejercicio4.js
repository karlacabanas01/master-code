//Dada una cadena de etxto, darle la vuelta e invertir el order de sus caracteres,
//sin usar métodos propios del lenguaje, solo estructuras de control.

function invertSentence (text){

    let invert = "";
    // for of -> me saca cada una de las letras, cualquier string puede ser trabajado como un array
    // for in -> me saca el indice (numeracion)
    for(let letter of text){ 

        invert = letter + invert;
        //console.log(invert.toLocaleLowerCase());
    }

    return invert.toLocaleLowerCase();
}

console.log(
    "Texto invertido: ",
    invertSentence("Karla Aida de los Angeles")
    
);

/* 

//Misma funcion con metodos del lenguaje
function invert (text){
    return text.split("").reverse().join(''); 
    //split crea un array, reverse, lo uno en un solo string con el join ''
}

*/