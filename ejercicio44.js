function dosPalabras(elementos){
    let nuevos_elementos = [];

    for(palabra of elementos){
        if(palabra.split(" ").length >= 2){
            nuevos_elementos.push(palabra)
        }
    }

    return nuevos_elementos;
}

console.log(dosPalabras(["Hola como", "estas", "yo bien gracias"]));