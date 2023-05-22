function alCuadrado(numeros) {
    let numeros_cuadrados = numeros
        .filter(numero => typeof numero === "number")
        .map(numero => Math.pow(numero, 2))

    return numeros_cuadrados;
}
console.log(alCuadrado([12, 56]));