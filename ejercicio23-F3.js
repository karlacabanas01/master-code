function enMayuscula(texto){

    let palabras = [];

    for(let palabra of texto.split(" ")){
        palabras.push(palabra[0].toUpperCase() + palabra.substring(1));
    }

    return palabras.join(" ");

}
console.log(
    enMayuscula("hola como estas el dia de hoy")
);