function contarMayMin(texto){

   let contadorMay = 0;
   let contadorMin = 0;
   let resultado = "";
   
   for(let letra of texto){
    let expresion = /[A-Z]/
    if(expresion.test(letra)){
        contadorMay++;
    }else{
        contadorMin++;
    }
   }


   if(contadorMay > contadorMin){
    resultado = texto.toUpperCase();
   }else{
    resultado = texto.toLowerCase();
   }

   return resultado;
}

console.log(
    contarMayMin("HOlA COmo eStAS")
);