function soloUnaVez(texto){
    let contadores = {}, 
        resultado = [],
        letras = texto.split('').filter(letra => letra.trim().length >= 1);

    for(letra of letras){
        if(!contadores[letra]){
            contadores[letra] = 1;
        }else{
            contadores[letra] ++;
        }
    }

    for(letra in contadores){
        if(contadores[letra] >= 2){
            delete contadores[letra];
        }else{
            resultado.push(letra);
        }
    }

    return resultado;
}

console.log(soloUnaVez("Hola como estas le dia de hoy hola como etasy"));