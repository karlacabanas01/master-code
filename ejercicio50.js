function bucles(numero){
    let arrayNumeros = numero.toString().split('');
    let bucles = 0;
    //console.log(arrayNumeros);
    for(numero of arrayNumeros){
        numero =  parseInt(numero);
        if( numero === 0 || numero === 6 || numero === 9){
            bucles ++;
        }else if( numero === 8){
            bucles += 2;
        }

    }
    return bucles;
}

console.log(bucles(288));