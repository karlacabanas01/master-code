//Dados dos numeros, devolver cuantos numeros IMPARES hay entre ellos

function oddNumber(numberA, numberB){
    let counter = 0;
    while ( numberA < numberB){
        if(numberA%2 !== 0) counter++;

        numberA++;
    }
    
    return counter;
}
console.log("Numeros impares: ", oddNumber(1, 100));
