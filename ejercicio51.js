function pares(numeros){
    return{
        'pares': numeros.filter(num => num % 2 === 0),
        'impares': numeros.filter(num => num % 2 !== 0),
    }
}
console.log(pares([1,2,3,4,6,7,89,9]));