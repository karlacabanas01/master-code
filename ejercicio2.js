//Comprobar si es un palindromo o no, son palabras que se leen igual 
//no debe tener espacios o simbolos, debe devolver un booleano
function isPalindrome(text){
    let invested = text
                    .split('') //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
                    .reverse() //Solo le da la vuelta
                    .join('')  //Es un separador
                    ;
    //console.log(invested);
  
    if(invested === text){
        return true;
    }else{
        return false;
    }

    //Se puede simplificar
    //return invested === text; //devuelve true or false
}

console.log("Is palindrome? " + isPalindrome("ana"));
