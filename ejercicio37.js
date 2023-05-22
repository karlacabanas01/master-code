function masRepetido(datos){
    let mapeo = {}, mas_frecuente = "", valor_mayor_valor = 0;

    if (typeof datos === 'string'){
        datos = datos.split(" ");
    }

    for(let elemento of datos){
        if(mapeo[elemento]){
            mapeo[elemento] ++;
        }else{
            mapeo[elemento] = 1;
        }
        
    }

    for(let elemento in mapeo){
        if(mapeo[elemento] > valor_mayor_valor){
            valor_mayor_valor = mapeo[elemento];
            mas_frecuente =  elemento
        }
    }

    return{
        'Valor mayor': valor_mayor_valor, 
        'Más frecuente': mas_frecuente
    };
}

console.log(masRepetido("hola hola que tal como hola el dia de hoy"));
console.log(masRepetido([1,2,3,4,5,1,1,1,2,3]));