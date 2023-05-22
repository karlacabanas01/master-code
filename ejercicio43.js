function laMedia(numeros){
    let suma = numeros.reduce((valorAcumulado, numeroActual) => {
        return valorAcumulado + numeroActual;
    });

    let media  = suma / numeros.length;
    return media;
}

console.log(laMedia([1,45,5,8,99,65,130]));