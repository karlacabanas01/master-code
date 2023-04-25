function devolverMayuscula(texto){
    const palabras = texto.split(" "); 
    //console.log(palabras);
    
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
    }
    return palabras.join(" ");
    console.log(palabras);
}

console.log(
    devolverMayuscula("hola como estas el dia de hoy")
);