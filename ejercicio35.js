function primerYUltimo(elementos){
    let nuevos_elementos = [];

    nuevos_elementos.push(elementos[0], elementos[elementos.length - 1]);
    return nuevos_elementos;
}
console.log(
    'numeros: ' ,
    primerYUltimo([100,200,300,760])
);