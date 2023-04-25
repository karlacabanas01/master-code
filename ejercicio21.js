function recortar(texto, numero_hasta){
    let resultado = "";
    if(typeof texto === 'string' && typeof numero_hasta === 'number'){
        resultado = texto.substring(0, numero_hasta); //Recorta una cadena de caracteres
    }else{
        resultado =  "Introduzca bien los datos";
    }

    return resultado;
}

console.log(
    recortar("Hola como estas hoy", 4)
);