function searchSentence (sentence, search){
    const clean_text = sentence.toLocaleLowerCase().replace(/[!¡.,-?¿]/gi , "");
    let result = 0;

    if(clean_text.includes(search)){

        const words = clean_text.split(" "); 
        const map = {};

        for (let word of words){
            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            }
        }

        result = map[search];

    }else{
        result = 0;
    }

    return result;
}

module.exports = searchSentence;

