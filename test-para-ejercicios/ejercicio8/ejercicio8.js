function reverseNumber (number){
    let reverse =  parseInt(
        number
        .toString()
        .split('')
        .reverse()
        .join('')
        ) * Math.sign(number); 
    return reverse;
}
module.exports = reverseNumber
