function altoBajo(numeros){
    let ordenados = numeros.sort((a, b) => a - b);
    return{
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    }
}

console.log(altoBajo([1,200,345,23,54,67,89]));