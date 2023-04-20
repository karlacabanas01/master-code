const number = 0;

function tableMultiplication(number){

    let result = `Table of ` + number + ` \n`

    for(let i = 1; i <= 10; i++){ // variable de inicializacion, condicion, actualizacion del contador
        let multiplication = (i * number )
        
        result += `${i} x ${number} = ${multiplication} \n`
        //console.log(resultado + multiplicacion );
    }
    return result;
}

console.log(tableMultiplication(7));
