//Dados dos arrays, devolver array con solo los elementos comunes netre ambos
function elementCommon (array1, array2){
    const filter = array1.filter(element => {
        return array2.includes(element);
    })
    return filter;
}

console.log("Element common: ", elementCommon([1,2,3,4,5],[3,4,6,7,8,1]));
console.log("Element common: ", elementCommon(["andrea", "jose", "pepe"],["juana", "pepe", "luis","jose"]));