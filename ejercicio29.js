function capi(numero){
    let procesado = parseInt(numero
        .toString()
        .split('')
        .reverse()
        .join('')
        );

    return numero === procesado;
}

console.log(
    "El número es capicua: ", //numero que se lee igual al derecho y al revez
    capi(2002)
);
