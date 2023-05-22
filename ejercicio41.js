function triangulo (numero){
    let mitad = Math.floor(numero - 1);
    let resultado =  "";

    for(let fila = 0; fila < numero; fila++){
        let nivel = "";
        for(let columna = 0; columna < (2 * numero - 1); columna++){
            
            if(mitad - fila <= columna && mitad + fila >= columna){
                nivel += "*";
            }else{
                nivel += " ";
            }
            
        }
        resultado += nivel + "\n";
    }
    return resultado;
}

console.log(triangulo(14));