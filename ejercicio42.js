function aleatorio(minimo, maximo){
    return Math.round(Math.random() * (maximo - minimo));
}
console.log(aleatorio(1, 10));