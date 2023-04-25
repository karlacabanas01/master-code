function limpiarTexto(texto){

    let solo_letras = /[^\w]/gi ;

    return texto
    .replace(solo_letras, '')
    .toLowerCase()
    .split('')      //Separa en array de caracteres
    .sort()         //los pone en orden a-z
    .join('')       //los une de nuevo
}

function anagramas(texto1, texto2){
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(
    "Es un anagrama? :", //Palabras que tienen las mismas letras
    anagramas("jose ... !", "sergio")
);