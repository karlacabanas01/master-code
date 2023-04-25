//--------------Funcion clasica-------------
function repetirTexto(texto, numero_repetir){
    let resultado = "";

    for(let i = 0; i < numero_repetir; i++){
        resultado  += texto + " ";
    }
    return resultado;
}

console.log(
    repetirTexto("karla", 5)
);

//-----------------Funcion prototipo-----------

String.prototype.repiteme = function (numero_repetir){
    let resultado = "";

    for(let i = 0; i < numero_repetir; i++){
        resultado  += this + " ";
    }
    return resultado;
}

console.log(
    "karla aida de los angeles".repiteme(5)
);