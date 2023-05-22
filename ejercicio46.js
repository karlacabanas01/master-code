function todosSubString(palabra){
    let substring = [];
    for(letra in palabra){
        let comienzo = parseInt(letra);
        for(let i = 0; i <= palabra.length - comienzo; i++){
            let final  = parseInt(i) + parseInt(comienzo);
            //console.log(comienzo, final);
            substring.push(palabra.substring(comienzo, final)); 
        }
    }
    return substring.filter(elemento => elemento.length >= 1);
}

console.log(todosSubString("Hola"));