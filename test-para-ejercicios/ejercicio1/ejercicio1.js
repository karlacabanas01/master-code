const number = 0;

function tableMultiplication(number){

    if (number === null){
        return undefined;
    }
    
    let result = `Table of ` + number + ` \n`

    for(let i = 1; i <= 10; i++){
        let multiplication = (i * number )
        
        result += `${i} x ${number} = ${multiplication} \n`
    }
    return result;
}

module.exports = tableMultiplication;