function divisor(numero, posible_divisor){
    let resultado = 0;

       if(numero % posible_divisor === 0){
            return posible_divisor;
       } 

       return 0;
}

function mostrarDivisores(numero){
    for(let i = 1; i <= numero; i++){
        let esDivisor = divisor(numero, i);

        if(esDivisor) console.log(esDivisor);
    }
}

mostrarDivisores(20);