//Dada una palabra buscar la frase y devolver cuantas veces aparezca en ella
//La frase y la palabra deben ser parametros de una funcion

let re = /[!¡.,-?¿]/gi; //Se puede poner directamente

function searchSentence (sentence, search){
    const clean_text = sentence.toLocaleLowerCase().replace(re , "");
    let result = 0;

    if(clean_text.includes(search)){
        const words = clean_text.split(" "); //Lo divido por espacios
        const map = {}; //JSON
        //Mapeo de letras
        for (let word of words){
            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            }
        }

        result = map[search];

        //console.log(words);

    }else{
        result = 0;
    }

    return result;
}

console.log(
    "Numero de coincidencias: ",
    searchSentence("Hola CoMO estas, bien Y tu?, hola, y tu, hola, hola ", "hola")
);


