function enMasyuscula(texto){
    let resultado = "";
    for(let letra in texto){
        if(texto[letra - 1] === " " || parseInt(letra) === 0){
            resultado += texto[letra].toUpperCase();
        }else{
            resultado += texto[letra];
        }
    }

    return resultado;
}

console.log(
    enMasyuscula("hola como estas el dia de hoy")
);