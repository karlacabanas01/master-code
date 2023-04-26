function oddNumber(numberA, numberB){
    let counter = 0;
    while ( numberA < numberB){
        if(numberA%2 !== 0) counter++;

        numberA++;
    }
    
    return counter;
}
module.exports = oddNumber;
