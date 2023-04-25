function hastaCero(numero){
    let resultado = `---- Del ${numero} al 0 \n`;

    while(numero > 0){
        resultado += `- n°${numero} \n`;
        numero -= 8
    }

    if( numero <= 0){
        resultado += `- n°0 \n`;
    }

    resultado += `-- Fin --`;
    return resultado;
}

console.log(
    hastaCero(100)
);