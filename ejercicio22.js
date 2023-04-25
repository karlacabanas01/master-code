
function numeroMayor(numero1, numero2){
    let resultado = "";

    if(numero1 === numero2){
        resultado = "Los numeros son iguales";
    }else if(numero1 > numero2){
        resultado = "Numero mayor es: " + numero1 + `\n`;
        resultado += "Numero menor es: " + numero2 + `\n`;
    }else if (numero1 < numero2) {
        resultado = "Numero mayor es: " + numero2 + `\n`;
        resultado += "Numero menor es: " + numero1 + `\n`;
    }else{
        resultado = "Ingrese numeros validos";
    }

    return resultado;
}

console.log(numeroMayor(3,6));