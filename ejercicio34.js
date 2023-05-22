function calculadora(numero1, numero2){
    let resultado = `
        La suma es: ${numero1+numero2}
        La resta es: ${numero1-numero2}
        La multiplicación es: ${numero1*numero2}
        La división es: ${numero1/numero2}
    `;

    return resultado;
}

console.log(calculadora(10, 2));