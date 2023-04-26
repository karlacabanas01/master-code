function invertSentence (text){

    let invert = "";

    for(let letter of text){ 
        invert = letter + invert;
    }

    return invert.toLocaleLowerCase();
}

module.exports = invertSentence;