function devulveNumeroVocales(texto){
    let vocales = /[aeiou]/gi ;
    let vocales_repetidas = texto.match(vocales);

    return vocales_repetidas ? vocales_repetidas.length : 0 ;
    
 
}

console.log(
    "En el texto hay: ",
    //devulveNumeroVocales('Hsdfghjkl'),
    devulveNumeroVocales('hola como te va el dia de hoy,'),
    " vocales."
);