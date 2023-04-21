function reverseNumber (number){
    let reverse =  parseInt(
        number
        .toString()
        .split('')
        .reverse()
        .join('')
        ) * Math.sign(number); //Saca si es positivo o negativo
    return reverse;
}
console.log("Reverse number: ", reverseNumber(-899));
