function caracterMasUsado (texto){
    let mapeo_letras = {};
    let maximo_repeticiones = 0;
    let letra_mas_repetida = 0;  

    for(let letra of texto){ //of recorre cada elemento
        //console.log(letra);
        if( !mapeo_letras[letra]){
            mapeo_letras[letra] = 1;
        }else{
            mapeo_letras[letra]++;
        }
    }

    for(let letra in mapeo_letras){ // for = bucle
        //console.log(mapeo_letras[letra]);
        if(mapeo_letras[letra].toString().trim().length === 1 &&
            mapeo_letras[letra] > maximo_repeticiones){

            maximo_repeticiones =  mapeo_letras[letra];
            letra_mas_repetida = letra;
        }
    }

    console.log("Se repite: " + maximo_repeticiones);
    return letra_mas_repetida;
}

console.log(
    "La letra más repetida es: ",
    caracterMasUsado("hola.soy.karlaaidacabañas")
);
