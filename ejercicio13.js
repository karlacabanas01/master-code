function divideArray(array_principal, numero_elementos){
    
    let arreglos = [];

    for(let elemento of array_principal){ //for of recorre los elementos, for if recorre los indices de los elementos
       
        let ultimo = arreglos [arreglos.length - 1 ]; //para acceder a todos se pone el -1, ya que si se pide dividir en dos y hay 5 numeros se deve dividir en 3 array
        
        if(!ultimo || ultimo.length === numero_elementos){
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }
    }
    return arreglos; //Fijarme siempre donde pongo el return
}
console.log(
   divideArray([2,4,5,6], 2) 
);



